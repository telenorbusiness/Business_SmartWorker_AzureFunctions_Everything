const request = require('request-promise');
const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(() => {
    let options = {
      url: 'https://geek-jokes.sameerkumar.website/api',
      method: 'GET'
    }
    return request(options)
  })
  .then(result => {
    action = {
      type: "feedback",
      title: "a joke?",
      message: result
    }

    res = {
      status: 200,
      body: action
    };
    context.done(null, res);
  })
}