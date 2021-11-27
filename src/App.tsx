import React from 'react';
import 'antd/dist/antd.css';

import AddPeople from './addPeople';
import CheckConnection from './checkConnection';
import './App.scss';
import Header from './header';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <div className='app-content'>
                <AddPeople />
                <CheckConnection />
            </div>
        </div>
    );
}

export default App;
