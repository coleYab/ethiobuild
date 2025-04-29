<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

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

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
