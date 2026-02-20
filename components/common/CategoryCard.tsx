import React from 'react'
import Link from 'next/link';

import { Category } from '@/types/product';
import { ArrowIcon } from './Icons';

interface CategoryCardProps {
    category: Category;
}

function CategoryCard({ category } : CategoryCardProps) {
    return (
        <div className='bg-white p-16'>
            <figure className='max-h-150 aspect-square overflow-hidden'>
                <Link href={`/categories/${category.slug}`}>
                    <img src={category.image} alt={category.name}/>
                </Link>
            </figure>
            <div className='flex justify-between items-end'>
                <h4>
                    <Link href={`/categories/${category.slug}`} className='uppercase'>{category.name}</Link>
                </h4>
                <Link href={`/categories/${category.slug}`} className='btn btn-secondary p-2'><ArrowIcon/></Link>
            </div>
        </div>
    )
}

export default CategoryCard;