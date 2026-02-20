import React from 'react'
import Image from 'next/image';
import ColorSelector from '../common/ColorSelector';

// *** Import Icons
import { HeartIcon } from '../common/Icons';
import SizeSelector from '../common/SizeSelector';

function ProductDetails() {
    return (
        <section className='mt-16'>
            <div className="container">
                <div className='grid grid-cols-3 gap-4'>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <Image src={'/assets/product1.png'} alt='Product1' width={429} height={510}/>
                            </div>
                            <div className="col-span-1">
                                <Image src={'/assets/product2.png'} alt='Product1' width={429} height={510}/>
                            </div>
                            <div className="col-span-1">
                                <Image src={'/assets/product3.png'} alt='Product1' width={429} height={510}/>
                            </div>
                            <div className="col-span-1">
                                <Image src={'/assets/product4.png'} alt='Product1' width={429} height={510}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <span className='btn btn-primary'>New Release</span>
                        <h3 className='text-[32px]'>ADIDAS 4DFWD X PARLEY RUNNING SHOES</h3>
                        <p>$125.00</p>

                        <div>
                            <p className='2xl:text-xl font-medium text-[#212B36EE] mb-4'>Color</p>
                            <ColorSelector/>
                        </div>

                        <div>
                            <div>
                                <p className='2xl:text-xl font-medium text-[#212B36EE] mb-4'>Size</p>
                                <span>Size chart</span>
                            </div>
                            <SizeSelector/>
                        </div>

                        <div>
                            <button className='btn btn-secondary'>Add to cart</button>
                            <button className='btn btn-secondary'><HeartIcon/></button>
                        </div>
                        <button className='btn btn-primary w-full'>Buy it now</button>
                        <div>
                            <h6>About the product</h6>
                            <p>
                                Shadow Navy / Army Green

                                This product is excluded from all promotional discounts and offers.

                                Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                                Join adiClub to get unlimited free standard shipping, returns, & exchanges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;