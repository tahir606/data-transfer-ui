import React from 'react';

class ExportSettings extends React.Component {

    endpoint = 'http://localhost:8081/settings/export';

    constructor(props) {
        super(props);
        this.state = {
            APILink: '',
            tableNames: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(this.endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        APILink: result.ip,
                        tableNames: result.tableNamesByComma
                    });
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

        let apiLink = this.state.APILink;
        let tableNames = this.state.tableNames;

        event.preventDefault();

        fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiLink: apiLink,
                tableNames: tableNames,
            })
        })
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
                <label>
                    Table Names:
                </label>
                <input
                    type="text"
                    name="tableNames"
                    value={this.state.tableNames}
                    onChange={this.handleChange}
                />
                {/*<label>Choose Table:</label>*/}
                {/*<select id="table" name="table">*/}
                {/*    <option value="volvo">Volvo</option>*/}
                {/*    <option value="saab">Saab</option>*/}
                {/*    <option value="fiat">Fiat</option>*/}
                {/*    <option value="audi">Audi</option>*/}
                {/*</select>*/}
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