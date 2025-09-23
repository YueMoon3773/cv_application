import { useState } from 'react';

import SmallItem from '../smallItem/smallItem';
import AddBtn from '../../addButton/addButton';

import './additionalInfo.scss';

const AdditionalInfo = ({ isExpanded = false, data, setData }) => {
    // const { skills, languages, strengths, more } = data;
    // console.log({ skills, languages, strengths, more });

    const {
        font,
        firstName,
        lastName,
        jobTitle,
        profile,
        phone,
        email,
        website,
        github,
        location,
        experiences,
        educations,
        ...additionalInfoItems
    } = data;
    // console.log({ additionalInfoItems });

    // console.log(Object.keys(additionalInfoItems).length);
    // Object.entries(additionalInfoItems).forEach(([key, val]) => {
    //     console.log({ key, val });
    // });

    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="additionalInfo">
                {/* {Object.keys(additionalInfoItems).length > 0
                    ? Object.entries(additionalInfoItems).map(([key, val], index) => {
                          //   console.log({ key, val });
                          return (
                              <SmallItem
                                  smallItemHeading={key}
                                  smallItemVal={val}
                                  data={data}
                                  setData={setData}
                                  key={index}
                              />
                          );
                      })
                    : ''} */}
                {data.more.length > 0
                    ? data.more.map((item, index) => {
                          return (
                              <SmallItem
                                  smallItemHeading={item.title}
                                  smallItemVal={item.details}
                                  data={data}
                                  setData={setData}
                                  smallItemIndex={index}
                                  key={index}
                              />
                          );
                      })
                    : ''}
            </div>
            <div className="btnsWrapper">
                <AddBtn addBtnContent="Add section item" data={data} setData={setData} />
            </div>
        </div>
    );
};

export default AdditionalInfo;
