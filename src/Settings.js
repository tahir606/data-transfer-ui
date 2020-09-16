import React from 'react';

class Settings extends React.Component {

    endpoint = 'http://192.168.100.28:8081/settings';

    constructor(props) {
        super(props);
        this.state = {
            ipAddress: '',
            dbUser: '',
            dbPass: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(this.endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        ipAddress: result.ip,
                        dbUser: result.dbUser,
                        dbPass: result.dbPass
                    });
                    console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            );
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {

        let ip = this.state.ipAddress;
        let dbUser = this.state.dbUser;
        let dbPass = this.state.dbPass;

        console.log(ip, dbUser, dbPass);
        event.preventDefault();

        fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ip: ip,
                dbUser: dbUser,
                dbPass: dbPass
            })
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span>Database Export Location</span><br/><br/>
                <label>
                    IP Address:
                </label>
                <input
                    type="text"
                    name="ipAddress"
                    value={this.state.ipAddress}
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    Database Username:
                </label>
                <input
                    name="dbUser"
                    type="text"
                    value={this.state.dbUser}
                    onChange={this.handleChange}
                />
                <br/>
                <label>
                    Database Password:
                </label>
                <input
                    name="dbPass"
                    type="password"
                    value={this.state.dbPass}
                    onChange={this.handleChange}
                />
                <br/>
                <input
                    className="submit"
                    type="submit"
                    value="Submit"
                />
                <br/><br/>
            </form>
        );
    }
}

export default Settings;