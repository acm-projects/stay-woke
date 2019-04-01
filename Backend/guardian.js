const request = require('request')
const {PythonShell} = require('python-shell')
const pyShell = new PythonShell('tagGetter.py')

const key = '14344d2d-2666-4857-96f8-18d26eed83bd'
const content = 'https://content.guardianapis.com/search?'
let tags = ''

let currDate = new Date(Date.now())
currDate = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000))
currDate = currDate.toISOString().substring(0, 10)

const query = 'q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='
const log = console.log
const defaultUrl = content + query + key

function getUrls (apiUrl) {
    if (apiUrl === null) {
        apiUrl = defaultUrl
    }

	request({ url : url, json : true }, (error, response) => {
    const data = response.body.response
    const results = data.results
    let urls = []
  
    results.forEach((result) => {
      urls.push(result.webUrl)
    })
    
    return urls
  })
}

function getTags (url) {
    pyShell.send(url)

    pyShell.on('message', (message) => {
        log('|' + message + '|')
    })

    pyShell.end((err) => {
        if (err) {
            throw err
        }
    })
}

function search (searchTerms) {
    searchTerms.forEach((term) => {
        tags += term
    })
}

module.exports = {
    getUrls: getUrls,
    getTags: getTags
}
