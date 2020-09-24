import React, {useEffect, useState} from 'react';
import {setUserSession} from "./utils/Common";

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(props);
    })

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);

        fetch('http://localhost:8081/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            })
        })
            .then(res => res.json())
            .then(result => {
                setLoading(false);
                console.log(result);
                setUserSession(result.token, result.user);
                props.history.push('/dashboard');
            }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });

    }

    return (
        <div>
            Login<br/><br/>
            <div>
                Username<br/>
                <input type="text" {...username} autoComplete="new-password"/>
            </div>
            <div style={{marginTop: 10}}>
                Password<br/>
                <input type="password" {...password} autoComplete="new-password"/>
            </div>
            {error && <><small style={{color: 'red'}}>{error}</small><br/></>}<br/>
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin}
                   disabled={loading}/><br/>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;