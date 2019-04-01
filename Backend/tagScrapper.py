import requests, sys
from bs4 import BeautifulSoup

def getTags():
    url = sys.argv[1]
    page = requests.get(url.strip())
    soup = BeautifulSoup(page.text, 'html.parser')
    
    keyWords = [
        'gun', 'guns', 'rifle',
        'assault rifle', 'firearm',
        'firearms'
    ]

    wordCount ={}

    tags = []

    for i in range(1, 7):
        for header in soup.findAll('h' + str(i)):
            text = header.getText().strip()
            if text in keyWords:
                wordCount[text] = wordCount.get(text, 0) + 1

    for paragraph in soup.findAll('p'):
        text = paragraph.getText().strip()
        if text in keyWords:
            wordCount[text] = wordCount.get(text, 0) + 1

    for link in soup.findAll('a'):
        text = link.getText().strip()
        if text in keyWords:
            wordCount[text] = wordCount.get(text, 0) + 1

    for key in wordCount.keys():
        tags.append(wordCount[key])

    tags.sort()

    return tags

if __name__ == '__main__':
    getTags()