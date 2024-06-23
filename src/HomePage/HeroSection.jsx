import React from "react";
import "./HeroSection.css";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="herosection-container">
            <div className="herosection-content">
                <h1>Welcome to RESBuilder</h1>
                <p>Unlock your professional potential with RESBuilder, the dynamic web application that transforms your resume into a powerful tool for job success.</p>
                <RouterLink to="/UploadResume"><button className="herosection-start-button">Get Started</button></RouterLink>
            </div>
        </div>
    )
}

export default HeroSection