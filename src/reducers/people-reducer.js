const peopleReducer = (state,action)=>{
    state = []
    if(action.type === "GET_PEOPLE"){
        state = action.payload.results
        console.log(state);
    } 
    return state
}


export default peopleReducer