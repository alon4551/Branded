import {combineReducers }from 'redux';
import logReducer from './logReducer';
import fillReducer from './userReducer';
const rootReducer=combineReducers({
    SignIn:logReducer,
    Fill:fillReducer
})
export default rootReducer