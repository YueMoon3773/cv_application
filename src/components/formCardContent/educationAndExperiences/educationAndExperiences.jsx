import { useState } from 'react';

import LargeItem from '../largeItem/largeItem';
import AddBtn from '../../addButton/addButton';

import './educationAndExperiences.scss';

const EducationAndExperiences = ({ largeItemType = '', isExpanded = false, isSampleData, data, setData }) => {
    // console.log({ largeItemType });

    // let sampleData;
    // if (isSampleData === true) {
    //     if (data.getSampleData().activeSampleId === 1) {
    //         sampleData = data.getSampleData().sampleData1;
    //     } else if (data.getSampleData().activeSampleId === 2) {
    //         sampleData = data.getSampleData().sampleData2;
    //     }
    // }

    // console.log(data[largeItemType]);

    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="educationAndExperiences">
                {data[largeItemType].length > 0
                    ? data[largeItemType].map((item, index) => {
                          //   console.log(item);

                          return (
                              <LargeItem
                                  largeItemType={largeItemType}
                                  isSampleData={isSampleData}
                                  data={data}
                                  setData={setData}
                                  indexOfDataToChange={index}
                                  key={index}
                              />
                          );
                      })
                    : ''}
                {/* <LargeItem largeItemType={largeItemType} isSampleData={isSampleData} data={data} setData={setData} /> */}
            </div>
            <div className="btnsWrapper">
                <AddBtn addBtnContent="Add section item" isSampleData={isSampleData} data={data} setData={setData} />
            </div>
        </div>
    );
};

export default EducationAndExperiences;
