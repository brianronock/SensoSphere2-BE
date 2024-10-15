import { config } from 'dotenv'

config()

export const konfig = {
    port: process.env.BE_PORT || 3001,
    fePort: process.env.FE_PORT || 3000,
    mongoURI: process.env.MONGODB_URI,
    //mongoURI: process.env.LOCAL_MONGODB_URI,
    nodeEnv: process.env.NODE_ENV,
    mqttURI: process.env.MQTT_BROKER_URL,


}

