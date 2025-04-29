


import AddToCartSection from '@/components/product/addToCart';
import CartPage from '@/components/product/cart';
import CreateProductForm from '@/components/product/createProduct';
import ProductImageGallery from '@/components/product/productImage';
import ProductVariationSelector from '@/components/product/productVariation';
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

export default function Create({ cart } : { cart: any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <CartPage cart={cart} />
            </div>
        </AppLayout>
    );
}
