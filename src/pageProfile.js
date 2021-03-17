import React from 'react';
import Header from './components/navbar/header.jsx';
import ReactDOM from 'react-dom';
import Profile from './pages/profile/profile'
import NavBarMobile from './components/navbarMobile/navBarMobile.jsx';

ReactDOM.render (
    <React.StrictMode>
        <Header/>
        <Profile/>
        <NavBarMobile/>
    </React.StrictMode>,
    document.getElementById('root')
);