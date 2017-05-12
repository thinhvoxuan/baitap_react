import React, { Component} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Aside from './Aside'


class Photo extends Component {
    render(){
        return (
            <div >
            <Header />
            <NavBar />
            <div class="row">
               <div className="col-md-8">
                    <h2>Photos</h2>
                    <hr />
                    <img src="img/sample1.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                    <img src="img/sample2.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                    <img src="img/sample3.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                    <img src="img/sample4.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                    <img src="img/sample5.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                    <img src="img/sample6.jpg" style={{"width": "150px"}} className="img-thumbnail fancybox" alt="sample" />
                 </div>

                <Aside />
                
             </div>
        </div>
        )
    }
}

export default Photo;