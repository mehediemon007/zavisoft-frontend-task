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
                    slidesPerView={9}
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
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={500}
                    breakpoints={{
                        320: { slidesPerView: 4, spaceBetween: 8 },
                        640: { slidesPerView: 4, spaceBetween: 16 },
                        768: { slidesPerView: 5, spaceBetween: 16 },
                        1024: { slidesPerView: 7, spaceBetween: 18 },
                        1280: { slidesPerView: 13, spaceBetween: 20 },
                    }}
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