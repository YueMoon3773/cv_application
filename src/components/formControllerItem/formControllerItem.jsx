import { useState } from 'react';

import ControllerBtn from '../controllerButton/controllerBtn';

import './formControllerItem.scss';

const FormControllerItem = ({ itemHeading = '', data, setData, sampleData, setSampleData }) => {
    return (
        <div className="formControllerItem">
            <h3 className="itemHeading">{itemHeading}</h3>
            <div className="controllerItemContent">
                {itemHeading === 'Form information' && (
                    <>
                        <ControllerBtn
                            btnContent="Clear all"
                            btnFunc="clearAll"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Sample resume"
                            btnFunc="sampleResume"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                    </>
                )}
                {itemHeading === 'Font styling' && (
                    <>
                        <ControllerBtn
                            btnContent="Ledger"
                            btnStyle="Ledger"
                            btnFunc="changeFont"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Roboto"
                            btnStyle="Roboto"
                            btnFunc="changeFont"
                            data={data}
                            setData={setData}
                            sampleData={sampleData}
                            setSampleData={setSampleData}
                        />
                        <ControllerBtn
                            btnContent="Sono"
                            btnStyle="Sono"
                            btnFunc="changeFont"
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
