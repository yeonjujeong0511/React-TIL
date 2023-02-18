import axios from 'axios';

const client = axios.create();

/*
* axios 인스턴스 생성
* 글로벌 설정 예시 : 
//API 주소를 다른 곳으로 사용함
client.defaults.baseURL = "http://external-api-server.com/"

// 헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'

// 인터셉션 설정
axios.intercepter.reponse.use(\
  response => {
  // 요청 성공시 특정 작업 수행
    retrun response;
  },
  error => {
  // 요청 실패시 특정 작업 수행
    return Promise.reject(error);
  }
})

*/

export default client;
