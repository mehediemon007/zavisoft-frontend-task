import React from 'react';
import Image from 'next/image';

// *** Import Icons
import { CircleIcon } from './Icons';

function NewsLetter() {
    return (
        <section>
            <div className="container">
                <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-11 bg-primary rounded-3xl sm:rounded-[48px] px-4 sm:px-10 lg:px-18 pt-4 sm:pt-16 pb-60'>
                    <div>
                        <h3 className='w-full sm:max-w-127.5 text-white mb-2 sm:mb-4'>Join our KicksPlus Club & get 15% off</h3>
                        <p className='text-gray'>Sign up for free! Join the community.</p>
                        <form className='flex flex-wrap gap-x-1.5 gap-y-3 mt-6 sm:mt-8'>
                            <input placeholder='Email address' className='flex-1 max-w-85 h-10 sm:h-12 text-white border border-white rounded-lg px-4 placeholder:text-[#e7e7e3bf] placeholder:tracking-[0.5px] placeholder:font-inter placeholder:font-normal'/>
                            <button className='btn btn-secondary px-6'>Submit</button>
                        </form>
                    </div>
                    <div className='flex-1'>
                        <div className='relative max-w-50 sm:max-w-full lg:max-w-max lg:mx-auto'>
                            <Image src={'/assets/logo-md.svg'} alt='Kicks' width={351} height={88} priority={true} fetchPriority='high'/>
                            <span className='absolute -top-2 sm:-top-3 xl:-top-5 -right-2 sm:-right-3 xl:-right-5'>
                                <CircleIcon className='w-4 h-4 sm:w-6 sm:h-6 xl:w-8 xl:h-8'/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;