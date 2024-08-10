import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import RESBuilderLogo from '../assets/resbuilderLogo2.png';
import './ResumePageHeader.css';


const ResumePageHeader = () => {
    return (
        <div>
            <div className="header-container">
            <div className="header-content">
                <RouterLink to="/"><img className="header-image" src={RESBuilderLogo} alt="Resbuilder Logo"/></RouterLink>
                
                <ul className="header-nav">
                </ul>
            </div>
        </div>
        </div>
    )
}

export default ResumePageHeader