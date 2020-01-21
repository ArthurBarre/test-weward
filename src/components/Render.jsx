import React from 'react';
import '../index.css';
import {useSelector} from 'react-redux';


export default () => {
  const location = useSelector(state => state.location);
  const title = useSelector(state => state.title);
  const desc = useSelector(state => state.desc);
  const rem = useSelector(state => state.rem);
  const date = useSelector(state => state.date);
  const address = useSelector(state => state.adress);
  const data = [
    {title:title,
    location:location,
    desc:desc,
    rem:rem,
    date:date,
    address:address}
    ]
  console.log(data)

  return(
  <div className='render'>
    <div>Titre de la campagne : {title}</div>
    <div>Date du début de la campagne : {date}</div>
    <div>Description de la campagne : {desc}</div>
    <div>Rémunération de la campagne : {rem}</div>
    <div>Adresse du point de vente de la campagne : {address}</div>
  </div>
  )
}