import { useState } from 'react';

import './cardInput.scss';

const CardInput = ({
    labelContent = '',
    inpType = 'text',
    inpPlaceholder = '',
    // inpValue = '',
    isInpRequired = false,
    isOnTwoCol = false,
    customOnChange = null,
    isSampleData = true,
    dataToChange,
    indexOfDataToChange = null,
    data,
    setData,
}) => {
    let inpValue = '';
    let usrDataKey = '';

    const handleInpValue = (data, dataToChange) => {
        // let sampleData;
        // if (data.getSampleData().activeSampleId === 1) {
        //     sampleData = data.getSampleData().sampleData1;
        // } else if (data.getSampleData().activeSampleId === 2) {
        //     sampleData = data.getSampleData().sampleData2;
        // }
        // console.log(sampleData);
        // console.log(sampleData[dataToChange]);
        inpValue = data[dataToChange];
        if (
            dataToChange === 'school' ||
            dataToChange === 'course' ||
            dataToChange === 'eduStartDate' ||
            dataToChange === 'eduEndDate' ||
            dataToChange === 'eduDescription'
        ) {
            inpValue = data.educations[indexOfDataToChange][dataToChange];
        }
        else if (
            dataToChange === 'company' ||
            dataToChange === 'position' ||
            dataToChange === 'expStartDate' ||
            dataToChange === 'expEndDate' ||
            dataToChange === 'projectTitle' ||
            dataToChange === 'expDescription'
        ) {
            inpValue = data.experiences[indexOfDataToChange][dataToChange];
        }
    };
    handleInpValue(data, dataToChange);
    // console.log(inpValue);

    const handleInput = (usrDataKey, inpValue) => {};

    return (
        <div className={`inpWrapper ${isOnTwoCol == true ? 'spanTwoCol' : ''}`}>
            <input
                type={inpType}
                className="cardInp"
                placeholder={inpPlaceholder}
                value={inpValue}
                required={isInpRequired}
                onChange={customOnChange || ((e) => handleInput(usrDataKey, e.target.value))}
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
