import React, { Component} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Aside from './Aside'


class Group extends Component {
    render(){
        return (
            <div >
            <Header />
            <NavBar />
            <div class="row">
                <div className="col-md-8">
                      <h2>Memebers</h2>
                <hr />
                <div className="row">
                    <div className="col-md-2">
                        <img className="img-thumbnail" style={{"width": "100px", "height": "100px", "marginTop": "25px"}} src="img/group.png" alt="User" />
                    </div>
                    <div className="col-md-9">
                       <h3>Sample Group 2</h3>
                       <p>This is sample group</p>
                       <button className="btn btn-default">Join Group</button>
                    </div>
                </div>
                <hr />
                </div>

                <Aside />
             </div>
        </div>
        )
    }
}

export default Group;