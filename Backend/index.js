const express = require('express')
const app = express()
const fs = require('fs')

const log = console.log
const port = process.env.PORT || 3000

app.listen(port, () => log(`listening affectionitaly on ${port}`))