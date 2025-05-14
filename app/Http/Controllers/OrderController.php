<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use App\Models\ProductVariation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Order::with('items')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    public function me() {
        $user = request()->user();

        $user = $user->loadMissing('orders');
        $orders = $user->orders;
        // return $orders->each(function ($order) {
        //     $order = $order->loadMissing('items');
        //     $order->items->each(function ($item) {
        //         $item = $item->load('product');
        //         $item = $item->product->loadMissing('product');
        //         return $item;
        //     });
        //     return $order;
        // });

        return Inertia::render('order/me', [
            'orders' => $orders
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $request = $request->validated();

        $response = DB::transaction(function () use($request) {
            $user = request()->user();
            $response = ['amount'=>0, 'message' => ""];
            $total_amount = 1;

            foreach ($request['items'] as $order_item) {
                $product_id = $order_item['product_id'];
                $product = ProductVariation::find($product_id);
                if ($product == null) {
                    throw new \Exception("the product is not found");
                }

                if ($product['qty_in_stock'] < $order_item['qty']) {
                    throw new \Exception("the product quantitiy is not enouth");
                }
                $product->qty_in_stock -= $order_item['qty'];
                $product->save();
                $total_amount += $product['price'] * $order_item['qty'];
            }

            $response['amount'] = $total_amount + $total_amount * 0.15;
            $response['message'] = "Order created successfully";

            $order = Order::create([
                'user_id' => $user->id,
                'order_status' => 'created',
                'order_cost' => $total_amount + $total_amount * 0.15,
            ]);

            foreach ($request['items'] as $order_item) {
                $product_id = $order_item['product_id'];
                $product = ProductVariation::findOrFail($product_id);
                $order->items()->create([
                    'product_id' => $product_id,
                    'qty' => $order_item['qty'],
                    'price' => $product['price'],
                ]);
            }

            $order = $order->loadMissing('items');

            return $order;
        });

        return Inertia::location("/order/{$response['id']}/checkout");
    }
    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order = $order->loadMissing('items');
        $order->items->each(function ($item) {
            $item = $item->load('product');
            $item = $item->product->loadMissing('product');
            return $item;
        });
        return Inertia::render('order/show', [
            'order' => $order
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function complete(int $id)
    {
        Log::info("getting the data of the name is the thing: " . $id);
        return response()->json("ok");
    }


    /**
     * Update the specified resource in storage.
     */
    public function checkout($id)
    {
        // Retrieve the order and user (assuming $id is the order ID)
        $order = Order::findOrFail($id);
        $user = request()->user(); // Assuming the user is authenticated

        // Generate a unique transaction reference
        $ref_no = Str::random(10);
        $secret_key = "CHASECK_TEST-nlCF26UGAshYeA3jBqlk5nMMR0xcZI9C";

        $url = "https://ethiobuild.onrender.com";

        $order->order_cost = min(100000-1, $order->order_cost);

        try {
            // Make the API request using Laravel's HTTP client
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . $secret_key ,
                'Content-Type' => 'application/json',
            ])->post('https://api.chapa.co/v1/transaction/initialize', [
                    'amount' => "$order->order_cost",
                    'currency' => 'ETB',
                    'email' => $user->email,
                    'tx_ref' => $ref_no,
                    'callback_url' => $url,
                    'return_url' => $url . '/order/me',
                    'customization' => [
                        'title' => 'Ecommerce',
                        'description' => 'I love online payments.',
                    ],
                    'meta' => [
                        'hide_receipt' => false,
                    ],
                ]);

            // Check if the request was successful
            if ($response->successful()) {
                // Update the order status
                $order->order_status = 'Completed';
                $order->save();
                $checkoutUrl = $response->json()['data']['checkout_url'];
                return redirect($checkoutUrl);
            } else {
                // Log the error for debugging
                Log::error('Chapa payment initialization failed', [
                    'response' => $response->json(),
                    'status' => $response->status(),
                ]);

                return response()->json([
                    'message' => 'Payment initialization failed',
                    'error' => $response->json(),
                ], 400);
            }
        } catch (\Exception $e) {
            // Log any exceptions
            Log::error('Error during Chapa payment initialization', [
                'error' => $e->getMessage(),
            ]);

            return response()->json([
                'message' => 'An error occurred during payment processing',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order) {
        $order->delete();
    }
}
