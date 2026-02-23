'use client';

import React from 'react';
import ProductContent from '@/components/product/ProductContent';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '@/services/product-service';

function ProductDetails({ slug} : { slug: string}) {

    const { data: product, isError, isLoading } = useQuery({
        queryKey: ['product', slug],
        queryFn: () => fetchProductBySlug(slug),
    });

    if(isLoading) {
        return <LoadingSpinner/>
    }

    if (isError || !product) return null;

    return (
        <section className='mt-6 lg:mt-8'>
            <div className="container">
                <ProductContent product={product}/>
            </div>
        </section>

    )
}

export default ProductDetails;