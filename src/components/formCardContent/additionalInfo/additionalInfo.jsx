import { useState } from 'react';

import SmallItem from '../smallItem/smallItem';
import AddBtn from '../../addButton/addButton';

import './additionalInfo.scss';

const AdditionalInfo = ({ isExpanded = false, data, setData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="additionalInfo">
                <SmallItem data={data} setData={setData} />
            </div>
            <div className="btnsWrapper">
                <AddBtn addBtnContent="Add section item" data={data} setData={setData} />
            </div>
        </div>
    );
};

export default AdditionalInfo;
