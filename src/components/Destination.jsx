import React from 'react'
import Sundarban from '../assets/sundarban.jpg';
import Saintmartin from '../assets/Sainmartin.jpg';
import Sajek from '../assets/sajek.jpg';
import Dhaka from '../assets/Dhaka.jpg';
import Countryside from '../assets/VILLAGE.jpg';
import './places.css';


function Destination() {

    const data = [
        {
            image: Sundarban,
            title: "Sundarban",
            subtitle: "World largest mangrove forest.",
            cost: "BDT 5000",
            duration: "2 days & 3 night."
        },
        {
            image: Saintmartin,
            title: "Saintmartin",
            subtitle: "Beautiful coral Island",
            cost: "BDT 8000",
            duration: "3 days & 4 night."

        },
        {
            image: Dhaka,
            title: "Dhaka",
            subtitle: "Capital city of Bangladesh",
            cost: "BDT 4000",
            duration: "2 days & 3 night."

        },
        {
            image: Countryside,
            title: "Countryside",
            subtitle: "The Hidden beauty of Bangladesh",
            cost: "BDT 3000",
            duration: "2 days & 3 night."

        },
        {
            image: Sajek,
            title: "Sajek valley",
            subtitle: "Where earth meets sky",
            cost: "BDT 5000",
            duration: "2 days & 3 night."

        },
    ]
    const destination = data.map((place) => {
        return (
            <div className='place'>
                <div className='image'>
                    <img src={place.image} alt="nothing" />
                </div>
                <div className='contents'>
                    <h3>{place.title}</h3>
                    <p>{place.subtitle}</p>
                    <h4>{place.cost}</h4>
                    <h4>{place.duration}</h4>
                </div>
            </div>
        )
    })

    return (
        <div className='places'>

            {destination}
        </div>
    )
}

export default Destination;
