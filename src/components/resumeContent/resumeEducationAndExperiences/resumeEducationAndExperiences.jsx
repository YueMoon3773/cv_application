import './resumeEducationAndExperiences.scss';

const ResumeEducationAndExperiences = ({ type, dataFont, dataStyle, dataColor, data }) => {
    return (
        <div
            className="resumeEducationAndExperiencesWrapper"
            style={{
                '--user_color': dataColor,
                '--user_lighter_color': `color-mix(in srgb, ${dataColor} 60%, white)`,
                '--user_light_color': `color-mix(in srgb, ${dataColor} 80%, white)`,
                '--user_dark_color': `color-mix(in srgb, ${dataColor} 80%, black)`,
                '--user_darker_color': `color-mix(in srgb, ${dataColor} 60%, black)`,
            }}
        >
            <div className="firstRow">
                {type === 'educations' && (dataStyle === 'Minimalism' || dataStyle === 'Classic') && (
                    <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                        {`${data.school === '' ? "School's name" : data.school}${
                            data.eduStartDate === '' && data.eduEndDate === '' && ' | Time period not specified'
                        }${
                            (data.eduStartDate !== '' || data.eduEndDate !== '') &&
                            ` | ${data.eduStartDate}${data.eduStartDate !== '' && data.eduEndDate !== '' ? ' - ' : ''}${
                                data.eduEndDate
                            }`
                        }`}
                    </h2>
                )}
                {type === 'educations' && dataStyle === 'Modern' && (
                    <>
                        <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                            {data.school === '' ? "School's name" : data.school}
                        </h2>
                        {data.eduStartDate === '' && data.eduEndDate === '' ? (
                            <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                                Time period not specified
                            </h2>
                        ) : (
                            <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                                {`${
                                    (data.eduStartDate !== '' || data.eduEndDate !== '') &&
                                    `${data.eduStartDate}${
                                        data.eduStartDate !== '' && data.eduEndDate !== '' ? ' - ' : ''
                                    }${data.eduEndDate}`
                                }`}
                            </h2>
                        )}
                    </>
                )}

                {type === 'experiences' && (dataStyle === 'Minimalism' || dataStyle === 'Classic') && (
                    <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                        {`${data.company === '' ? "Company's name" : data.company}${
                            data.expStartDate === '' && data.expEndDate === '' && ' | Time period not specified'
                        }${
                            (data.expStartDate !== '' || data.expEndDate !== '') &&
                            ` | ${data.expStartDate}${data.expStartDate !== '' && data.expEndDate !== '' ? ' - ' : ''}${
                                data.expEndDate
                            }`
                        }`}
                    </h2>
                )}
                {type === 'experiences' && dataStyle === 'Modern' && (
                    <>
                        <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                            {data.company === '' ? "Company's name" : data.company}
                        </h2>
                        {data.expStartDate === '' && data.expEndDate === '' ? (
                            <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                                Time period not specified
                            </h2>
                        ) : (
                            <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                                {`${
                                    (data.expStartDate !== '' || data.expEndDate !== '') &&
                                    `${data.expStartDate}${
                                        data.expStartDate !== '' && data.expEndDate !== '' ? ' - ' : ''
                                    }${data.expEndDate}`
                                }`}
                            </h2>
                        )}
                    </>
                )}
            </div>

            <div className="secondRow">
                {type === 'educations' && (
                    <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                        {data.course !== '' && `${data.course}`}
                    </h2>
                )}
                {type === 'experiences' && (
                    <h2 className={`${dataFont}`} style={{ color: 'var(--user_darker_color)' }}>
                        {data.position !== '' && `${data.position}`}
                    </h2>
                )}
            </div>

            {type === 'experiences' && (
                <div className="thirdRow">
                    <h2
                        className={`${dataFont}`}
                        style={{ color: 'var(--user_darker_color)' }}
                    >{`Project: ${data.projectTitle}`}</h2>
                </div>
            )}

            <ul className="educationAndExperiencesContentList">
                {type === 'educations' &&
                    data.eduDescription.map((item, index) => {
                        return (
                            <li className={`contentItem ${dataFont} ${item === '' ? 'empty' : ''}`} key={index}>
                                {item}
                            </li>
                        );
                    })}
                {type === 'experiences' &&
                    data.expDescription.map((item, index) => {
                        return (
                            <li className={`contentItem ${dataFont} ${item === '' ? 'empty' : ''}`} key={index}>
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default ResumeEducationAndExperiences;
