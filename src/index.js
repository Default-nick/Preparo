import React from 'react';
import Header from './components/navbar/header.jsx';
import ReactDOM from 'react-dom';
import Profile from './pages/profile/profile'

ReactDOM.render (
    <React.StrictMode>
        <Header/>
        <Profile/>
    </React.StrictMode>,
    document.getElementById('root')
);