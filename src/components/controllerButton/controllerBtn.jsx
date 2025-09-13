import { useState } from 'react';

import { SampleFormIcon, ResetIcon } from '../../assets/data/svgIcons';

import './controllerBtn.scss';

const ControllerBtn = ({ btnContent, btnStyle = '', handleOnClick = null, data, setData }) => {
    return (
        <button className={`controllerBtn ${btnStyle}`}>
            {btnContent === 'Clear all' && (
                <>
                    <ResetIcon />
                    {btnContent}
                </>
            )}
            {btnContent === 'Sample resume' && (
                <>
                    <SampleFormIcon />
                    {btnContent}
                </>
            )}
            {btnContent !== 'Clear all' && btnContent !== 'Sample resume' && (
                <>
                    <span>Aa</span>
                    {btnContent}
                </>
            )}
        </button>
    );
};

export default ControllerBtn;
