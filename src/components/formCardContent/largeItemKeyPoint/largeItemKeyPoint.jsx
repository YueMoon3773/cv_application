import { useState } from 'react';

import CardTextArea from '../../cardTextArea/cardTextArea';
import DeleteButton from '../../deleteButton/deleteButton';

import './largeItemKeyPoint.scss';

const LargeItemKeyPoint = ({
    linesToDisplay = 2,
    placeholderText = 'Your key point',
    indexOfLargeItem = null,
    indexOfDataToChange,
    dataToChange,
    data,
    setData,
}) => {
    const deleteLargeItemBtnHandler = () => {
        if (dataToChange === 'eduDescription') {
            setData((prev) => {
                return {
                    ...prev,
                    educations: prev.educations.map((eduItem, eduIndex) => {
                        if (eduIndex === indexOfLargeItem) {
                            return {
                                ...eduItem,
                                eduDescription: eduItem.eduDescription.filter((desVal, desIndex) => {
                                    return desIndex !== indexOfDataToChange;
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
                    experiences: prev.experiences.map((eduItem, eduIndex) => {
                        if (eduIndex === indexOfLargeItem) {
                            return {
                                ...eduItem,
                                expDescription: eduItem.expDescription.filter((desVal, desIndex) => {
                                    return desIndex !== indexOfDataToChange;
                                }),
                            };
                        } else return eduItem;
                    }),
                };
            });
        }
    };

    return (
        <div className="largeItemKeyPoint">
            <CardTextArea
                labelContent={`Key point ${indexOfDataToChange + 1}`}
                textAreaDisplayLines={linesToDisplay}
                textAreaPlaceholder={placeholderText}
                data={data}
                setData={setData}
                indexOfLargeItem={indexOfLargeItem}
                indexOfDataToChange={indexOfDataToChange}
                dataToChange={dataToChange}
            />
            <DeleteButton handleDeleteOnClick={deleteLargeItemBtnHandler} />
        </div>
    );
};

export default LargeItemKeyPoint;
