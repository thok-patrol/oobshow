const express = require('express')
const path = require('path')
const CURR_PATH = process.env.NODE_ENV === 'prod' ? path.join(__dirname, '../dist/') : path.join(__dirname, '../dev/');
const PORT = process.env.NODE_ENV === 'prod' ? 2000 : 3000;
console.log(process.env.NODE_ENV)

const App = express()

App.get('/', (req, res) => {
    res.sendFile(CURR_PATH + 'index.html');
})

App.get('/:uri', (req, res) => {
    res.sendFile(CURR_PATH + req.params.uri)
})

App.listen(PORT, () => {
    console.log('Application is running on port ' + PORT)
})

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(1);
  });