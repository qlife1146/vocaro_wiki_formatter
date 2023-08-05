import requests
from bs4 import BeautifulSoup as bs

artist_names = []
artist_links_tmp = []
artist_links = []
vocaro_names = []
vocaro_links_tmp = []
vocaro_links = []

def crawling(url):
    res = requests.get(url)
    soup = bs(res.text, 'html.parser')
    items = soup.select("#page-content > ul > li")

    for item in items:
        name = item.select_one("#page-content > ul > li > a").text
        link = item.select_one("#page-content > ul > li > a")['href']
        artist_names.append(name)
        artist_links_tmp.append(link)
        
def crawling_2(url):
    res = requests.get(url)
    soup = bs(res.text, 'html.parser')
    items = soup.select("#page-content > p")
    
    for item in items:
        name = item.select_one("#page-content > p > a").text
        link = item.select_one("#page-content > p > a")['href']
        artist_names.append(name)
        artist_links_tmp.append(link)
        
        
def crawling_singer(url):
    res = requests.get(url)
    soup = bs(res.text, 'html.parser')
    
    items = soup.select("#page-content > ul > li")

    for item in items:
        name = item.select_one("#page-content > ul > li > a").text
        link = item.select_one("#page-content > ul > li > a")['href']
        vocaro_names.append(name)
        vocaro_links_tmp.append(link)
        
    print(vocaro_names)

crawling("http://vocaro.wikidot.com/artist-etc")
crawling_2("http://vocaro.wikidot.com/artist-1")
crawling_2("http://vocaro.wikidot.com/artist-2")
crawling_singer("http://vocaro.wikidot.com/singers")


for i in range(len(artist_links_tmp)):
    artist_links.append(artist_links_tmp[i][1:])
    
for i in range(len(vocaro_links_tmp)):
    vocaro_links.append(vocaro_links_tmp[i][1:])

with open("artist_list.jsp", "w", encoding="utf-8") as f:
    f.write("const artist_names = " + str(artist_names) + '\n')
    f.write("const artist_links = " + str(artist_links) + '\n')
    
with open("vocaro_list.jsp", "w", encoding="utf-8") as f:
    f.write("const vocaro_link_list = " + str(vocaro_links) + '\n')
    f.write("const vocaro_name_list = " + str(vocaro_names) + '\n') 