import { useState } from 'react';

import { FormHeadingIcon, PersonalInfoIcon } from '../../assets/data/svgIcons';
import FormCard from '../formCard/formCard';
import { GithubIcon } from '../../assets/data/svgIcons';

import './form.scss';

const FormWrapper = ({ data, setData }) => {
    return (
        <div className="sideWrapper formWrapper">
            <div className="formHeader">
                <h1 className="formHeading">
                    <FormHeadingIcon className={'formHeadingIcon'} />
                    CVify
                </h1>
                <span className="formSlogan">Your journey. Your resume. Your next step.</span>
            </div>
            <FormCard cardType="controller" data={data} setData={setData} />
            <FormCard cardType="personalInfo" data={data} setData={setData} />
            <FormCard cardType="profileSummary" data={data} setData={setData} />
            <FormCard cardType="education" data={data} setData={setData} />
            <FormCard cardType="workExperiences" data={data} setData={setData} />
            <FormCard cardType="additionalInfo" data={data} setData={setData} />

            <div className="formFooter">
                <p className="formFooterText">
                    © 2025 – Built with care by
                    <a href="" className="formFooterLink">
                        <GithubIcon />
                        YueMoon
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FormWrapper;
