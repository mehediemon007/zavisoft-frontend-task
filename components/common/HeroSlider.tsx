'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { Swiper as SwiperClass } from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import all required styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface ImageItem {
    id: number;
    url: string;
    alt: string;
}

const images: ImageItem[] = [
    { id: 1, url: "/assets/hero1.webp", alt: "Nike Shoe" },
    { id: 2, url: "/assets/hero2.webp", alt: "Nike Shoe Pair" },
    { id: 3, url: "/assets/hero3.webp", alt: "Nike Shoe Backview" },
];

export const HeroSlider: React.FC = () => {
    // Reference to the main swiper instance to control it from thumbs
    const mainSwiperRef = useRef<SwiperClass | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    // Filter images to only show the ones that ARE NOT active
    const inactiveImages = images.filter((_, index) => index !== activeIdx);

    const handleThumbClick = (targetId: number) => {
        if (mainSwiperRef.current) {
            // Find the original index of the clicked image
            const originalIndex = images.findIndex(img => img.id === targetId);
            mainSwiperRef.current.slideToLoop(originalIndex);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[64px]">
                
            {/* Main Slider */}
            <Swiper
                loop={true}
                effect={'fade'}
                navigation={false}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
                modules={[Navigation, Autoplay, EffectFade]}
                className='w-full h-95.5 sm:h-187.5'
            >
                {images.map((img) => (
                    <SwiperSlide key={img.id} className="overlay before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_31.12%,rgba(0,0,0,0.5)_66.06%)]">
                        <Image 
                            src={img.url} 
                            alt={img.alt}
                            fill
                            priority
                            fetchPriority='high' 
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-12 text-white z-10">
                            <h2 className="leading-none">NIKE AIR MAX</h2>
                            <p className='max-w-122.5 text-2xl/[1] font-semibold'>Nike introducing the new air max for everyone&apos;s comfort</p>
                            <Link href={'#'} className="btn btn-primary mt-6">
                                Shop now
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-10 right-10 z-20 flex flex-col gap-4">
                {inactiveImages.map((img) => (
                    <button
                        key={img.id}
                        onClick={() => handleThumbClick(img.id)}
                        className="relative w-16 sm:w-40 h-16 sm:h-40 border sm:border-3 border-gray rounded-lg sm:rounded-4xl overflow-hidden"
                    >
                        <Image 
                            src={img.url} 
                            alt={`Thumb ${img.id}`} 
                            fill 
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};