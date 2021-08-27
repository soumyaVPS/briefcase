const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8080;                  //Save the port number where your server will be listening
const http = require('http');


app.get('/callback', async function (req, res) {

    var options = {
        host: '192.168.86.39',
        port: '80',
        path: '/unlock',
        method: 'POST',
    };

    // Set up the request
    var post_req = http.request(options, function(res) {
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    post_req.write("");
    post_req.end();

    return res.status(200).send("hello")
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});