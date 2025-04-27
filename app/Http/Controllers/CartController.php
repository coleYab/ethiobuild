<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateCartRequest;
use App\Models\Cart;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cart::with('items')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        $request = $request->validated();
        DB::transaction(function () use($request) {
            $user_id = 1; // TODO: the default user id make it dynamic
            $user = User::find($user_id);
            $cart = Cart::create([
                'user_id' => $user->id,
            ]);

            foreach ($request['items'] as $cart_item) {
                $cart->items()->create([
                    'qty' => $cart_item['qty'],
                    'product_id' => $cart_item['product_id'],
                ]);
            }
        });
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart) {
        $cart = $cart->loadMissing('items');
        
        return Inertia::render('cart/cart', [
            'cart' => $cart
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        $request = $request->validated();
        DB::transaction(function () use($request, $cart) {
            $cart->items()->delete();
            foreach ($request['items'] as $cart_item) {
                $cart->items()->create([
                    'qty' => $cart_item['qty'],
                    'product_id' => $cart_item['product_id'],
                ]);
            }
        });
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
