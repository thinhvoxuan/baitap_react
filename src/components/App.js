import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import Member from './Member'
import Group from './Group'
import Photo from './Photo'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/member' component={Member} />
            <Route path='/group' component={Group} />
            <Route path='/photo' component={Photo} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
