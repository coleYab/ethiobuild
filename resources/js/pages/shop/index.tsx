import ShopsList from '@/components/shop/shopList';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Discover Shops',
        href: '/shop',
    },
];

export default function Shops({ shops } : { shops : any[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Discover Shops" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <ShopsList shops={shops} />
            </div>
        </AppLayout>
    );
}
