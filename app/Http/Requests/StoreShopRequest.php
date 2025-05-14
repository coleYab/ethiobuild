<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreShopRequest extends FormRequest
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
            "address" => ['required', 'string'],
            "user_id" => ['required', 'integer'],
            "image" => ['required', 'string'],
            "cover_image" => ['required', 'string'],
            "email" => ['required', 'string'],
            "phone" => ['required', 'string'],
            "logo" => ['required', 'string'],
            "description" => ['required', 'string'],
        ];
    }
}
