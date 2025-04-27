<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
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
            'address' => $this->faker->text(),
            'image' => $this->faker->text(20),
            'cover_image' => $this->faker->text(10),
            'logo' => $this->faker->text(20),
            'phone' => $this->faker->text(20),
            'email' => $this->faker->text(20),
            'logo' => $this->faker->text(20),
            'description' => $this->faker->text(60),
        ];
    }
}
