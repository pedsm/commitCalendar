require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { fetchCalendar } = require('./github')
const { log } = console

const PORT = 3001 | process.env.PORT

app.use(bodyParser.json())
app.use((req, res, next) => {
  log(`${new Date().toISOString()} ${req.method} ${req.url}`)
  next()
})

app.listen(PORT, () => {
  log(`🚀 backend running on port ${PORT}`)
})

app.post('/commit', async (req, res) => {
  const { github, gitlab } = req
  try {
    const data = await fetchCalendar('a')
    res.json({
      ...data
    })
  }catch(e) {
    res.json({
      error: e.message
    })
  }
})