const Moment = require('moment')

// This file is edited in feature/homepage/master

// This file is edited in feature/homepage/edit-comment

exports.handler = function (callback) {
  const response = `[${Moment()}] Hello world!`

  callback(null, response)
}