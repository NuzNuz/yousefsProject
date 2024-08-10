import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import './UploadSection.css';
import OpenAI from 'openai';

const UploadSection = () => {
    const navigate = useNavigate();
    const apiKey = 'sk-proj-VG4ZeOcnj1bHDC1U42e4T3BlbkFJGC1g1Zt32y84eb9Ngspl';
    const [file, setFile] = useState(null);
    const [fileText, setFileText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    //const [uploadingResume, setUploadingResume] = useState(false);
    const [unexpectedError, setUnexpectedError] = useState(false);


    useEffect(() => {
        if (fileText) {
            handleGetFeedback();
        }
    }, [fileText]);
    const handleFileChange = (event) => {
        console.log('File selected');
        setFile(event.target.files[0]);
    };

    const openai = new OpenAI({
        apiKey: apiKey, // This is the default and can be omitted
        dangerouslyAllowBrowser: true
    });

    const handleGetFeedback = async () => {
        if (!fileText) {
            console.log("No resume text available.");
            return;
        }
    
        try {
            setIsLoading(true);
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: 'system',
                        content: 'You are an advanced resume evaluation assistant. Evaluate the provided resume in one go and provide a comprehensive assessment.'
                    },
                    {
                        role: 'user',
                        content: `Please evaluate the following resume information and provide a detailed analysis. The response should include:
                    - **Overall Score:** A numerical score out of 100 reflecting the overall quality of the resume. Keep score inside of **. For example: **Overall Score: 56/100** .
                    - **Grammar Corrections:** Specific corrections that need to be made. List each correction on a new line.
                    - **Suggestions for Improvement:** A bulleted list of actionable suggestions to improve the resume. List each suggestion on a new line.
                    - **Detailed Feedback and Recommendations:** A comprehensive review including general feedback and specific recommendations based on the resume content provided below:
                    \n\n${fileText}`
                    }
                ]
            });
    
            const feedback = response.choices[0].message.content;
            console.log(feedback);
            const scoreMatch = feedback.match(/Overall Score:\s*(\d+)/);
            const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null; // Parse the score or null if not found
            console.log("Extracted Score:", score);
            const fileBlobUrl = URL.createObjectURL(file);
            setIsLoading(false);
            navigate('/DisplayResults', { state: { feedback: feedback, resumeContent: fileBlobUrl, score: score } });
        } catch (error) {
            setUnexpectedError(true);
            console.error('Failed to fetch feedback from OpenAI:', error);
        }
    };
    
    if (isLoading) {
        return (
            <div className="upload-section-container">
                <div className="upload-section-content">
                    <h1>Uploading...</h1>
                    <p>Your resume is being uploaded and analyzed. Please wait for the results.</p>
                </div>
            </div>
        );
    };
    if (unexpectedError) {
        return (
            <div className="upload-section-container">
                <div className="upload-section-content">
                    <h1>Oops! An unexpected error occurred.</h1>
                    <p>Sorry, we encountered an unexpected error while processing your resume. Please try again later.</p>
                </div>
            </div>
        );
    };

    const handleUploadClick = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        };
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://yousefsproject.onrender.com/upload', {
                method: 'POST',
                body: formData
            });
            const data = await response.text();
             setFileText(data);
    
          
        } catch (error) {
            setUnexpectedError(true);
            console.error("Error uploading file:", error);
        }
    };



    return (
        <div className="upload-section-container">
            <div className="upload-section-content">
                <h1>Upload Your Resume</h1>
                <p>Get started by uploading your resume. Our AI-powered tool will analyze your resume and provide you with tailored suggestions for improvement.</p>
                <label htmlFor="resume-upload">Choose a file (PDF Only)</label>
                <input type="file" id="resume-upload" name="resume-upload" accept=".pdf" onChange={handleFileChange} />
                <button className="upload-button" onClick={handleUploadClick}>Upload</button>
            </div>
        </div>
    );
};

export default UploadSection;
