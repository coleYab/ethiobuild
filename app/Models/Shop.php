<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    /** @use HasFactory<\Database\Factories\ShopFactory> */
    use HasFactory;

    protected $fillable = [
        "name",  "address", "image",  "cover_image",  "email",
        "phone",  "logo",  "description","user_id",
    ];

    public function products() {
        return $this->hasMany(Product::class);
    }


    public function user() {
        return $this->belongsTo(User::class);
    }
}
