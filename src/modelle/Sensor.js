import mongoose from "mongoose"

export const SensorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
        enum: ['temperature', 'humidity', 'pressure', 'soundlevel', 'lightlevel', 'other'],
    },
    value:{
        type: Number,
        required: true,
        min: 0,
    },
    ownerID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    timetamp:{
        type: Date,
        default: Date.now,
    },
})

export const Sensor = mongoose.model('Sensor', SensorSchema)