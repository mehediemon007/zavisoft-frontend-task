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

    if (!categories || categories.length === 0) return null;

    const categoryPairs = categories.reduce((acc, _, i) => 
        i % 2 === 0 ? [...acc, categories.slice(i, i + 2)] : acc
    , [] as typeof categories[]);

    return (
        <div className="relative">
            <div className="navigation-btns navigation-btns-right -top-14 sm:-top-18.5 lg:-top-22 xl:-top-26">
                <button className="nav-btn nav-prev text-foreground bg-[#858582]">
                    <PrevIcon/>
                </button>
                <button className="nav-btn nav-next text-foreground bg-white md:bg-gray">
                    <NextIcon/>
                </button>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                    prevEl: '.nav-prev',
                    nextEl: '.nav-next',
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={500}
            >
                {categoryPairs.map((pair, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-2 rounded-tl-3xl md:rounded-tl-[64px] overflow-hidden">
                            {pair.map((category, indx) => (
                                <div key={category.id} className="col-span-1">
                                    <CategoryCard category={category} isHighlighted={indx === 0}/>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CategorySlider;