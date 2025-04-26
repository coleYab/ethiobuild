<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductVariation;
use App\Models\User;
use Error;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

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

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrderRequest $request)
    {
        $request = $request->validated();

        $response = DB::transaction(function () use($request) {
            $user_id = 1; // TODO: make it dynamic
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

            $response['amount'] = $total_amount;
            $response['message'] = "Order created successfully";

            $order = Order::create([
                'user_id' => $user_id,
                'order_status' => 'created',
                'order_cost' => $total_amount,
            ]);

            foreach ($request['items'] as $order_item) {
                $product_id = $order_item['product_id'];
                $product = ProductVariation::find($product_id);
                $order->items()->create([
                    'product_id' => $product_id,
                    'qty' => $order_item['qty'],
                    'price' => $product['price'],
                ]);
            }

            $order = $order->loadMissing('items');
            return $order;
        });

        // TODO: the order has been created redirect the user to the checkout page
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order = $order->loadMissing('items');
        return $order;
    }


    /**
     * Update the specified resource in storage.
     */
    public function checkout($id)
    {
        $order = Order::findOrFail($id);
        $user = User::findOrFail(1);


        $order_id = $order->id;
        $user_id = $user->id;
        // $ref_no = "order-$order_id-$user_id";

        // $curl = curl_init();
        // curl_setopt_array($curl, array(
        //     CURLOPT_URL => 'https://api.chapa.co/v1/transaction/initialize',
        //     CURLOPT_RETURNTRANSFER => true,
        //     CURLOPT_ENCODING => '',
        //     CURLOPT_MAXREDIRS => 10,
        //     CURLOPT_TIMEOUT => 0,
        //     CURLOPT_FOLLOWLOCATION => true,
        //     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        //     CURLOPT_CUSTOMREQUEST => 'POST',
        //     CURLOPT_POSTFIELDS =>`{
        //     "amount":"10",
        //     "currency": "ETB",
        //     "email": $user->email,
        //     "tx_ref": $ref_no,
        //     "callback_url": "https://webhook.site/17dcb8c5-0c6d-47dc-be13-741984fd3495",
        //     "return_url": "http://localhost:8000/",
        //     "customization[title]": "Payment for my favourite merchant",
        //     "customization[description]": "I love online payments.",
        //     "meta[hide_receipt]": "true"
        //     }`,
        //     CURLOPT_HTTPHEADER => array(
        //         'Authorization: Bearer CHASECK_TEST-***********************',
        //         'Content-Type: application/json'
        //     ),
        // ));
        // $response = curl_exec($curl);
        // curl_close($curl);

        $order->order_status = 'Completed';
        $order->save();

        return $order;
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
