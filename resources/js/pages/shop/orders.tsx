import OrdersPage from '@/components/shop/shopOrders';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Shop Orders',
        href: '/orders',
    },
];

export default function Create({ orders } : {orders: any}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Shop Orders" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <OrdersPage orders={orders} />
            </div>
        </AppLayout>
    );
}