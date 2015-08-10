var http = require('http');

exports.sendPrivMsg = function (apiType, captcha, from_sr, iden, subject, text, to, modhash){
  var options = {
    host: 'www.reddit.com',
    port: '80',
    method: 'POST',
    path: '/api/compose'
  }
}
