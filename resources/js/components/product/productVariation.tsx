import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';
import 'tailwindcss/tailwind.css';

const ProductPage = () => {
  const { product } = usePage().props;
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);
  
  const handleVariationSelect = (variation) => {
    setSelectedVariation(variation);
  };

  const handleAddToCart = () => {
    Inertia.post('/cart/add', {
      product_id: product.id,
      variation_id: selectedVariation.id,
      quantity: 1,
    });
  };

  return (
    <>
      <Head title={product.name} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={selectedVariation.image || product.image}
              alt={selectedVariation.name}
              className="w-full max-w-md object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Price */}
            <div className="text-2xl font-semibold text-green-600 mb-4">
              ${selectedVariation.price}
            </div>

            {/* Stock Info */}
            <div className="text-gray-700 mb-4">
              In Stock: {selectedVariation.qty_in_stock} {selectedVariation.sku}
            </div>

            {/* Variations Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Variations</h3>
              <div className="flex flex-wrap gap-2">
                {product.variations.map((variation) => (
                  <button
                    key={variation.id}
                    onClick={() => handleVariationSelect(variation)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedVariation.id === variation.id
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {variation.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={selectedVariation.qty_in_stock === 0}
              className={`w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold ${
                selectedVariation.qty_in_stock === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {selectedVariation.qty_in_stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Additional Product Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;