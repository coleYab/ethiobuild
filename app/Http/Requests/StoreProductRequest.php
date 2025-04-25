<?php

namespace App\Http\Requests;

use App\Models\Shop;
use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['required', 'string'],
            "description" => ['required', 'string'],
            "image" => ['required', 'string'],
            "shop_id" => ['required', 'integer'],
            "variations" => ['required', 'array'],
            "variations.*.name" => ['required', 'string'],
            "variations.*.sku" => ['required', 'string'],
            "variations.*.qty_in_stock" => ['required', 'integer'],
            "variations.*.price" => ['required', 'numeric'],
        ];
    }
}
