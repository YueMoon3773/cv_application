import { useState } from 'react';

import SideBtn from '../sideBtn/sideBtn';

import './sideControllers.scss';

const SideControllers = ({ isShowResume, setIsShowResume }) => {
    return (
        <div className="sideControllersWrapper">
            <SideBtn btnType="preview" isShowResume={isShowResume} setIsShowResume={setIsShowResume} />
            <SideBtn btnType="download" isShowResume={isShowResume} setIsShowResume={setIsShowResume} />
        </div>
    );
};

export default SideControllers;
