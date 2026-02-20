'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProductBySlug } from '@/services/product-service';

import ColorSelector from '../common/ColorSelector';
import SizeSelector from '../common/SizeSelector';

import { cn } from '@/lib/utils';

// *** Import Icons
import { HeartIcon } from '../common/Icons';
import { ZoomableImage } from '@/app/products/[slug]/_components/ZoomableImage';

function ProductDetails({ slug} : { slug: string}) {

    const { data: product, isError } = useQuery({
        queryKey: ['product', slug],
        queryFn: () => fetchProductBySlug(slug),
    });
    
    const [selectedSize, setSelectedSize] = useState<number>(38);
    const [selectedColor, setSelectedColor] = useState<string>('#253043');

    if (isError || !product) return <div className="p-20 text-center">Product not found.</div>;

    return (
        <section className='mt-16'>
            <div className="container">
                <div className='grid grid-cols-3 gap-3.75'>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
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
                    <div className="col-span-1">
                        <span className='btn btn-primary h-9.5 text-xs capitalize rounded-xl px-4 py-3'>New Release</span>
                        <h3 className='text-[32px] my-4'>{product.title}</h3>
                        <h5 className='text-primary'>${product.price}</h5>

                        <div className='my-8'>
                            <p className='font-semibold font-rubik uppercase mb-2'>Color</p>
                            <ColorSelector selectedColor={selectedColor} onColorSelect={setSelectedColor}/>
                        </div>

                        <div>
                            <div className='flex justify-between items-start mb-1'>
                                <p className='font-semibold font-rubik'>Size</p>
                                <span className='text-sm font-medium font-rubik tracking-[0.25px] uppercase underline'>Size chart</span>
                            </div>
                            <SizeSelector selectedSize={selectedSize} onSizeSelect={setSelectedSize}/>
                        </div>

                        <div className='flex flex-wrap justify-between items-center gap-2 my-8'>
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
            </div>
        </section>

    )
}

export default ProductDetails;