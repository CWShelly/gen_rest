const express = require('express');
const app = express();
// var port = process.env.PORT = 1234;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));
// app.use(express.static('./app'));


// app.get('*', (req, res)=>{
//     console.log('New request:', req.url);
//     response.sendFile('index.html', { root: './app'});
// });

app.listen((app.get('port')), ()=>{
    console.log('up on ', app.get('port'));
});
