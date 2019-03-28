
var request = require('request');

const nytKey = 'api-key=XVQV1pgzfOh29l92vJSdJ62ExS0K5clZ';
const nytContent = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const nytQuery = 'q=election&';

const nytUrl = nytContent + nytQuery + nytKey;

module.exports = () => {
    request({url: nytUrl, json: true}, (error, response, body) => {

		if(error){
			console.log('error:', error); // Print the error if one occurred
			return
		} else {
			console.log(body)
			const data = response.body.response.docs;
			const links = [];
			const headlines = [];
			data.forEach((article) => {
				links.push(article.web_url);
				headlines.push(article.headline.main);
			})
			
			console.log(links)
			console.log(headlines)
		}
	});
}