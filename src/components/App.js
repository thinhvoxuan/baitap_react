import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home'
import Member from './Member'
import Group from './Group'
import Photo from './Photo'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/member' component={Member} />
            <Route path='/group' component={Group} />
            <Route path='/photo' component={Photo} />
        </div>
      </Router>
    );
  }
}

export default App;
