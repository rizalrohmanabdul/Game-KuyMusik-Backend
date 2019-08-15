require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const app = express()
const port = process.env.SERVER_PORT || 3333

const userRoute = require('./src/routes/users')
const pointRoute = require('./src/routes/point')
const patternRoute = require('./src/routes/pattern')
const soundRoute = require('./src/routes/sound')

const whitelist = process.env.WHITELIST

const corsOptions = (req, callback) => {
  if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback(membernull, {
      origin:false
    })
  }
} 

app.use(cors());
app.options('*', cors(corsOptions))
app.use(xssFilter())
app.use(logger('dev'))

app.listen(port, () => {
  console.log(`\n App ini berjalan di port/ App listening on port ${port} \n `)
})

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: false })) // body type
app.use(`/users`, userRoute)
app.use(`/point`, pointRoute)
app.use(`/pattern`, patternRoute)
app.use(`/sound`, soundRoute) 
