import React from 'react'
import './services.css';
import service2 from '../assets/Adventure.png';
import service1 from '../assets/policeman.png'
import service3 from '../assets/draw.jpg'
import service4 from '../assets/Exclusive.jpg'

function Services() {

    const data = [
        {
            icon: service1,
            title: "Safety First",
            subTitle: "A BD police guard will be with you all the time."
        },
        {
            icon: service2,
            title: "Feel the moment",
            subTitle: "We have all arrangements to experience you the most adventurus moments of our country"
        },
        {
            icon: service3,
            title: "Payment back offer",
            subTitle: "Win payment back offer in wraffle draw"
        },
        {
            icon: service4,
            title: "Exclusive",
            subTitle: "Up to 4 group of guests with your referral link will get 20% discount"
        }
    ]

    const serviceCard = data.map((service) => {
        return (
            <div className='service'>
                <div className='icon'>
                    <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.subTitle}</p>
            </div>
        );
    })



    return (
        <div className='services'> {serviceCard}</div>
    )
}

export default Services;
