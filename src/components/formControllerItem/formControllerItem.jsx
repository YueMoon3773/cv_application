import { useState } from 'react';

import ControllerBtn from '../controllerButton/controllerBtn';

import './formControllerItem.scss';

const FormControllerItem = ({ itemHeading = '', data, setData, sampleData = null, setSampleData = null }) => {
    const handleChangeColor = (color) => {
        setData((prev) => ({ ...prev, color: color }));
    };

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
                        <div className="first">
                            <ControllerBtn
                                btnContent="Ledger"
                                btnStyle="Ledger"
                                btnFunc="changeFont"
                                data={data}
                                setData={setData}
                            />
                            <ControllerBtn
                                btnContent="Roboto"
                                btnStyle="Roboto"
                                btnFunc="changeFont"
                                data={data}
                                setData={setData}
                            />
                            <ControllerBtn
                                btnContent="Sono"
                                btnStyle="Sono"
                                btnFunc="changeFont"
                                data={data}
                                setData={setData}
                            />
                        </div>

                        <div className="second">
                            <ControllerBtn
                                btnContent="One Sans"
                                btnStyle="AR_One_Sans"
                                btnFunc="changeFont"
                                data={data}
                                setData={setData}
                            />
                            <ControllerBtn
                                btnContent="Helvetica"
                                btnStyle="Helvetica"
                                btnFunc="changeFont"
                                data={data}
                                setData={setData}
                            />
                        </div>
                    </>
                )}
                {itemHeading === 'Resume styling' && (
                    <>
                        <div className="first">
                            <ControllerBtn
                                btnContent="Minimalism"
                                btnFunc="resumeStyle"
                                data={data}
                                setData={setData}
                            />
                            <ControllerBtn btnContent="Classic" btnFunc="resumeStyle" data={data} setData={setData} />
                            <ControllerBtn btnContent="Modern" btnFunc="resumeStyle" data={data} setData={setData} />
                        </div>
                        <div className="second">
                            <label htmlFor="colorInpController" className="colorControllerLabel">
                                Resume color:
                                <input
                                    type="color"
                                    value={data.color}
                                    id="colorInpController"
                                    name="colorInpController"
                                    className="colorInpController"
                                    onChange={(e) => handleChangeColor(e.target.value)}
                                />
                            </label>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FormControllerItem;
