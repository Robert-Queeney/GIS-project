const express = require('express'); 
// const bodyParser = require("body-parser");
// const cors = require('cors');

const fetch = require('node-fetch');


const app = express();

app.get('/', (req, res) => {
    const apiUrl = 'https://gis.hennepin.us/arcgis/rest/services/HennepinData/PLACES/MapServer/8/query?outFields=*&where=1%3D1'

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => { console.log('caught', error.message); });
    // console.log("This is not working")
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001.');
});