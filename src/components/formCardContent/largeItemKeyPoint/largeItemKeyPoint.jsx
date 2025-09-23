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
            <DeleteButton />
        </div>
    );
};

export default LargeItemKeyPoint;
