import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="question-container">
                <div className="question-button">
                    <Link to="/loading" style={{ textDecoration: 'none', color: 'var(--black)' }}>
                        <div className="question-text">
                            Is it a Blommer Chocolate Day?
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Main;