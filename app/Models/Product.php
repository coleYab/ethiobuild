<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'name', 'image', 'description' , 'shop_id'
    ];

    public function shop() {
        return $this->belongsTo(Shop::class);
    }

    public function variations() {
        return $this->hasMany(ProductVariation::class);
    }
}
