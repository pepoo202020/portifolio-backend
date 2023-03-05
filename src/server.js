const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connect = require('./config/db')
const project = require('./routes/project')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connect()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ['https://mern-portifolio.onrender.com/']
}))

app.get('/', (_req, res) => {
    res.status(200).json({ success: true, message: 'hello from server' })
})

app.use('/projects', project)

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})