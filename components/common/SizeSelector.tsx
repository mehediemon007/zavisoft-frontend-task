'use client';

import { cn } from "@/lib/utils";

const SHOE_SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const NOT_AVAILABLE = [39, 40];

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
                                disabled={NOT_AVAILABLE.includes(size)}
                                onChange={() => onSizeSelect(size)}
                                className="hidden peer"
                            />
                            <span
                                className={cn(
                                    "inline-flex items-center justify-center w-12 lg:w-[50.25px] h-12 text-sm font-medium font-rubik tracking-[0.25px] uppercase bg-white rounded-lg cursor-pointer transition-all duration-150 ease-in-out",
                                    "hover:bg-amber-500 hover:text-white",
                                    "peer-checked:bg-[#232321] peer-checked:text-white",
                                    "peer-disabled:bg-[#D2D1D3] peer-disabled:text-[#8F8C91] peer-disabled:cursor-not-allowed peer-disabled:hover:bg-[#D2D1D3] peer-disabled:hover:text-[#8F8C91]"
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
