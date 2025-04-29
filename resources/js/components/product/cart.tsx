// import React from 'react';
// import { Head, router, usePage } from '@inertiajs/react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { ArrowUpToLine, Trash2 } from 'lucide-react';
// import { SharedData } from '@/types';
//
// const CartPage = ({ cart} : {cart: any}) => {
//     const { auth } = usePage<SharedData>().props;
//     const user = auth.user;
//     // Sample cart data structure based on validation rules
//     const cartItems = cart?.items || [];
//
//     const handleCheckout = () => {
//         const cart : any = user.cart;
//         const items = cart.items;
//         const orderPayload = {
//             items: items.map((item: any) => {
//                 return {
//                     product_id: item.product_id,
//                     qty: item.qty
//                 }
//             })
//         }
//
//         router.post(`/order`, orderPayload, {
//             onSuccess: () => {
//                 alert("updated the data sucessfully removed from the cart");
//             },
//             onError: (e) => {
//                 alert(JSON.stringify(e))
//             }
//         })
//
//     };
//
//     const handleRemoveItem = (index: number) => {
//         const cart : any = user.cart;
//         const items = cart.items.filter((_: any, idx: number) => idx != index)
//         const cartPayload = {
//             items: items.map((item: any) => {
//                 return {
//                     product_id: item.product_id,
//                     qty: item.qty
//                 }
//             } )
//         }
//
//         router.put(`/cart/${cart.id}`, cartPayload, {
//             onSuccess: () => {
//                 alert("updated the data sucessfully removed from the cart");
//             },
//             onError: (e) => {
//                 alert(JSON.stringify(e))
//             }
//         })
//     };
//
//     return (
//         <div className="container mx-auto p-4">
//             <Head title="Shopping Cart" />
//
//             <Card className="max-w-4xl mx-auto">
//                 <CardHeader>
//                     <CardTitle className="text-2xl">Your Shopping Cart</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     {cartItems.length === 0 ? (
//                         <p className="text-center text-gray-500">Your cart is empty.</p>
//                     ) : (
//                             <>
//                                 <Table>
//                                     <TableHeader>
//                                         <TableRow>
//                                             <TableHead>Product ID</TableHead>
//                                             <TableHead>Quantity</TableHead>
//                                             <TableHead>Actions</TableHead>
//                                         </TableRow>
//                                     </TableHeader>
//                                     <TableBody>
//                                         {cartItems.map((item: any, index : number ) => (
//                                             <TableRow key={index}>
//                                                 <TableCell>{item.product_id}</TableCell>
//                                                 <TableCell>{item.qty}</TableCell>
//                                                 <TableCell>
//                                                     <Button
//                                                         variant="destructive"
//                                                         size="sm"
//                                                         onClick={() => handleRemoveItem(index)}
//                                                     >
//                                                         <Trash2 className="h-4 w-4" />
//                                                     </Button>
//                                                 </TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                                 <div className="mt-6 flex justify-end">
//                                     <Button
//                                         onClick={handleCheckout}
//                                         className="bg-primary hover:bg-primary/90"
//                                         disabled={cartItems.length === 0}
//                                     >
//                                         Proceed to Checkout
//                                     </Button>
//                                 </div>
//                             </>
//                         )}
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };
//
// export default CartPage;
import { useState } from "react";
import { router, useForm } from "@inertiajs/react";
import { Trash2, MinusCircle, PlusCircle, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Checkout({ cart, shippingCost = 100, taxRate = 0.15 }) {
  // Initialize form for shipping information
  const { data, setData, post, processing, errors } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  // Local state for cart (optimistic updates)
  const [localCart, setLocalCart] = useState({ items: cart });

  // Calculate subtotal for an item
  const calculateItemSubtotal = (item) => {
    return item.qty * item.product.price;
  };

  // Calculate cart subtotal
  const calculateSubtotal = () => {
    return localCart.items.reduce((total, item) => total + calculateItemSubtotal(item), 0);
  };

  // Calculate tax
  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };

  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + shippingCost;
  };

  // Update item quantity
  const updateQuantity = (itemId, newQty) => {
    if (newQty < 1) return;

    const item = localCart.items.find((item) => item.id === itemId);
    if (newQty > item.product.qty_in_stock) return;

    // Optimistic update
    const updatedItems = localCart.items.map((item) => {
      if (item.id === itemId) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setLocalCart({ ...localCart, items: updatedItems });

    // Send update to backend
    router.post(`/cart/items/${itemId}`, { qty: newQty }, {
      preserveState: true,
      onError: () => {
        // Revert on error
        setLocalCart(localCart);
      },
    });
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    // Optimistic update
    const updatedItems = localCart.items.filter((item) => item.id !== itemId);
    setLocalCart({ ...localCart, items: updatedItems });

    // Send delete to backend
    router.delete(`/cart/items/${itemId}`, {
      preserveState: true,
      onError: () => {
        // Revert on error
        setLocalCart(localCart);
      },
    });
  };

  // Handle Chapa checkout
  const handleChapaCheckout = () => {
    post("/checkout", {
      onSuccess: ({ props }) => {
        // Assuming backend returns a Chapa payment URL
        if (props.paymentUrl) {
          window.location.href = props.paymentUrl;
        } else {
          alert("Redirecting to Chapa payment gateway...");
        }
      },
      onError: () => {
        alert("Checkout failed. Please try again.");
      },
    });
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Cart ({localCart.items.length} items)</CardTitle>
              <CardDescription>Review and modify your items before checkout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {localCart.items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                localCart.items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
                    <div className="bg-muted rounded-md flex items-center justify-center w-16 h-16 shrink-0">
                      <img
                        src={`/placeholder.svg?height=64&width=64&text=${item.product.name.charAt(0)}`}
                        alt={item.product.name}
                        className="rounded-md w-16 h-16"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">SKU: {item.product.sku}</p>
                      <p className="text-sm">Price: ${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                      >
                        <MinusCircle className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center">{item.qty}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.qty + 1)}
                        disabled={item.qty >= item.product.qty_in_stock}
                      >
                        <PlusCircle className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <div className="font-medium">${calculateItemSubtotal(item).toFixed(2)}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive/90"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={data.firstName}
                    onChange={(e) => setData("firstName", e.target.value)}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={data.lastName}
                    onChange={(e) => setData("lastName", e.target.value)}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={data.address}
                  onChange={(e) => setData("address", e.target.value)}
                  placeholder="Enter your address"
                />
                {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={data.city}
                    onChange={(e) => setData("city", e.target.value)}
                    placeholder="City"
                  />
                  {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Region</Label>
                  <Input
                    id="state"
                    value={data.state}
                    onChange={(e) => setData("state", e.target.value)}
                    placeholder="State/Region"
                  />
                  {errors.state && <p className="text-sm text-destructive">{errors.state}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Postal Code</Label>
                  <Input
                    id="zip"
                    value={data.zip}
                    onChange={(e) => setData("zip", e.target.value)}
                    placeholder="Postal code"
                  />
                  {errors.zip && <p className="text-sm text-destructive">{errors.zip}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData("phone", e.target.value)}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (15%)</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="lg"
                onClick={handleChapaCheckout}
                disabled={processing}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Pay with Chapa
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By completing your purchase, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
