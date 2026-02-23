'use client';

import { cn } from "@/lib/utils";

const SHOE_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

interface SizeSelectorProps {
    productId: number;
    selectedSize: number;
    onSizeSelect: (size: number) => void;
}

export default function SizeSelector({ productId, selectedSize, onSizeSelect } : SizeSelectorProps) {

    return (
        <>
            <div className="flex flex-wrap gap-2 md:gap-1">
                {
                    SHOE_SIZES.map((size) => (
                        <label key={size} className="relative group">
                            <input
                                type="radio"
                                name={`${productId}-size-selection`}
                                value={size}
                                checked={selectedSize === size}
                                onChange={() => onSizeSelect(size)}
                                className="hidden peer"
                            />
                            <span
                                className={cn(
                                    'inline-flex justify-center items-center w-12 lg:w-[50.25px] h-12 text-sm font-medium font-rubik tracking-[0.25px] uppercase bg-white rounded-lg px-4 py-2 cursor-pointer transition-colors duration-100 ease-in-out',
                                    selectedSize !== size  && 'hover:bg-amber-500 hover:text-white',
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
