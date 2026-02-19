import React from 'react'
import Image from 'next/image';
import { StarIcon } from './Icons';

interface ReviewCardProps {
    title: string;
    content: string;
    rating: number;
    clientImg: string;
    reviewImg: string;
}

function ReviewCard({title, content, rating, clientImg, reviewImg} : ReviewCardProps) {
    return (
        <div>
            <div className='bg-[#FAFAFA] rounded-t-4xl p-8'>
                <div className='flex justify-between items-center gap-2'>
                    <div className='space-y-2'>
                        <h5>{title}</h5>
                        <p className='max-w-73.25 text-gray-800'>{content}</p>
                    </div>
                    <Image src={clientImg} alt='client1' width={64} height={64}/>
                </div>
                <div className='flex items-center mt-2'>
                    {
                        Array.from({length:5}, (_, i) => i).map(indx => (
                            <StarIcon key={indx} className={`${indx < rating ? 'text-amber-500' : 'text-gray-300' } align-text-top`}/>
                        ))
                    }
                    <span className='font-semibold leading-none ml-1'>5.0</span>
                </div>
            </div>
            <figure className='rounded-b-4xl overflow-hidden'>
                <Image src={reviewImg} alt='Reviw1' width={430} height={325} className="object-cover"/>
            </figure>
        </div>
    )
}

export default ReviewCard;