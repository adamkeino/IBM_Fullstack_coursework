const express = require('express') //Importing the express framework

const app = express() //Creating an app instance object from the framework
const port = 3000 // 

//creating the route handler to handle http requests
app.get('/temperature/:location', function(request,response)/*listening to http GET requests to the /temperature resource path */{
    let location = request.params.location_code; // storing the value in location

    weather.current(location, function(error, temp_f){
        console.log("In the weather app");
    });
});

//start the server on a port
let server = app.listen(port, function(){
    console.log(`Listening on URL http://localhost:${port}`);
})
