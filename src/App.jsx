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

    const [sampleData, setSampleData] = useState(databaseSampleData);
    // const [resumeFont, setResumeFont] = useState('Ledger');

    // const [isSampleData, setIsSampleData] = useState(true);
    // const [isSampleData, setIsSampleData] = useState(false);

    const [activeSampleId, setActiveSampleId] = useState(1);

    console.log(data);

    return (
        <div className="app">
            <SideControllers />
            <FormWrapper data={data} setData={setData} sampleData={sampleData} setSampleData={setSampleData} />
            <ResumeDisplay />
        </div>
    );
}

export default App;
