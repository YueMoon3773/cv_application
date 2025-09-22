import { useState } from 'react';

import CardHeadingButton from '../../cardHeadingButton/cardHeadingButton';
import CardInput from '../../cardInput/cardInput';
import AddBtn from '../../addButton/addButton';
import SmallItemKeyPoint from '../smallItemKeyPoint/smallItemKeyPoint';

import './smallItem.scss';

const SmallItem = ({ smallItemHeading = '', smallItemVal = null, data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => setIsExpanded(!isExpanded);

    let itemHeading;

    switch (smallItemHeading) {
        case 'skills':
            itemHeading = 'Skills';
            break;
        case 'languages':
            itemHeading = 'Languages';
            break;
        case 'strengths':
            itemHeading = 'Strengths';
            break;
        case 'more':
            itemHeading = 'Extra Details';
            break;
        default:
            itemHeading = smallItemHeading;
            break;
    }

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
                        // inpValue={smallItemHeading}
                        // customOnChange={handleChangeSmallItemHeading}
                        data={data}
                        setData={setData}
                        dataToChange={smallItemHeading}
                    />
                    {smallItemVal !== null && Array.isArray(smallItemVal) && smallItemVal.length !== 0 ? (
                        smallItemVal.map((item, index) => {
                            // console.log(smallItemHeading);
                            // console.log(item);
                            return (
                                <SmallItemKeyPoint
                                    keyPointIndex={index}
                                    keyPointDataToChange={smallItemHeading}
                                    data={data}
                                    setData={setData}
                                    key={index}
                                />
                            );
                        })
                    ) : smallItemVal !== null && Array.isArray(smallItemVal) && smallItemVal.length === 0 ? (
                        <SmallItemKeyPoint
                            keyPointIndex={0}
                            keyPointDataToChange={smallItemHeading}
                            data={data}
                            setData={setData}
                        />
                    ) : (
                        ''
                    )}
                    <div className="btnsWrapper">
                        <AddBtn addBtnContent="Add key point" data={data} setData={setData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallItem;
