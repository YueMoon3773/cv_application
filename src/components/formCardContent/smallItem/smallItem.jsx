import { useState } from 'react';

import CardHeadingButton from '../../cardHeadingButton/cardHeadingButton';
import CardInput from '../../cardInput/cardInput';
import CardTextArea from '../../cardTextArea/cardTextArea';
import AddBtn from '../../addButton/addButton';

import './smallItem.scss';

const SmallItem = ({ isSampleData, data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [smallItemHeading, setSmallItemHeading] = useState('');

    const handleExpand = () => setIsExpanded(!isExpanded);
    const handleChangeSmallItemHeading = (e) => {
        setSmallItemHeading(e.target.value);
    };

    return (
        <div className="smallItem">
            <CardHeadingButton
                btnContent={smallItemHeading === '' ? 'Section Title' : smallItemHeading}
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
                        inpValue={smallItemHeading}
                        customOnChange={handleChangeSmallItemHeading}
                        data={data}
                        setData={setData}
                        dataToChange=""
                    />
                    <CardInput
                        labelContent="Key point"
                        inpType="text"
                        inpPlaceholder="1988"
                        inpValue="1988"
                        data={data}
                        setData={setData}
                        dataToChange=""
                    />
                    <div className="btnsWrapper">
                        <AddBtn
                            addBtnContent="Add key point"
                            isSampleData={isSampleData}
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
