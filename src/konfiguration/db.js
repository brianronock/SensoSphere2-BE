import mongoose from 'mongoose'
import { konfig } from './konfig.js'

export const connectDB = async() => {
    try {
        const connect = await mongoose.connect(konfig.mongoURI)
        console.log(`MongoDB Verbindung Erfolgreich: ${connect.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}