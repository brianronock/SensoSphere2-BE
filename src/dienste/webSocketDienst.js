import { Server } from "socket.io"
import { konfig } from '../konfiguration/konfig.js'

let io
const frontendURI = `http://localhost:${konfig.fePort}`

export const initWebSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: frontendURI,
            methods: ['GET', 'POST'],
        },
    })

    io.on('connection', (socket) => {
        console.log(`WebSocket connected: ${socket.id}`)

        socket.on('disconnect', () => {
            console.log(`WebSocket disconnected: ${socket.id}`)
        })
    })
    return io
}

export const broadcastData = (channel, data) => {      // example usage: broadcastData('sensorData', sensorData) or broadcastData('liveFeedPost', newPost)
    if (io) {
        io.emit(channel, data)
    }
}