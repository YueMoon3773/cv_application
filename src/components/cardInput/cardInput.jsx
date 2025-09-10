import { useState } from 'react';

import './cardInput.scss';

const CardInput = ({
    labelContent = '',
    inpType = 'text',
    inpPlaceholder = '',
    inpValue = '',
    isInpRequired = false,
    isOnTwoCol = false,
    data,
    setData,
    dataToChange,
    indexOfDataToChange = null,
}) => {
    const handleInput = (dataToChange, inpValue) => {};

    return (
        <div className={`inpWrapper ${isOnTwoCol == true ? 'spanTwoCol' : ''}`}>
            <input
                type={inpType}
                className="cardInp"
                placeholder={inpPlaceholder}
                value={inpValue}
                required={isInpRequired}
                onChange={(e) => {
                    handleInput(dataToChange, e.target.value);
                }}
            />
            <label className="inputLabel">{isInpRequired === true ? `${labelContent}*` : labelContent}</label>
            <span className="inpFocusBorders">
                <span></span>
            </span>
            <span className="inpFocusBg"></span>
        </div>
    );
};

export default CardInput;
