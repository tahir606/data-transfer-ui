import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./Title";
import Settings from "./Settings";

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.heading = 'Burhani IT Solutions - Data Transfer';
    }

    render() {
        return (
            <div>
                <Title
                    heading={this.heading}
                />
                <br/>
                <Settings
                    heading={this.heading}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <Dashboard/>,
    document.getElementById('root')
)