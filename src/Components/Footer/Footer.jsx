import React from 'react'
import { assets } from '../../assets/assets.js';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer' id='footer'>
                <div className='footer-content'>
                    <div className='footer-content-left'>
                        <img src={assets.logo} alt='' />
                        <p>Tomato App is a user-friendly food delivery platform designed to provide a seamless experience for ordering meals from local restaurants. The app allows users to browse menus, place orders, track deliveries in real-time, and make secure payments. With a clean interface and easy navigation, Tomato App ensures a hassle-free food delivery process, making it convenient for users to satisfy their cravings with just a few taps.</p>
                        <div className='footer-social-icon'>
                            <img src={assets.facebookIcon} alt='' />
                            <img src={assets.twitterIcon} alt='' />
                            <img src={assets.linkedinIcon} alt='' />
                        </div>
                    </div>
                    <div className='footer-content-center'>
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className='footer-content-center'>
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+1-212-256-7890</li>
                            <li>contact@tomato.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='footer-copyright'>Copyright 2024 © Tomato.com-All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;