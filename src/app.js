const express = require('express')
const app = express()
const port = 7000
const routes = require('./routes/index')

app.use(express.static("src/public"))
app.use(express.json())
app.use(routes)
app.use(express.urlencoded({ extended: false }))
app.listen(port, () => console.log(`The server is runing on port:${port}`))