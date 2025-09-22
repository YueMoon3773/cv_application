import { useState } from 'react';

import './resumeDisplay.scss';

const ResumeDisplay = () => {
    return (
        <div className="sideWrapper">
            <div className="resumeDisplay">
                <div className="resume">h1</div>
                <div className="displayController"></div>
            </div>
            <div id="measureBox">
                <div className="resume">
                    <div className="column left"></div>
                    <div className="column right"></div>
                </div>
            </div>
        </div>
    );
};

export default ResumeDisplay;
