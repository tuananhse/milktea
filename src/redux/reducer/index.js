
import { combineReducers } from 'redux';
import auth from './authReducer';
import home from './homeReducer';

const rootReducer = combineReducers({
    auth,
    home
})

export default rootReducer
