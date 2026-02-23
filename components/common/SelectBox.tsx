'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CaretDownLineIcon } from '../common/Icons';

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Option[];
    placeholder?: string;
    onChange?: (value: string) => void;
}

export default function CustomSelect({ options, placeholder = "Select option", onChange }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reusing your Click Outside logic
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
        if (onChange) onChange(option.value);
    };

    return (
        <div ref={containerRef} className="relative w-full max-w-max">
            {/* The Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`flex items-center justify-between flex-wrap gap-4 sm:gap-6 w-full h-auto transition-all duration-200`}
            >
                <span className='text-sm sm:text-xl text-gray-800 font-semibold'>
                    {selected ? `${placeholder} ${selected.label}` : placeholder}
                </span>
                <CaretDownLineIcon className={`w-4 sm:w-6 h-4 sm:h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}/>
            </button>

            {/* The Dropdown Menu */}
            <div className={`absolute left-0 right-0 z-50 mt-2 overflow-hidden bg-white border border-gray-100 transition-all duration-200 origin-top
                ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
            >
                    <ul role="listbox" className="py-1 max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={selected?.value === option.value}
                                onClick={() => handleSelect(option)}
                                className={`px-4 py-3 text-sm cursor-pointer transition-colors
                                ${selected?.value === option.value ? 'bg-amber-50 text-amber-600 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    );
}