import locationReducer from './locationReducer';
import {combineReducers} from 'redux';

const allReducers =  combineReducers({
  location: locationReducer,
})

export default allReducers;