import requests
import xmltodict
import json
from bs4 import BeautifulSoup
import os

API_KEY = os.environ.get("API_KEY")


def traffic():
    url = 'http://openapitraffic.daejeon.go.kr/traffic/rest/getTrafficInfoAll.do'
    params = {'serviceKey': API_KEY,
              'pageNo': '5', 'numOfRows': '50'}

    response = requests.get(url, params=params)
    xmlData = response.text

    jsonStr = json.dumps(xmltodict.parse(xmlData), indent=4)
    dict = json.loads(jsonStr)
    return dict


# print(traffic())


def parkinglot():
    url = 'http://apis.data.go.kr/6300000/pis/parkinglotIF'
    params = {'serviceKey': API_KEY,
              'pageNo': '10', 'numOfRows': '50'}

    response = requests.get(url, params=params)
    xmlData = response.text

    jsonStr = json.dumps(xmltodict.parse(xmlData), indent=4)
    dict = json.loads(jsonStr)
    print(dict['response']['body']['item'])
    return dict


# parkinglot()

# url = "https://apis.data.go.kr/6300000/pis/parkinglotIF?"
# serviceKey = API_KEY
# numOfRows = '10'
# pageNo = '10'
# # url 조합
# api = f'{url}serviceKey={serviceKey}&numOfRows={numOfRows}&pageNo={pageNo}'
# print(api)
# res = requests.get(api)
# soup = BeautifulSoup(res.text, "html.parser")
# print(soup)
