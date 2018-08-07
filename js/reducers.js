import {SET_SEARCH_TERM,SET_API_DATA} from './actions'
import {combineReducers} from 'redux'


const searchTerm = (state = '', action)=>{
    if(action.type === SET_SEARCH_TERM)
        return action.payload;
    
    return state;
}

const apiData = (state={}, action)=>{
    if(action.type === SET_API_DATA)
        return action.payload;
    
    return state;
}

const rootReducer =combineReducers({searchTerm :searchTerm,apiData:apiData})

export default rootReducer;