import { useState } from 'react';

import CardTextArea from '../../cardTextArea/cardTextArea';

import './profileSummary.scss';

const ProfileSummary = ({ isExpanded = false, data, setData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="profileSummary">
                <p className="profileSummaryHeading">
                    Provide a brief overview of your professional background, emphasizing your key skills, notable achievements, and the value you bring to future opportunities.
                </p>
                <CardTextArea labelContent="Summary" textAreaDisplayLines={5} textAreaPlaceholder="" />
            </div>
        </div>
    );
};

export default ProfileSummary;
