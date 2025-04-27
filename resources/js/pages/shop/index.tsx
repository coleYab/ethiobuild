import AddToCartSection from '@/components/product/addToCart';
import CreateProductForm from '@/components/product/createProduct';
import ProductImageGallery from '@/components/product/productImage';
import ProductVariationSelector from '@/components/product/productVariation';
import CreateShopForm from '@/components/shop/createShop';
import ShopsList from '@/components/shop/shopList';
import ShopProfilePage from '@/components/shop/shopProfile';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Discover Shops',
        href: '/dashboard',
    },
];

export default function Shops({ shops } : { shops : any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Discover Shops" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ShopsList shops={shops} />
            </div>
        </AppLayout>
    );
}
