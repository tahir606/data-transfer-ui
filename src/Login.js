import React, {useState} from 'react';
import {setUserSession} from "./utils/Common";

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);

        if (username.value == 'admin' && password.value == 'admin') {
            setLoading(false);
            setUserSession('token', 'admin');
            props.history.push('/dashboard');
        } else {
            setLoading(false);
            setError("Incorrect Username or Password")
            // if (error.response.status === 401) setError(error.response.data.message);
            // else setError("Something went wrong. Please try again later.");
        }

        // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        //     setLoading(false);
        //     setUserSession(response.data.token, response.data.user);
        //     props.history.push('/dashboard');
        // }).catch(error => {
        //     setLoading(false);
        //     if (error.response.status === 401) setError(error.response.data.message);
        //     else setError("Something went wrong. Please try again later.");
        // });

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