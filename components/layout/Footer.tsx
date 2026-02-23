import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from '../common/Icons';

type Props = {
    className?: string
}

function Footer({}: Props) {
    return (
        <footer className=''>
            <div className="container">
                <div className='relative bg-foreground rounded-3xl sm:rounded-[48px] -mt-50'>
                    <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-18 xl:gap-30 p-4 sm:p-10 pb-11.25 sm:pb-18 lg:pb-24'>
                        <div className='footer-widget'>
                            <h4 className='text-amber-500 mb-1'>About us</h4>
                            <p className='w-full sm:max-w-111.5 text-base/snug sm:text-xl/[1.35] font-semibold font-sans text-gray'>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                        </div>
                        <div className='flex-1 flex flex-col sm:flex-row justify-between gap-6'>
                            <div className='footer-widget'>
                                <h5 className='text-amber-500 mb-4'>Categories</h5>
                                <ul className='space-y-2'>
                                    <li>
                                        <Link href={'#'}>Runners</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Sneakers</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Basketball</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Outdoor</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Golf</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Hiking</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-widget'>
                                <h5 className='text-amber-500 mb-4'>Company</h5>
                                <ul className='space-y-2'>
                                    <li>
                                        <Link href={'#'}>About</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='footer-widget'>
                                <h5 className='text-amber-500 mb-4'>Follow us</h5>
                                <ul className='flex justify-start lg:justify-between items-center gap-4 sm:gap-6'>
                                    <li>
                                        <a href='https://www.facebook.com/' target='_blank' aria-label='facebook'><FacebookIcon/></a>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/' target='_blank' aria-label='instagram'><InstagramIcon/></a>
                                    </li>
                                    <li>
                                        <a href='https://x.com/' target='_blank' aria-label='twitter'><TwitterIcon/></a>
                                    </li>
                                    <li>
                                        <a href='https://www.tiktok.com/en/' target='_blank' aria-label='tiktok'><TiktokIcon/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='px-1 sm:px-7 rounded-b-3xl sm:rounded-b-[48px] overflow-hidden'>
                        <Image src={'/assets/logo-lg.svg'} alt='Kicks' width={1262} height={313} priority={true} fetchPriority='high' className='objcet-cover'/>
                    </div>
                </div>
                <div className='text-center py-6 xl:pt-7 xl:pb-4.5'>
                    <p>&copy; All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;