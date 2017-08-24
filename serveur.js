const express = require('express');
const app = express();

app.use(express.static('public'));

<<<<<<< HEAD
app.listen(8080, function(err) {
    if (err) {
=======
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
>>>>>>> d5e73a342c38bc350443d90e006ca92b918e96a7
        console.error(err);
        return;
    }
    console.log('Connected');
})