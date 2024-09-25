
import React from 'react'
import '../../styles/hero.css'

import heroDarkImg from '../../images/hero-img.png';
import LightImg from '../../images/light-hero-bg.jpg';

const Hero = ({ theme }) => {
    return <section className="hero__section" id="home">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                        <h2>Boost Your Business</h2>
                        <h2>With Our IT Solutions</h2>
                        <h2 className="highlights">Your Success Is Our Top Concern</h2>
                    </div>
                    <p className="description">At AppJingle, we use our experience and commitment to provide great service and real value to our clients.</p>
                    <div className="hero__btns">
                        <button className="primary__btn">Get Started</button>
                        {/* <button className="secondary__btn">Discover More</button> */}
                    </div>
                </div>
                <div className="hero__img">
                    <img src={ theme === 'light-theme' ? LightImg : heroDarkImg} alt="hero img" />
                </div>
            </div>
        </div>

    </section>
}

export default Hero