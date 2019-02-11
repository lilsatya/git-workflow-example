const Moment = require('moment')

exports.handler = function (callback) {
  const response = `[${Moment()}] Hello world!`

  callback(null, response)
}