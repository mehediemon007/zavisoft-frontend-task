'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

import { formatImageUrl } from '@/lib/utils';

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string;
    priority?: boolean
}

export const ImageWithFallback = ({ src, fallbackSrc = '/assets/placeholder.svg', alt, priority = false, className, ...rest }: ImageWithFallbackProps) => {

    const [hasError, setHasError] = useState(false);

    const formattedImgUrl = typeof src === 'string' ? formatImageUrl(src, fallbackSrc) : src;

    return (
        <Image
            {...rest}
            src={hasError ? fallbackSrc : formattedImgUrl} 
            alt={alt} 
            onError={()=> setHasError(true)}
            priority={priority}
            unoptimized={true} 
            className={`${className} transition-all duration-300 ${hasError ? 'object-contain p-12 bg-gray-100' : 'object-cover'}`}
        />
    );
};

export default ImageWithFallback;