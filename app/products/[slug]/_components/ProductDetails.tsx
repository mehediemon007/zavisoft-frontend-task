'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

    if (isError || !product) {
        return (
            <div className="container">
                <div className='bg-white rounded-xl lg:rounded-3xl mx-auto my-8 overflow-hidden'>
                    <Image src={'/assets/404.svg'} alt='Not found' width={500} height={500} className='bg-cover mx-auto'/>
                    <div className='text-center py-4 sm:my-6'>
                        <Link href='/' className='btn btn-secondary'>Back To Home</Link>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <section className='mt-6 lg:mt-8'>
            <div className="container">
                <ProductContent product={product}/>
            </div>
        </section>

    )
}

export default ProductDetails;