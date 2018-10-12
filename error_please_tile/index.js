const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
      const all = {
        "type": "text",
        "text": "Feiler dette eller?",
        "subtext": "Ja takk",
        "onClick": {
            "type": "micro-app",
            "apiUrl": "https://saeverything.azurewebsites.net/api/error_please_microapp"
        }
      }
      let res = {
        status: 200,
        body: all
      }
      return context.done(null, res);
  })
  .catch(error => {
    context.log(error);
    context.done(null, ""+error);
  })
}