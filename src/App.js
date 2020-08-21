import React from 'react';
import {HashRouter as Switch, Route} from 'react-router-dom';

import './styles/App.css';
import './styles/index.css';
import './styles/main.css';
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';

import MainView from './views/Main.view';
import LoginView from "./views/Login.view";
import RegistrationView from "./views/Registration.view";

/**
 *
 * @returns {*} return HTML code
 * @class
 */
function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={LoginView} />
                <Route path="/login" component={LoginView} />
                <Route path="/registration" component={RegistrationView} />
                <Route path="/main" component={MainView} />
            </Switch>
        </div>
    );
}

export default App;

