import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import VideoChat from './components/VideoChat';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/v1' component={VideoChat} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
