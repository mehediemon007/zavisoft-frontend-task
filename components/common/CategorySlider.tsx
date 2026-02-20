'use client';
import React from "react";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";
import { Category } from "@/types/product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CategorySliderProps {
  categories: Category[];
}

function CategorySlider({ categories }: CategorySliderProps) {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    // If there's no data yet, don't break the page
    if (!categories || categories.length === 0) return null;

    return (
        <div className="slider-container category-slider">
            <Slider {...settings}>
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryCard category={category} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CategorySlider;