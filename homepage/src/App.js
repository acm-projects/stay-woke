import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import GunControl from './components/pages/GunControl';
import HealthCare from './components/pages/HealthCare';
import Immigration from './components/pages/Immigration';
import Pages from './components/layout/pages';
import data from './components/data/data';
import Articlebox from './components/layout/articlebox';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 

          <Route exact path="/" render={props => (
            // imports header from header.js
            <React.Fragment>
              <Header />
              <Pages />
              <Articlebox />
            </React.Fragment>
          )} />
          
          <Route path="/guncontrol" component={GunControl} />

          <Route path="/healthcare" component={HealthCare} />

          <Route path="/immigration" component={Immigration} />

          <Route path="/data" component={data} />
        </div>  
      </Router>
      
    );
  }
}

export default App;
