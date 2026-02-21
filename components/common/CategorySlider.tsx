'use client';
import React from "react";

import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import CategoryCard from "./CategoryCard";
import { Category } from "@/types/product";

// *** Import Icons
import { NextIcon, PrevIcon } from "./Icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CategorySliderProps {
  categories: Category[];
}

function CategorySlider({ categories }: CategorySliderProps) {

    // If there's no data yet, don't break the page
    if (!categories || categories.length === 0) return null;

    return (
        <>
            <div className="container relative">
                <div className="navigation-btns">
                    <button className="nav-btn nav-prev">
                        <PrevIcon/>
                    </button>
                    <button className="nav-btn nav-next">
                        <NextIcon/>
                    </button>
                </div>
            </div>
            <div className="rounded-tl-[64px] overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={2}
                    spaceBetween={-1}
                    navigation={{
                        prevEl: '.nav-prev',
                        nextEl: '.nav-next',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    );
}

export default CategorySlider;