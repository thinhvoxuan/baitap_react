import React, {Component} from 'react'


class Header extends Component {
    render(){
        return (
        <div classNameName="container-fluid">
            <div className="row header">
                <div className="login">
                    <div className="col-md-7">
                        <h1>Dobble</h1>
                        <p>Social Network for everyone </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <form className="form-inline">
                        <input className="form-control" type="email" placeholder="Enter email" />
                        <input className="form-control" type="password" placeholder="Password" />
                        <button type="submit" className="btn btn-default">Sign in</button>
                        <br />
                        <input className="checkbox" type="checkbox" /> Remember me
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;