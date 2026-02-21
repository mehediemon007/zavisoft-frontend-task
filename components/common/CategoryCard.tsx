import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Category } from '@/types/product';
import { ArrowIcon } from './Icons';

interface CategoryCardProps {
    category: Category;
}

function CategoryCard({ category } : CategoryCardProps) {
    return (
        <div className='relative bg-white in-[.swiper-slide-active]:bg-[#ECEEF0]'>
            <figure className='relative w-full aspect-4/5 max-w-120 max-h-150 overflow-hidden mx-auto'>
                <Link href={`/categories/${category.slug}`} className="block w-full h-full">
                    <Image 
                        src={category.image} 
                        alt={category.name} 
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                        priority={false}
                    />
                </Link>
            </figure>
            <div className='absolute w-full h-max left-0 bottom-0 flex justify-between items-end p-4 sm:px-12 sm:py-7.5'>
                <h4>
                    <Link href={`/categories/${category.slug}`} className='uppercase transition-colors duration-100 ease-in hover:text-primary'>{category.name}</Link>
                </h4>
                <Link href={`/categories/${category.slug}`} className='btn btn-secondary rounded-sm sm:rounded-lg p-2 sm:mr-3'><ArrowIcon/></Link>
            </div>
        </div>
    )
}

export default CategoryCard;