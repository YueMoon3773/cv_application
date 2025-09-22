import { useState } from 'react';

import './cardInput.scss';

const CardInput = ({
    labelContent = '',
    inpType = 'text',
    inpPlaceholder = '',
    // inpValue = '',
    isInpRequired = false,
    isOnTwoCol = false,
    // customOnChange = null,
    dataToChange,
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
    // let usrDataKey = '';

    const handleInpValue = () => {
        // console.log(dataToChange);
        if (Object.hasOwn(additionalInfoItems, dataToChange) && labelContent === 'Section title') {
            // for displaying the key of data like: 'languages', 'skills', 'strengths', 'Extra details'
            // console.log(6);

            valToDisplay = String(dataToChange).charAt(0).toUpperCase() + String(dataToChange).slice(1);
        } else if (
            !Array.isArray(data[dataToChange]) &&
            dataToChange !== 'school' &&
            dataToChange !== 'course' &&
            dataToChange !== 'eduStartDate' &&
            dataToChange !== 'eduEndDate' &&
            dataToChange !== 'eduDescription' &&
            dataToChange !== 'company' &&
            dataToChange !== 'position' &&
            dataToChange !== 'expStartDate' &&
            dataToChange !== 'expEndDate' &&
            dataToChange !== 'projectTitle' &&
            dataToChange !== 'expDescription' &&
            !Object.hasOwn(additionalInfoItems, dataToChange)
        ) {
            //for normal key like firstName, lastName, jobTitle
            // console.log(1);
            valToDisplay = data[dataToChange];
        } else if (Array.isArray(data[dataToChange])) {
            // for key value which is in Array like skills, languages, strengths, more
            // console.log(2);
            valToDisplay = data[dataToChange][indexOfDataToChange];
        } else if (
            dataToChange === 'school' ||
            dataToChange === 'course' ||
            dataToChange === 'eduStartDate' ||
            dataToChange === 'eduEndDate' ||
            dataToChange === 'eduDescription'
        ) {
            // for educations data
            // console.log(3);
            valToDisplay = data.educations[indexOfDataToChange][dataToChange];
        } else if (
            dataToChange === 'company' ||
            dataToChange === 'position' ||
            dataToChange === 'expStartDate' ||
            dataToChange === 'expEndDate' ||
            dataToChange === 'projectTitle' ||
            dataToChange === 'expDescription'
        ) {
            // for experiences data
            // console.log(4);
            valToDisplay = data.experiences[indexOfDataToChange][dataToChange];
        }
    };
    handleInpValue();

    const handleInputChange = (inpValue) => {
        // console.log(dataToChange);
        if (Object.hasOwn(additionalInfoItems, dataToChange) && labelContent === 'Section title') {
            // for changing the key of data like: 'languages', 'skills', 'strengths', 'Extra details'
            console.log('inp branch 1');
            // console.log(6);

            setData((prev) => {
                return Object.fromEntries(
                    Object.entries(prev).map(([key, val]) => {
                        return key === dataToChange ? [inpValue, val] : [key, val];
                    }),
                );
            });
        } else if (
            !Array.isArray(data[dataToChange]) &&
            dataToChange !== 'school' &&
            dataToChange !== 'course' &&
            dataToChange !== 'eduStartDate' &&
            dataToChange !== 'eduEndDate' &&
            dataToChange !== 'eduDescription' &&
            dataToChange !== 'company' &&
            dataToChange !== 'position' &&
            dataToChange !== 'expStartDate' &&
            dataToChange !== 'expEndDate' &&
            dataToChange !== 'projectTitle' &&
            dataToChange !== 'expDescription' &&
            !Object.hasOwn(additionalInfoItems, dataToChange)
        ) {
            //for changing normal key's value like firstName, lastName, jobTitl
            console.log('inp branch 2');

            setData((prev) => ({
                ...prev,
                [dataToChange]: inpValue,
            }));
        } else if (Array.isArray(data[dataToChange])) {
            // for changing normal key's value which is in Array like skills, languages, strengths, more
            console.log('inp branch 3');
            setData((prev) => ({
                ...prev,
                [dataToChange]: prev[dataToChange].map((item, index) => {
                    if (index === indexOfDataToChange) {
                        return inpValue;
                    } else return item;
                }),
            }));
        }

        if (
            dataToChange === 'school' ||
            dataToChange === 'course' ||
            dataToChange === 'eduStartDate' ||
            dataToChange === 'eduEndDate' ||
            dataToChange === 'eduDescription'
        ) {
            console.log('inp branch 4');
            // for educations data value
            // data.educations[indexOfDataToChange][dataToChange];
            setData((prev) => ({
                ...prev,
                educations: prev.educations.map((item, index) => {
                    if (index === indexOfDataToChange) {
                        return {
                            ...item,
                            [dataToChange]: inpValue,
                        };
                    } else return item;
                }),
            }));
        } else if (
            dataToChange === 'company' ||
            dataToChange === 'position' ||
            dataToChange === 'expStartDate' ||
            dataToChange === 'expEndDate' ||
            dataToChange === 'projectTitle' ||
            dataToChange === 'expDescription'
        ) {
            console.log('inp branch 5');
            // for experiences data value
            // data.experiences[indexOfDataToChange][dataToChange];
            setData((prev) => ({
                ...prev,
                experiences: prev.experiences.map((item, index) => {
                    if (index === indexOfDataToChange) {
                        return {
                            ...item,
                            [dataToChange]: inpValue,
                        };
                    } else return item;
                }),
            }));
        }
    };

    return (
        <div className={`inpWrapper ${isOnTwoCol == true ? 'spanTwoCol' : ''}`}>
            <input
                type={inpType}
                className="cardInp"
                placeholder={inpPlaceholder}
                value={valToDisplay}
                required={isInpRequired}
                onChange={(e) => handleInputChange(e.target.value.trim())}
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
