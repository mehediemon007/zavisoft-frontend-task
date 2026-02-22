'use client';

import { useState } from "react";

import { cn } from "@/lib/utils";

const SHOE_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

interface SizeSelectorProps {
    selectedSize?: number;
    onSizeSelect?: (size: number) => void;
}

export default function SizeSelector({ selectedSize, onSizeSelect } : SizeSelectorProps) {

    const [localSize, setLocalSize] = useState<number | null >(null);

    const currentSize = selectedSize || localSize;

    const handleSelect = (size : number) => {
        setLocalSize(size);
        if (onSizeSelect) onSizeSelect(size);
    }

    return (
        <>
            <div className="flex flex-wrap gap-2 md:gap-1">
                {
                    SHOE_SIZES.map((size) => (
                        <label key={size} className="relative group">
                            <input
                                type="radio"
                                name="shoe-size"
                                value={size}
                                checked={currentSize === size}
                                onChange={() => handleSelect(size)}
                                className="hidden peer"
                            />
                            <span
                                className={cn(
                                    'inline-flex justify-center items-center w-12 lg:w-[50.25px] h-12 text-sm font-medium font-rubik tracking-[0.25px] uppercase bg-white rounded-lg px-4 py-2 cursor-pointer transition-all duration-200 ease-in-out',
                                    'hover:bg-[#232321] hover:text-white',
                                    'peer-checked:bg-[#232321] peer-checked:text-white peer-checked:border-transparent'
                                )}
                            >
                                {size}
                            </span>
                        </label>
                    ))
                }
            </div>
        </>
    );
}
