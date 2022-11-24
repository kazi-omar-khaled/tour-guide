import React from 'react'
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <span> Copyright & copy; 2022 Explore Bangladesh. All rights reserved. </span>
            <ul className='social_links'>
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-linkedin"></ion-icon></li>
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-youtube"></ion-icon></li>
            </ul>
        </div>
    )
}

export default Footer;
