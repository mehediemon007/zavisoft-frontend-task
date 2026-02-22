import Image from 'next/image';
 
export default function NotFound() {
    return (
        <div className='container'>
            <div className='bg-white rounded-xl lg:rounded-3xl mx-auto my-8 overflow-hidden'>
                <Image src={'/assets/404.svg'} alt='Not found' width={500} height={500} className='bg-cover mx-auto'/>
            </div>
        </div>
    )
}