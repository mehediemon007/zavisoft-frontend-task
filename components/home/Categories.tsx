'use client';
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/services/product-service';

import CategorySlider from '../common/CategorySlider';

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
        <section className='bg-foreground pt-22.5'>
            <div className="container">
                <div className='flex justify-between items-end mb-12'>
                    <h2 className='text-white'>Categories</h2>
                </div>
            </div>
            <div className='container'>
                <CategorySlider categories={categories}/>
            </div>
        </section>
    )

}

export default Categories;