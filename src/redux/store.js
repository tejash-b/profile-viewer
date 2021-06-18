import {createStore, combineReducers} from 'redux'
import userReducer from './userReducer'

let rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer)

export default store