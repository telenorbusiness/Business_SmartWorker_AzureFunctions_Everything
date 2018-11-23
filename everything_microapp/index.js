const reftokenAuth = require("../auth");
const all = require("../all_microapp.json");
const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(result => {
    if(result.success === true){
      let res = {
        status: 200,
        body: all
      }
      return context.done(null, res);
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
  })
}