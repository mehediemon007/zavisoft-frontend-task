import { HeroSlider } from "./HeroSlider";

function Hero() {

    return (
        <section className='pb-6 sm:pb-20 xl:pb-22.5'>
            <div className="container">
                <h1 className="flex justify-center w-full my-6">Do it <span className="text-primary">right</span></h1>
                <HeroSlider/>
            </div>
        </section>
    )
}

export default Hero;