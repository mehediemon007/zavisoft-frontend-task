'use client';
import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';
import { fetchRelatedProducts } from '@/services/product-service';
import { Product } from '@/types/product';   
import { LoadingSpinner } from './LoadingSpinner';

const ProductSlider = dynamic(()=>import('@/components/product/ProductSlider'));

import { cn } from '@/lib/utils';

type Props = {
    slug: string,
    className?: string
}

export default function RelatedProducts({ slug, className }: Props) {

    const { data: relatedProducts, isLoading } = useQuery<Product[]>({
        queryKey: ['related-products', slug],
        queryFn: () => fetchRelatedProducts(slug),
        retry: 1,
    });

    if (isLoading) return <LoadingSpinner />;

    if (!relatedProducts || relatedProducts.length === 0) return null;

    return (
        <section className={cn('py-6 sm:py-8 lg:pt-22.5 xl:pt-32 lg:pb-15', className)}>
            <div className="container">
                <h3 className='text-2xl/[1.167] sm:text-5xl/[1.1875] mb-6 sm:mb-8 normal-case'>You may also like</h3>
                <div className="related-slider">
                    <ProductSlider products={relatedProducts} />
                </div>
            </div>
        </section>
    );
}