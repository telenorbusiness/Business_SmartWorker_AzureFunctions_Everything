const Promise = require("bluebird");

module.exports = function(context, req) {
  Promise.try(() => {
      const all = {
        "sections": [{
          "header": "Employees",
          "rows": [{
            "type": "text",
            "title": "Ola Nordmann",
            "text": "+47 123 45 678",
            "thumbnailUrl": "https://myserver.no/img/employees_small/ola_nordmann.jpg",
            "onClick": {
              "type": "action-selection",
              "options": [{
                  "label": "Call",
                  "action": {
                    "type": "open-url",
                    "url": "tel://004712345678"
                  }
                },
                {
                  "label": "Send email",
                  "action": {
                    "type": "open-url",
                    "url": "mailto://ola.nordmann@norge.no"
                  }
                }
              ]
            }
          }]
        }]
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