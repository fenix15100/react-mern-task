
//https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3

///gfgfgf

const express = require('express');
const path = require('path');
const app = express();


//Log all request to console (Midleware function)
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`) 
  
  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })
  
  next()
}

app.use(logRequestStart)


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/ping', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);