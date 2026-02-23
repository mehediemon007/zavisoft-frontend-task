import React from 'react'
import Link from 'next/link';
import Cart from '../_components/Cart';

function Page() {
    return (
        <div>
            <div className="container">
                <div className="grid my-6 sm:my-8">
                    <div className="grid-cols-3">
                        <div className="col-span-2">
                            <div>
                                <h3 className='text-2xl/[1.167] sm:text-[32px]/[1.187] normal-case'>Saving to celebrate </h3>
                                <p className='text-xs sm:text-sm font-semibold my-2'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
                                <p className='text-sm sm:text-base font-semibold space-x-2'>
                                    <Link href={'/auth'} className='underline transition-colors duration-200 ease-in hover:text-primary'>Join us</Link>
                                    <span>or</span>
                                    <Link href={'/auth'} className='underline transition-colors duration-200 ease-in hover:text-primary'>Sign in</Link>
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cart/>
        </div>
    )
}

export default Page;