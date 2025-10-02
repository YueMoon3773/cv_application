import { useState } from 'react';

import SideControllers from './components/sideControllers/sideControllers';
import FormWrapper from './components/formWrapper/form';
import ResumeDisplay from './components/resumeDisplay/resumeDisplay';

import dataStructure from './assets/data/dataStructure';
import databaseSampleData from './assets/data/dataSample';

import './App.scss';

function App() {
    const [data, setData] = useState(dataStructure);
    // const [data, setData] = useState(databaseSampleData.sampleData1);
    const [sampleData, setSampleData] = useState(databaseSampleData);
    const [isShowResume, setIsShowResume] = useState(false);

    console.log(data);

    return (
        <div className="app">
            <SideControllers isShowResume={isShowResume} setIsShowResume={setIsShowResume} />
            <FormWrapper
                data={data}
                setData={setData}
                sampleData={sampleData}
                setSampleData={setSampleData}
                isShowResume={isShowResume}
            />
            <ResumeDisplay data={data} isShowResume={isShowResume} />
        </div>
    );
}

export default App;
