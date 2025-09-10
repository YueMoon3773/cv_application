import { useState } from 'react';

import {
    ArrowIcon,
    DeleteEmptyIcon,
    DeleteFullIcon,
    PersonalInfoIcon,
    ProfileSummaryIcon,
    WorkExperienceIcon,
    EducationIcon,
    SkillsIcon,
    AdditionalInfoIcon,
    LanguageIcon,
    CertificateIcon,
} from '../../assets/data/svgIcons';

import './cardHeadingButton.scss';

const CardHeadingButton = ({ buttonContent, isMainHeadingButton = true, isMainBtnExpanded, handleExpand }) => {
    let btnIcon = null;
    // const [isMainBtnExpanded, setIsMainBtnExpanded] = useState(false);
    const [hideDeleteFullBtn, setHideDeleteFullBtn] = useState(true);

    switch (buttonContent) {
        case 'Personal Information':
            btnIcon = <PersonalInfoIcon />;
            break;
        case 'Profile Summary':
            btnIcon = <ProfileSummaryIcon />;
            break;
        case 'Education':
            btnIcon = <EducationIcon />;
            break;
        case 'Work Experience':
            btnIcon = <WorkExperienceIcon />;
            break;
        case 'Skills':
            btnIcon = <SkillsIcon />;
            break;
        case 'Additional Information':
            btnIcon = <AdditionalInfoIcon />;
            break;
        case 'Certificate':
            btnIcon = <CertificateIcon />;
            break;
        case 'Language':
            btnIcon = <LanguageIcon />;
            break;
        default:
            btnIcon = null;
            break;
    }

    return (
        <>
            {isMainHeadingButton === true ? (
                <div className="headingBtnWrapper">
                    <button
                        type="button"
                        className={`mainHeadingBtn cardHeadingButton ${isMainBtnExpanded === true ? 'expanded' : ''}`}
                        onClick={handleExpand}
                    >
                        <div>
                            {btnIcon === null ? null : btnIcon}
                            {buttonContent}
                        </div>
                        <ArrowIcon />
                    </button>
                </div>
            ) : (
                <div className="headingBtnWrapper">
                    <button
                        type="button"
                        className={`cardHeadingButton ${isMainBtnExpanded === true ? 'expanded' : ''}`}
                    >
                        <div>
                            {btnIcon === null ? null : btnIcon}
                            {buttonContent}
                        </div>
                        <ArrowIcon />
                    </button>

                    <button
                        type="button"
                        className="deleteBtn"
                        onMouseOver={() => setHideDeleteFullBtn(false)}
                        onMouseLeave={() => setHideDeleteFullBtn(true)}
                    >
                        {hideDeleteFullBtn === true ? <DeleteEmptyIcon /> : <DeleteFullIcon />}
                    </button>
                </div>
            )}
        </>
    );
};

export default CardHeadingButton;
