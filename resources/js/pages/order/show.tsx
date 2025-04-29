import OrderDetails from '@/components/cart/showOrder';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Order Page',
        href: '/order',
    },
];

export default function ShowOrders({ order } : { order : any }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Order Page" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center">
                <OrderDetails order={order} />
            </div>
        </AppLayout>
    );
}
