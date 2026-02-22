import React, { useState } from 'react';
import ImageWithFallback from '../common/ImageWithFallback';

import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs,  Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface ThumbnailSliderProps {
    images: string[];
}

export default function ThumbnailSlider({ images }: ThumbnailSliderProps) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                loop={true}
                spaceBetween={10}
                navigation={false}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="product-thumbMainSlider"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`}>
                        <figure className='relative w-full aspect-358/273 rounded-2xl overflow-hidden'>
                            <ImageWithFallback
                                src={image}
                                alt={`Product view ${index + 1}`}
                                fill
                                className="w-full object-cover rounded-2xl"
                            />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={8}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                breakpoints={{
                    0:{
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                }}
                className="mySwiper mt-6"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={`thumb-${image}-${index}`} className="w-16! sm:w-24! md:w-16! cursor-pointer">
                        <figure className="relative w-full aspect-square overflow-hidden rounded-lg">
                            <ImageWithFallback
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}