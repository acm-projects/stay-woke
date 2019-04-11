import scrapy, sys

class GuardianSpider(scrapy.Spider):
    name = "tags"

    keyWords = [
        'gun', 'guns', 'rifle',
        'assault rifle', 'firearm',
        'firearms', 'healthcare', 'money',
        'brexit'
    ]

    namesList = [
        'Bernie', 
        'Trump', 'Pence', 
        'Obama', 'Biden', 
        'Bush', 'Cheney',
        
    ]

    tagCount = {}
    nameCount = {}

    tags = []
    names = []

    def start_requests(self):
        urls = sys.argv[1]

        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)
    

    def parse(self, response):
        for i in range(1, 7):
            for header in response.css('h' + str(i)):
                text = header.getText().strip()
                for keyWord in self.keyWords:
                    if keyWord.lower() in text.lower():
                        self.tagCount[keyWord] = self.tagCount.get(keyWord, 0) + 1
                for name in self.namesList:
                    if name.lower() in text.lower():
                        self.nameCount[name] = self.nameCount.get(name, 0) + 1        
