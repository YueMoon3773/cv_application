import { useState } from 'react';

import './cardTextArea.scss';

const CardTextArea = ({
    labelContent = '',
    textAreaDisplayLines = 3,
    textAreaPlaceholder = '',
    isSampleData = true,
    dataToChange,
    indexOfLargeItem = null,
    indexOfDataToChange = null,
    data,
    setData,
}) => {
    let inpValue = '';
    let usrDataKey = '';

    const handleInpValue = (isSampleData, dataToChange) => {
        if (isSampleData === true) {
            let sampleData;
            if (data.getSampleData().activeSampleId === 1) {
                sampleData = data.getSampleData().sampleData1;
            } else if (data.getSampleData().activeSampleId === 2) {
                sampleData = data.getSampleData().sampleData2;
            }
            // console.log(sampleData);
            inpValue = sampleData[dataToChange];
            if (dataToChange === 'eduDescription') {
                // console.log(sampleData.educations[indexOfLargeItem]);

                inpValue = sampleData.educations[indexOfLargeItem].eduDescription[indexOfDataToChange];
            }
            if (dataToChange === 'expDescription') {
                inpValue = sampleData.experiences[indexOfLargeItem].expDescription[indexOfDataToChange];
            }
        }
    };
    handleInpValue(isSampleData, dataToChange);

    return (
        <div className="textAreaWrapper">
            <textarea
                placeholder={textAreaPlaceholder}
                rows={textAreaDisplayLines}
                className="textArea"
                value={inpValue}
                onChange={(e) => {}}
            ></textarea>
            <label className="textAreaLabel">{labelContent}</label>
            <span className="textAreaFocusBorders">
                <span></span>
            </span>
            <span className="textAreaFocusBg"></span>
        </div>
    );
};

export default CardTextArea;
