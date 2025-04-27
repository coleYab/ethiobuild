import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2 } from 'lucide-react';

const CartPage = ({ cart} : {cart: any}) => {

  // Sample cart data structure based on validation rules
  const cartItems = cart?.items || [];

  const handleCheckout = () => {
    // Implement checkout logic, e.g., redirect to checkout route
    window.location.href = '/checkout';
  };

  const handleRemoveItem = (index: number) => {
    // Implement remove item logic, e.g., send request to server
    console.log(`Remove item at index ${index}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Head title="Shopping Cart" />
      
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Your Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product ID</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartItems.map((item: any, index : number ) => (
                    <TableRow key={index}>
                      <TableCell>{item.product_id}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleCheckout}
                  className="bg-primary hover:bg-primary/90"
                  disabled={cartItems.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CartPage;