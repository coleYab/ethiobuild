import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { Plus } from "lucide-react";

const ShopsList = ({ shops }: { shops: any[] }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-6">Shops</h1>
        <Link href="/shop/create" prefetch>
          <Button className="flex gap-2">
            <Plus />
            Create Shop
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shops?.length ?
          shops.map((shop) => (
            <Card key={shop.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row gap-4">
                <img
                  src={shop.logo}
                  alt={`${shop.name} logo`}
                  className="w-16 h-16 object-cover rounded-full mb-2"
                />
                <CardTitle className="text-xl self-center">{shop.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Address:</span> {shop.address}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Email:</span> {shop.email}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Phone:</span> {shop.phone}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  <span className="font-semibold">Description:</span>{" "}
                  {shop.description.length >= 60 ? shop.description.substr(0, 60) + "..." : shop.description}
                </p>
                <Link href={`/shop/${shop.id}`}>
                  <Button variant="outline" className="w-full">
                    View Shop
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )) :
          <span>No shops available create one!</span>
        }
      </div>
    </div>
  );
};

export default ShopsList;