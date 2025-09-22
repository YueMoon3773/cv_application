import { useState } from 'react';

import { DeleteEmptyIcon, DeleteFullIcon } from '../../assets/data/svgIcons';

import './deleteButton.scss';

const DeleteButton = ({ onClick = null }) => {
    const [hideDeleteFullBtn, setHideDeleteFullBtn] = useState(true);

    return (
        <button
            type="button"
            className="deleteBtn"
            onMouseOver={() => setHideDeleteFullBtn(false)}
            onMouseLeave={() => setHideDeleteFullBtn(true)}
        >
            {hideDeleteFullBtn === true ? <DeleteEmptyIcon /> : <DeleteFullIcon />}
        </button>
    );
};

export default DeleteButton;
