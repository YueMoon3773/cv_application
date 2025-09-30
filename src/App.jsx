import { useState } from 'react';

import SideControllers from './components/sideControllers/sideControllers';
import FormWrapper from './components/formWrapper/form';
import ResumeDisplay from './components/resumeDisplay/resumeDisplay';

import dataStructure from './assets/data/dataStructure';
import databaseSampleData from './assets/data/dataSample';

import './App.scss';

function App() {
    // const [data, setData] = useState(dataStructure);
    const [data, setData] = useState(databaseSampleData.sampleData1);
    // const [data, setData] = useState(databaseSampleData.testData);

    const [sampleData, setSampleData] = useState(databaseSampleData);

    console.log(data);

    return (
        <div className="app">
            <SideControllers />
            <FormWrapper data={data} setData={setData} sampleData={sampleData} setSampleData={setSampleData} />
            <ResumeDisplay data={data} />
        </div>
    );
}

export default App;
