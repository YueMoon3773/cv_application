import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import dataStructure from '../../assets/data/dataStructure';
// import databaseSampleData from '../../assets/data/dataSample';
// import { getFonts, switchActiveId } from '../../assets/data/dataHelper';

import { SampleFormIcon, ResetIcon } from '../../assets/data/svgIcons';

import './controllerBtn.scss';

const ControllerBtn = ({
    btnContent,
    btnStyle = '',
    btnFunc = '',
    data,
    setData,
    sampleData = null,
    setSampleData = null,
}) => {
    const handleClickBtn = (e, btnStyle = '', btnFunc) => {
        if (btnFunc === 'clearAll') {
            if (window.confirm('This will CLEAR ALL form data. All entered details will be deleted.')) {
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
            } else if (btnStyle === 'AR_One_Sans') {
                setData((prev) => ({ ...prev, font: 'AR_One_Sans' }));
            } else if (btnStyle === 'Helvetica') {
                setData((prev) => ({ ...prev, font: 'Helvetica' }));
            }
        } else if (btnFunc === 'resumeStyle') {
            if (btnContent === 'Minimalism') {
                setData((prev) => {
                    return {
                        ...prev,
                        style: 'Minimalism',
                    };
                });
            } else if (btnContent === 'Classic') {
                setData((prev) => {
                    return {
                        ...prev,
                        style: 'Classic',
                    };
                });
            } else if (btnContent === 'Modern') {
                setData((prev) => {
                    return {
                        ...prev,
                        style: 'Modern',
                    };
                });
            }
        }
    };
    // console.log(data);

    return (
        <button
            className={`controllerBtn ${btnStyle} ${
                data.font === btnStyle || data.style === btnContent ? 'active' : ''
            }`}
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

            {(btnContent === 'Minimalism' || btnContent === 'Classic' || btnContent === 'Modern') && btnContent}

            {btnContent !== 'Clear all' &&
                btnContent !== 'Sample resume' &&
                btnContent !== 'Minimalism' &&
                btnContent !== 'Classic' &&
                btnContent !== 'Modern' && (
                    <>
                        <span>Aa</span>
                        {btnContent}
                    </>
                )}
        </button>
    );
};

export default ControllerBtn;
