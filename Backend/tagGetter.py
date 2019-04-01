import requests, sys
from bs4 import BeautifulSoup

def getTags():
    url = sys.stdin.readlines()
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')

    tags = []
    print (soup)

    return tags

if __name__ == '__main__':
    getTags()