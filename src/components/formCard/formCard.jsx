import { useState } from 'react';

import CardHeadingButton from '../cardHeadingButton/cardHeadingButton';

import CardInput from '../cardInput/cardInput';
import CardTextArea from '../cardTextArea/cardTextArea';
import AddBtn from '../addButton/addButton';

import PersonalInfo from '../formCardContent/personalInfo/personalInfo';
import ProfileSummary from '../formCardContent/profileSummary/profileSummary';
import EducationAndExperiences from '../formCardContent/educationAndExperiences/educationAndExperiences';
import AdditionalInfo from '../formCardContent/additionalInfo/additionalInfo';
import FormController from '../formController/formController';

import './formCard.scss';

const FormCard = ({ cardType = '', data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="formCard">
            {cardType === 'personalInfo' && (
                <>
                    <CardHeadingButton
                        btnContent={'Personal Information'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <PersonalInfo data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'profileSummary' && (
                <>
                    <CardHeadingButton
                        btnContent={'Profile Summary'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <ProfileSummary data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'education' && (
                <>
                    <CardHeadingButton
                        btnContent={'Education'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <EducationAndExperiences
                        largeItemType={cardType}
                        data={data}
                        setData={setData}
                        isExpanded={isExpanded}
                    />
                </>
            )}
            {cardType === 'workExperiences' && (
                <>
                    <CardHeadingButton
                        btnContent={'Work Experiences'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <EducationAndExperiences
                        largeItemType={cardType}
                        data={data}
                        setData={setData}
                        isExpanded={isExpanded}
                    />
                </>
            )}
            {cardType === 'additionalInfo' && (
                <>
                    <CardHeadingButton
                        btnContent={'Additional Information'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <AdditionalInfo data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'controller' && (
                <>
                    <CardHeadingButton
                        btnContent={'Controller'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <FormController data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
        </div>
    );
};

export default FormCard;
