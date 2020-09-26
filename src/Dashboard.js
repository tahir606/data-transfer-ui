import React, {useEffect} from 'react';
import {getUser, removeUserSession} from "./utils/Common";
import LocalSettings from "./LocalSettings";
import ExportSettings from "./ExportSettings";

function Dashboard(props) {
    const user = getUser();

    useEffect(() => {
        console.log('Inflating Dashboard');
    });

    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (
        <div>
            <span>Welcome {user.name}!</span>
            <input className="logout submit" type="button" onClick={handleLogout} value="Logout"/><br/><br/>
            <LocalSettings/>
            <ExportSettings/>
        </div>
    );
}

export default Dashboard;