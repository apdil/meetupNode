const express = require('express');
const app = express();

app.use(express.static('public'));

app.post(
    "/",
    bodyParser.urlencoded({ extended: true }),
    function(request, response) {
        console.log(request.body);
        response.send("Success!")
    }
);

app.listen(8080, function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log('Connected');
})