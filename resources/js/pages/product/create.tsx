


import AddToCartSection from '@/components/product/addToCart';
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

export default function Create({ product, shop_id } : { product : any, shop_id: any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center">

                <div className="mb-8 flex flex-col">
                    <h1 className="text-2xl font-bold sm:text-3xl">Create New Product</h1>
                    <p className="mt-1 text-gray-500">Add a new product to your shop with variations.</p>
                </div>

                <div className="lg:mx-36 w-3xl">
                    <CreateProductForm product={product} shop_id={shop_id} />
                </div>
            </div>
        </AppLayout>
    );
}
