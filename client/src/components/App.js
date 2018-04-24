import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as  actions from '../actions';

import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import NewPoll from './polls/NewPoll';
import MyPolls from './polls/MyPolls';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/polls" component={Dashboard}/>
          <Route exact path="/polls/new" component={NewPoll}/>
          <Route exact path="/polls/mypolls" component={MyPolls}/>
        </div>
      </BrowserRouter>

      </div>
    );
  }
}

export default connect(null, actions)(App);
