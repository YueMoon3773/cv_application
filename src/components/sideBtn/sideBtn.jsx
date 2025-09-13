import { useState } from 'react';

import { PreviewIcon, DownloadIcons, PrinterIcon } from '../../assets/data/svgIcons';

import './sideBtn.scss';

const SideBtn = ({ btnType = '' }) => {
    return (
        <button className={`sideBtn ${btnType}`}>
            {btnType === 'preview' && <PreviewIcon />}
            {btnType === 'download' && <DownloadIcons />}
            {btnType === 'print' && <PrinterIcon />}
        </button>
    );
};

export default SideBtn;
