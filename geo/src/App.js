import logo from './logo.svg';
import './App.css';
import React,  { Component, Fragment } from 'react';
import axios from 'axios';
import Map from './components/Map';

class App extends Component {
  state = {
    incidents: [],
  }
  
  // async componentDidMount() {
  //  const res = await axios.get('https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Police_Incidents_2021/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json', {
 
  //  })
  //  const incidents = res.data;
  //  this.setState({incidents: incidents });
  // };
  
  render() {
   return (
  <Map />
   );
  }
  }

export default App;
