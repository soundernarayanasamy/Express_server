import express from 'express';

const app = express();
var port = 100;
app.listen(port, ()=>{
    console.log('The server is ready at port '+port+'.');
});