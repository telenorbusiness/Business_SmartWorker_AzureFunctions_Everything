const reftokenAuth = require("../auth");
const all = require("../all_microapp.json");
const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
      let res = {
        status: 500,
        body: "Error: all the error"
      }
      return context.done(null, res);
  })
  .catch(error => {
    context.log(error);
    context.done(null, ""+error);
  })
}