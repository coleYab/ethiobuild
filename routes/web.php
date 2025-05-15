<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\ReviewController;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/rules', function () {
    return Inertia::render('rules');
})->name('rules');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('order/{id}/checkout', [OrderController::class, 'checkout' ]);
    Route::post('order/complete', [OrderController::class, 'complete' ]);
    Route::get('cart/me', [ CartController::class, 'me']);
    Route::get('order/me', [ OrderController::class, 'me']);
    Route::resource('order', OrderController::class);
    Route::resource('cart', CartController::class);
    Route::resource('product', ProductController::class);

    Route::get('shop/me', [ ShopController::class, 'me']);
    Route::resource('shop', ShopController::class);
    Route::get('shop/{id}/products', [ShopController::class, 'products']);
    Route::get('shop/{id}/orders', [ShopController::class, 'orders']);

    Route::get('review/create', [ ReviewController::class, 'create']);
    Route::resource('review', ReviewController::class);

    Route::get('dashboard', function () {
        // now here comes the last part
        $user = request()->user();
        $products = Product::with('variations')->latest()->take(4)->get();
        $orders = Order::where('user_id', $user->id)
            ->orderBy('created_at', 'desc') // or 'total' or another field
            ->take(5)
            ->get();
        return Inertia::render('dashboard', [
            'user' => $user,
            'products' => $products,
            'orders' => $orders,
        ]);
    })->name('dashboard');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
