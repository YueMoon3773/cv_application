import { useState } from 'react';

import FormControllerItem from '../formControllerItem/formControllerItem';

import './formController.scss';

const FormController = ({ isExpanded = false, data, setData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="formController">
                <FormControllerItem itemHeading={'Form information'} data={data} setData={setData} />
                <FormControllerItem itemHeading={'Custom styling'} data={data} setData={setData} />
            </div>
        </div>
    );
};

export default FormController;
