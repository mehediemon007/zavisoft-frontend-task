'use client';

import { useEffect, useState, useMemo } from "react";

import { cn } from "@/lib/uitls";

// const sizes = ["XS", "S", "M", "L", "XL"];

export default function SizeSelector() {

    return (
        <>
            <div>
                <label className="relative">
                    <input
                        type="radio"
                        className="hidden peer"
                    />
                    <span
                        className={cn('flex items-center justify-center min-w-10 lg:min-w-20 lg:h-10 border border-[#D3D3D7] lg:text-xl font-medium text-[#212B36EE] uppercase cursor-pointer px-2 transition-all duration-100 ease-linear peer-checked:ring-1 peer-checked:ring-[#212B36EE] peer-checked:border-transparent')}
                    >
                        XL
                    </span>
                </label>
            </div>
        </>
    );
}
