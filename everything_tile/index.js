const reftokenAuth = require("../auth");
const all = require("../all_tile.json");
const Promise = require("bluebird");
const lodash = require("lodash");

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(result => {
    if(result.success === true){
      if(result.phone_number) {
        all.text = result.phone_number+"";
        let res = {
          status: 200,
          body: all
        }
        return context.done(null, res);
      }else{
        let res = {
          status: 400,
          body: "Bad request"
        }
        return context.done(null, res);
      }
    }else{
      let res = {
        status: 200,
        body: result
      }
      return context.done(null, res);
    }
  })
  .catch(error => {
    context.log(error);
    context.done(null, ""+error);
  });
}