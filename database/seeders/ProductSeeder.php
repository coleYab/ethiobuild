<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductVariation;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::factory(10)->create()->each(function ($product) {
            ProductVariation::factory(5)->create([
                'product_id' => $product->id
            ]);
        });
    }
}
