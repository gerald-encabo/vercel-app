const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())
app.get('/api/test', (req,res)=>{
    res.json('Hello World Update' + Date.now())
})

if (process.env.API_PORT){
    app.listen(process.env.API_PORT)
} 

module.exports = app