import { useState } from 'react';

import ControllerBtn from '../controllerButton/controllerBtn';

import './formControllerItem.scss';

const FormControllerItem = ({ itemHeading = '', isSampleData, data, setData, sampleData, setSampleData }) => {
    return (
        <div className="formControllerItem">
            <h3 className="itemHeading">{itemHeading}</h3>
            <div className="controllerItemContent">
                {itemHeading === 'Form information' && (
                    <>
                        <ControllerBtn
                            btnContent="Clear all"
                            isSampleData={isSampleData}
                            btnFunc="clearAll"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Sample resume"
                            isSampleData={isSampleData}
                            btnFunc="sampleResume"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                    </>
                )}
                {itemHeading === 'Custom styling' && (
                    <>
                        <ControllerBtn
                            btnContent="Ledger"
                            btnStyle="Ledger"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Roboto"
                            btnStyle="Roboto"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Sono"
                            btnStyle="Sono"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default FormControllerItem;
