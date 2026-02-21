import React from 'react';
import Image from 'next/image';

// *** Import Icons
import { CircleIcon } from './Icons';

function NewsLetter() {
    return (
        <section>
            <div className="container">
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-11 bg-primary rounded-3xl sm:rounded-[48px] px-4 sm:px-18 pt-4 sm:pt-16 pb-60'>
                    <div>
                        <h3 className='w-full sm:max-w-127.5 text-white mb-2 sm:mb-4'>Join our KicksPlus Club & get 15% off</h3>
                        <p className='text-gray'>Sign up for free! Join the community.</p>
                        <form className='flex gap-1.5 mt-6 sm:mt-8'>
                            <input placeholder='Email address' className='flex-1 max-w-85 h-10 sm:h-12 text-white border border-white rounded-lg px-4 placeholder:text-[#e7e7e3bf] placeholder:tracking-[0.5px]'/>
                            <button className='btn btn-secondary px-6'>Submit</button>
                        </form>
                    </div>
                    <div className='flex-1'>
                        <div className='relative max-w-50 sm:w-max sm:mx-auto'>
                            <Image src={'/assets/logo-md.svg'} alt='Kicks' width={351} height={88} priority={true} fetchPriority='high'/>
                            <span className='absolute -top-2 -right-2'>
                                <CircleIcon className='w-4 h-4 sm:w-8 sm:h-8'/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;