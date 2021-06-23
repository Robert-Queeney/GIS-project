// import logo from './logo.svg';
// import './App.css';
// import React, { Component, Fragment } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       crimes: []
//     }
//   }


//   componentWillMount() {
//     this.loadData()
//     console.log(this.state.crimes)
//   }

//   async loadData() {
//     const url = 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/PoliceOffense2016/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'
//     const response = await fetch(url)
//     const data = await response.json()
//     this.setState({ crimes: data.features })
//     console.log(this.state.crimes)
//   }

//   render() {
//     if (!this.state.crimes) {
//       return <div />
//     }

//     return (
//       <MapContainer center={[44.986656, -93.258133]} zoom={13} scrollWheelZoom={true}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Need to map over crimes and put points on the map */}
//         {this.state.crimes.map(crime => {
//           <Marker
//             // key={crime.attributes.ESRI_OID}
//             position={[crime.geometry.y, crime.geometry.x]}>

//           </Marker>
//         })}




//       </MapContainer>



//     );
//   }
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Form from './components/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      crimes: []
    };
  }


  componentWillMount() {
    this.loadData()
    console.log(this.state.crimes)
  }

  async loadData() {
    const url = 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/PoliceOffense2016/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=json'
    const response = await fetch(url)
    const data = await response.json()
    const crimes = this.state.crimes
    crimes.push(...data.features)
    // this.setState({ crimes: data.features })
    this.setState ({crimes})
    console.log(this.state.crimes)
  }

  render() {
   

    return (
      <div>
      <MapContainer center={[44.986656, -93.258133]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://os.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          {this.state.crimes.map(crime => 
          <Marker 
            key={`marker-${crime.attributes.ESRI_OID}`}
            position={[crime.geometry.y, crime.geometry.x]}>

          </Marker>
        )}


      </MapContainer>
      <Form />
      </div>



    );
  }
}

export default App;