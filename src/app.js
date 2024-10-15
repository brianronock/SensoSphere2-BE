
import express, { json } from 'express'
import cors from 'cors'
import { errorHandler } from './middlewares/errorHandler.js'

// App initializieren
const app = express()
app.use(json())
app.use(cors())


// API Routen



// Global Error Handler
app.use(errorHandler)


export default app