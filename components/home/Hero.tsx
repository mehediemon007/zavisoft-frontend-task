import { HeroSlider } from "../common/HeroSlider";

function Hero() {

    return (
        <section className='pb-6 sm:pb-22.5'>
            <div className="container">
                <h1 className="my-6">Do it <span className="text-primary">right</span></h1>
                <HeroSlider/>
            </div>
        </section>
    )
}

export default Hero;