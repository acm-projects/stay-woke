const express = require('express')
const request = require('request')
const app = express()
const fs = require('fs')
const gKey = '14344d2d-2666-4857-96f8-18d26eed83bd'
const gContent = 'https://content.guardianapis.com/search'
const gQuery = '?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='

const url = gContent + gQuery + gKey

const log = console.log
const port = process.env.PORT || 3000

app.listen(port, () => log(`listening affectionitaly on ${port}`))

request({ url : url, json : true }, (error, response) => {
  const gData = response.body.response
  const gResults = gData.results
  let gUrls = []

  gResults.forEach((article) => {
    gUrls.push(article.webTitle)
  })
  
  log(gUrls)
})

