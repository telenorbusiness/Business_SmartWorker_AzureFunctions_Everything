const request = require('request-promise')

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(result => {
    let options = {
      url: 'https://geek-jokes.sameerkumar.website/api',
      method: 'GET'
    }
    return request(options)
  })
  .then(result => {
    res = {
      status: 200,
      body: result.body
    }
    context.done(null, res)
  })
}