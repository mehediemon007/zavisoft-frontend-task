import React from 'react'
import Link from 'next/link';

import { Product } from '@/types/product';
import ImageWithFallback from '../common/ImageWithFallback';

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product } : ProductCardProps) {
    return (
        <div>
            <div className='relative bg-white rounded-2xl sm:rounded-[28px] p-2 group'>
                <Link href={`/products/${product.slug}`}>
                    <figure className='relative aspect-302/334 w-full overflow-hidden rounded-xl sm:rounded-3xl bg-gray-100'>
                        <ImageWithFallback
                            src={product.images?.[0]} 
                            alt={product.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className='object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-110'
                        />
                    </figure>
                </Link>
                <span className='absolute top-2 left-2 text-xs font-semibold font-rubik text-white bg-primary rounded-tl-xl sm:rounded-tl-3xl rounded-br-xl sm:rounded-br-3xl px-2 sm:px-4 py-1 sm:py-2'>New</span>
            </div>
            <h5 className='text-base/[1.187] sm:text-2xl/[1.167] mt-4'>
                <Link href={`/products/${product.slug}`} className='h-14 line-clamp-3 sm:line-clamp-2 align-middle transition-colors duration-100 ease-in hover:text-primary'>{product.title}</Link>
            </h5>
            <Link href={`/products/${product.slug}`} className='btn btn-secondary w-full text-xs sm:text-sm mt-2 sm:mt-4'>View Product -&nbsp;<span className='text-amber-500'>${product.price}</span></Link>
        </div>
    )
}

export default ProductCard;