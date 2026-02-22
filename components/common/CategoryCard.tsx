import React from 'react'
import Link from 'next/link';
import ImageWithFallback from './ImageWithFallback';

import { Category } from '@/types/product';

// *** Import Icons
import { ArrowIcon } from './Icons';


interface CategoryCardProps {
    category: Category;
    isHighlighted?: boolean;
}

function CategoryCard({ category, isHighlighted } : CategoryCardProps) {
    return (
        <div className={`relative ${isHighlighted ? 'bg-[#ECEEF0]' : 'bg-white'}`}>
            <figure className='relative w-full aspect-4/5 max-w-63.75 lg:max-w-120 max-h-71 sm:max-h-98.5 md:max-h-125 lg:max-h-150 overflow-hidden mx-auto'>
                <Link href={`/products?category=${category.slug}`} className="block w-full h-full">
                    <ImageWithFallback
                        src={category.image} 
                        alt={category.name} 
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </Link>
            </figure>
            <div className='relative md:absolute w-full h-max left-0 bottom-0 flex justify-between items-end p-4 sm:p-6 lg:px-12 lg:py-7.5 -mt-8 sm:mt-0'>
                <h4 className='max-w-64 sm:max-w-1/2 sm:text-3xl/[1] lg:text-4xl/[1.1945]'>
                    <Link href={`/products?category=${category.slug}`} className='lg:uppercase line-clamp-2 transition-colors duration-100 ease-in hover:text-primary'>{category.name}</Link>
                </h4>
                <Link href={`/products?category=${category.slug}`} className='btn btn-secondary w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-sm sm:rounded-lg p-2 lg:mr-3'><ArrowIcon className='w-4 sm:w-8 h-4 sm:h-8'/></Link>
            </div>
        </div>
    )
}

export default CategoryCard;