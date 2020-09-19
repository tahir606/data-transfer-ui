import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./Title";
import LocalSettings from "./LocalSettings";
import ExportSettings from "./ExportSettings";

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
                <LocalSettings/>
                <br/>
                <ExportSettings/>
            </div>
        );
    }
}

ReactDOM.render(
    <Dashboard/>,
    document.getElementById('root')
)