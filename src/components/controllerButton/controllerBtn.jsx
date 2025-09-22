import { useState } from 'react';

import dataStructure from '../../assets/data/dataStructure';
// import databaseSampleData from '../../assets/data/dataSample';
// import { getFonts, switchActiveId } from '../../assets/data/dataHelper';

import { SampleFormIcon, ResetIcon } from '../../assets/data/svgIcons';

import './controllerBtn.scss';

const ControllerBtn = ({
    btnContent,
    btnStyle = '',
    btnFunc = '',
    handleOnClick = null,
    data,
    setData,
    sampleData,
    setSampleData,
}) => {
    const handleClickBtn = (e, btnStyle = '', btnFunc) => {
        if (btnFunc === 'clearAll') {
            if (window.confirm('This will CLEAR ALL form data. All entered details will be deleted..')) {
                setData({ ...dataStructure });
            } else return;
        } else if (btnFunc === 'sampleResume') {
            if (window.confirm('Replace all form details with sample data?')) {
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
            } else return;
        } else if (btnFunc === 'changeFont') {
            if (btnStyle === 'Ledger') {
                setData((prev) => ({ ...prev, font: 'Ledger' }));
            } else if (btnStyle === 'Roboto') {
                setData((prev) => ({ ...prev, font: 'Roboto' }));
            } else if (btnStyle === 'Sono') {
                setData((prev) => ({ ...prev, font: 'Sono' }));
            }
        }
    };
    // console.log(data);

    return (
        <button
            className={`controllerBtn ${btnStyle} ${data.font === btnStyle ? 'active' : ''}`}
            onClick={(e) => {
                handleClickBtn(e, btnStyle, btnFunc);
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
