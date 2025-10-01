import { mix } from 'polished';

import { GithubIcon, EmailIcon, WebIcon, PhoneIcon, LocationIcon } from '../../../assets/data/svgIcons';

import ResumeEducationAndExperiences from '../resumeEducationAndExperiences/resumeEducationAndExperiences';

import './minimalismResume.scss';

const MinimalismResume = ({ data }) => {
    const lightest = mix(0.86, '#fff', data.color).toString();
    const lighter = mix(0.6, '#fff', data.color).toString();
    const light = mix(0.2, '#fff', data.color).toString();
    const dark = mix(0.2, '#000', data.color).toString();
    const darker = mix(0.4, '#000', data.color).toString();
    const darkest = mix(0.8, '#000', data.color).toString();

    return (
        <div
            className="minimalismResumeWrapper"
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
            <h1 className={`miniResumeHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                {data.firstName} {data.lastName}
            </h1>
            {data.jobTitle !== '' && (
                <h3 className={`miniResumeSubHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                    {data.jobTitle}
                </h3>
            )}

            {(data.phone !== '' || data.email !== '' || data.location !== '') && (
                <div className="miniResumeMainInfo">
                    {data.phone !== '' && (
                        <p className={`mainInfoText ${data.font}`}>
                            <PhoneIcon />
                            {data.phone}
                        </p>
                    )}

                    {data.email !== '' && (
                        <p className={`mainInfoText ${data.font}`}>
                            <EmailIcon />
                            {data.email}
                        </p>
                    )}
                    {data.location !== '' && (
                        <p className={`mainInfoText ${data.font}`}>
                            <LocationIcon />
                            {data.location}
                        </p>
                    )}
                </div>
            )}

            {data.profile !== '' && (
                <div className="miniResumeProfile miniResumeSection">
                    <h2 className={`miniResumeSectionHeading ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        Profile
                    </h2>
                    <p className={`miniResumeProfileText ${data.font}`}>{data.profile}</p>
                    <div className="profileWebsites">
                        {data.website !== '' && (
                            <p className={`mainInfoText ${data.font}`}>
                                <WebIcon />
                                {data.website}
                            </p>
                        )}
                        {data.github !== '' && (
                            <p className={`mainInfoText ${data.font}`}>
                                <GithubIcon />
                                {data.github}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {data.educations.length !== 0 && (
                <div className="miniResumeSection">
                    <h2 className={`miniResumeSectionHeading ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        Education
                    </h2>
                    <div className="educationsAndExperiencesContent">
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
                <div className="miniResumeSection">
                    <h2 className={`miniResumeSectionHeading ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        Experiences
                    </h2>
                    <div className="educationsAndExperiencesContent">
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

            {data.more.length !== 0 &&
                data.more.map((moreItem, moreIndex) => {
                    return (
                        <div className="miniResumeSection" key={moreIndex}>
                            <h2
                                className={`miniResumeSectionHeading ${data.font}`}
                                style={{ color: 'var(--user_dark_color)' }}
                            >
                                {moreItem.title}
                            </h2>
                            <div className="moreContentWrapper">
                                <ul className="moreContentList">
                                    {moreItem.details.length !== 0 &&
                                        moreItem.details.map((detailsItem, detailsIndex) => {
                                            return (
                                                <li
                                                    className={`moreContentItem ${data.font} ${
                                                        detailsItem === '' ? 'empty' : ''
                                                    }`}
                                                    key={detailsIndex}
                                                >
                                                    {detailsItem}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default MinimalismResume;
