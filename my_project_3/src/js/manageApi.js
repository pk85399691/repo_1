const axios = require("axios");
 export default{
  getData:()=> axios({
    "method": "GET",
    "url": "https://jkosgei-free-ip-geolocation-v1.p.rapidapi.com/",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "jkosgei-free-ip-geolocation-v1.p.rapidapi.com",
      "x-rapidapi-key": "6287f05048mshb81a6c977726ad0p1eaec1jsnf8cf5581d17a",
      "useQueryString": true
    }, "params": {
      "api-key": "test"
    }
  })
}

