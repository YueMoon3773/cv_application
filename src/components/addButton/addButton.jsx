import { useState } from 'react';

import { PlusEmptyIcon, PlusFullIcon } from '../../assets/data/svgIcons';

import './addButton.scss';

const AddBtn = ({ addBtnContent = '', addBtnClickHandler, isSampleData, data, setData }) => {
    const [hidePlusFullBtn, setHidePlusFullBtn] = useState(true);

    return (
        <button
            onMouseOver={() => setHidePlusFullBtn(false)}
            onMouseLeave={() => setHidePlusFullBtn(true)}
            onClick={addBtnClickHandler}
            className="addBtn"
        >
            {hidePlusFullBtn === false ? <PlusFullIcon /> : <PlusEmptyIcon />}
            {addBtnContent}
        </button>
    );
};

export default AddBtn;
