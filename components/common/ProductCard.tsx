import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/types/product';

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product } : ProductCardProps) {
    return (
        <div>
            <div className='relative bg-white rounded-[28px] p-2 group'>
                <Link href={`/products/1`}>
                    <figure className='rounded-3xl overflow-hidden'>
                        <Image src={product.images[0]} alt={product.title} width={302} height={334} className='transition-transform duration-300 ease-in object-cover group-hover:scale-105'/>
                    </figure>
                </Link>
                <span className='absolute top-2 left-2 text-xs font-semibold font-rubik text-white bg-primary rounded-tl-3xl rounded-br-3xl px-4 py-2'>New</span>
            </div>
            <h5 className='my-4'>
                <Link href={`/products/${product.slug}`} className='min-h-14 line-clamp-2 align-middle transition-colors duration-300 ease-in hover:text-primary'>{product.title}</Link>
            </h5>
            <Link href={`/products/${product.slug}`} className='btn btn-secondary w-full'>View Product -&nbsp;<span className='text-amber-500'>${product.price}</span></Link>
        </div>
    )
}

export default ProductCard;