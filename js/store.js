import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const fuc = () => (compose(
    
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' 
    ? window.devToolsExtension() 
    : f=>f
))

const store = createStore(reducer,compose(
    applyMiddleware(thunk)
,fuc))

export default store;