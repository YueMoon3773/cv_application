import { useState } from 'react';

import CardHeadingButton from '../cardHeadingButton/cardHeadingButton';

import PersonalInfo from '../formCardContent/personalInfo/personalInfo';
import ProfileSummary from '../formCardContent/profileSummary/profileSummary';
import EducationAndExperiences from '../formCardContent/educationAndExperiences/educationAndExperiences';
import AdditionalInfo from '../formCardContent/additionalInfo/additionalInfo';
import FormController from '../formController/formController';

import './formCard.scss';

const FormCard = ({ cardType = '', isSampleData, data, setData, sampleData, setSampleData }) => {
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
                    <PersonalInfo isSampleData={isSampleData} data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'profileSummary' && (
                <>
                    <CardHeadingButton
                        btnContent={'Profile Summary'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <ProfileSummary isSampleData={isSampleData} data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'educations' && (
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
                        isSampleData={isSampleData}
                    />
                </>
            )}
            {cardType === 'experiences' && (
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
                        isSampleData={isSampleData}
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
                    <AdditionalInfo isSampleData={isSampleData} data={data} setData={setData} isExpanded={isExpanded} />
                </>
            )}
            {cardType === 'controller' && (
                <>
                    <CardHeadingButton
                        btnContent={'Controller'}
                        isMainBtnExpanded={isExpanded}
                        handleExpand={handleExpand}
                    />
                    <FormController
                        isSampleData={isSampleData}
                        data={data}
                        setData={setData}
                        isExpanded={isExpanded}
                        sampleData={sampleData}
                        setSampleData={setSampleData}
                    />
                </>
            )}
        </div>
    );
};

export default FormCard;
