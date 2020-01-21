import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import DatePicker from "react-datepicker";
import {api_key} from '../constants/constants';

import {setLocation, setDesc, setRem, setTitle, setDate, setAdress} from '../actions/index';
import '../index.css';
import "react-datepicker/dist/react-datepicker.css";



export default () => {
  const [address , setRawAdress] =  useState('12 Rue de Crimée 75019');
  const [title , setRawTitle] =  useState('Ma campagne');
  const [description , setDescription] =  useState('');
  const [rawLocation, setRawLocation] = useState({});
  const [remuneration, setRemuneration] = useState(500);
  const [date , setRawDate] =  useState(new Date());
  // setRawDate()
  const dispatch = useDispatch();
  const getPoint = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:address,
          key:api_key
        }
      })
      .then(function(response){
        setRawLocation(response.data.results[0].geometry.location);
          saveData()
      })
}
const saveData = () => {
  dispatch(setLocation(rawLocation))
  dispatch(setTitle(title))
  dispatch(setDesc(description))
  dispatch(setDate(moment(date).format('DD-MM-YYYY')))
  dispatch(setRem(remuneration))
  dispatch(setLocation(rawLocation))
  dispatch(setAdress(address))
}
const handleDate = date => {
  setRawDate(date)
};

  return(
    <div className='form'>
      <form className='form-campaign'>
      <div className="form-group">
          <label for="title">Titre de la campagne</label>
          <input placeholder="Entrer l'adresse de votre lieu de vente" 
          name='title' 
          type="text" 
          className="form-control"
          onChange={e=>setRawTitle(e.target.value)}
          value={title}
        />
        </div>
        <div className="form-group date">
          <label for="address">Date du début de la campagne</label>
          <DatePicker
            className='date-picker'
            dateFormat="dd-MM-yyyy"
            selected={date}
            onChange={handleDate}
          />
        </div>
        <div className="form-group">
          <label for="description">Déscription de la campagne</label>
          <textarea 
          name="description"
          rows="5" cols="33"
          className="form-control"
          onChange={e=>setDescription(e.target.value)}
          value={description}
          >
          </textarea>
        </div>
        <div className="form-group">
          <label for="remuneration">Rémunération de la campagne</label>
          <input 
          type="number" 
          name="remuneration"
          className="form-control"
          value={remuneration}
          onChange={e=>setRemuneration(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="address">Adresse du lieu de vente</label>
          <input placeholder="Entrer l'adresse de votre lieu de vente" 
          name='address' 
          type="text" 
          className="form-control"
          onChange={e=>setRawAdress(e.target.value)}
          value={address}
        />
        </div>
        <div className="buttons">
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
        </div>
      </form>
    </div>
  )
}