import OrdersPage from '@/components/shop/shopOrders';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Orders',
        href: '/order/my',
    },
];

export default function ShowOrders({ orders } : { orders : any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Orders" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center">
                <OrdersPage orders={orders} />
            </div>
        </AppLayout>
    );
}
