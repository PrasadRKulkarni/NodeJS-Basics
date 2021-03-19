var url = require('url');

var address = 'http://localhost:8080/default.html?year=2017&month=february';

var parsedURL = url.parse(address, true);

console.log(parsedURL.hostname);

console.log(parsedURL.pathname);

console.log(parsedURL.query.month);

console.log(parsedURL.query.year);
