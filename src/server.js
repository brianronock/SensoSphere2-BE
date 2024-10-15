import app from './app.js'
import { createServer } from 'http'
import { connectDB } from './konfiguration/db.js'
import { initWebSocket } from './dienste/webSocketDienst.js'
import { initMqttSocket } from './dienste/mqttDienst.js'
import { konfig } from './konfiguration/konfig.js'


// MongoDB verbinden
 connectDB()

// HTTP Server erstellen (fur WebSocket und Express zum teilen)
const server = createServer(app)

// WebSocket server initilizieren(mit HTTP Server)
const io = initWebSocket(server)

// Middleware: fur das WebSocket instanz mit andere routen/dienste teilen
app.use((req, res, next) => {
    req.io = io
    next()
})

// MQTT Initializieren mit WebSocket
 initMqttSocket(io)

// HTTP Server Starten
const PORT = konfig.port || 3001
server.listen(PORT, () => {
    console.log(`Server läuft auf port ${PORT}`)
})
