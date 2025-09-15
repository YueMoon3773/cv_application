import { useState } from 'react';

import SideControllers from './components/sideControllers/sideControllers';
import FormWrapper from './components/formWrapper/form';
import ResumeDisplay from './components/resumeDisplay/resumeDisplay';

import database from './assets/data/dataManager';

import './App.scss';

function App() {
    // const data = database();
    const [data, setData] = useState(database());
    const [isSampleData, setIsSampleData] = useState(true);
    // const [isSampleData, setIsSampleData] = useState(false);
    const [activeSampleId, setActiveSampleId] = useState(1);

    console.log(data.getUserData());

    return (
        <div className="app">
            <SideControllers />
            <FormWrapper isSampleData={isSampleData} data={data} setData={setData} />
            <ResumeDisplay />
        </div>
    );
}

export default App;
