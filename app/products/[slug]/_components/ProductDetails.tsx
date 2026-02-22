'use client';

import React from 'react';
import ProductContent from '@/components/product/ProductContent';

import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '@/services/product-service';

function ProductDetails({ slug} : { slug: string}) {

    const { data: product, isError } = useQuery({
        queryKey: ['product', slug],
        queryFn: () => fetchProductBySlug(slug),
    });

    if (isError || !product) return <div className="p-20 text-center">Product not found.</div>;

    return (
        <section className='mt-6 lg:mt-8'>
            <div className="container">
                <ProductContent product={product}/>
            </div>
        </section>

    )
}

export default ProductDetails;