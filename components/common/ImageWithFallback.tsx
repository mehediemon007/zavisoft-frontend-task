'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string;
    priority?: boolean
}

export const ImageWithFallback = ({ src, fallbackSrc = '/assets/placeholder.svg', alt, priority = false, className, ...rest }: ImageWithFallbackProps) => {

    const [hasError, setHasError] = useState(false);

    return (
        <Image
            {...rest}
            src={hasError ? fallbackSrc : src} 
            alt={alt} 
            onError={()=> setHasError(true)}
            priority={priority}
            unoptimized={true} 
            className={`${className} transition-all duration-300 ${hasError ? 'object-contain p-12 bg-gray-100' : 'object-cover'}`}
        />
    );
};

export default ImageWithFallback;