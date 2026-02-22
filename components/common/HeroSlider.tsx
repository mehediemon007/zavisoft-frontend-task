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

    const mainSwiperRef = useRef<SwiperClass | null>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    // const inactiveImages = images.filter((_, index) => index !== activeIdx);

    const orderedThumbs = [
        images[(activeIdx + 1) % images.length],
        images[(activeIdx + 2) % images.length],
    ];

    const handleThumbClick = (targetId: number) => {
        if (mainSwiperRef.current) {
            const originalIndex = images.findIndex(img => img.id === targetId);
            mainSwiperRef.current.slideToLoop(originalIndex);
        }
    };

    return (
        <div className="relative overflow-hidden rounded-3xl lg:rounded-[64px]">
            <Swiper
                loop={true}
                effect={'fade'}
                navigation={false}
                autoplay={{ delay: 5000 }}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
                modules={[Navigation, Autoplay, EffectFade]}
                className='w-full h-95.5 md:h-135 lg:h-187.5'
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
                        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 lg:p-12 text-white z-10">
                            <h2 className="leading-none">NIKE AIR MAX</h2>
                            <p className='max-w-49.25 md:max-w-70 lg:max-w-122.5 text-sm/[1.357] md:text-base/[1.1875] lg:text-2xl/snug font-semibold'>Nike introducing the new air max for everyone&apos;s comfort</p>
                            <Link href={'/checkout'} className="btn btn-primary min-w-28 h-8 sm:h-10 lg:h-12 mt-2 sm:mt-2.5 lg:mt-6">
                                Shop now
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 flex flex-col gap-4">
                {orderedThumbs.map((img) => (
                    <button
                        key={img.id}
                        onClick={() => handleThumbClick(img.id)}
                        className="relative w-16 md:w-24 lg:w-40 h-16 md:h-24 lg:h-40 border md:border-2 lg:border-3 border-gray rounded-lg md:rounded-xl lg:rounded-4xl overflow-hidden"
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