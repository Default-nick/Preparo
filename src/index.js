import React from 'react';
import Header from './components/navbar/header.jsx';
import ReactDOM from 'react-dom';
// import BasicData from './pages/basicData/basicData';
import NavBarMobile from './components/navbarMobile/navBarMobile.jsx';
import Localization from './pages/local/localization'

ReactDOM.render (
    <React.StrictMode>
        <Header/>
        <Localization/>
        <NavBarMobile/>
    </React.StrictMode>,
    document.getElementById('root')
);