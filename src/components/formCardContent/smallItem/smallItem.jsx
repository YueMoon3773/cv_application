import { useState } from 'react';

import CardHeadingButton from '../../cardHeadingButton/cardHeadingButton';
import CardInput from '../../cardInput/cardInput';
import AddBtn from '../../addButton/addButton';
import SmallItemKeyPoint from '../smallItemKeyPoint/smallItemKeyPoint';

import './smallItem.scss';

const SmallItem = ({ smallItemHeading = '', smallItemVal = null, smallItemIndex, data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => setIsExpanded(!isExpanded);

    let itemHeading = String(smallItemHeading).charAt(0).toUpperCase() + String(smallItemHeading).slice(1);
    // switch (smallItemHeading) {
    //     case 'skills':
    //         itemHeading = 'Skills';
    //         break;
    //     case 'languages':
    //         itemHeading = 'Languages';
    //         break;
    //     case 'strengths':
    //         itemHeading = 'Strengths';
    //         break;
    //     case 'more':
    //         itemHeading = 'Extra Details';
    //         break;
    //     default:
    //         itemHeading = String(smallItemHeading).charAt(0).toUpperCase() + String(smallItemHeading).slice(1);
    //         break;
    // }

    const addSmallKeyPointBtnHandler = () => {
        setData((prev) => {
            return {
                ...prev,
                '': [''],
            };
        });
    };

    return (
        <div className="smallItem">
            <CardHeadingButton
                btnContent={itemHeading}
                isMainBtnExpanded={isExpanded}
                isMainHeadingButton={false}
                handleExpand={handleExpand}
            />
            <div className={`itemContent ${isExpanded === true ? 'expanded' : ''}`}>
                <div className="additionalInfoItem">
                    <CardInput
                        labelContent="Section title"
                        inpType="text"
                        inpPlaceholder="Section title. Ex: Skills"
                        indexOfDataToChange={smallItemIndex}
                        data={data}
                        setData={setData}
                        dataToChange={'title'}
                    />
                    {smallItemVal !== null && smallItemVal.length !== 0
                        ? smallItemVal.map((item, index) => {
                              // console.log(smallItemHeading);
                              // console.log(item);
                              return (
                                  <SmallItemKeyPoint
                                      indexOfLargeItem={smallItemIndex}
                                      keyPointIndex={index}
                                      keyPointDataToChange={'details'}
                                      data={data}
                                      setData={setData}
                                      key={index}
                                  />
                              );
                          })
                        : ''}
                    <div className="btnsWrapper">
                        <AddBtn
                            addBtnContent="Add key point"
                            addBtnClickHandler={addSmallKeyPointBtnHandler}
                            data={data}
                            setData={setData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallItem;
