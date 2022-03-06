import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import PageView from './components/PageView';
import './App.css';
import MobileView from './components/MobileView';

class App extends Component {
  state = {};

  initializeReactGA = () => {
    ReactGA.initialize('UA-140852248-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  componentDidMount() {
    this.initializeReactGA();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={MobileView} />
          {/* <Route path='/' component={PageView} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
