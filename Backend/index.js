const express = require('express');
const fs = require('fs');
var request = require('request');

const app = express();

const port = process.env.PORT || 3000;

// Set up the server
app.listen(port, () => {
		
	console.log(`listening affectionitaly on ${port}`);
	nyt();

});


const nytKey = 'api-key=XVQV1pgzfOh29l92vJSdJ62ExS0K5clZ';
const source = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
const articleTopic = 'q=election&'

const url = source + articleTopic + nytKey;

function nyt(){
	request({url: url, json: true}, (error, response, body) => {
		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); 
	});
}


// app.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=XVQV1pgzfOh29l92vJSdJ62ExS0K5clZ', (res, req) => {

// 		console.log(res);

// })