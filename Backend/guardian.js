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

async function getUrls (apiUrl) {
    return new Promise((resolve, reject) => {
        if (apiUrl == null) {
            apiUrl = defaultUrl
        }
    
        request({ url : apiUrl, json : true }, (err, response) => {
            if (err) {
                reject(err)
            }
    
            const data = response.body.response
    
            resolve(data.results)
            //return data.results
        })
    })
    
}

function getTags (url) {
    let options = {
        mode: 'text',
        args: [url]
    } 

    return new Promise((resolve, reject) => {
        PythonShell.run('tagScrapper.py', options, (err, results) => {
            if (err) {
                 reject(err)
            }
            
            resolve(results)
            //return results
        })   
    })
     
}

function search (searchTerms) {
    searchTerms.forEach((term) => {
        tags += term
    })
}

async function getAllTags(results) {
    let pages = []

    for (let i = 0; i < results.length; i++) {
        let result = results[i]
        let tags = await getTags(result.webUrl)
        pages.push({
            title: result.webTitle,
            author: '',
            link: result.webUrl,
            tags: tags
        })
    }

    return pages
}

async function getPages () {

    try {
        let urls = await getUrls(null)
        let pages = await getAllTags(urls)
        return pages
    }
    catch (err) {
        return err
    }
}

module.exports = {
    getPages: getPages
}
