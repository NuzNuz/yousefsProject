import React from 'react'
import './HowItWorks.css'
import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <div className='howitworks-container'>
            <div className='howitworks-content'>
                <h1>How It Works</h1>
                <div className='howitworks-steps'>
                    <div className='howitworks-step'>
                        <h2>Step 1</h2>
                        <h3>Upload Your Resume</h3>
                        <p>Users start by uploading their resume in one of the supported formats.</p>
                    </div>
                    <div className='right-arrow'>
                        <FaArrowRight size={50}/>
                    </div>
                    <div className='howitworks-step'>
                        <h2>Step 2</h2>
                        <h3>Receive AI-Driven Feedback</h3>
                        <p>The application analyzes the resume using advanced artificial intelligence algorithms.</p>
                        <p>Users receive detailed feedback on various aspects of their resume, including structure, content, grammar, and presentation.</p>
                    </div>
                    <div className='right-arrow'>
                        <FaArrowRight size={50}/>
                    </div>
                    <div className='howitworks-step'>
                        <h2>Step 3</h2>
                        <h3>Edit and Improve:</h3>
                        <p>Users can view suggested modifications and compare them with their resume displayed on the right side of the page.</p>
                        
                </div>
            </div>
        </div>
    </div>
    )
}

export default HowItWorks