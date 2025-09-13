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
    ControllerIcon,
} from '../../assets/data/svgIcons';

import './cardHeadingButton.scss';

const CardHeadingButton = ({ btnContent, isMainHeadingButton = true, isMainBtnExpanded, handleExpand }) => {
    let btnIcon = null;
    // const [isMainBtnExpanded, setIsMainBtnExpanded] = useState(false);
    const [hideDeleteFullBtn, setHideDeleteFullBtn] = useState(true);

    switch (btnContent) {
        case 'Personal Information':
            btnIcon = <PersonalInfoIcon />;
            break;
        case 'Profile Summary':
            btnIcon = <ProfileSummaryIcon />;
            break;
        case 'Education':
            btnIcon = <EducationIcon />;
            break;
        case 'Work Experiences':
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
        case 'Controller':
            btnIcon = <ControllerIcon />;
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
                            {btnContent}
                        </div>
                        <ArrowIcon />
                    </button>
                </div>
            ) : (
                <div className="headingBtnWrapper">
                    <button
                        type="button"
                        className={`cardHeadingButton ${isMainBtnExpanded === true ? 'expanded' : ''}`}
                        onClick={handleExpand}
                    >
                        <div>
                            {btnIcon}
                            {btnContent || ''}
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
