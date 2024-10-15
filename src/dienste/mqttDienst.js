import mqtt from 'mqtt'
import { Sensor } from '../modelle/Sensor.js'
import { broadcastData } from './webSocketDienst.js'
import { konfig } from '../konfiguration/konfig.js'

let io

const client = mqtt.connect(konfig.mqttURI)

client.on('connect', () => {
    console.log('MQTT Broker Verbindung Erfolgreich!')

    client.subscribe('sensors/temperature')
    client.subscribe('sensors/humidity')
})

client.on('message', async (topic, message) => {
    let type = ''
    if (topic === 'sensors/temperature') {
        type = 'temperature'
    } else if (topic === 'sensors/humidity') {
        type = 'humidity'
    }

    if(type) {
        const sensorData = {
            type,
            value: parseFloat(message.toString()),
        }
        
        try {
            const sensor = new Sensor(sensorData)
            await sensor.save()
            broadcastData('sensorData', sensorData)

        } catch (error) {
            console.error(`Failed to save sensor data:`, error)
        }
    }
})

export const initMqttSocket = (socketIo) => {
    io = socketIo
}
