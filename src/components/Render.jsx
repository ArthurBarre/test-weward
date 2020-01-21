import React from 'react';
import MapContainer from './Map'
import FlashMessage from 'react-flash-message';
import '../index.css';
import {useSelector, useDispatch} from 'react-redux';
import {close} from '../actions/index';


export default () => {
  const data = useSelector(state => state);
  const isSubmited = useSelector(state => state.submit);
  const dispatch = useDispatch()

  const Message = () => (
    <FlashMessage duration={3000}>
      <div className='alert'>
        <strong>I will disapper in 5 seconds!</strong>
        <MapContainer style={{ height:80 }} title={data.title} location={data.location} center={data.location}/>
        <div 
        type="submit" 
        className="btn btn-primary"
        onClick={()=>dispatch(close())}
        >Fermer le récapitulatif</div>
      </div>
    </FlashMessage>
  )
  return(
  <div className='render'>
    {
      isSubmited?<Message/>:null
    }
    <div className="card">
      <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.desc}</p>
      <div className="card-text space"> </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Adresse du point de vente de la campagne : <strong>{data.address}</strong> </li>
        <li className="list-group-item">Rémunération de la campagne <strong>{data.rem}</strong></li>
        <li className="list-group-item">Date du début de la campagne : <strong>{data.date}</strong></li>
      </ul>
      </div>
      <MapContainer title={data.title} location={data.location} center={data.location} className='map'/>
      
      <div className="card-body">
        <a href="https://www.weward.fr/" className="card-link">WeWard</a>
      </div>
    </div>
  </div>
  )
}