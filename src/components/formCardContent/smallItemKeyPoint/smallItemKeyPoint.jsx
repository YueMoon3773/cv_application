import { useState } from 'react';

import CardInput from '../../cardInput/cardInput';
import DeleteButton from '../../deleteButton/deleteButton';

import './smallItemKeyPoint.scss';

const SmallItemKeyPoint = ({ indexOfLargeItem = null, keyPointIndex, keyPointDataToChange, data, setData }) => {
    const deleteSmallKeyPointBtnHandler = () => {
        setData((prev) => {
            return {
                ...prev,
                more: prev.more.map((moreItem, moreIndex) => {
                    if (moreIndex === indexOfLargeItem) {
                        return {
                            ...moreItem,
                            details: moreItem.details.filter((detailsVal, detailsINdex) => {
                                return detailsINdex !== keyPointIndex;
                            }),
                        };
                    } else return moreItem;
                }),
            };
        });
    };

    return (
        <div className="additionalInfoItemKeyPoint">
            <CardInput
                labelContent={`Key point ${keyPointIndex + 1}`}
                inpType="text"
                inpPlaceholder="Your key point"
                // inpValue="1988"
                data={data}
                setData={setData}
                dataToChange={keyPointDataToChange}
                indexOfDataToChange={keyPointIndex}
                indexOfLargeItem={indexOfLargeItem}
            />
            <DeleteButton handleDeleteOnClick={deleteSmallKeyPointBtnHandler} />
        </div>
    );
};

export default SmallItemKeyPoint;
