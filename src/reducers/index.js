import {combineReducers} from 'redux'

import peopleReducer from './people-reducer'

const allReducers = combineReducers({
    people:peopleReducer
})

export default allReducers