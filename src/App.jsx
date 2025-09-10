import { useState } from 'react';

import SideControllers from './components/sideControllers/sideControllers';
import FormWrapper from './components/formWrapper/form';
import ResumeDisplay from './components/resumeDisplay/resumeDisplay';

import database from './assets/data/dataManager';

import './App.scss';

function App() {
    const [count, setCount] = useState(0);
    // const data = database();
    const [data, setData] = useState(database());

    return (
        <div className="app">
            <SideControllers />
            <FormWrapper data={data} setData={setData} />
            <ResumeDisplay />
        </div>
    );
}

export default App;
