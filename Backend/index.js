const express = require('express')
const fs = require('fs')
const nyt = require('./nyt')
const guardian = require('./guardian')

const app = express()
const log = console.log
const port = process.env.PORT || 3000

// Set up the server
app.listen(port, () => {
		
	console.log(`listening affectionately on ${port}`)
	//nyt()
	log(guardian.getPages())
});


// [
// 	{
// 		Author: '',
// 		Title: '',
// 		link: '',
// 		tags: [],
// 		names: []
// 	},
// 	{
// 		Author: '',
// 		Title: '',
// 		link: '',
// 		tags: [],
// 		names: []
// 	},
// ]