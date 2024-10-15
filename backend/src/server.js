const app = require('./app')
const http = require('http')
//const connectDB = require('./konfiguration/db')
//const { initWebSocket } = require('./dienste/webSocketDienst')
//const { initMqttSocket } = require('./dienste/mqttDienst')


// MongoDB verbinden
// connectDB()

// HTTP Server erstellen (fur WebSocket und Express zum teilen)
const server = http.createServer(app)

// WebSocket server initilizieren(mit HTTP Server)
// const io = initWebSocket(server)

// Middleware: fur das WebSocket instanz mit andere routen/dienste teilen
// app.use((req, res, next) => {
//     req.io = io
//     next()
// })

// MQTT Initializieren mit WebSocket
// initMqttSocket(io)

// HTTP Server Starten
const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server läuft auf port ${PORT}`)
})
