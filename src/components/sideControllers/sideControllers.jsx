import { useState } from 'react';

import SideBtn from '../sideBtn/sideBtn';

import './sideControllers.scss';

const SideControllers = ({ setIsShowResume }) => {
    return (
        <div className="sideControllersWrapper">
            <SideBtn btnType="preview" setIsShowResume={setIsShowResume} />
            <SideBtn btnType="download" setIsShowResume={setIsShowResume} />
        </div>
    );
};

export default SideControllers;
