import React from 'react';
import '../index.css';
import {useSelector} from 'react-redux';


export default () => {
  const data = useSelector(state => state);
  console.log(data)

  return(
  <div className='render'>
    <div>Titre de la campagne : {data.title}</div>
    <div>Date du début de la campagne : {data.date}</div>
    <div>Description de la campagne : {data.desc}</div>
    <div>Rémunération de la campagne : {data.rem}</div>
    <div>Adresse du point de vente de la campagne : {data.address}</div>
  </div>
  )
}