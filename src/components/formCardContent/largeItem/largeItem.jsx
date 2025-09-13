import { useState } from 'react';

import CardHeadingButton from '../../cardHeadingButton/cardHeadingButton';
import CardInput from '../../cardInput/cardInput';
import CardTextArea from '../../cardTextArea/cardTextArea';
import AddBtn from '../../addButton/addButton';

import './largeItem.scss';

const LargeItem = ({ largeItemType = '', data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="largeItem">
            <CardHeadingButton
                btnContent={'School'}
                isMainBtnExpanded={isExpanded}
                isMainHeadingButton={false}
                handleExpand={handleExpand}
            />
            <div className={`itemContent ${isExpanded === true ? 'expanded' : ''}`}>
                <div className="educationAndExperiencesItem">
                    <div className="largeItemFirstRow">
                        <CardInput
                            labelContent={`${largeItemType === 'education' ? 'School' : 'Company'}`}
                            inpType="text"
                            inpPlaceholder={`Your ${
                                largeItemType === 'education'
                                    ? 'school. Ex: Monsters University'
                                    : 'company. Ex: Monsters Inc'
                            }`}
                            inpValue="Monsters University"
                            isInpRequired={true}
                            data={data}
                            setData={setData}
                            dataToChange=""
                        />
                        <CardInput
                            labelContent={`${largeItemType === 'education' ? 'Course' : 'Position'}`}
                            inpType="text"
                            inpPlaceholder={`Your ${
                                largeItemType === 'education'
                                    ? 'Course. Ex: School of Scaring'
                                    : 'school. Ex: Scare Assistant'
                            }`}
                            inpValue="School of Scaring"
                            data={data}
                            setData={setData}
                            dataToChange=""
                        />
                    </div>
                    <div className="largeItemSecondRow">
                        <CardInput
                            labelContent="Start date"
                            inpType="text"
                            inpPlaceholder="1987"
                            inpValue="1987"
                            data={data}
                            setData={setData}
                            dataToChange=""
                        />
                        <CardInput
                            labelContent="End date"
                            inpType="text"
                            inpPlaceholder="1988"
                            inpValue="1988"
                            data={data}
                            setData={setData}
                            dataToChange=""
                        />
                    </div>
                    {largeItemType === 'education' ? null : (
                        <CardInput
                            labelContent="Project title"
                            inpType="text"
                            inpPlaceholder="The Laughter Initiative"
                            inpValue="The Laughter Initiative"
                            data={data}
                            setData={setData}
                            dataToChange=""
                        />
                    )}
                    {data.getUserData().experiences.length === 0 ? (
                        <CardTextArea
                            labelContent="Key point 1"
                            textAreaDisplayLines={2}
                            data={data}
                            setData={setData}
                        />
                    ) : (
                        data.getUserData().experiences.map((experience, index) => {
                            return (
                                <CardTextArea
                                    labelContent={`Key point ${index + 1}`}
                                    textAreaDisplayLines={2}
                                    data={data}
                                    setData={setData}
                                    key={index}
                                />
                            );
                        })
                    )}
                    <div className="btnsWrapper">
                        <AddBtn addBtnContent="Add key point" data={data} setData={setData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeItem;
