import dotenv from 'dotenv'

dotenv.config()

export default {
    app : {
        port : Number(process.env.APP_PORT) || 8000
    },
    dp : {
        connectionString : (process.env.MONGO_CONNECTION_STRING)
    }
}