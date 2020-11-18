const express = require('express')

const app = express();
const WS_PORT = 4000;
// Web Socket Server
const wsServer = app.listen(WS_PORT, () => {
    console.log(`Web socket server is running on port ${WS_PORT}`)
})

// Home Page serving file
app.use(express.static('public'))