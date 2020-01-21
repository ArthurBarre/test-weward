import React from 'react';
import '../index.css';
import {useSelector} from 'react-redux';


export default () => {
  const location = useSelector(state => state.location);
  console.log(location)

  return(
  <div className='render'></div>
  )
}