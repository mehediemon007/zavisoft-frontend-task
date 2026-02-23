'use client';

import { cn } from "@/lib/utils";

const PRODUCT_COLORS = [
    { name: 'Blue', hex: '#253043' },
    { name: 'Olive', hex: '#707E6E' },
];

interface ColorSelectorProps {
    productId: number;
    selectedColor: string;
    onColorSelect: (hex: string) => void;
}

export default function ColorSelector({ productId, selectedColor, onColorSelect }: ColorSelectorProps) {

    return (
        
        <div className="flex justify-start items-center flex-wrap gap-4 pl-2 pt-2">
            {PRODUCT_COLORS.map((color) => (

                <label key={color.hex} className="relative">

                    <input
                        type="radio"
                            name={`${productId}-color-selection`}
                            value={color.hex}
                            checked={selectedColor === color.hex}
                            onChange={() => onColorSelect(color.hex)}
                            className="hidden peer"
                    />

                    <span
                        className={cn(
                            "block w-6 sm:w-8 h-6 sm:h-8 rounded-full cursor-pointer peer-checked:ring-3 peer-checked:ring-offset-4 peer-checked:ring-offset-background",
                        )}

                        style={{
                            backgroundColor: color.hex,
                        } as React.CSSProperties}

                        aria-label={color.name}

                    ></span>

                </label>
            ))}

        </div>
    );
}