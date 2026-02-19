import React from 'react'
import Link from 'next/link';
import ReviewCard from '../common/ReviewCard';

const REVIEWS_DATA = [
  {
    id: 1,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    clientImg: "/assets/client1.png",
    reviewImg: "/assets/review1.jpg",
  },
  {
    id: 2,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    clientImg: "/assets/client2.png",
    reviewImg: "/assets/review2.jpg",
  },
  {
    id: 3,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5.0,
    clientImg: "/assets/client3.png",
    reviewImg: "/assets/review3.jpg",
  },
];

function Reviews() {
    return (
        <section>
            <div className="container">
                <div className='flex justify-between items-center mb-12'>
                    <h2>Reviews</h2>
                    <Link href={'/reviews'} className='btn btn-primary'>See all</Link>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    {REVIEWS_DATA.map(review => (
                        <ReviewCard key={review.id} {...review}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews;