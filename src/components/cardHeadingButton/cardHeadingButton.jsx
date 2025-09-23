import { useState } from 'react';

import DeleteButton from '../deleteButton/deleteButton';
import {
    ArrowIcon,
    PersonalInfoIcon,
    ProfileSummaryIcon,
    WorkExperienceIcon,
    EducationIcon,
    SkillsIcon,
    AdditionalInfoIcon,
    LanguageIcon,
    CertificateIcon,
    ControllerIcon,
    StrengthsIcon,
} from '../../assets/data/svgIcons';

import './cardHeadingButton.scss';

const CardHeadingButton = ({ btnContent, isMainHeadingButton = true, isMainBtnExpanded, handleExpand }) => {
    let btnIcon = null;
    // const [isMainBtnExpanded, setIsMainBtnExpanded] = useState(false);

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
        case 'Skill':
        case 'skills':
        case 'skill':
            btnIcon = <SkillsIcon />;
            break;
        case 'Additional Information':
            btnIcon = <AdditionalInfoIcon />;
            break;
        case 'Certificates':
        case 'Certificate':
        case 'certificates':
        case 'certificate':
            btnIcon = <CertificateIcon />;
            break;
        case 'Languages':
        case 'Language':
        case 'languages':
        case 'language':
            btnIcon = <LanguageIcon />;
            break;
        case 'Strengths':
        case 'Strength':
        case 'strengths':
        case 'strength':
            btnIcon = <StrengthsIcon />;
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
                            <div className="btnContent">{btnContent || ''}</div>
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
                            {btnIcon === null ? null : btnIcon}
                            <div className="btnContent">{btnContent || ''}</div>
                        </div>
                        <ArrowIcon />
                    </button>

                    <DeleteButton />
                </div>
            )}
        </>
    );
};

export default CardHeadingButton;
