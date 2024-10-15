const dotenv = require('dotenv')

dotenv.config()

const konfig = {
    port: process.env.PORT || 3001
}

module.exports = konfig