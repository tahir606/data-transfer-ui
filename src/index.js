import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./Title";
import LocalSettings from "./LocalSettings";
import ExportSettings from "./ExportSettings";

import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import {getToken} from "./utils/Common";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.heading = 'Burhani IT Solutions - Data Transfer';
    }

    render() {
        return (
            // <div>
            //     <Title
            //         heading={this.heading}
            //     />
            //     <br/>
            //     <Login/>
            //     {/*<LocalSettings/>*/}
            //     {/*<br/>*/}
            //     {/*<ExportSettings/>*/}
            // </div>
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div className="header">
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
                            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
                        </div>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <PublicRoute path="/login" component={Login} />
                                <PrivateRoute path="/dashboard" component={Dashboard} />
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)