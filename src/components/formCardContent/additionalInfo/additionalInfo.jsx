import { useState } from 'react';

import SmallItem from '../smallItem/smallItem';
import AddBtn from '../../addButton/addButton';
import { getMoreStructure } from '../../../assets/data/dataHelper';

import './additionalInfo.scss';

const AdditionalInfo = ({ isExpanded = false, data, setData }) => {
    const addSmallItemBtnHandler = () => {
        setData((prev) => {
            return {
                ...prev,
                more: [...prev.more, getMoreStructure()],
            };
        });
    };
    
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="additionalInfo">
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
                <AddBtn
                    addBtnContent="Add section item"
                    addBtnClickHandler={addSmallItemBtnHandler}
                    data={data}
                    setData={setData}
                />
            </div>
        </div>
    );
};

export default AdditionalInfo;
