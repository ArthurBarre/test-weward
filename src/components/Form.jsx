import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {api_key} from '../constants/constants';
import {useSelector, useDispatch} from 'react-redux';
import {setLocation} from '../actions/index';
import '../index.css';


export default () => {
  const [address , setAdress] =  useState('12 Rue de Crimée 75019');
  const [rawLocation, setRawLocation] = useState({});
  const location = useSelector(state => state.location);
  const dispatch = useDispatch();
  const getPoint = () => {
    // let location = '144 Rue de crimee Paris';
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:address,
          key:api_key
        }
      })
      .then(function(response){
        setRawLocation(response.data.results[0].geometry.location);
        // console.log(response.data.results[0].geometry.location);
        // dispatch(setLocation(response.data.results[0].geometry.location))
          saveData()
      })
}
const saveData = () => {
  dispatch(setLocation(rawLocation))
}

  return(
    <div className='form'>
      <form>
        <div className="form-group">
          <label for="address">Adresse du lieu de vente</label>
          <input placeholder="Entrer l'adresse de votre lieu de vente" 
          name='address' 
          type="text" 
          className="form-control"
          onChange={e=>setAdress(e.target.value)}
          value={address}
        />
        </div>
        <div 
        type="submit" 
        className="btn btn-primary"
        onClick={()=>getPoint()}
        >Enregister le nouveau point de vente</div>
        <div 
        type="submit" 
        className="btn btn-primary"
        onClick={()=>saveData()}
        >Entregister les données</div>
      </form>
    </div>
  )
}