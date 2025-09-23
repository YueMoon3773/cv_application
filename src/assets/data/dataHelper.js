const experiencesStructure = {
    company: '',
    position: '',
    expStartDate: '',
    expEndDate: '',
    projectTitle: '',
    expDescription: [],
};

const educationStructure = {
    school: '',
    course: '',
    eduStartDate: '',
    eduEndDate: '',
    eduDescription: [],
};

const moreStructure = {
    title: '',
    details: [],
};

const fontsList = ['Ledger', 'Roboto', 'Sono'];

export const getExperiencesStructure = () => experiencesStructure;
export const getEducationStructure = () => educationStructure;
export const getMoreStructure = () => moreStructure;
export const getFonts = () => fontsList;
export const switchActiveId = (sampleData) => {
    if (sampleData.activeSampleId === 1) {
        sampleData.activeSampleId = 2;
    } else if (sampleData.activeSampleId === 2) {
        sampleData.activeSampleId = 1;
    }
};

// const resetUserData = () => {
//     userData = { ...mainDataStructure };
// };
// const setUserToSampleData = (inpSampleData) => {
//     userData = { ...inpSampleData };
// };
