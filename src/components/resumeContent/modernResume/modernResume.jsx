import { mix } from 'polished';

import { GithubIcon, EmailIcon, WebIcon, PhoneIcon, LocationIcon } from '../../../assets/data/svgIcons';

import ResumeEducationAndExperiences from '../resumeEducationAndExperiences/resumeEducationAndExperiences';

import './modernResume.scss';

const ModernResume = ({ data }) => {
    const lightest = mix(0.86, '#fff', data.color).toString();
    const lighter = mix(0.6, '#fff', data.color).toString();
    const light = mix(0.2, '#fff', data.color).toString();
    const dark = mix(0.2, '#000', data.color).toString();
    const darker = mix(0.4, '#000', data.color).toString();
    const darkest = mix(0.8, '#000', data.color).toString();

    return (
        <div
            className="modernResumeWrapper"
            style={{
                '--user_color': data.color,
                '--user_lightest_color': lightest,
                '--user_lighter_color': lighter,
                '--user_light_color': light,
                '--user_dark_color': dark,
                '--user_darker_color': darker,
                '--user_darkest_color': darkest,
            }}
        >
            {(data.firstName !== '' || data.lastName !== '' || data.jobTitle !== '') && (
                <div className="modernHeadingWrapper">
                    <h1 className={`modernHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                        {data.firstName} {data.lastName}
                    </h1>
                    <h3 className={`modernSubHeading ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        {data.jobTitle}
                    </h3>
                </div>
            )}

            {(data.phone !== '' || data.email !== '' || data.location !== '') && (
                <div className="modernContactWrapper">
                    {data.phone !== '' && (
                        <p className={`mainInfoText ${data.font}`} style={{ color: 'var(--user_darkest_color)' }}>
                            <PhoneIcon />
                            {data.phone}
                        </p>
                    )}

                    {data.email !== '' && (
                        <p className={`mainInfoText ${data.font}`} style={{ color: 'var(--user_darkest_color)' }}>
                            <EmailIcon />
                            {data.email}
                        </p>
                    )}
                    {data.location !== '' && (
                        <p className={`mainInfoText ${data.font}`} style={{ color: 'var(--user_darkest_color)' }}>
                            <LocationIcon />
                            {data.location}
                        </p>
                    )}
                </div>
            )}

            <div className="modernContent">
                {(data.more.length !== 0 || data.github !== '' || data.website !== '') && (
                    <div className="leftSideContent">
                        {(data.github !== '' || data.website !== '') && (
                            <div className="modernSection">
                                <h3
                                    className={`sectionHeading ${data.font}`}
                                    style={{ color: 'var(--user_darker_color)' }}
                                >
                                    Personal links
                                </h3>

                                <div className="sectionContent">
                                    {data.github !== '' && (
                                        <p className={`sectionText ${data.font}`}>
                                            <GithubIcon />
                                            {data.github}
                                        </p>
                                    )}
                                    {data.website !== '' && (
                                        <p className={`sectionText ${data.font}`}>
                                            <WebIcon />
                                            {data.website}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {data.more.length !== 0 &&
                            data.more.map((moreItem, moreIndex) => {
                                return (
                                    <div className="modernSection" key={moreIndex}>
                                        <h3
                                            className={`sectionHeading ${data.font}`}
                                            style={{ color: 'var(--user_darker_color)' }}
                                        >
                                            {moreItem.title}
                                        </h3>
                                        <div className="sectionContent">
                                            <ul className="moreContentList">
                                                {moreItem.details.length !== 0 &&
                                                    moreItem.details.map((item, index) => {
                                                        return (
                                                            <li
                                                                className={`moreContentItem ${data.font} ${
                                                                    item === '' ? 'empty' : ''
                                                                }`}
                                                                key={index}
                                                            >
                                                                {item}
                                                            </li>
                                                        );
                                                    })}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}

                <div className="rightSideContent">
                    {data.profile !== '' && (
                        <div className="modernSection">
                            <h3 className={`sectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                                Profile
                            </h3>
                            <div className="sectionContent">
                                <p className={`sectionText profileText ${data.font}`}>{data.profile}</p>
                            </div>
                        </div>
                    )}

                    {data.educations.length !== 0 && (
                        <div className="modernSection">
                            <h3 className={`sectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                                Education
                            </h3>
                            <div className="sectionContent educationsAndExperiencesContent">
                                {data.educations.map((item, index) => {
                                    return (
                                        <ResumeEducationAndExperiences
                                            type="educations"
                                            dataFont={data.font}
                                            dataStyle={data.style}
                                            dataColor={data.color}
                                            data={item}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {data.experiences.length !== 0 && (
                        <div className="modernSection">
                            <h3 className={`sectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                                Experience
                            </h3>
                            <div className="sectionContent educationsAndExperiencesContent">
                                {data.experiences.map((item, index) => {
                                    return (
                                        <ResumeEducationAndExperiences
                                            type="experiences"
                                            dataFont={data.font}
                                            dataStyle={data.style}
                                            dataColor={data.color}
                                            data={item}
                                            key={index}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModernResume;
