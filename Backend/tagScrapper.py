import requests, sys
from bs4 import BeautifulSoup

def getTags():
    url = sys.argv[1]
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')
    
    keyWords = [
        'gun', 'guns', 'rifle',
        'assault rifle', 'firearm',
        'firearms', 'healthcare', 'money',
        'brexit'
    ]

    namesList = [
        'Bernie', 'Sanders', 'Bernie Sanders'
        'Trump', 'Pence', 
        'Obama', 'Biden', 
        'Bush', 'Cheney',
        'Theresa May', 
        'Barr', 'Pelosi'
        
    ]

    tagCount = {}
    nameCount = {}

    tags = []
    names = []

    for i in range(1, 7):
        for header in soup.findAll('h' + str(i)):
            text = header.getText().strip()
            for keyWord in keyWords:
                if keyWord.lower() in text.lower():
                    tagCount[keyWord] = tagCount.get(keyWord, 0) + 1
            for name in namesList:
                if name.lower() in text.lower():
                    nameCount[name] = nameCount.get(name, 0) + 1


    for paragraph in soup.findAll('p'):
        text = paragraph.getText().strip()
        for keyWord in keyWords:
            if keyWord.lower() in text.lower():
                tagCount[keyWord] = tagCount.get(text, 0) + 1
        for name in namesList:
            if name.lower() in text.lower():
                nameCount[name] = nameCount.get(name, 0) + 1

    # for link in soup.findAll('a'):
    #     text = link.getText().strip()
    #     for keyWord in keyWords:
    #             if keyWord.lower() in text.lower():
    #                 tagCount[keyWord] = tagCount.get(text, 0) + 1

    tags = sorted((key) for (key, value) in tagCount.items())
    tags.reverse()

    names = sorted((key) for (key, value) in nameCount.items())
    names.reverse()

    #print(page.text)
    for tag in tags:
        print(len(tags))
        print(tag)

    for name in names:
        print(name)

if __name__ == '__main__':
    getTags()