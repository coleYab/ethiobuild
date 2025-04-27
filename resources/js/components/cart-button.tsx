import React from 'react';

const CartButton = ({ cart }: {cart : any}) => {
  const totalItems = cart?.items?.reduce((sum: any, item: any) => sum + item.qty, 0) || 0;

  return (
    <button className="relative bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition">
      <span className="text-3xl">🛒</span>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;

