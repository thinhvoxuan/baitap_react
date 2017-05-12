import React, {Component} from 'react'

class Aside extends Component {
    render(){
        return (
            <div className="col-md-4">
                <div className="side-up">
                        <div className="wall-header">My Friend</div>
                            <div className="img-side">
                                <img src="/images/user.png" className="img-thumbnail" style={{"width": "80px"}} alt="No images" />
                                <img src="/images/user.png" className="img-thumbnail" style={{"width": "80px"}} alt="No images" />
                                <img src="/images/user.png" className="img-thumbnail" style={{"width": "80px"}} alt="No images" />
                                <img src="/images/user.png" className="img-thumbnail" style={{"width": "80px"}} alt="No images" />
                                <img src="/images/user.png" className="img-thumbnail" style={{"width": "80px"}} alt="No images" />
                            </div>
                </div>
                    <br />
                    <br />
                <div className="side-down">
                    <div className="wall-header">My Group</div>
                        <div className="row group">
                            <div className="col-sm-3">
                                <img src="/images/group.png" style={{"width": "60px"}} alt="group" />
                            </div>
                            <div className="col-sm-9">
                                <h4 style={{"color": "blue"}}>Sample Group 1</h4>
                                <p>This is a sample group</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row group">
                            <div className="col-sm-3">
                                <img src="/images/group.png" style={{"width": "60px"}} alt="group" />
                            </div>
                            <div className="col-sm-9">
                                <h4 style={{"color": "blue"}}>Sample Group 2</h4>
                                <p>This is a sample group</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Aside;