import { GithubIcon, EmailIcon, WebIcon, PhoneIcon, LocationIcon } from '../../../assets/data/svgIcons';

import ResumeEducationAndExperiences from '../resumeEducationAndExperiences/resumeEducationAndExperiences';

import './minimalismResume.scss';

const MinimalismResume = ({ data }) => {
    return (
        <div
            className="minimalismResumeWrapper"
            style={{
                '--user_color': data.color,
                '--user_lighter_color': `color-mix(in srgb, ${data.color} 60%, white)`,
                '--user_light_color': `color-mix(in srgb, ${data.color} 80%, white)`,
                '--user_dark_color': `color-mix(in srgb, ${data.color} 80%, black)`,
                '--user_darker_color': `color-mix(in srgb, ${data.color} 60%, black)`,
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
