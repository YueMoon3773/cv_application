import { useState } from 'react';

import database from '../../../assets/data/dataManager';

import CardInput from '../../cardInput/cardInput';
import AddBtn from '../../addButton/addButton';

import './personalInfo.scss';

const PersonalInfo = ({ data, setData, isExpanded = false }) => {
    return (
        <div className={`formContent ${isExpanded === true ? 'expanded' : ''}`}>
            <div className="personalInfo">
                <CardInput
                    labelContent="First name"
                    inpType="text"
                    inpPlaceholder="Your first name. Ex: Mike"
                    inpValue="Mike"
                    isInpRequired={true}
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Last name"
                    inpType="text"
                    inpPlaceholder="Your last name. Ex: Wazowski"
                    inpValue="Wazowski"
                    isInpRequired={true}
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Professional title"
                    inpType="text"
                    inpPlaceholder="Your professional title. Ex: Senior Scarer"
                    inpValue="Senior Scarer & Co-President of Monsters, Inc."
                    isInpRequired={true}
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Phone"
                    inpType="text"
                    inpPlaceholder="Your phone. Ex: 555-123-1313"
                    inpValue="555-123-1313"
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Email"
                    inpType="email"
                    inpPlaceholder="Your email. Ex: mike.wazowski@monstersinc.com"
                    inpValue="mike.wazowski@monstersinc.com"
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Location"
                    inpType="text"
                    inpPlaceholder="Your location. Ex: Monstropolis, Monster World"
                    inpValue="Monstropolis, Monster World"
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                <CardInput
                    labelContent="Github link"
                    inpType="url"
                    inpPlaceholder="Your github link. Ex: https://github.com/Mike-Wazowski-Official"
                    inpValue="https://github.com/Mike-Wazowski-Official"
                    isOnTwoCol={true}
                    data={data}
                    setData={setData}
                    dataToChange=""
                />
                {data.getUserData().website.length === 0 ? (
                    <CardInput
                        labelContent="Personal website"
                        inpType="url"
                        inpPlaceholder="Your personal website. Ex: https://monstersinc.com"
                        inpValue="https://monstersinc.com"
                        isOnTwoCol={true}
                        data={data}
                        setData={setData}
                        dataToChange=""
                    />
                ) : (
                    data.getUserData().website.map((web, index) => {
                        return (
                            <CardInput
                                labelContent={`Personal website ${index + 1}`}
                                inpType="url"
                                inpPlaceholder="Your personal website. Ex: https://monstersinc.com"
                                inpValue={web}
                                isOnTwoCol={true}
                                key={index}
                                data={data}
                                setData={setData}
                                dataToChange=""
                            />
                        );
                    })
                )}
            </div>
            <div className="btnsWrapper">
                <AddBtn addBtnContent="Add website" />
            </div>
        </div>
    );
};

export default PersonalInfo;
