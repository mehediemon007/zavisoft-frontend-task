import React from 'react';
import Image from 'next/image';

// *** Import Icons
import { CircleIcon } from './Icons';

function NewsLetter() {
    return (
        <section>
            <div className="container">
                <div className='flex justify-between items-center bg-primary rounded-[48px] px-18 pt-16 pb-60'>
                    <div>
                        <h3 className='max-w-127.5 text-white mb-6'>Join our KicksPlus Club & get 15% off</h3>
                        <p className='text-gray'>Sign up for free! Join the community.</p>
                        <form className='mt-8'>
                            <input placeholder='Email address' className='w-85 h-12 text-white border border-white rounded-lg px-4 placeholder:text-[#e7e7e3bf] placeholder:tracking-[0.5px]'/>
                            <button className='btn btn-secondary ml-1.5 px-6'>Submit</button>
                        </form>
                    </div>
                    <div className='flex-1'>
                        <div className='relative w-max mx-auto'>
                            <Image src={'/assets/logo-md.svg'} alt='Kicks' width={351} height={88} priority={true} fetchPriority='high'/>
                            <span className='absolute -top-6 -right-4'>
                                <CircleIcon/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter;