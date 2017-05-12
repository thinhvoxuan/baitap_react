import React, { Component} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Aside from './Aside'

class Member extends Component {
    render(){
        return (
        <div >
            <Header />
            <NavBar />
            <div class="row">
                <div className="col-md-8">
                    <h2>Memebers</h2>
                    <hr/>
                        <div className="row">
                        <div className="col-md-3">
                            <img className="img-thumbnail" style={{"width": "100px"}} src="img/user.png" alt="User" />
                            <p className="p-some-user">Some User1</p>
                        </div>
                        <div className="col-md-9">
                            <div className="group-btn">
                            <button type="button" className="btn btn-success"> <span className="glyphicon glyphicon-user"></span>  Friend Request </button>
                            <button type="button" className="btn btn-default"> <span className="glyphicon glyphicon-envelope"></span>  Send Messenge</button>
                            <button type="button" className="btn btn-primary"> <span className="glyphicon glyphicon-edit"></span>  View Profile</button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>

                <Aside />
             </div>
        </div>
        )
    }
}

export default Member;