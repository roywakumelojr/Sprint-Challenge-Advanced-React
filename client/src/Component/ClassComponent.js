import React from 'react';
import PlayerData from './PlayerData'
import axios from 'axios';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    async componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then (res => {this.setState({ data: res.data })})
    }
    render() {
        return (
            <div>
                {this.state.data ? <PlayerData data={ this.state.data } /> : null}
            </div>
        )
    }
}

export default ClassComponent;