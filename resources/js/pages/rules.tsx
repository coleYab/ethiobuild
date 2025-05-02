import TheDashboard from '@/components/landing/dashboard';
import LegalPolicies from '@/components/landing/legalPolicies';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Rules',
        href: '/rules',
    },
];

export default function Dashboard() {
    return (
        <>
            <Head title="Rules" />
            <div className="flex h-full px-4 flex-1 flex-col gap-4 rounded-xl p-4">
                <LegalPolicies />
            </div>
        </>
    );
}
