'use client';

import React, { useState } from 'react';

import ColorSelector from '../common/ColorSelector';
import SizeSelector from '../common/SizeSelector';

import { Product } from '@/types/product';

import { cn } from '@/lib/utils';

interface ProductCardProps {
    product: Product;
}

// *** Import Icons
import { HeartIcon } from '../common/Icons';
import { ZoomableImage } from '@/app/products/[slug]/_components/ZoomableImage';
import ThumbnailSlider from './ThumbnailSlider';

function ProductContent({ product } : ProductCardProps) {

    const [selectedSize, setSelectedSize] = useState<number>(38);
    const [selectedColor, setSelectedColor] = useState<string>('#253043');

    if (!product) return <div className="p-20 text-center">Product not found.</div>;

    return (
        <div className='flex flex-col min-[860px]:flex-row gap-6 md:gap-4'>
            <div className="flex-1 min-w-0">
                <div className="block min-[860px]:hidden">
                    <ThumbnailSlider images={product.images}/>
                </div>
                
                <div className='hidden min-[860px]:grid grid-cols-2 gap-4'>
                    {product.images.map((image, indx) => {
                        
                        const len = product.images.length;
                        const isSingle = len === 1;
                        const isDouble = len === 2;

                        const isEven = len % 2 === 0;
                        const isLast = indx === len - 1;
                        const isSecondLast = indx === len - 2;

                        return (
                            <div 
                                key={image}
                                className={cn(
                                    "overflow-hidden cursor-zoom-in",
                                    isSingle ? "col-span-2" : "col-span-1",
                                )}
                            >
                                <ZoomableImage
                                    src={image} 
                                    alt={`${product.title} - Image ${indx + 1}`}
                                    width={isSingle ? 860 : 429}
                                    height={510}
                                    priority={indx < 2}
                                    sizes={
                                        isSingle 
                                        ? "(max-width: 768px) 100vw, 860px"
                                        : "(max-width: 768px) 100vw, 429px"
                                    }
                                    className={cn(
                                        "object-cover w-full h-full",
                                        isSingle && "rounded-[48px]",
                                        isDouble && [
                                            indx === 0 && "rounded-l-[48px]",
                                            indx === 1 && "rounded-r-[48px]"
                                        ],
                                        (!isSingle && !isDouble) && [
                                            indx === 0 && "rounded-tl-[48px]",
                                            indx === 1 && "rounded-tr-[48px]",
                                            (!isEven && isLast) || (isEven && isSecondLast) ? "rounded-bl-[48px]" : null,
                                            isEven && isLast && "rounded-br-[48px]",
                                        ]
                                    )}
                                
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full md:flex-1 lg:w-107.5 lg:flex-none shrink-0">
                <span className='btn btn-primary h-9.5 text-xs capitalize rounded-xl px-4 py-3'>New Release</span>
                <h3 className='text-xl/[1.2] sm:text-[32px]/[1.1875] my-2 sm:my-4 uppercase'>{product.title}</h3>
                <h5 className='text-2xl/[1.167] text-primary'>${product.price}</h5>

                <div className='my-6 sm:my-8'>
                    <p className='font-semibold font-rubik uppercase mb-2'>Color</p>
                    <ColorSelector productId={product.id} selectedColor={selectedColor} onColorSelect={setSelectedColor}/>
                </div>

                <div>
                    <div className='flex justify-between items-start mb-2'>
                        <p className='font-semibold font-rubik'>Size</p>
                        <span className='text-sm font-medium font-rubik tracking-[0.25px] uppercase underline'>Size chart</span>
                    </div>
                    <SizeSelector productId={product.id} selectedSize={selectedSize} onSizeSelect={setSelectedSize}/>
                </div>

                <div className='flex flex-wrap justify-between items-center gap-2 my-6 sm:my-8'>
                    <button className='btn btn-secondary flex-1'>Add to cart</button>
                    <button className='btn btn-secondary px-4 py-2'><HeartIcon/></button>
                    <button className='btn btn-primary w-full'>Buy it now</button>
                </div>

                <div>
                    <h6 className='mb-2'>About the product</h6>
                    <p className='text-gray-800'>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductContent;