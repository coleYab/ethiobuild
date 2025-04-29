// resources/js/Pages/OrderDetails.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function OrderDetails({ order } : { order : any }) {
  return (
    <>
      <Head title={`Order #${order.id}`} />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Order #{order.id}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Placed on {new Date(order.order_date).toLocaleString()}
            </p>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p><strong>Status:</strong> <Badge variant="outline">{order.order_status}</Badge></p>
              <p><strong>Total Cost:</strong> ₹{order.order_cost}</p>
            </div>

            <Separator className="my-4" />

            <h3 className="text-lg font-semibold mb-2">Items</h3>
            <div className="space-y-6">
              {order.items.map((item : any) => (
                <Card key={item.id} className="border bg-muted/50">
                  <CardHeader>
                    <CardTitle>{item.product.product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.product.name} (SKU: {item.product.sku})</p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Quantity:</strong> {item.qty}</p>
                    <p><strong>Price per unit:</strong> ₹{item.price}</p>
                    <p><strong>Subtotal:</strong> ₹{item.qty * item.price}</p>

                    <Separator />

                    <p className="text-sm text-muted-foreground">
                      {item.product.product.description}
                    </p>

                    <div className="mt-3">
                      <img
                        src={item.product.product.image}
                        alt={item.product.product.name}
                        className="w-32 h-32 object-cover border rounded"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
