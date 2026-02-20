import React from 'react'
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from './ProductCard';

import { Product } from '@/types/product';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
    products: Product[];
}

function ProductSlider({ products } : ProductSliderProps) {
    return (
        <>
            <div className="relative w-full h-full">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    spaceBetween={16}
                    slidesPerView={4}
                    slidesPerGroup={2}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
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
                        products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default ProductSlider;