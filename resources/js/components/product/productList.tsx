import { Link } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductsList({ products } : { products: any[]}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!products?.length && <span>No available products.</span>}
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
              <CardDescription className="mt-2 text-gray-600">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/product/${product.id}`}>
                <Button variant="default">View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
