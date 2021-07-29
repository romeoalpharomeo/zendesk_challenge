const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
let encoded = btoa('ryanrey0333@gmail.com:romeoalpha123!');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 8000;

// require('./server/routes/product.routes')(app);
app.get('/api/home', (req,res) => {
    console.log('hello')
    axios.get('https://zccryanreynolds.zendesk.com/api/v2/tickets.json?page[size]=25', {
                headers: { 
                    'Authorization': `Basic ${encoded}`,
                }
            })
            .then(responsefromapi => {
                console.log(responsefromapi.data)
                res.json({results: responsefromapi.data})
            })
            .catch(err=>{
                console.log(err)
            })
})

app.post('/api/pages', (req,res) => {
    const { linkTo } = req.body;
    console.log('hello')
    axios.get(`${linkTo}`, {
                headers: { 
                    'Authorization': `Basic ${encoded}`,
                }
            })
            .then(responsefromapi => {
                console.log(responsefromapi.data)
                res.json({results: responsefromapi.data})
            })
            .catch(err=>{
                console.log(err)
            })
})

app.listen(port, () => console.log(`Listening on port: ${port}`) );

