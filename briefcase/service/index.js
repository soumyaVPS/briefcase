const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8080;                  //Save the port number where your server will be listening
const https = require('https');

//Idiomatic expression in express to route and respond to a client request

app.get('/callback', async function (req, res) {
    //let unlocked = https.get("http://a.b.c.d/unloc?${req.query.code}");
    console.log("callback called")
    return res.status(200).send("hello")
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});