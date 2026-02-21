'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// *** Import Icons
import { CaretDownIcon, XIcon } from '../common/Icons';

import { NavItem } from '@/constants/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
    activeSub: string | null;
    onToggleSub: (label: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, navItems, activeSub, onToggleSub }: MobileMenuProps) => {

    const handleClose = () => {
        onToggleSub('');
        onClose();
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 z-100 transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />
            <aside className={`absolute left-0 top-0 h-full w-[85%] max-w-85 bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex flex-col h-full overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <Image src={'/assets/logo.svg'} alt='Kicks' width={90} height={24} />
                        <button onClick={handleClose} aria-label="Close menu">
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.label} className="flex flex-col border-b border-gray-50 pb-2">
                                    <div className="flex justify-between items-center">
                                        <Link href={item.href} className="text-lg font-semibold font-rubik uppercase" onClick={handleClose}>
                                            {item.label}
                                        </Link>
                                        {item.hasDropdown && (
                                            <button 
                                                onClick={() => onToggleSub(item.label)}
                                                className={`p-2 transition-transform duration-300 ${activeSub === item.label ? 'rotate-180' : ''}`}
                                            >
                                                <CaretDownIcon className="w-4 h-4"/>
                                            </button>
                                        )}
                                    </div>

                                    {item.hasDropdown && (
                                        <div
                                            className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${activeSub === item.label ? 'max-h-125 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
                                            `}
                                            style={{
                                                transitionProperty: 'max-height, opacity, margin'
                                            }}
                                        >
                                            <ul className="space-y-3 bg-gray-50 rounded-xl px-4">
                                                {item.subItems?.map((sub: NavItem) => (
                                                    <li key={sub.label} className="first:pt-4 last:pb-4">
                                                        <Link
                                                            href={sub.href}
                                                            className="text-gray-600 font-medium font-rubik"
                                                            onClick={handleClose}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    );
};