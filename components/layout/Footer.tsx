import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TiktokIcon, TwitterIcon } from '../common/Icons';

type Props = {
    className?: string
}

function Footer({}: Props) {
    return (
        <footer>
            <div className="container">
                <div className='relative bg-foreground rounded-[48px] z-20'>
                    <div className='flex justify-between gap-30 p-10 pb-24'>
                        <div className='footer-widget'>
                            <h4 className='text-4xl/[1] font-semibold font-rubik text-amber-500 mb-1.5'>About us</h4>
                            <p className='max-w-111.5 text-xl font-semibold font-sans text-gray'>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                        </div>
                        <div className='flex-1 flex justify-between'>
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
                                <ul className='flex justify-between items-center gap-6'>
                                    <li>
                                        <a href={'#'} target='_blank' aria-label='facebook'><FacebookIcon/></a>
                                    </li>
                                    <li>
                                        <a href={'#'} target='_blank' aria-label='instagram'><InstagramIcon/></a>
                                    </li>
                                    <li>
                                        <a href={'#'} target='_blank' aria-label='twitter'><TwitterIcon/></a>
                                    </li>
                                    <li>
                                        <a href={'#'} target='_blank' aria-label='tiktok'><TiktokIcon/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='px-7 rounded-b-[48px] overflow-hidden'>
                        <Image src={'assets/logo-lg.svg'} alt='Kicks' width={1262} height={313} priority={true} fetchPriority='high' className='objcet-cover'/>
                    </div>
                </div>
                <div className='text-center pt-7 pb-4.5'>
                    <p>&copy; All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;