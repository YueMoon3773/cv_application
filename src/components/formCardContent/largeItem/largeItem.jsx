import { useState } from 'react';

import CardHeadingButton from '../../cardHeadingButton/cardHeadingButton';
import CardInput from '../../cardInput/cardInput';
import CardTextArea from '../../cardTextArea/cardTextArea';
import AddBtn from '../../addButton/addButton';

import './largeItem.scss';

const LargeItem = ({ largeItemType = '', indexOfDataToChange = null, data, setData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleExpand = () => setIsExpanded(!isExpanded);

    // console.log(data.experiences[indexOfDataToChange].expDescription);

    return (
        <div className="largeItem">
            <CardHeadingButton
                btnContent={
                    data[largeItemType].length > 0 && largeItemType === 'educations'
                        ? `${data[largeItemType][indexOfDataToChange].school}${
                              data[largeItemType][indexOfDataToChange].school !== '' &&
                              data[largeItemType][indexOfDataToChange].course !== ''
                                  ? ','
                                  : ''
                          } ${data[largeItemType][indexOfDataToChange].course}`
                        : data[largeItemType].length > 0 && largeItemType === 'experiences'
                        ? `${data[largeItemType][indexOfDataToChange].company}${
                              data[largeItemType][indexOfDataToChange].company !== '' &&
                              data[largeItemType][indexOfDataToChange].position !== ''
                                  ? ','
                                  : ''
                          } ${data[largeItemType][indexOfDataToChange].position}`
                        : ''
                }
                isMainBtnExpanded={isExpanded}
                isMainHeadingButton={false}
                handleExpand={handleExpand}
            />
            <div className={`itemContent ${isExpanded === true ? 'expanded' : ''}`}>
                <div className="educationAndExperiencesItem">
                    <div className="largeItemFirstRow">
                        <CardInput
                            labelContent={`${
                                largeItemType === 'educations' ? 'School' : 'experiences' ? 'Company' : ''
                            }`}
                            inpType="text"
                            inpPlaceholder={`Your ${
                                largeItemType === 'educations'
                                    ? 'school. Ex: Monsters University'
                                    : 'company. Ex: Monsters Inc'
                            }`}
                            // inpValue="Monsters University"
                            isInpRequired={true}
                            data={data}
                            setData={setData}
                            indexOfDataToChange={indexOfDataToChange}
                            dataToChange={largeItemType === 'educations' ? 'school' : 'experiences' ? 'company' : ''}
                        />
                        <CardInput
                            labelContent={`${
                                largeItemType === 'educations' ? 'Course' : 'experiences' ? 'Position' : ''
                            }`}
                            inpType="text"
                            inpPlaceholder={`Your ${
                                largeItemType === 'educations'
                                    ? 'Course. Ex: School of Scaring'
                                    : 'school. Ex: Scare Assistant'
                            }`}
                            // inpValue="School of Scaring"
                            data={data}
                            setData={setData}
                            indexOfDataToChange={indexOfDataToChange}
                            dataToChange={largeItemType === 'educations' ? 'course' : 'experiences' ? 'position' : ''}
                        />
                    </div>
                    <div className="largeItemSecondRow">
                        <CardInput
                            labelContent="Start date"
                            inpType="text"
                            inpPlaceholder="1987"
                            // inpValue="1987"
                            data={data}
                            setData={setData}
                            indexOfDataToChange={indexOfDataToChange}
                            dataToChange={
                                largeItemType === 'educations' ? 'eduStartDate' : 'experiences' ? 'expStartDate' : ''
                            }
                        />
                        <CardInput
                            labelContent="End date"
                            inpType="text"
                            inpPlaceholder="1988"
                            // inpValue="1988"
                            data={data}
                            setData={setData}
                            indexOfDataToChange={indexOfDataToChange}
                            dataToChange={
                                largeItemType === 'educations' ? 'eduEndDate' : 'experiences' ? 'expEndDate' : ''
                            }
                        />
                    </div>
                    {largeItemType === 'educations' ? null : (
                        <CardInput
                            labelContent="Project title"
                            inpType="text"
                            inpPlaceholder="The Laughter Initiative"
                            // inpValue="The Laughter Initiative"
                            data={data}
                            setData={setData}
                            indexOfDataToChange={indexOfDataToChange}
                            dataToChange="projectTitle"
                        />
                    )}
                    {largeItemType === 'educations' &&
                        data[largeItemType].length > 0 &&
                        data.educations[indexOfDataToChange].eduDescription.map((item, index) => (
                            <CardTextArea
                                labelContent={`Key point ${index + 1}`}
                                textAreaDisplayLines={2}
                                textAreaPlaceholder="Your key point"
                                data={data}
                                setData={setData}
                                indexOfLargeItem={indexOfDataToChange}
                                indexOfDataToChange={index}
                                dataToChange="eduDescription"
                                key={index}
                            />
                        ))}
                    {largeItemType === 'experiences' &&
                        data[largeItemType].length > 0 &&
                        data.experiences[indexOfDataToChange].expDescription.map((item, index) => (
                            <CardTextArea
                                labelContent={`Key point ${index + 1}`}
                                textAreaDisplayLines={2}
                                textAreaPlaceholder="Your key point"
                                data={data}
                                setData={setData}
                                indexOfLargeItem={indexOfDataToChange}
                                indexOfDataToChange={index}
                                dataToChange="expDescription"
                                key={index}
                            />
                        ))}

                    <div className="btnsWrapper">
                        <AddBtn addBtnContent="Add key point" data={data} setData={setData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeItem;
