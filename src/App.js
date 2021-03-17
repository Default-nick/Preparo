import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import ProfileComponent from './pages/profile/profile.js';
import BasicDataComponent from './pages/basicData/basicData.js';
import LocalizationComponent from './pages/local/localization.js';


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/formProfile" component={BasicDataComponent} /> 
                <Route path="/localization" component={LocalizationComponent} /> 
                <Route path="/" component={ProfileComponent} /> 
            </Switch>
        </Router>
    )
}
export default App;