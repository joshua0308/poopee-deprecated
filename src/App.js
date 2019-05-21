import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageView from './components/PageView';
import './App.css';
// test components below
import Carousel from './components/test/Carousel';
import MobileView from './components/test/MobileView';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route path='/swipe' component={Carousel} />
          <Route path='/mobile' component={MobileView} />
          <Route path='/' component={PageView} />
        </Switch>
      </div>
    );
  }
}

export default App;
