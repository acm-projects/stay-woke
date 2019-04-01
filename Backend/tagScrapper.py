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
            headers.append(header.getText())

    paragraphs = []
    for paragraph in soup.findAll('p'):
        paragraphs.append(paragraph.getText())

    links = []
    for link in soup.findAll('a'):
        links.append(link.getText())


    

    return tags

if __name__ == '__main__':
    getTags()