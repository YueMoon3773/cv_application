import { useState } from 'react';

import SideBtn from '../sideBtn/sideBtn';

import './sideControllers.scss';

const SideControllers = () => {
    return (
        <div className="sideControllersWrapper">
            <SideBtn btnType="preview" />
            <SideBtn btnType="download" />
            <SideBtn btnType="print" />
        </div>
    );
};

export default SideControllers;
