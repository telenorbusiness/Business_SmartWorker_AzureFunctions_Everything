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
    const action = {
      type: "feedback",
      title: "a joke?",
      message: result
    }

    const res = {
      status: 200,
      body: action
    };
    
    context.done(null, res);
  })
}