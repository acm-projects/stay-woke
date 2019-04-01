import requests, sys
from bs4 import BeautifulSoup

def getTags():
    url = sys.stdin.readlines()[0]
    page = requests.get(url.strip())
    soup = BeautifulSoup(page.text, 'html.parser')
    
    wordCount ={}

    tags = []

    headers = []
    for i in range(1, 7):
        for header in soup.findAll('h' + str(i)):
            text = header.getText().replace('\n', '')
            wordCount[text] = wordCount.get(text, 0) + 1

    for paragraph in soup.findAll('p'):
        text = paragraph.getText()
        wordCount[text] = wordCount.get(text, 0) + 1

    links = []
    for link in soup.findAll('a'):
        text = link.getText()
        wordCount[text] = wordCount.get(text, 0) + 1




    return tags

if __name__ == '__main__':
    getTags()