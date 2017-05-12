import React, {Component} from 'react'


class Header extends Component {
    render(){
        return (
            <div className="row header">
                    <div className="col-md-7">
                        <div className="logo">
                        <h1 style={{"fontWeight": "bold"}}>Dobble</h1>
                        <p style={{"fontFamily": 'Dancing Script', "fontSize": "20px"}}>Social Network for everyone </p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="login">
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