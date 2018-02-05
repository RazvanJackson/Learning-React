import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import  {
            getPeople
        } from '../actions/index'

class PeopleList extends React.Component{
    
    componentDidMount(){
        this.props.getPeople();
    }

    renderPeople(){
        if(this.props.people){
            return this.props.people.map(function(value,index){
                return <li key={index}>{value.name}</li>
            })
        }
        else{
            return null
        }
    }

    render(){
        return (<div>
            {this.renderPeople()}
            </div>)
    }
}

const mapStateToProps = (store) =>{
    return {
        people: store.people
    }
}

const matchDispatchToProps = (dispatch) =>{
    return bindActionCreators({getPeople}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(PeopleList)