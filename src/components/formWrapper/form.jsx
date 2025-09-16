import { useState } from 'react';

import { FormHeadingIcon, PersonalInfoIcon } from '../../assets/data/svgIcons';
import FormCard from '../formCard/formCard';
import { GithubIcon } from '../../assets/data/svgIcons';

import './form.scss';

const FormWrapper = ({ isSampleData, data, setData, sampleData, setSampleData }) => {
    return (
        <div className="sideWrapper formWrapper">
            <div className="formHeader">
                <h1 className="formHeading">
                    <FormHeadingIcon className={'formHeadingIcon'} />
                    CVify
                </h1>
                <span className="formSlogan">Your journey. Your resume. Your next step.</span>
            </div>
            <FormCard
                cardType="controller"
                isSampleData={isSampleData}
                data={data}
                setData={setData}
                sampleData={sampleData}
                setSampleData={setSampleData}
            />

            <FormCard cardType="personalInfo" isSampleData={isSampleData} data={data} setData={setData} />

            <FormCard cardType="profileSummary" isSampleData={isSampleData} data={data} setData={setData} />

            <FormCard cardType="educations" isSampleData={isSampleData} data={data} setData={setData} />

            <FormCard cardType="experiences" isSampleData={isSampleData} data={data} setData={setData} />

            <FormCard cardType="additionalInfo" isSampleData={isSampleData} data={data} setData={setData} />

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
