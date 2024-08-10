import React from 'react';

const ScoreBar = ({ score }) => {
    let color = 'red'; // Default color for low scores
    if (score >= 70 && score < 85) {
        color = 'yellow'; // Middle scores
    } else if (score >= 85) {
        color = 'green'; // High scores
    }

    console.log("Score in ScoreBar:", score, "Color:", color);

    const barStyle = {
        width: `${score}%`, // Ensure score is not NaN
        backgroundColor: color,
        height: '20px',
        color: 'white',
        textAlign: 'center',
        lineHeight: '20px',
    };

    return (
        <div style={{
            width: '100%',
            backgroundColor: '#ddd',
            borderRadius: '5px',
        }}>
            <div style={barStyle}>
                {score}/100
            </div>
        </div>
    );
};

export default ScoreBar;
