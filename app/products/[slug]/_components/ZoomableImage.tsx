'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ZoomableImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    sizes?: string;
    className?: string;
}

export function ZoomableImage({ src, alt, width, height, priority, sizes, className }: ZoomableImageProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
    };

    return (
        <div 
            className="overflow-hidden cursor-zoom-in relative w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
        >
            <Image 
                src={src} 
                alt={alt}
                width={width} 
                height={height}
                priority={priority}
                sizes={sizes}
                className={cn("object-cover w-full h-full transition-transform duration-200", className)}
                style={isZoomed ? {
                    transform: 'scale(1.5)',
                    transformOrigin: `${pos.x}% ${pos.y}%`
                } : {}}
            />
        </div>
    );
}