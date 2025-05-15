import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { BreadcrumbItem } from '@/types';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Review Shop',
        href: '/review/',
    },
];
export default function CreateReview({ shop }: { shop: any }) {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        message: '',
        rating: '',
        verified_purchase: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('reviews.store', shop.id), {
            onSuccess: () => {
                post('product/')
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Review Product" />
            <>
                <div className="min-h-screen bg-gray-100">
                    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <Card className="max-w-2xl mx-auto">
                            <CardHeader>
                                <CardTitle>Your Review</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="username">Username</Label>
                                        <Input
                                            id="username"
                                            type="text"
                                            value={data.username}
                                            onChange={(e) => setData('username', e.target.value)}
                                            className={errors.username ? 'border-red-500' : ''}
                                            placeholder="Enter your username"
                                        />
                                        {errors.username && (
                                            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Select
                                            value={data.rating}
                                            onValueChange={(value) => setData('rating', value)}
                                        >
                                            <SelectTrigger className={errors.rating ? 'border-red-500' : ''}>
                                                <SelectValue placeholder="Select a rating" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[1, 2, 3, 4, 5].map((num) => (
                                                    <SelectItem key={num} value={num.toString()}>
                                                        {num} Star{num > 1 ? 's' : ''}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.rating && (
                                            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Review</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className={errors.message ? 'border-red-500' : ''}
                                            placeholder="Write your review here"
                                            rows={5}
                                        />
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="verified_purchase"
                                            checked={data.verified_purchase}
                                            onCheckedChange={(checked) => setData('verified_purchase', checked)}
                                        />
                                        <Label htmlFor="verified_purchase">Verified Purchase</Label>
                                    </div>

                                    <Button
                                        onClick={handleSubmit}
                                        disabled={processing}
                                        className="w-full"
                                    >
                                        {processing ? 'Submitting...' : 'Submit Review'}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </main>
                </div>
            </>
        </AppLayout>
    );
}