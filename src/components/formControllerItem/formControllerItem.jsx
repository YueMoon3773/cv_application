import { useState } from 'react';

import ControllerBtn from '../controllerButton/controllerBtn';

import './formControllerItem.scss';

const FormControllerItem = ({ itemHeading = '', isSampleData, data, setData }) => {
    return (
        <div className="formControllerItem">
            <h3 className="itemHeading">{itemHeading}</h3>
            <div className="controllerItemContent">
                {itemHeading === 'Form information' && (
                    <>
                        <ControllerBtn
                            btnContent="Clear all"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                        />
                        <ControllerBtn
                            btnContent="Sample resume"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
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
                        />
                        <ControllerBtn
                            btnContent="Roboto"
                            btnStyle="Roboto"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                        />
                        <ControllerBtn
                            btnContent="Sono"
                            btnStyle="Sono"
                            isSampleData={isSampleData}
                            data={data}
                            setData={setData}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default FormControllerItem;
