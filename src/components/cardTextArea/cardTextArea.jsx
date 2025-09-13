import { useState } from 'react';

import './cardTextArea.scss';

const CardTextArea = ({ labelContent = '', textAreaDisplayLines = 3, textAreaPlaceholder = '', data, setData }) => {
    return (
        <div className="textAreaWrapper">
            <textarea placeholder={textAreaPlaceholder} rows={textAreaDisplayLines} className="textArea"></textarea>
            <label className="textAreaLabel">{labelContent}</label>
            <span className="textAreaFocusBorders">
                <span></span>
            </span>
            <span className="textAreaFocusBg"></span>
        </div>
    );
};

export default CardTextArea;
