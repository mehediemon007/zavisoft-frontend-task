'use client';
import React from 'react'
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/services/product-service';
import { LoadingSpinner } from '../common/LoadingSpinner';

const CategorySlider = dynamic(()=> import('../common/CategorySlider'));

function Categories() {

    const { data: categories, isLoading, isError} = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })

    if (isLoading) {
        return <LoadingSpinner/>;
    }

    if (isError || !categories) return null;

    return (
        <section className='w-full bg-foreground overflow-hidden py-6 sm:pt-12 lg:pt-16 xl:pt-22.5 md:pb-0'>
            <div className="container">
                <div className='w-max mb-6 sm:mb-8 lg:mb-12 xl:mb-16'>
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