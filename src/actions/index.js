import axios from 'axios'

export const getPeople = () => {
    return function(dispatch){
        axios.get('https://swapi.co/api/people/')
        .then(result=>{
            return dispatch({type:"GET_PEOPLE", payload:result.data})
        })
    } 
}