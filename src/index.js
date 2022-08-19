const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
require('../config/connectDB')
const router = require("./routers/router");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/static")));

app.use('/', router);

  
const server = app.listen(process.env.PORT||4000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});