const request = require('request')

const key = '14344d2d-2666-4857-96f8-18d26eed83bd'
const content = 'https://content.guardianapis.com/search?'
const query = 'q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='
const log = console.log
const url = content + query + key

function getUrls() {
	request({ url : url, json : true }, (error, response) => {
    const data = response.body.response
    const results = data.results
    let urls = []
  
    results.forEach((result) => {
      urls.push(result.webUrl)
    })
    
    log(urls)
  })
}

module.exports = {
    getUrls: getUrls
}
