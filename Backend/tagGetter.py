import requests
from bs4 import BeautifulSoup

def getTags(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')

    tags = []
    print (soup)

    return tags