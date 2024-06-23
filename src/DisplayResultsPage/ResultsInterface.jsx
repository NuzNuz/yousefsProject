import React from 'react';
import { useLocation } from 'react-router-dom';
import './ResultsInterface.css';
import ScoreBar from './ScoreBar';

const ResultsInterface = () => {
    const location = useLocation();
    const feedback = location.state?.feedback;
    const resumeContent = location.state?.resumeContent;
    const pdfUrlWithParams = `${resumeContent}#toolbar=0&view=FitH`;
    const score = parseInt(location.state?.score, 10);

    // Log for debugging
    console.log("Score from state:", location.state?.score);
    console.log("Parsed score:", score);

    // Handle formatting of the feedback text for HTML display
    const formatTextForHtml = (text) => {
        if (!text) return '';
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
        return formattedText;
    };

    const formattedFeedback = formatTextForHtml(feedback);


    return (
        <div className='resultsinterface-container'>
            <div className='resultsinterface-content'>
                <div className='resultsinterface-left'>
                    <h1>Results</h1>
                    <ScoreBar score={score} />
                    <div dangerouslySetInnerHTML={{ __html: formattedFeedback }} />
                </div>
                <div className='resultsinterface-right'>
                    <h3>Your Resume</h3>
                    <iframe src={pdfUrlWithParams} style={{ width: '100%', height: '1000px', border: 'none', overflowY: 'auto' }}></iframe>
                </div>
            </div>
        </div>
    );
};

export default ResultsInterface;
