import { useState } from 'react';

import './cardTextArea.scss';

const CardTextArea = ({
    labelContent = '',
    textAreaDisplayLines = 3,
    textAreaPlaceholder = '',
    dataToChange,
    indexOfLargeItem = null,
    indexOfDataToChange = null,
    data,
    setData,
}) => {
    const {
        font,
        firstName,
        lastName,
        jobTitle,
        profile,
        phone,
        email,
        website,
        github,
        location,
        experiences,
        educations,
        ...additionalInfoItems
    } = data;
    let valToDisplay = '';

    const handleInpValue = () => {
        valToDisplay = data[dataToChange];
        if (dataToChange === 'eduDescription') {
            // console.log(data.educations[indexOfLargeItem]);

            valToDisplay = data.educations[indexOfLargeItem].eduDescription[indexOfDataToChange];
        }
        if (dataToChange === 'expDescription') {
            valToDisplay = data.experiences[indexOfLargeItem].expDescription[indexOfDataToChange];
        }
    };
    handleInpValue();

    const handleInputChange = (inpValue) => {
        if (dataToChange === 'eduDescription') {
            setData((prev) => {
                return {
                    ...prev,
                    educations: prev.educations.map((eduItem, largeIndex) => {
                        if (largeIndex === indexOfLargeItem) {
                            return {
                                ...eduItem,
                                eduDescription: eduItem.eduDescription.map((descItem, descIndex) => {
                                    if (descIndex === indexOfDataToChange) {
                                        return inpValue;
                                    } else return descItem;
                                }),
                            };
                        } else return eduItem;
                    }),
                };
            });
        } else if (dataToChange === 'expDescription') {
            setData((prev) => {
                return {
                    ...prev,
                    experiences: prev.experiences.map((expItem, largeIndex) => {
                        if (largeIndex === indexOfLargeItem) {
                            return {
                                ...expItem,
                                expDescription: expItem.expDescription.map((descItem, descIndex) => {
                                    if (descIndex === indexOfDataToChange) {
                                        return inpValue;
                                    } else return descItem;
                                }),
                            };
                        } else return expItem;
                    }),
                };
            });
        }
        else{
            setData((prev) => ({ ...prev, [dataToChange]: inpValue }));
        }
    };

    return (
        <div className="textAreaWrapper">
            <textarea
                placeholder={textAreaPlaceholder}
                rows={textAreaDisplayLines}
                className="textArea"
                value={valToDisplay}
                onChange={(e) => {
                    handleInputChange(e.target.value.trim());
                }}
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
