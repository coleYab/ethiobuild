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

        User::factory(1)->create()->each(function ($user) {
            Shop::factory(10)->create([
                'user_id' => $user->id
            ])->each(function ($shop) {
                    Product::factory(10)->create([
                        'shop_id' => $shop->id
                    ])->each(function ($product) {
                        ProductVariation::factory(5)->create([
                            'product_id' => $product->id
                        ]);
                    });
                });
        });
    }
}
