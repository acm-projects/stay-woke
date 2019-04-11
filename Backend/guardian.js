const request = require('request')
const {PythonShell} = require('python-shell')

const key = '&api-key=14344d2d-2666-4857-96f8-18d26eed83bd'
const content = 'https://content.guardianapis.com/search?'
let tags = ''

let currDate = new Date(Date.now())
currDate = new Date(currDate.getTime() - (currDate.getTimezoneOffset() * 60000))
currDate = currDate.toISOString().substring(0, 10)

const query = 'show-references=author'
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

            //log(results)
            
            resolve(results)
        })   
    })
     
}

function search (searchTerms) {
    searchTerms.forEach((term) => {
        tags += term
    })
}

async function getAllTags(results) {
    let articles = []
    
    let tags = []
    let promises = []
    for (let i = 0; i < results.length; i++) {
        let result = results[i]
        promises[i] = new Promise((resolve, reject) => {
            resolve(getTags(result.webUrl))
        })
    }

    tags = await Promise.all(promises)
    let onNames = false
    
    for (let i = 0; i < results.length; i++) {
        let tagsLength
        if (tags[i] != null) {
            tagsLength = tags[i][0]
        }
        else {
            continue
        }
        
        let tagList = tags[i].splice(1, 1 + tagsLength)
        let nameList

        if (!(1 + tagsLength > tags.length)) {
            nameList = tags[i].splice(1 + tagsLength)
        }
        
        
        articles.push({
            author: '',
            title: results[i].webTitle,
            link: results[i].webUrl,
            tags: tagList,
            names: nameList
        })
    }
    return articles
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
