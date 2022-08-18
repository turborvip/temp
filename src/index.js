const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
const server = app.listen(process.env.PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});