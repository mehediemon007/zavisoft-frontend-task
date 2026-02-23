import React from 'react'
import Link from 'next/link';
import ImageWithFallback from '@/components/common/ImageWithFallback';

import { CartItem } from '@/types/product';

// *** Import Icons
import { BinIcon, HeartLineIcon } from '@/components/common/Icons';
import CustomSelect from '@/components/common/SelectBox';

interface CartProductCardProps {
    product: CartItem;
}

function CartProductCard({ product } : CartProductCardProps ) {
    return (
        <div className='flex gap-4 sm:gap-6'>
            <div className='relative w-39.25 sm:w-51.75 h-54 sm:h-56.25 '>
                <ImageWithFallback
                    src={product.image}
                    alt={product.title}
                    fill
                />
            </div>
            <div className='flex-1 flex flex-col justify-between gap-2 min-w-0'>
                <div className='flex flex-col lg:flex-row justify-between gap-2 lg:gap-4'>
                    <div className='lg:max-w-81.25'>
                        <h5 className='text-base sm:text-2xl/[1.125]'><Link href={`/products/${product.slug}`}>{product.title}</Link></h5>
                        <p className='text-sm sm:text-xl text-gray-800 font-semibold mt-2 line-clamp-2'>{product.description}</p>
                        <div className='flex gap-4 sm:gap-6 lg:gap-10 mt-2'>
                            <CustomSelect
                                placeholder='Size'
                                options={[
                                    {
                                        label: '8',
                                        value: '8'
                                    },
                                    {
                                        label: '10',
                                        value: '10'
                                    },
                                    {
                                        label: '12',
                                        value: '12'
                                    }
                                ]}
                            />
                            <CustomSelect
                                placeholder='Quantity'
                                options={[
                                    {
                                        label: '1',
                                        value: '1'
                                    },
                                    {
                                        label: '6',
                                        value: '16'
                                    },
                                    {
                                        label: '12',
                                        value: '12'
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <h5 className='text-primary'>${product.price}</h5>
                </div>
                <div className='flex items-center gap-6'>
                    <button aria-label='save product' className='transition-colors duration-200 ease-in hover:text-primary'><HeartLineIcon className='w-6 sm:w-8 h-6 sm:h-8'/></button>
                    <button aria-label='remove product' className='transition-colors duration-200 ease-in hover:text-red-500'><BinIcon className='w-6 sm:w-8 h-6 sm:h-8'/></button>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard;