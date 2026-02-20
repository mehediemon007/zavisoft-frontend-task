import NewsLetter from "@/components/common/NewsLetter";
import Hero from "@/components/home/Hero";
import NewDrops from "@/components/home/NewDrops";
import Reviews from "@/components/home/Reviews";

export default function Home() {
    return (
        <>
            <Hero/>
            <NewDrops/>
            <Reviews/>
            <NewsLetter/>
        </>
    );
}
