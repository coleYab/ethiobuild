import CreateShopForm from '@/components/shop/createShop';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Shop',
        href: '/shop/create',
    },
];

export default function Create() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Shop" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 items-center">

                <div className="mb-8 flex flex-col">
                    <h1 className="text-2xl font-bold sm:text-3xl mx-auto">Create New Shop</h1>
                    <p className="mt-1 text-gray-500 mx-auto">Level up your ecommerce game by creating a new shop.</p>
                </div>

                <div className="mx-auto lg:mx-36 w-4xl">
                    <CreateShopForm />
                </div>
            </div>
        </AppLayout>
    );
}
