import requests
import xmltodict
import json
from bs4 import BeautifulSoup
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
POLICE_KEY = os.getenv("POLICE_KEY")


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

daejeon_data = []


def daejeon():
    url = f'http://www.utic.go.kr/guide/imsOpenData.do?key={POLICE_KEY}'
    # params = {'serviceKey': POLICE_KEY,'pageNo': '10', 'numOfRows': '50'}

    response = requests.get(url)
    xmlData = response.text
    jsonStr = json.dumps(xmltodict.parse(xmlData), indent=4)
    dict = json.loads(jsonStr)
    data = dict['result']['record']
    # print(data[0]['addressJibun'])
    for i in range(len(data)):
        if "대전" in data[i]['addressJibun']:
            daejeon_data.append(data[i])
    return daejeon_data


daejeon()


# def daejeon_accident():
#     daejeon_accident = []
#     daejeon_construction = []
#     daejeon_control = []
#     for i in range(len(daejeon_data)):
#         if "사고" in daejeon_data[i]['incidentTitle']:
#             daejeon_accident.append(daejeon_data[i])
#         if "공사" in daejeon_data[i]['incidentTitle']:
#             daejeon_construction.append(daejeon_data[i])
#         if "통제" in daejeon_data[i]['incidentTitle']:
#             daejeon_control.append(daejeon_data[i])
#     print(daejeon_accident, daejeon_construction, daejeon_control)


# daejeon_accident()
