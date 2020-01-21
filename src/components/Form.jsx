import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import { api_key } from '../constants';
import {setLocation, setDesc, setRem, setTitle, setDate, setAdress, submit, close} from '../actions/index';
import '../index.css';
import "react-datepicker/dist/react-datepicker.css";

export default () => {

  const [ address , setRawAdress ] =  useState('12 Rue de Crimée 75019');
  const [ title , setRawTitle ] =  useState('Ma campagne');
  const [ description , setDescription ] =  useState('Description de la campagne');
  const [ rawLocation, setRawLocation ] = useState({});
  const [ remuneration, setRemuneration ] = useState(500);
  const [ date, setRawDate ] = useState( new Date() );
  const dispatch = useDispatch();

  const submitData = () => {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
          address:address,
          key:api_key
        }
    })
    .then(response=>{
      setRawLocation(response.data.results[0].geometry.location);
      saveData();
    })
    .catch(err=>console.log(err))
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

const revealData = () => {
  dispatch(submit())
  setTimeout(() => {
    dispatch(close())
  }, 4000);
}

const handleDate = date => {
  setRawDate(date)
};

  return(
    <div className='form'>
      <form className='form-campaign'>
      <h3 className='space'>Enregistrer une nouvelle campagne</h3>
      <div className="form-group">
          <label htmlFor="title">Titre de la campagne</label>
          <input placeholder="Entrer l'adresse de votre lieu de vente" 
          name='title' 
          type="text" 
          className="form-control"
          onChange={e=>setRawTitle(e.target.value)}
          value={title}
        />
        </div>
        <div className="form-group date">
          <label htmlFor="address">Date du début de la campagne</label>
          <DatePicker
            className='date-picker'
            dateFormat="dd-MM-yyyy"
            selected={date}
            onChange={handleDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Déscription de la campagne</label>
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
          <label htmlFor="remuneration">Rémunération de la campagne</label>
          <input 
          type="number" 
          name="remuneration"
          className="form-control"
          value={remuneration}
          onChange={e=>setRemuneration(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse du lieu de vente</label>
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
          onClick={()=>submitData()}
          >Enregister le nouveau point de vente</div>
          <div 
          type="submit" 
          className="btn btn-primary"
          onClick={()=>revealData()}
          >Résumé</div>
        </div>
      </form>
    </div>
  )
}