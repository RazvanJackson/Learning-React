import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div id="Navbar">
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            Logo
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">

                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Link to="/a">About</Link>
                            </div>
                            <div className="navbar-item">
                                People
                            </div>
                            <div className="navbar-item">
                                Movies
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar