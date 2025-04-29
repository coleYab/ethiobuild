import ProductsList from '@/components/product/productList';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Products',
        href: '/dashboard',
    },
];

export default function Dashboard({ products } : { products : any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="All Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductsList products={products} />
            </div>
        </AppLayout>
    );
}
