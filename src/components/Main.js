import React, { Component } from 'react';

class Main extends Component {
    render() {
        return(
             <div className="col-md-8">
                 <div className="wall">
                    <div className="wall-header">Wall</div>
                    <textarea style={{"margin-left": "10px", "border-radius": "5px"}} placeholder="Write on the wall" cols="118" rows="3"></textarea>
                    <br />
                    <button style={{"margin-left": "10px", "margin-bottom": "10px"}} type="button" className="btn btn-default">Submit</button>
                    <div className="btn-group">
                        <button type="button" className="btn btn-default">  <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Text</button>
                      <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-picture" aria-hidden="true"></span> Image</button>
                      <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Video</button>
                    </div>
                 </div>

     
                <div className="comment-user">
                    <div className="row">
                        <div className="col-md-2">
                            <img src="img/user.png" className="img-thumbnail" style={{"width": "100px", "margin-left": "20px", "margin-top": "10px"}} alt="User-image" />
                            <div className="caption">
                                <a href="#">DevUser1</a>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <p className="comment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quaerat placeat praesentium hic neque eos assumenda nisi earum voluptatem enim minus amet blanditiis illo similique minima, autem aliquam modi voluptatum?</p>
                            <div className="action">
                                <ul>
                                    <li><a href="#">Comment</a></li>
                                    <li><a href="#"> - Like</a></li>
                                    <li><a href="#"> - Follow</a></li>
                                    <li><a href="#"> - Share</a></li>
                                </ul>
                            </div>

                            <div className="row comment-submit">
                                <div className="col-sm-10">
                                    <input type="text" size="75"  className="form-control" placeholder="Enter Comment" />
                                </div>
                                <div className="col-sm-2">
                                    <button className="btn btn-default">Submit</button>
                                </div>
                            </div>

                            <div className="row comment-bottom">
                                <div className="col-sm-2">
                                    <img src="img/user.png" className="img-thumbnail" style={{"width": "30px"}} alt="User" />
                                </div>
                                <div className="col-sm-10">
                                    Sed convallis est in ante sodales, sit amet consectetetur leo commodo
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;