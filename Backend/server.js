const express = require('express');
const app = express();
const cors = require('cors')

// configuratoin
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "*",
    exposedHeaders: ['Content-Disposition','Access-Control-Allow-Origin']
}));

// api
app.use('/aadhar', require('./Aadhar/aadhar.controller'))

const port = 7500;
app.listen(port,()=>{
    console.log("Server running on "+port);
})
