import React from 'react';
import Boat from '../assets/boat.jpg';
import styled from "styled-components";
import './Homepage.css';

function Homepage() {
    const Section = styled.section``;
    return (
        <Section id="hero">
            <div className='background'>
                <img src={Boat} alt='nothing' />
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>EXPLORE BANGLADESH</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, labore?</p>
                </div>
                <div className='search'>
                    <div className='container'>
                        <label htmlFor=''>Where You Want To Go</label>
                        <input type="text" placeholder='search your location' />
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-in</label>
                        <input type="date" />
                    </div>
                    <div className='container'>
                        <label htmlFor=''>Check-out</label>
                        <input type="date" />
                    </div>
                    <button className='btn2'>Next</button>

                </div>
            </div>
        </Section>

    )
}

export default Homepage;
