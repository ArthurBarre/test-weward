import locationReducer from './locationReducer';
import titleReducer from './titleReducer';
import descReducer from './descReducer';
import dateReducer from './dateReducer';
import remReducer from './remReducer';
import adressReducer from './adressReducer'

import {combineReducers} from 'redux';

const allReducers =  combineReducers({
  title:titleReducer,
  date:dateReducer,
  desc:descReducer,
  rem:remReducer,
  location: locationReducer,
  address:adressReducer
})

export default allReducers;