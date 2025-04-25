<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::resource('product', ProductController::class);
Route::resource('shop', ShopController::class);
Route::resource('cart', CartController::class);
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
