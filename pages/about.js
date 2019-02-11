const Moment = require('moment')

exports.handler = function (callback) {
  const response = `[${Moment()}] This is the about page!`

  callback(null, response)
}
