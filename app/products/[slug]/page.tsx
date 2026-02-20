import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchProductBySlug, fetchRelatedProducts } from '@/services/product-service';

import ProductDetails from '@/components/product/ProductDetails';
import RelatedProducts from './_components/RelatedProducts';

export default async function Page({ params }: { params: { slug: string } }) {

    const { slug } = await params;

    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['product', slug],
            queryFn: () => fetchProductBySlug(slug),
        }),
        queryClient.prefetchQuery({
            queryKey: ['related-products', slug],
            queryFn: () => fetchRelatedProducts(slug),
        })
    ]);

    return (
        <>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ProductDetails/>
                <RelatedProducts slug={slug}/>
            </HydrationBoundary>
        </>
    )
}