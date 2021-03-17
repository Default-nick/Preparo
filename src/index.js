import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/navbar/header.jsx';
import NavBarMobile from './components/navbarMobile/navBarMobile.jsx';
import App from './App';

ReactDOM.render (
    <React.StrictMode>
        <Header/>
        <App/>
        <NavBarMobile/>
    </React.StrictMode>,
    document.getElementById('root')
);