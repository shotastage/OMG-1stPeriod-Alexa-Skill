var express = require("express");
var alexa = require("alexa-app");
var express_app = express();

var app = new alexa.app("omg-1st-period");

app.intent("number", {
    "slots": { "number": "AMAZON.GetNewFactIntent" },
    "utterances": ["開発中"]
  },
  function(request, response) {
    response.say("開発中です。");
  }
);

app.express({ expressApp: express_app });
