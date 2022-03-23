const express = require('express');
let app = express();
let port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server Listening to :' + port);
})