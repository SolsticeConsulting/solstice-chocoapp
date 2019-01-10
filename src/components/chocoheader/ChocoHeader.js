import React, { Component } from 'react';
import './ChocoHeader.css';
import {solsticelogo} from '../../images';

class ChocoHeader extends Component {
    render() {
        return (
            <div className="header-container">
                <img src={solsticelogo} className="solstice-logo" alt="logo"/>
            </div>
        );
    }
}

export default ChocoHeader;