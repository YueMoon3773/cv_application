import { mix } from 'polished';

import ResumeEducationAndExperiences from '../resumeEducationAndExperiences/resumeEducationAndExperiences';

import './classicResume.scss';

const ClassicResume = ({ data }) => {
    const lightest = mix(0.86, '#fff', data.color).toString();
    const lighter = mix(0.6, '#fff', data.color).toString();
    const light = mix(0.2, '#fff', data.color).toString();
    const dark = mix(0.2, '#000', data.color).toString();
    const darker = mix(0.4, '#000', data.color).toString();
    const darkest = mix(0.8, '#000', data.color).toString();

    return (
        <div
            className="classicResumeWrapper"
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
            <div className="classicSection">
                {(data.firstName !== '' || data.lastName !== '' || data.jobTitle !== '' || data.profile !== '') && (
                    <h1 className={`classicSectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                        Personal Information
                    </h1>
                )}
                <div className="classicContent">
                    <h5 className={`classicName ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        {data.firstName} {data.lastName}
                    </h5>
                    <h5 className={`classicName ${data.font}`} style={{ color: 'var(--user_dark_color)' }}>
                        {data.jobTitle}
                    </h5>
                    <p className={`classicProfile ${data.font}`}>{data.profile}</p>
                </div>
            </div>

            <div className="classicSection">
                {(data.phone !== '' ||
                    data.email !== '' ||
                    data.location !== '' ||
                    data.website !== '' ||
                    data.github !== '') && (
                    <h1 className={`classicSectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                        Contact
                    </h1>
                )}
                <div className="classicContent">
                    {data.phone !== '' && <p className={`classicContactItem ${data.font}`}>Phone: {data.phone}</p>}
                    {data.email !== '' && <p className={`classicContactItem ${data.font}`}>Email: {data.email}</p>}
                    {data.location !== '' && (
                        <p className={`classicContactItem ${data.font}`}>Location: {data.location}</p>
                    )}
                    {data.website !== '' && (
                        <p className={`classicContactItem ${data.font}`}>Website: {data.website}</p>
                    )}
                    {data.github !== '' && <p className={`classicContactItem ${data.font}`}>GitHub: {data.github}</p>}
                </div>
            </div>

            <div className="classicSection">
                {data.educations.length !== 0 && (
                    <h1 className={`classicSectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                        Education
                    </h1>
                )}
                <div className="classicContent educationsAndExperiencesContent">
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
            <div className="classicSection">
                {data.experiences.length !== 0 && (
                    <h1 className={`classicSectionHeading ${data.font}`} style={{ color: 'var(--user_darker_color)' }}>
                        Experiences
                    </h1>
                )}
                <div className="classicContent educationsAndExperiencesContent">
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
            {data.more.length !== 0 &&
                data.more.map((moreItem, moreIndex) => {
                    return (
                        <div className="classicSection" key={moreIndex}>
                            <h1
                                className={`classicSectionHeading ${data.font}`}
                                style={{ color: 'var(--user_darker_color)' }}
                            >
                                {moreItem.title}
                            </h1>
                            <div className="classicContent">
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
    );
};

export default ClassicResume;
