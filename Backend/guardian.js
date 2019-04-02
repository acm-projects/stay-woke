const request = require('request')
const {PythonShell} = require('python-shell')

const key = '14344d2d-2666-4857-96f8-18d26eed83bd'
const content = 'https://content.guardianapis.com/search?'
let tags = ''

let currDate = new Date(Date.now())
currDate = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000))
currDate = currDate.toISOString().substring(0, 10)

const query = 'q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key='
const log = console.log
const defaultUrl = content + query + key

function getUrls (apiUrl, callback) {
    if (apiUrl == null) {
        apiUrl = defaultUrl
    }

	request({ url : apiUrl, json : true }, (error, response) => {
        if (error) {
            throw error
        }


        const data = response.body.response
        callback(data.results)
        
  })
}

function getTags (url, callback) {
    let options = {
        mode: 'text',
        args: [url]
    } 

    PythonShell.run('tagScrapper.py', options, (err, results) => {
        if (err) {
            throw err
        }
        
        callback(results)
    })    
}

function search (searchTerms) {
    searchTerms.forEach((term) => {
        tags += term
    })
}

function getPages () {
    getUrls(null, (results) => {
        pages = []
        results.forEach((result) => {
            url = result.webUrl
            getTags(url, (tags) => {
                pages.push({
                    Title: result.webTitle,
                    Author: '',
                    Link: url,
                    Tags: tags
                })

                log(pages)
            })
        })
    })
}

module.exports = {
    getPages: getPages
}
