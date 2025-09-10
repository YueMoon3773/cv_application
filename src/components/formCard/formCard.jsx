import { useState } from 'react';

import CardHeadingButton from '../cardHeadingButton/cardHeadingButton';

import CardInput from '../cardInput/cardInput';
import CardTextArea from '../cardTextArea/cardTextArea';
import AddBtn from '../addButton/addButton';

import PersonalInfo from '../formCardContent/personalInfo/personalInfo';

import './formCard.scss';

const FormCard = ({ cardType = 'form', data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(!isExpanded);

    return (
        <>
            {cardType === 'form' ? (
                <div className="formCard card">
                    <CardHeadingButton
                        buttonContent={'Personal Information'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <PersonalInfo data={data} setData={setData} isExpanded={isExpanded} />
                </div>
            ) : (
                <div className="card"></div>
            )}
        </>
    );
};

export default FormCard;
