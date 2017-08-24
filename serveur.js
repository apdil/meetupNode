const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected');
})