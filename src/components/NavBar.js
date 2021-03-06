import React, { Component} from 'react'
var NavLink = require('react-router-dom').NavLink


class NavBar extends Component {
    render(){
        return (
        <nav className="navbar navbar-default">
          
            <div className="navbar-header">
              <a style={{visibility: "hidden"}} className="navbar-brand" href="#">Website</a>
            </div>
            <ul className="nav navbar-nav">
              <li><NavLink activeClassName='active' to="/">Home</NavLink></li>
              <li><NavLink activeClassName='active' to="/member">Members</NavLink></li>
              <li><NavLink activeClassName='active' to="/group">Groups</NavLink></li>
              <li><NavLink activeClassName='active' to="photo">Photos</NavLink></li>
              <li><a to="#">Profile</a></li>
            </ul>

      </nav>
    
        )
    }
}

export default NavBar;
