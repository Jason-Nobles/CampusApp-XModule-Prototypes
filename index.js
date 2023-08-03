const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

const serverless = require('serverless-http');
const axios = require('axios');
const express = require('express');
const jwt = require('jsonwebtoken');
const jwk = require('jwk-to-pem');
const auth = require('./authorization.js')
const ncat = require('./StuDashboard.js')
const course = require('./courses.js')
const dine = require('./dining.js')
const trav = require('./transportation.js')
const lib = require('./library.js')
const dis = require('./bookInfo.js')



// instantiate the express server
const app = express();
// used to get post events as JSON objects correctly
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
let payload = null;



app.get('/studashboard', function(req,res){
    console.log(req);
    console.log(res);

    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)

    let xmJson = ncat.createPortal(payload);
    res.json(xmJson)
});

app.get('/bookInfo', function(req,res){
    console.log(req);
    console.log(res);

    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)
    
    let xmJson = dis.displayInfo()


    res.json(xmJson)
});

app.get('/courses', function(req,res){
    console.log(req);
    console.log(res);
    
    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)

    let xmJson = course.buildCourses(payload);
    res.json(xmJson)
});

app.get('/dining', function(req,res){
    console.log(req);
    console.log(res);

    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)

    let xmJson = dine.createDining(payload);
    res.json(xmJson)
});

app.get('/transportation', function(req,res){
    console.log(req);
    console.log(res);

    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)

    let xmJson = trav.getMap();
    res.json(xmJson)
});

app.get('/library', function(req,res){
    console.log(req);
    console.log(res);

    payload = ('authorization' in req.headers && req.headers.authorization != null) ? auth.getPayload(req.headers.authorization) : null;
    console.log(JSON.stringify(payload))
    console.log(payload)
    
    
    let xmJson = lib.getBookInfo(req)

    global.error = null;
    
    axios.get(global.url).then(response => {
        global.jsonData = response.data;
        console.log(global.jsonData);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        global.error = 'Error';
    });


    res.json(xmJson)
});



module.exports.handler = serverless(app);
