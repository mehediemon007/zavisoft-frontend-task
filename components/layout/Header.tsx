'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, SearchIcon, UserIcon, CaretDownIcon } from '../common/Icons';
import { NAV_ITEMS } from '@/constants/navigation';
import { MobileMenu } from './MobileMenu';

import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

function Header() {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchContainerRef.current && 
                !searchContainerRef.current.contains(event.target as Node)
            ) {
                setIsSearchOpen(false);
            }
        };

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);
    
    useEffect(() => {

        const mediaQuery = window.matchMedia('(max-width: 1023px)');
        
        const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches);
            if (!e.matches && isMenuOpen) {
                setIsMenuOpen(false);
                setActiveMobileSub(null);
            }
        };

        handleMediaChange(mediaQuery);

        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, [isMenuOpen]);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY < 10) {
                setIsVisible(true);
                setIsScrolling(false);
            } else {
                setIsScrolling(true);
                if (currentScrollY > lastScrollY && !isMenuOpen) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY, isMenuOpen]);

    return (
        <>
            <header className={`fixed top-8 left-0 right-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                <div className="container">
                    <div className={`flex justify-between items-center h-13 sm:h-16 lg:h-24 rounded-xl lg:rounded-3xl px-4 sm:px-8 transition-all duration-300 ${!isScrolling ? 'bg-[#fafafa]' : 'bg-white/90 backdrop-blur-md'}`}>
                        
                        <div className="flex-1">

                            <button aria-label='product menu' onClick={() => setIsMenuOpen(true)} className='block lg:hidden'>
                                <MenuIcon className='w-5 sm:w-6 h-5 sm:h-6'/>
                            </button>

                            <nav className='hidden lg:block'>
                                <ul className='flex items-center gap-10'>
                                    {NAV_ITEMS.map(item => (
                                        <li key={item.label} className='relative group'>
                                            <Link href={item.href} className='inline-flex items-center h-24 font-semibold font-rubik'>
                                                <span>{item.label}</span>
                                                {item.hasDropdown && <CaretDownIcon className="ml-1 group-hover:rotate-180 transition-transform duration-300"/>}
                                            </Link>
                                            {item.hasDropdown && (
                                                <ul className='absolute left-0 min-w-62.5 bg-white rounded-xl py-4 px-2 shadow-xl invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all z-10'>
                                                    {item.subItems?.map(subItem => (
                                                        <li key={subItem.label}>
                                                            <Link href={subItem.href} className='block px-6 py-2 hover:text-amber-500 font-rubik transition-colors'>{subItem.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                        </div>

                        <div className="flex justify-center items-center">
                            <Link href={'/'} className='relative h-5 lg:h-8 aspect-128/32 block'>
                                <Image src={'/assets/logo.svg'} alt='Kicks' fill priority className='object-contain'/>
                            </Link>
                        </div>

                        <div className='relative flex-1 flex justify-end items-center gap-2 sm:gap-4 lg:gap-10 h-full'>
                            <div ref={searchContainerRef} className="flex items-center h-full">
                                <button aria-label='Search Product' onClick={() => setIsSearchOpen((prev) => !prev)}>
                                    <SearchIcon className='w-4 sm:w-7 h-4 sm:h-7 cursor-pointer hover:text-amber-500 transition-colors'/>
                                </button>
                                
                                <div className={`absolute top-full right-0 flex items-center min-w-70 bg-white p-2 rounded-b-lg shadow-xl border-t border-gray-100 transition-all z-10 ${isSearchOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-4'}`}>
                                    <input 
                                        ref={searchInputRef}
                                        type="text" 
                                        placeholder="Search products..."
                                        className="w-full h-10 lg:h-12 bg-gray-100 rounded-full px-5 pr-10 outline-none focus:ring-2 focus:ring-amber-500/20 font-rubik text-sm"
                                    />
                                    <button 
                                        className="absolute right-6 p-1 hover:bg-gray-200 rounded-full transition-colors"
                                        aria-label="Submit search"
                                        onClick={()=> setIsSearchOpen(false)}
                                    >
                                        <SearchIcon className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>
                            </div>
                            <Link href={'/profile'} aria-label='user profile'>
                                <UserIcon className='w-4 sm:w-6 h-4 sm:h-6'/>
                            </Link>
                            <Link href={'/cart'} className='relative inline-flex justify-center items-center w-5 sm:w-8 h-5 sm:h-8 bg-amber-500 rounded-full'>
                                <span className='text-sm/[1] sm:text-base/[1] font-semibold'>{totalItems + 1}</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </header>
            
            {isMobile && (
                <MobileMenu 
                    isOpen={isMenuOpen} 
                    onClose={() => setIsMenuOpen(false)} 
                    navItems={NAV_ITEMS}
                    activeSub={activeMobileSub}
                    onToggleSub={(label) => setActiveMobileSub(activeMobileSub === label ? null : label)}
                />
            )}
        </>
    );
}

export default Header;