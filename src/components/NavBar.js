import React, { Component} from 'react'


class NavBar extends Component {
    render(){
        return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a style={{visibility: "hidden"}} className="navbar-brand" href="#">Website</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="member.html">Members</a></li>
              <li><a href="group.html">Groups</a></li>
              <li><a href="photo.html">Photos</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </div>
      </nav>
        )
    }
}

export default NavBar;
