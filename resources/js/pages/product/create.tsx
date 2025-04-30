import CreateProductForm from '@/components/product/createProduct';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: '/product/create',
    },
];

export default function Create({ product, shop_id } : { product : any, shop_id: any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="mb-8 flex flex-col self-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Create New Product</h1>
                    <p className="mt-1 text-gray-500">Add a new product to your shop with variations.</p>
                </div>

                <div className="lg:mx-36 max-w-3xl">
                    <CreateProductForm product={product} shop_id={shop_id} />
                </div>
            </div>
        </AppLayout>
    );
}
