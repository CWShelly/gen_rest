const express = require('express');
const app = express();
var port = process.env.PORT = 1234;

app.use(express.static(__dirname + '/app'));
// app.use(express.static('./app'));


// app.get('*', (req, res)=>{
//     console.log('New request:', req.url);
//     response.sendFile('index.html', { root: './app'});
// });

app.listen(port, ()=>{
    console.log('up on ' + port);
});
