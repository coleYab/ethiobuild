import CartPage from '@/components/product/cart';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cart Page',
        href: '/cart',
    },
];

export default function Create({ cart } : { cart: any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Cart Page" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <CartPage cart={cart} />
            </div>
        </AppLayout>
    );
}
