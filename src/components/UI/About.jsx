import React from 'react'

import '../../styles/about.css'

import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        // desc: 'Ensuring seamless project execution.'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        // desc: 'Focused and committed to your needs.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 support',
        // desc: 'Always available to assist you.'
    }    
]

const About = () => {
    return <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h6 className="subtitle">Why Choose Us</h6>
                    <h2>Experienced in helping clients with </h2>
                    <h2 className="highlights"> financial challenges</h2>
                    <p className="description about__content-desc">We build AI-powered apps for your website and phone that help you make more money. We understand your business and choose the best technology to help you grow. Let's work together to make your business even better!</p>

                    <div className="choose__item-wrapper">
                        {
                                chooseData.map((item, index) => (
                                    <div className="choose__us-item" key={index}>
                                        <span className="choose__us-icon">
                                            <i class={item.icon}></i>
                                        </span>
                                        <div>
                                            <h4 className="choose__us-title">
                                            {item.title}
                                            </h4>
                                            {/* <p className="description">
                                                {item.desc}
                                            </p> */}
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
}

export default About