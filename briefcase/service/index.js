const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8080;                  //Save the port number where your server will be listening
const http = require('http');

//Idiomatic expression in express to route and respond to a client request

app.get('/callback', async function (req, res) {

    let unlocked = http.get("http:// 192.168.86.39/unlock");
    console.log("callback called ", unlocked)
    return res.status(200).send("hello")
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});