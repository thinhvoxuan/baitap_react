import React, { Component} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Main from './Main'
import Aside from './Aside'

class Home extends Component {
    render(){
        return (
            <div>
                <Header />
                <NavBar />
                <div className="row">
                    <Main />
                    <Aside />
                </div>
            </div>
        )
    }
}

export default Home;