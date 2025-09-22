import { useState } from 'react';

import LargeItem from '../largeItem/largeItem';
import AddBtn from '../../addButton/addButton';

import './educationAndExperiences.scss';
import { getExperiencesStructure, getEducationStructure } from '../../../assets/data/dataHelper';

const EducationAndExperiences = ({ largeItemType = '', isExpanded = false, data, setData }) => {
    // console.log(data[largeItemType]);

    const addLargeItemBtnHandler = () => {
        let newItem;
        if (largeItemType === 'educations') {
            newItem = getEducationStructure();
            console.log(newItem);
            setData((prev) => {
                return {
                    ...prev,
                    educations: [...prev.educations, newItem],
                };
            });
        } else if (largeItemType === 'experiences') {
            newItem = getExperiencesStructure();
            console.log(newItem);
            setData((prev) => {
                return {
                    ...prev,
                    experiences: [...prev.experiences, newItem],
                };
            });
        }
    };

    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="educationAndExperiences">
                {data[largeItemType].length > 0
                    ? data[largeItemType].map((item, index) => {
                          //   console.log(item);
                          return (
                              <LargeItem
                                  largeItemType={largeItemType}
                                  data={data}
                                  setData={setData}
                                  indexOfDataToChange={index}
                                  key={index}
                              />
                          );
                      })
                    : ''}
                {/* <LargeItem largeItemType={largeItemType}  data={data} setData={setData} /> */}
            </div>
            <div className="btnsWrapper">
                <AddBtn
                    addBtnContent="Add section item"
                    addBtnClickHandler={addLargeItemBtnHandler}
                    data={data}
                    setData={setData}
                />
            </div>
        </div>
    );
};

export default EducationAndExperiences;
