const express = require('express'); 
// const bodyParser = require("body-parser");
// const cors = require('cors');

const fetch = require('node-fetch');


const app = express();

app.get('/', (req, res) => {
    const apiUrl = 'https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/PoliceOffense2016/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json'

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => { console.log('caught', error.message); });
    // console.log("This is not working")
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001.');
});