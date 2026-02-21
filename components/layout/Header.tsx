'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// *** Import Icons
import { GoTriangleDown } from "react-icons/go";
import { SearchIcon, UserIcon } from '../common/Icons';
import { NAV_ITEMS } from '@/constants/navigation';

type Props = {
    className?: string
}

function Header({}: Props) {

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
                setIsScrolling(false);
            } else {
                setIsScrolling(true);
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);


    return (
        <header
            className={`
                fixed top-8 left-0 right-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
            `}
        >
            <div className="container">
                <div className={`
                    flex justify-between items-center rounded-3xl px-8 transition-colors duration-300
                    ${!isScrolling 
                        ? 'bg-[#fafafa]' 
                        : 'bg-white/90 backdrop-blur-md'
                    }
                `}>
                    <nav>
                        <ul className='flex items-center gap-10'>
                            {
                                NAV_ITEMS.map(item => (
                                    <li key={item.label} className='relative group'>
                                        <Link href={item.href} className='inline-flex items-center h-24 font-semibold font-rubik'>
                                            <span>{item.label}</span>
                                            {item.hasDropdown && <GoTriangleDown/>}
                                        </Link>
                                        {
                                            item.hasDropdown && (
                                                <ul className='absolute left-0 min-w-62.5 bg-white rounded-sm py-4 px-2.5 mt-4 shadow-[0_4px_10px_rgba(37,47,63,.1)] invisible opacity-0 transition-all duration-300 ease-in-out z-10 group-hover:opacity-100 group-hover:visible group-hover:mt-0'>
                                                    {
                                                        item.subItems?.map(subItem => (
                                                            <li key={subItem.label}>
                                                                <Link href={subItem.href} className='inline-block text-sm font-medium font-rubik py-1 px-4 transition-colors duration-300 ease-in-out hover:text-amber-500'>{subItem.label}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div>
                        <Link href={'/'}>
                            <Image src={'/assets/logo.svg'} alt='Kicks' width={128} height={32} priority={true} fetchPriority='high'/>
                        </Link>
                    </div>
                    <div>
                        <ul className='flex items-center gap-10'>
                            <li>
                                <Link href={'#'}>
                                    <SearchIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'}>
                                    <UserIcon/>
                                </Link>
                            </li>
                            <li>
                                <Link href={'#'} className='relative inline-flex justify-center items-center w-8 h-8 bg-amber-500 rounded-full'>
                                    <span className='font-semibold'>0</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;