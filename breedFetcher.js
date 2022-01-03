const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search';

request(url, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  const data  = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});