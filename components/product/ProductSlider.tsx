import React from 'react'
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from './ProductCard';

import { Product } from '@/types/product';

// *** Import Icons
import { PrevIcon, NextIcon } from '../common/Icons';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
    products: Product[];
}

function ProductSlider({ products } : ProductSliderProps) {

    if (!products || products.length === 0) return null;

    const productPairs = products.reduce((acc, _, i) => 
        i % 2 === 0 ? [...acc, products.slice(i, i + 2)] : acc
    , [] as typeof products[]);
    
    return (
        <>
            <div className="relative w-full h-full">
                <div className="navigation-btns">
                    <button className="nav-btn nav-prev">
                        <PrevIcon/>
                    </button>
                    <button className="nav-btn nav-next">
                        <NextIcon/>
                    </button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={16}
                    slidesPerView={2}
                    slidesPerGroup={2}
                    navigation={{
                        prevEl: '.nav-prev',
                        nextEl: '.nav-next',
                    }}
                    pagination={{
                        type: "bullets",
                        clickable: true,
                        el: ".custom-pagination",
                        bulletClass: "custom-pagination-bullet",
                        bulletActiveClass: "custom-pagination-bullet-active",
                    }}
                    speed={500}
                >
                    {
                        productPairs.map((pair, index) => (
                            <SwiperSlide key={index}>
                                <div className={`grid gap-x-4 gap-y-6 lg:gap-y-4 lg:grid-cols-2 ${
                                    pair.length <= 1 ? 'grid-cols-2' : 'grid-cols-1'
                                }`}>
                                    {pair.map((product) => (
                                        <div key={product.id} className="col-span-1">
                                            <ProductCard product={product}/>
                                        </div>
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="custom-pagination flex justify-center items-center gap-2 pt-6 sm:pt-8" />
            </div>
        </>
    )
}

export default ProductSlider;