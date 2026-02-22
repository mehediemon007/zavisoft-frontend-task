import React from 'react'
import { StarIcon } from './Icons';
import ImageWithFallback from './ImageWithFallback';

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
            <div className='bg-[#FAFAFA] rounded-t-2xl sm:rounded-t-4xl p-4 sm:p-8'>
                <div className='flex justify-between items-start gap-2'>
                    <div className='space-y-2'>
                        <h5>{title}</h5>
                        <p className='w-full sm:max-w-73.25 text-sm/[1.35] sm:text-base/snug text-gray-800'>{content}</p>
                    </div>
                    <div className="shrink-0 relative w-12 h-12 lg:w-16 lg:h-16">
                        <ImageWithFallback 
                            src={clientImg} 
                            alt='client1' 
                            fill
                            className="rounded-full object-cover" 
                            sizes="(max-width: 575px) 48px, 64px"
                        />
                    </div>
                </div>
                <div className='flex items-center mt-2'>
                    {
                        Array.from({length:5}, (_, i) => i).map(indx => (
                            <StarIcon key={indx} className={`w-4 h-4 sm:w-6 sm:h-6 ${indx < rating ? 'text-amber-500' : 'text-gray-300' } align-text-top`}/>
                        ))
                    }
                    <span className='text-sm sm:text-base font-semibold leading-none ml-1'>5.0</span>
                </div>
            </div>
            <figure className='rounded-b-2xl sm:rounded-b-4xl overflow-hidden'>
                <figure className="relative aspect-430/325 w-full overflow-hidden rounded-b-2xl sm:rounded-b-4xl bg-gray-50">
                    <ImageWithFallback
                        src={reviewImg} 
                        alt={`Review for ${title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 430px" 
                        className="object-cover"
                    />
                </figure>
                    
            </figure>
        </div>
    )
}

export default ReviewCard;