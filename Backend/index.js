const express = require('express')
const fs = require('fs')
var request = require('request')

const app = express()
const log = console.log
const port = process.env.PORT || 3000;

const gKey = '14344d2d-2666-4857-96f8-18d26eed83bd'
const gContent = 'https://content.guardianapis.com/search?'
const gQuery = 'q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='

const url = gContent + gQuery + gKey

const nytKey = 'api-key=XVQV1pgzfOh29l92vJSdJ62ExS0K5clZ';
const source = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
const articleTopic = 'q=election&'

const url = source + articleTopic + nytKey;

// Set up the server
app.listen(port, () => {
		
	console.log(`listening affectionitaly on ${port}`);
	nyt();
	guardian();

});

function nyt(){
	request({url: url, json: true}, (error, response, body) => {
		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); 
	});
}

function guardian(){
	request({ url: url, json: true }, (error, response) => {
		const gData = response.body
		log(gData)
	  })
}
