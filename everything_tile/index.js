const reftokenAuth = require("../auth");
const all = require("../all_tile.json");
const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(result => {
    context.log("result");
    context.log(result);
    if(result.status === 200 && result.phone_number){
      all.text = result.phone_number+"";
      let res = {
        status: 200,
        body: all
      }
      return context.done(null, res);
    }else{
      let res = {
        status: 400,
        body: "bad request"
      }
      return context.done(null, res);
    }
  })
  .catch(error => {
    context.log(error);
    context.done(null, ""+error);
  })
}