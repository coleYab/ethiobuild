<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreShopRequest;
use App\Http\Requests\UpdateShopRequest;
use App\Models\Shop;
use App\Models\User;
use App\Models\Order;
use Inertia\Inertia;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $shops = Shop::all();
        return Inertia::render('shop/index', [
            'shops' => $shops
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('shop/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreShopRequest $request)
    {
        $request = $request->validated();
        $shop = Shop::create($request);
        $shop = $shop->loadMissing('products');
        return Inertia::render('shop/profile', [
            'shop' => $shop
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Shop $shop)
    {
        $shop = $shop->loadMissing('products');
        return Inertia::render('shop/profile', [
            'shop' => $shop
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function me()
    {
        $user = auth()->user();
        $user->loadMissing('shops');
        $shops = $user->shops;
        return Inertia::render('shop/index', [
            'shops' => $shops
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function products($id)
    {
        // Log::info($id);
        $shop = Shop::findOrFail($id);
        $shop = $shop->loadMissing('products');
        return Inertia::render('shop/products', [
            'products' => $shop->products
        ]);
    }


    /**
     * Display the specified resource.
     */
    public function orders($id)
    {
        // Log::info($id);
        $shop = Shop::findOrFail($id);
        $shop = $shop->loadMissing('products');
        return Inertia::render('shop/orders', [
            'orders' => Order::all()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Shop $shop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateShopRequest $request, Shop $shop)
    {
        $request = $request->validated();
        $shop = $shop->update($request);
        return $shop;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Shop $shop)
    {
        $shop->delete();
    }
}
