import ProductsPage from '@/components/shop/shopProducts';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Shop Products',
        href: '/shop/product',
    },
];

export default function Create({ products }: {products: any}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Shop Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductsPage product={products} />
            </div>
        </AppLayout>
    );
}
