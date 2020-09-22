import React from 'react';

function App(props) {

    // handle click event of logout button
    const handleLogout = () => {
        props.history.push('/login');
    }

    return (
        <div>
            Welcome User!<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default App;