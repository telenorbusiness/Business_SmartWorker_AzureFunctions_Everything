const reftokenAuth = require("../auth");
const all = require("../all_tile.json");
const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
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