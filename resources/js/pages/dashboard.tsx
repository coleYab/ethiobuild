import TheDashboard from '@/components/landing/dashboard';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ user, orders, products} : {user : any, orders: any, products: any }) {
    const pageData = { user, orders, products }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full px-4 flex-1 flex-col gap-4 rounded-xl p-4">
                <TheDashboard payload={pageData} />
            </div>
        </AppLayout>
    );
}
