import requests, sys
from bs4 import BeautifulSoup

def getTags():
    url = sys.argv[1]
    page = requests.get(url.strip())
    soup = BeautifulSoup(page.text, 'html.parser')
    
    keyWords = [
        'gun', 'guns', 'rifle',
        'assault rifle', 'firearm',
        'firearms', 'healthcare', 'money',
        'brexit'
    ]

    wordCount = {}

    tags = []

    for i in range(1, 7):
        for header in soup.findAll('h' + str(i)):
            text = header.getText().strip()
            for keyWord in keyWords:
                if keyWord.lower() in text.lower():
                    wordCount[keyWord] = wordCount.get(text, 0) + 1

    for paragraph in soup.findAll('p'):
        text = paragraph.getText().strip()
        for keyWord in keyWords:
                if keyWord.lower() in text.lower():
                    wordCount[keyWord] = wordCount.get(text, 0) + 1

    for link in soup.findAll('a'):
        text = link.getText().strip()
        for keyWord in keyWords:
                if keyWord.lower() in text.lower():
                    wordCount[keyWord] = wordCount.get(text, 0) + 1

    tags = sorted((value, key) for (key, value) in wordCount.items())
    tags.reverse()

    for tag in tags:
        print(tag[1])

if __name__ == '__main__':
    getTags()