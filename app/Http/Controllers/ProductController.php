<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\ProductVariation;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() {
        // $products = Product::with('variations')->get();
        $products = Product::all();
        return Inertia::render('product/index', [
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        return Inertia::render('product/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $or = $request;
        $request = $request->validated();

        // upload images
        // if ($or->hasFile('image')) {
        //     $request['image'] = Storage::url($or->file('image')->store('products/images', 'public'));
        // }

        $product = DB::transaction( function() use ($request) {
            $product = Product::create([
                'name' => $request['name'],
                'image' => $request['image'],
                'description' => $request['description'],
                'shop_id' => $request['shop_id'],
            ]);
            foreach($request['variations'] as $variation) {
                $product->variations()->create([
                    "name" => $variation['name'],
                    "sku" => $variation['sku'],
                    "price" => $variation['price'],
                    "qty_in_stock" => $variation['qty_in_stock']
                ]);
            }
            return $product;
        });


        $product->loadMissing('variations');
        return Inertia::render('product/show', [
            'products' => $product
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product->loadMissing('variations');
        return Inertia::render('product/show', [
            'products' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product = $product->loadMissing('variations');
        return Inertia::render('product/create', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        // Create a big transaction to crete the product
        DB::transaction( function() use ($request, $product) {
            $product->update([
                'name' => $request['name'],
                'image' => $request['image'],
                'description' => $request['description'],
                'shop_id' => $request['shop_id'],
            ]);
            $product->variations()->delete();
            foreach($request['variations'] as $variation) {
                $product->variations()->create([
                    "name" => $variation['name'],
                    "sku" => $variation['sku'],
                    "price" => $variation['price'],
                    "qty_in_stock" => $variation['qty_in_stock']
                ]);
            }
        });

        $product = $product->loadMissing('variations');
        return Inertia::render('product/create', [
            'product' => $product
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
