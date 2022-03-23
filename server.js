const express = require('express');
let app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server Listening to :' + port);
})