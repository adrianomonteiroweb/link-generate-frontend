const axios = require("axios");

export function phoneVerify(phone) {
  const regex = /^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}-[0-9]{4}$/g;

  return regex.test(phone);
}

export function fetch(request) {
  return axios.post("https://link-generate-backend.herokuapp.com/", request);
}
