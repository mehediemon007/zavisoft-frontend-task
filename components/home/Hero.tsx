import { HeroSlider } from "../common/HeroSlider";

function Hero() {

    return (
        <section className='mt-6'>
            <div className="container">
                <h1>Do it <span className="text-primary">right</span></h1>
                <HeroSlider/>
            </div>
        </section>
    )
}

export default Hero;