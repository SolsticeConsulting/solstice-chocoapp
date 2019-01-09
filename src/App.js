import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ChocoHeader from './components/chocoheader/ChocoHeader';
import Main from './components/main/Main';
import Loading from './components/loading/Loading';
import Results from './components/results/Results';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ChocoHeader />
        <div className="body-container">
            <Route path="/" exact component={Main} />
            <Route path="/loading" component={Loading} />
            <Route path="/results" component={Results} />
        </div>

      </div>
    );
  }
}

export default App;
