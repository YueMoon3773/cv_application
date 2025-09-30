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
                <FormControllerItem itemHeading={'Font styling'} data={data} setData={setData} />
                <FormControllerItem itemHeading={'Resume styling'} data={data} setData={setData} />
            </div>
        </div>
    );
};

export default FormController;
