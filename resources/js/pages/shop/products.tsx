import AddToCartSection from '@/components/product/addToCart';
import CreateProductForm from '@/components/product/createProduct';
import ProductImageGallery from '@/components/product/productImage';
import ProductVariationSelector from '@/components/product/productVariation';
import ProductsPage from '@/components/shop/shopProducts';
import ShopProfileForm from '@/components/shop/shopProfile';
// import CreateShopForm from '@/components/shop/createShop';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';


const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Create Product',
    href: '/dashboard',
  },
];

export default function Create({ products }: {products: any}) {
    console.log(products)
    return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <ProductsPage product={products} />
      </div>
    </AppLayout>
  );
}