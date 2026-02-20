'use client';
import { useQuery } from '@tanstack/react-query';
import ProductSlider from '@/components/product/ProductSlider';
import { fetchRelatedProducts } from '@/services/product-service';
import { Product } from '@/types/product';   


export default function RelatedProducts({ slug }: { slug: string }) {
    const { data: relatedProducts, isLoading } = useQuery<Product[]>({
        queryKey: ['related-products', slug],
        queryFn: () => fetchRelatedProducts(slug),
    });

    if (isLoading) return <div className="h-64 animate-pulse bg-gray-100 rounded-3xl" />;
    if (!relatedProducts || relatedProducts.length === 0) return null;

    return (
        <section className='py-32'>
            <div className="container">
                <h3 className='mb-8'>You may also like</h3>
                <div className="related-slider">
                    <ProductSlider products={relatedProducts} />
                </div>
            </div>
        </section>
    );
}