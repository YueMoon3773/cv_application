import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import MinimalismResume from '../resumeContent/minimalismResume/minimalismResume';
import ClassicResume from '../resumeContent/classicResume/classicResume';
import ModernResume from '../resumeContent/modernResume/modernResume';

import './resumeDisplay.scss';

const ResumeDisplay = ({ data, isShowResume }) => {
    return (
        <div className={`sideWrapper resumeWrapper ${isShowResume === true ? '' : 'hide'}`}>
            <div className="resumeDisplay">
                <h4 className="displayText">Resume preview</h4>
                <div className="resume">
                    {data.style === 'Minimalism' && <MinimalismResume data={data} />}
                    {data.style === 'Classic' && <ClassicResume data={data} />}
                    {data.style === 'Modern' && <ModernResume data={data} />}
                </div>
            </div>
        </div>
    );
};

export default ResumeDisplay;
