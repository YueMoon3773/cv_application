import { useState } from 'react';

import './cardInput.scss';

const CardInput = ({
    labelContent = '',
    inpType = 'text',
    inpPlaceholder = '',
    isInpRequired = false,
    isOnTwoCol = false,
    indexOfLargeItem = null,
    dataToChange,
    indexOfDataToChange = null,
    data,
    setData,
}) => {
    let valToDisplay = '';
    // let usrDataKey = '';

    const handleInpValue = () => {
        // console.log(dataToChange);
        if (dataToChange === 'title' && labelContent === 'Section title') {
            // for displaying the key of data like: 'languages', 'skills', 'strengths', 'Extra details' in more
            // console.log(1);
            valToDisplay = data.more[indexOfDataToChange].title;
        } else if (dataToChange === 'details' && inpPlaceholder === 'Your key point') {
            // for displaying the key value of data like: 'languages', 'skills', 'strengths', 'Extra details' in more
            // console.log(2);
            valToDisplay = data.more[indexOfLargeItem].details[indexOfDataToChange];
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
            dataToChange !== 'details' &&
            dataToChange !== 'title'
        ) {
            //for normal key like firstName, lastName, jobTitle
            // console.log(3);
            valToDisplay = data[dataToChange];
        } else if (
            dataToChange === 'school' ||
            dataToChange === 'course' ||
            dataToChange === 'eduStartDate' ||
            dataToChange === 'eduEndDate' ||
            dataToChange === 'eduDescription'
        ) {
            // for educations data
            // console.log(4);
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
            // console.log(5);
            valToDisplay = data.experiences[indexOfDataToChange][dataToChange];
        }
    };
    handleInpValue();

    const handleInputChange = (inpValue) => {
        // console.log(dataToChange);
        if (dataToChange === 'title' && labelContent === 'Section title') {
            // for displaying the key of data like: 'languages', 'skills', 'strengths', 'Extra details' in more
            // console.log('inp branch 1');

            setData((prev) => {
                return {
                    ...prev,
                    more: prev.more.map((item, index) => {
                        if (index === indexOfDataToChange) {
                            return {
                                ...item,
                                title: inpValue,
                            };
                        } else return item;
                    }),
                };
            });
        } else if (dataToChange === 'details' && inpPlaceholder === 'Your key point') {
            // for displaying the key value of data like: 'languages', 'skills', 'strengths', 'Extra details' in more
            // console.log('inp branch 3');
            
            setData((prev) => ({
                ...prev,
                more: prev.more.map((moreItem, moreIndex) => {
                    if (moreIndex === indexOfLargeItem) {
                        return {
                            ...moreItem,
                            details: moreItem.details.map((detailItem, detailIndex) => {
                                if (detailIndex === indexOfDataToChange) {
                                    return inpValue;
                                } else return detailItem;
                            }),
                        };
                    } else return moreItem;
                }),
            }));
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
            dataToChange !== 'details' &&
            dataToChange !== 'title'
        ) {
            //for changing normal key's value like firstName, lastName, jobTitle
            // console.log('inp branch 2');

            setData((prev) => ({
                ...prev,
                [dataToChange]: inpValue,
            }));
        }

        if (
            dataToChange === 'school' ||
            dataToChange === 'course' ||
            dataToChange === 'eduStartDate' ||
            dataToChange === 'eduEndDate' ||
            dataToChange === 'eduDescription'
        ) {
            // for educations data value
            // console.log('inp branch 4');
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
            // for experiences data value
            // console.log('inp branch 5');
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
