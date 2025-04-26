import AddToCartSection from '@/components/product/addToCart';
import ProductImageGallery from '@/components/product/productImage';
import ProductVariationSelector from '@/components/product/productVariation';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Product Details',
    href: '/dashboard',
  },
];

export default function Show({ products }: { products: any }) {
  console.log(products)
  const product = products;

  // Calculate average price of variations
  const averagePrice =
    product.variations.reduce((sum: any, variation: any) => sum + variation.price, 0) / product.variations.length

  const totalStock = product.variations.reduce((sum: any, variation: any) => sum + variation.qty_in_stock, 0)

  const createdDate = new Date(product.created_at)
  const updatedDate = new Date(product.updated_at)
  const createdTimeAgo = formatDistanceToNow(createdDate, { addSuffix: true })
  const updatedTimeAgo = formatDistanceToNow(updatedDate, { addSuffix: true })

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <ProductImageGallery productName={product.name} />

        {/* Product Details */}
        <div className="flex flex-col">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold sm:text-3xl">{product.name}</h1>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500">ID: {product.id}</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mt-2">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  totalStock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {totalStock > 0 ? `In Stock (${totalStock} units)` : "Out of Stock"}
              </span>
            </div>

            {/* Price Range */}
            <div className="mt-4">
              <span className="text-3xl font-bold">
                ${Math.min(...product.variations.map((v: any) => v.price))} - $
                {Math.max(...product.variations.map((v: any) => v.price))}
              </span>
              <span className="ml-2 text-sm text-gray-500">Average: ${averagePrice.toFixed(2)}</span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h2 className="text-lg font-medium">Description</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {/* Variation Selector */}
            <div className="mt-6">
              <ProductVariationSelector variations={product.variations} />
            </div>

            {/* Add to Cart */}
            <div className="mt-6">
              <AddToCartSection variations={product.variations} />
            </div>

            {/* Metadata */}
            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Shop ID</p>
                  <p className="text-gray-500">{product.shop_id}</p>
                </div>
                <div>
                  <p className="font-medium">Created</p>
                  <p className="text-gray-500" title={createdDate.toLocaleString()}>
                    {createdTimeAgo}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Last Updated</p>
                  <p className="text-gray-500" title={updatedDate.toLocaleString()}>
                    {updatedTimeAgo}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Variations</p>
                  <p className="text-gray-500">{product.variations.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="variations" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="variations">Variations</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="variations" className="mt-4">
              <div className="rounded-md border">
                <div className="grid grid-cols-5 gap-4 border-b bg-gray-50 p-4 font-medium">
                  <div>Name</div>
                  <div>SKU</div>
                  <div>Price</div>
                  <div>Stock</div>
                  <div>Updated</div>
                </div>
                <div className="divide-y">
                  {product.variations.map((variation: any) => (
                    <div key={variation.id} className="grid grid-cols-5 gap-4 p-4 text-sm">
                      <div>{variation.name}</div>
                      <div>{variation.sku}</div>
                      <div>${variation.price.toFixed(2)}</div>
                      <div>{variation.qty_in_stock}</div>
                      <div title={new Date(variation.updated_at).toLocaleString()}>
                        {formatDistanceToNow(new Date(variation.updated_at), { addSuffix: true })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Product ID</p>
                    <p className="text-gray-500">{product.id}</p>
                  </div>
                  <div>
                    <p className="font-medium">Shop ID</p>
                    <p className="text-gray-500">{product.shop_id}</p>
                  </div>
                  <div>
                    <p className="font-medium">Created At</p>
                    <p className="text-gray-500">{new Date(product.created_at).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-medium">Updated At</p>
                    <p className="text-gray-500">{new Date(product.updated_at).toLocaleString()}</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="font-medium">Full Description</p>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    </AppLayout>
  );
}
function formatDistanceToNow(updatedDate: Date, arg1: { addSuffix: boolean; }) : String {
  return "Trueh";
}

