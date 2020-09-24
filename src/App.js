import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import {getToken, removeUserSession, setUserSession} from './utils/Common';

function App() {
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            return;
        }

        fetch(`http://localhost:8081/login?token=${token}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setUserSession(result.token, result.user);
                setAuthLoading(false);
            })
            .catch(error => {
                console.log(error);
                removeUserSession();
                setAuthLoading(false);
            });

    }, []);

    if (authLoading && getToken()) {
        return <div className="content">Checking Authentication...</div>
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="header">
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink activeClassName="active" to="/login">
                            Login</NavLink><small>(Access without token only)</small>
                        <NavLink activeClassName="active" to="/dashboard">
                            Dashboard</NavLink><small>(Access with token only)</small>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <PublicRoute path="/login" component={Login}/>
                            <PrivateRoute path="/dashboard" component={Dashboard}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;