import React from 'react';

class ExportSettings extends React.Component {
    endpoint = 'http://192.168.100.28:8081/settings';

    constructor(props) {
        super(props);
        this.state = {
            APILink: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event) {

        let apiLink = this.state.APILink;

        event.preventDefault();

        // fetch(this.endpoint, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         ip: ip,
        //         dbUser: dbUser,
        //         dbPass: dbPass
        //     })
        // })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span>Export Settings</span><br/><br/>
                <label>
                    IP Address:
                </label>
                <input
                    type="text"
                    name="APILink"
                    value={this.state.APILink}
                    onChange={this.handleChange}
                />
                <br/>
                <label>Choose Table:</label>
                <select id="table" name="table">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
                <br/>
                <input
                    className="submit"
                    type="submit"
                    value="Submit"
                />
            </form>
        );
    }
}

export default ExportSettings;