import ShopProfileForm from '@/components/shop/shopProfile';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Shop Profile',
    href: '/shop/',
  },
];

export default function Create({ shop }: { shop: any }) {
  const props = usePage<SharedData>().props
  console.log(props)
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Shop Profile" />
      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <ShopProfileForm shop={shop} />
      </div>
    </AppLayout>
  );
}