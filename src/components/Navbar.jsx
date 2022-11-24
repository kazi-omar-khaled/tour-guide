import React, { useState } from 'react'
import styled from "styled-components";
import './navbar.css';
import Bangladesh from '../assets/Bangladesh.jpg';

function Navbar() {

    const Nav = styled.nav``;


    const showmenu = () => {
        return (
            <div>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#home">Home</a></li>
                    <li><a className="dropdown-item" href="#services">Services</a></li>
                    <li><a className="dropdown-item" href="#destinations">Places</a></li>
                    <li><a className="dropdown-item" href="#contact">Contact</a></li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <Nav className='nav'>
                <div className="brand">
                    <div className='container'>
                        <img src={Bangladesh} alt="Nothing" />
                    </div>
                </div>
                <div class="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={showmenu}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                </div>

                <ul>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#services'>Services</a>
                    </li>
                    <li>
                        <a href='#destinations'>Places</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
                <button className='btn1'>Connect</button>
            </Nav>
        </>

    )
}

export default Navbar;
