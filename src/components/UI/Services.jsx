
import React from 'react'

import '../../styles/services.css'

const servicesData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        description: 'We develop user-friendly mobile apps for Android and iOS.'
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        description: 'We develop user-friendly websites using modern web technologies.'
    },

    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        description: 'We create visually appealing graphics designs for your business.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        description: 'We manage online marketing campaigns that drive results.'
    }


]




const Services = () => {
    return <section id='service'>
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Transform your business with our expertise</h2>
                <h2 className="highlights">in digital solutions</h2>
            </div>
            <div className="service__item-wrapper">
                {
                    servicesData.map((item, index) => (
                        <div className="services__item" key={index}>
                            <span className="service__icon">
                                <i class={item.icon}></i>
                            </span>
                            <h3 className="service__title">{item.title}</h3>
                            <p className="description">
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>

    </section>
}

export default Services