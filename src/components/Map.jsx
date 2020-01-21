import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import logo from '../assets/images/logo.png'
import { api_key } from '../constants';

const MarkerEvent = () =>(
  <div>
    <img className='logo-maps' src={logo} alt='logo'></img>
  </div>
);

export default () => {
  const location = useSelector(state => state.location);
  const [viewPort, setViewport] = useState({
    center: {
      lat: 48,
      lng: 2.33
    },
    zoom: 5
  })
  return(
    <div style={{ height: '350px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: api_key }}
      defaultCenter={ viewPort.center }
      defaultZoom={ viewPort.zoom }
    >
      <MarkerEvent
        lat={ location.lat }
        lng={ location.lng }
      />
    </GoogleMapReact>
  </div>
  )
}