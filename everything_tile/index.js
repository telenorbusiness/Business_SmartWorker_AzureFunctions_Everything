const reftokenAuth = require("../auth");
const all = require("../all_tile.json");
const Promise = require("bluebird");
const lodash = require("lodash");

module.exports = function(context, req) {
  Promise.try(() => {
    return reftokenAuth(req, context);
  })
  .then(result => {
    const messageSuccess = lodash.get(result, "message.success", undefined);
    if(result.status === 200 && (messageSuccess === undefined || messageSuccess)){
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
      throw new atWorkValidateError("Atwork validation error", result);
    }
  })
  .catch(error => {
    context.log(error);
    context.done(null, ""+error);
  })
}

class atWorkValidateError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}