import ProductPage from '@/components/product/showProduct';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Show Product',
        href: '/product',
    },
];

export default function ProductShow({ products } : { products : any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Show Product" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ProductPage products={products} />
            </div>
        </AppLayout>
    );
}
