<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductVariation;
use App\Models\Shop;
use App\Models\User;
use Database\Factories\ShopFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory(1)->create([
            'password' => 'gamegame',
            'email' => 'test@gmail.com'
        ])->each(function ($user) {
                Shop::factory(rand(0, 10))->create([
                    'user_id' => $user->id,
                    'logo' => 'http://localhost:8000/storage/products/images/998mVTmmQItKu32PUwsIxa84eEnAQCtrajFLeMkJ.png'
                ])->each(function ($shop) {
                        Product::factory(rand(5, 10))->create([
                            'shop_id' => $shop->id,
                            'image' => 'http://localhost:8000/storage/products/images/998mVTmmQItKu32PUwsIxa84eEnAQCtrajFLeMkJ.png'
                        ])->each(function ($product) {
                                ProductVariation::factory(rand(3, 6))->create([
                                    'product_id' => $product->id
                                ]);
                            });
                    });
            });
    }
}
