'use client';
import React from 'react'
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/services/product-service';

const CategorySlider = dynamic(()=> import('../common/CategorySlider'));

function Categories() {

    const { data: categories, isLoading, isError} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })

    if (isLoading) {
        return <div className="h-100 animate-pulse bg-gray-100 rounded-3xl" />;
    }

    if (isError || !categories) {
        return <div>Failed to load categories.</div>;
    }


    return (
        <section className='w-full bg-foreground overflow-hidden pt-22.5'>
            <div className="container">
                <div className='w-max sm:mb-8 lg:mb-12'>
                    <h2 className='text-white'>Categories</h2>
                </div>
            </div>
            <div className='w-full container-left'>
                <CategorySlider categories={categories}/>
            </div>
        </section>
    )

}

export default Categories;