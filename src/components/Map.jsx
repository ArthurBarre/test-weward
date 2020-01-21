import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../assets/images/logo.png'
import {api_key} from '../constants';

const MarkerEvent = () =>(
  <div>
    <img className='logo-maps' src={logo} alt='logo'></img>
  </div>
);

class EventMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: 48,
        lng: 2.33
      },
      zoom: 5
    };
  }

  render() {
    let location = this.props.location;

    return (
      <div style={{ height: '350px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }
        >
          <MarkerEvent
            lat={ location.lat }
            lng={ location.lng }
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default EventMap;