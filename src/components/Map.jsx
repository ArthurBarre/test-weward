import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import logo from '../assets/images/logo.png'
import {api_key} from '../constants/constants';
 
const AnyReactComponent = ({title}) => <div>
  <img className='logo-maps' src={logo} alt='logo'/>
  {title}
  </div>;
 
class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: this.props.location.lat,
        lng: this.props.location.lng
      },
      zoom: 11
    };
  }
  componentDidMount(){
    this.setState({
      center:{
        lat:this.props.location.lat,
        lng:this.props.location.lng
      }
    })
  }

  render() {
    let location = this.props.location;
    let title = this.props.title;

    return (
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={location.lat}
            lng={location.lng}
            text={title}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;