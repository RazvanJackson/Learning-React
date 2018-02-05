import React from 'react'
import {connect} from 'react-redux'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Movies from './components/Movies'

class App extends React.Component{
    render(){
        return(
            <div id="App">
                <Navbar/>
                <Header/>
                <Movies/>
            </div>
        )
    }
}

const mapStateToProps = (store) =>{
    return {
        people: store.people
    }
}

export default connect(mapStateToProps)(App)
