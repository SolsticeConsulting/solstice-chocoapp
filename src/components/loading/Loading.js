import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {

    componentDidMount() {
        let that = this;

        setTimeout(function() {
            that.props.history.push('/results');
        },2000);
    }

    render() {
        return (
            <div className="loading-container">
                I am loading
            </div>
        );
    }
}

export default Loading;