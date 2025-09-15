import { useState } from 'react';

import CardInput from '../../cardInput/cardInput';
import AddBtn from '../../addButton/addButton';

import './personalInfo.scss';

const PersonalInfo = ({ isExpanded = false, isSampleData, data, setData }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="personalInfo">
                <CardInput
                    labelContent="First name"
                    inpType="text"
                    inpPlaceholder="Your first name. Ex: Mike"
                    // inpValue="Mike"
                    isInpRequired={true}
                    data={data}
                    setData={setData}
                    dataToChange="firstName"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Last name"
                    inpType="text"
                    inpPlaceholder="Your last name. Ex: Wazowski"
                    // inpValue="Wazowski"
                    isInpRequired={true}
                    data={data}
                    setData={setData}
                    dataToChange="lastName"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Professional title"
                    inpType="text"
                    inpPlaceholder="Your professional title. Ex: Senior Scarer"
                    // inpValue="Senior Scarer & Co-President of Monsters, Inc."
                    isInpRequired={true}
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange="jobTitle"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Phone"
                    inpType="text"
                    inpPlaceholder="Your phone. Ex: 555-123-1313"
                    // inpValue="555-123-1313"
                    data={data}
                    setData={setData}
                    dataToChange="phone"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Email"
                    inpType="email"
                    inpPlaceholder="Your email. Ex: mike.wazowski@monstersinc.com"
                    // inpValue="mike.wazowski@monstersinc.com"
                    data={data}
                    setData={setData}
                    dataToChange="email"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Location"
                    inpType="text"
                    inpPlaceholder="Your location. Ex: Monstropolis, Monster World"
                    // inpValue="Monstropolis, Monster World"
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange="location"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Github link"
                    inpType="url"
                    inpPlaceholder="Your github link. Ex: https://github.com/Mike-Wazowski-Official"
                    // inpValue="https://github.com/Mike-Wazowski-Official"
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange="github"
                    isSampleData={isSampleData}
                />
                <CardInput
                    labelContent="Personal website"
                    inpType="url"
                    inpPlaceholder="Your personal website. Ex: https://monstersinc.com"
                    // inpValue="https://monstersinc.com"
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange="website"
                    isSampleData={isSampleData}
                />
            </div>
            {/* <div className="btnsWrapper">
                <AddBtn addBtnContent="Add website" isSampleData={isSampleData} data={data} setData={setData} />
            </div> */}
        </div>
    );
};

export default PersonalInfo;
