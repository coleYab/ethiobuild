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
import { useState } from "react";
import { Trash2, MinusCircle, PlusCircle, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Checkout({ cart, shippingCost = 0, taxRate = 0.15 } : { cart: any, shippingCost: number, taxRate: number}) {
  const [localCart, setLocalCart] = useState({ items: cart });

    const calculateItemSubtotal = (item: any) => {
        return item.qty * item.product.price;
    };

    const calculateSubtotal = () => {
        return localCart.items.reduce((total: number, item: any) => total + calculateItemSubtotal(item), 0);
    };

    const calculateTax = () => {
        return calculateSubtotal() * taxRate;
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax() + shippingCost;
    };

    const updateQuantity = (itemId: number, newQty:number) => {
        if (newQty < 1) return;

        const item = localCart.items.find((item: any) => item.id === itemId);
        if (newQty > item.product.qty_in_stock) return;

        const updatedItems = localCart.items.map((item : any) => {
            if (item.id === itemId) {
                return { ...item, qty: newQty };
            }
            return item;
        });

        setLocalCart({ ...localCart, items: updatedItems });
    };

    const removeItem = (itemId: number) => {
        const updatedItems = localCart.items.filter((item : any) => item.id !== itemId);
        setLocalCart({ ...localCart, items: updatedItems });
    };

    const handleChapaCheckout = () => {
        // post("/checkout", {
        //     onSuccess: ({ props }) => {
        //         // Assuming backend returns a Chapa payment URL
        //         if (props.paymentUrl) {
        //             window.location.href = props.paymentUrl;
        //         } else {
        //             alert("Redirecting to Chapa payment gateway...");
        //         }
        //     },
        //     onError: () => {
        //         alert("Checkout failed. Please try again.");
        //     },
        // });
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
                localCart.items.map((item : any) => (
                  <div key={item.id} className="grid grid-cols-2 grid-rows-2 md:flex md:flex-row md:items-start justify-center items-center gap-4 py-4">
                    <div className="bg-muted rounded-md flex items-center justify-center w-16 h-16 shrink-0">
                      <img
                        src={item.product.product.image}
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
                    <div className="text-right min-w-[80px] flex justify-center gap-2 items-center">
                      <div className="font-medium">ETB {calculateItemSubtotal(item).toFixed(2)}</div>
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
  // </div>
  );
}
