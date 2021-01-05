require('dotenv').config();
const express = require('express'); 
const morgan = require('morgan');
const app = express(); 
const mongoose = require('mongoose');
const routes = require("./routes")

mongoose.connect(
    "mongodb://localhost:27017/uploads",
    {
        useNewUrlParser: true, 
    }
)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(routes);
app.listen(3000);