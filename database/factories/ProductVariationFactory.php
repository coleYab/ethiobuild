<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductVariation>
 */
class ProductVariationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'sku' => $this->faker->randomElement(['kg', 'pcs', 'count', 'g', 'lt', 'dozen']),
            'qty_in_stock' => $this->faker->numberBetween(10, 1000),
            'price' => $this->faker->numberBetween(10, 1000),
        ];
    }
}
