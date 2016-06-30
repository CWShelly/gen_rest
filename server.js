const express = require('express');
const app = express();

app.use(express.static(__dirname + '/app'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.listen(3000, ()=>{
    console.log('up on 3000');
});
