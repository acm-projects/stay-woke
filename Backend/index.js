const express = require('express')
const fs = require('fs')
var request = require('request')
var nyt = require('./nyt')

const app = express()
const log = console.log
const port = process.env.PORT || 3000;

const gKey = '14344d2d-2666-4857-96f8-18d26eed83bd'
const gContent = 'https://content.guardianapis.com/search?'
const gQuery = 'q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='

const url = gContent + gQuery + gKey

// Set up the server
app.listen(port, () => {
		
	console.log(`listening affectionately on ${port}`);
	nyt();
	guardian();

});

function guardian(){
	request({ url : url, json : true }, (error, response) => {
    const gData = response.body.response
    const gResults = gData.results
    let gUrls = []
  
    gResults.forEach((article) => {
      gUrls.push(article.webTitle)
    })
    
    log(gUrls)
  })
}
