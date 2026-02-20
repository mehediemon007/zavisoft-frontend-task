import NewsLetter from "@/components/common/NewsLetter";
import Hero from "@/components/home/Hero";
import NewDrops from "@/components/home/NewDrops";
import Categories from "@/components/home/Categories";
import Reviews from "@/components/home/Reviews";

import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchProducts, fetchCategories } from "@/services/product-service";

export default async function Home() {

    const queryClient = new QueryClient();

    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ['products', 4],
            queryFn: () => fetchProducts(4),
        }),
        queryClient.prefetchQuery({
            queryKey: ['categories'],
            queryFn: fetchCategories,
        }),
    ])

    return (
        <>
            <Hero/>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Categories/>
            </HydrationBoundary>
            <Reviews/>
            <NewsLetter/>
        </>
    );
}
