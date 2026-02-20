'use client';

import React from 'react'
import Link from 'next/link';
import ProductCard from '../common/ProductCard';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/services/product-service';


function NewDrops() {

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['products', 4],
        queryFn: () => fetchProducts(4)
    });

    if (isLoading) {
        return (
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-2xl" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (isError) {
        return (
            <div className="text-center py-20 text-red-500">
                <p>Failed to load new drops. Please try again later.</p>
            </div>
        );
    }
 
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p>No new drops available at the moment.</p>
            </div>
        );
    }

    return (
        <section className='pb-32'>
            <div className="container">
                <div className='flex justify-between items-end mb-12'>
                    <h2 className='max-w-147.25'>Don’t miss out new drops</h2>
                    <Link href={'#'} className='btn btn-primary'>Shop New Drops</Link>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default NewDrops;