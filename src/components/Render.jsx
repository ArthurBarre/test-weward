import React from 'react';
import MapContainer from './Map'

import '../index.css';
import {useSelector} from 'react-redux';


export default () => {
  const data = useSelector(state => state);
  console.log(data)

  return(
  <div className='render'>
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.desc}</p>
      <div className="card-text">Date du début de la campagne : <strong>{data.date}</strong> </div>
      <MapContainer title={data.title} location={data.location} center={data.location} className='map'/>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Adresse du point de vente de la campagne : <strong>{data.address}</strong> </li>
        <li className="list-group-item">Rémunération de la campagne <strong>{data.rem}</strong> </li>
      </ul>
      <div className="card-body">
        <a className="card-link">Save</a>
      </div>
    </div>
  </div>
  )
}