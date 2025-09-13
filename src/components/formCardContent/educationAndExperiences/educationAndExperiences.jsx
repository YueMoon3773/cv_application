import { useState } from 'react';

import LargeItem from '../largeItem/largeItem';
import AddBtn from '../../addButton/addButton';

import './educationAndExperiences.scss';

const EducationAndExperiences = ({ largeItemType = '', isExpanded = false, data, setData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="educationAndExperiences">
                <LargeItem largeItemType={largeItemType} data={data} setData={setData} />
                <LargeItem largeItemType={largeItemType} data={data} setData={setData} />
            </div>
            <div className="btnsWrapper">
                <AddBtn addBtnContent="Add section item" data={data} setData={setData} />
            </div>
        </div>
    );
};

export default EducationAndExperiences;
