import { useState } from 'react';

import FormControllerItem from '../formControllerItem/formControllerItem';

import './formController.scss';

const FormController = ({ isExpanded = false, data, setData, sampleData, setSampleData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="formController">
                <FormControllerItem
                    itemHeading={'Form information'}
                    data={data}
                    setData={setData}
                    sampleData={sampleData}
                    setSampleData={setSampleData}
                />
                <FormControllerItem
                    itemHeading={'Custom styling'}
                    data={data}
                    setData={setData}
                    sampleData={sampleData}
                    setSampleData={setSampleData}
                />
            </div>
        </div>
    );
};

export default FormController;
