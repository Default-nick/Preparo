import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Perfil from './pages/perfil';


function App() {
    return (
        <Router>
        <Switch>
            <Route path="/" component={Perfil} /> 
        </Switch>
        </Router>
    )
}
export default App;