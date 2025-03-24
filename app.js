const express = require('express');
const bodyParser = require("body-parser");
require('dotenv/config');

const userRoutes = require("./routes/user.routes.js");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));

app.use("/users", userRoutes);

app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server is runnin and app is listening on port "+ PORT);}
    else{
        console.log("Error occured, server can't start". error);}
});

