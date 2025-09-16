import { useState } from 'react';

import dataStructure from '../../assets/data/dataStructure';
// import databaseSampleData from '../../assets/data/dataSample';
import { getFonts, switchActiveId } from '../../assets/data/dataHelper';

import { SampleFormIcon, ResetIcon } from '../../assets/data/svgIcons';

import './controllerBtn.scss';

const ControllerBtn = ({
    btnContent,
    btnStyle = '',
    btnFunc = '',
    handleOnClick = null,
    isSampleData,
    data,
    setData,
    sampleData,
    setSampleData,
}) => {
    const handleClickBtn = (e, btnFunc) => {
        if (btnFunc === 'clearAll') {
            setData({ ...dataStructure });
        } else if (btnFunc === 'sampleResume') {
            setSampleData((prev) => {
                if (prev.activeSampleId === 1) {
                    return {
                        ...prev,
                        activeSampleId: 2,
                    };
                } else if (prev.activeSampleId === 2) {
                    return {
                        ...prev,
                        activeSampleId: 1,
                    };
                }
            });
            const dataToSet = sampleData.activeSampleId === 1 ? sampleData.sampleData1 : sampleData.sampleData2;
            setData({ ...dataToSet });
        }
    };
    // console.log(data);

    return (
        <button
            className={`controllerBtn ${btnStyle}`}
            onClick={(e) => {
                handleClickBtn(e, btnFunc);
            }}
        >
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
