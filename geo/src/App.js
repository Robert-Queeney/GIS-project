import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class App extends Component {

  state = {
    crimes: ""
  }

  async componentDidMount() {
    const url = 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/PoliceOffense2016/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ crimes: data.features })
    console.log(this.state.crimes[0])
    // console.log(this.state.crimes.features[0].geometry.x)
  }

  render() {
    return (
      <MapContainer center={[44.986656, -93.258133]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Need to map over crimes and put points on the map */}
          {/* {this.state.crimes.map(crime => { */}
            <Marker position={[44.986656, -93.258133]}>
            
            {/* <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
          </Marker>
           {/* })} */}
          

        

      </MapContainer>



    );
  }
}

export default App;
