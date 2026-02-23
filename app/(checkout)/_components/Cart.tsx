'use client';

import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import RelatedProducts from '@/components/common/RelatedProducts';
import ImageWithFallback from '@/components/common/ImageWithFallback';
import CartProductCard from './CartProductCard';

import { RootState } from '@/lib/store';

function Cart() {

    const cartItems = useSelector((state: RootState) => state.cart.items);

    const defaultItem = {
        id: 12345,
        title: 'DROPSET TRAINER SHOES',
        price: 130,
        description: 'Men’s Road Running Shoes Enamel Blue/ University White',
        image: '/assets/cart-product.png',
        color: '#000',
        size: 42,
        quantity: 1,
        slug: 'dropset-trainer-shoes'
    };

    const displayItems = [...cartItems, defaultItem];

    const subtotal = displayItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = displayItems.reduce((acc, item) => acc + item.quantity, 0);
    const deliveryFee = 6.99;
    const total = subtotal + deliveryFee;

    const productSlug = cartItems[0]?.slug || 'nike-pegasus-40';

    return (
        <div>
            {
                !!displayItems.length ? (
                    <>
                        <div className='container'>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-11.75 pb-6 sm:pb-10">
                                <div className="col-span-1 lg:col-span-2">
                                    <div className='bg-[#FAFAFA] rounded-2xl p-4 sm:p-6'>
                                        <div>
                                            <h3 className='text-base sm:text-2xl/[1.167] lg:text-[32px]/[1.187] normal-case'>Your Bag</h3>
                                            <p className='text-sm sm:text-base text-gray-800 mt-2'>Items in your bag not reserved- check out now to make them yours.</p>
                                        </div>
                                        <div className='mt-4 sm:mt-6 lg:mt-12 space-y-4 lg:space-y-6'>
                                            {
                                                displayItems.map((item) => (
                                                    <CartProductCard key={item.id} product={item}/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 bg-white lg:bg-transparent rounded-2xl p-4 sm:p-6 lg:p-0 lg:mt-6">
                                    <div className=''>
                                        <h3 className='text-xl/[1.2] sm:text-2xl/[1.167] lg:text-[32px]/[1.187] normal-case'>Order Summary</h3>
                                        <div className='space-y-2 sm:space-y-4 my-4 sm:my-6'>
                                            <p className='flex justify-between gap-4 text-base sm:text-xl font-semibold'><span>{totalQuantity } ITEM</span><span className='text-gray-800'>${subtotal.toFixed(2)}</span></p>
                                            <p className='flex justify-between gap-4 text-base sm:text-xl font-semibold'><span>Delivery</span><span className='text-gray-800'>${deliveryFee.toFixed(2)}</span></p>
                                            <p className='flex justify-between gap-4 text-base sm:text-xl font-semibold'><span>Sales Tax</span><span className='text-gray-800'>-</span></p>
                                            <p className='flex justify-between gap-4 text-xl sm:text-2xl font-semibold font-rubik'><span>Total</span><span>${total.toFixed(2)}</span></p>
                                        </div>
                                        <Link href={'/checkout'} className='btn btn-secondary w-full'>Checkout</Link>
                                        <button className='text-base sm:text-xl font-semibold underline mt-4 sm:mt-6 decoration-gray-800'>User a promo code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RelatedProducts slug={productSlug} className='pt-0!'/>
                    </>
                ) : (
                    <div className="container">
                        <div className='pb-6 sm:pb-10'>
                            <ImageWithFallback
                                src={'/assets/empty-cart.svg'}
                                alt='empty cart'
                                width={500}
                                height={500}
                                className='mx-auto'
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;