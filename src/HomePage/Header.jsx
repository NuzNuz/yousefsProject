import React, { useState, useEffect } from "react";
import "./Header.css";
import RESBuilderLogo from "../assets/resbuilderLogo2.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Header() {
    const [focusedLink, setFocusedLink] = useState("home");
    const scrollHandler = () => {
        const positions = {
            'home': 0, 
            'about': 550, 
            'contact': 1800
        };

        const scrollPosition = window.scrollY;
        let activeSection = 'home'; 
        if (scrollPosition >= positions['contact']) {
            activeSection = 'contact';
        } else if (scrollPosition >= positions['about']) {
            activeSection = 'about';
        }
        setFocusedLink(activeSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <div className="header-container">
            <div className="header-content">
                <Link to="herosection-container" smooth={true}><img className="header-image" src={RESBuilderLogo} alt="Resbuilder Logo"/></Link>
                
                <ul className="header-nav">
                    <li><Link to="herosection-container" smooth={true} 
                    className={`link-button ${focusedLink === 'home' ? 'focused' : ''}`} onFocus={() => setFocusedLink('home')}>Home</Link></li>
                    <li><Link to="about-container" smooth={true} 
                    className={`link-button ${focusedLink === 'about' ? 'focused' : ''}`} onFocus={() => setFocusedLink('about')}>About</Link></li>
                    <li><Link to="contact-container" smooth={true} 
                    className={`link-button ${focusedLink === 'contact' ? 'focused' : ''}`} onFocus={() => setFocusedLink('contact')}>Contact</Link></li>
                </ul>
                <RouterLink to="/UploadResume"><button className="header-button">Try Now</button></RouterLink>
            </div>
        </div>
    )
}

export default Header