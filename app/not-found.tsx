import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='container'>
            <div className='bg-white rounded-xl lg:rounded-3xl mx-auto my-8 overflow-hidden'>
                <Image src={'/assets/404.svg'} alt='Not found' width={500} height={500} className='bg-cover mx-auto'/>
                <div className='text-center py-4 sm:my-6'>
                    <Link href='/' className='btn btn-secondary'>Back To Home</Link>
                </div>
            </div>
        </div>
    )
}