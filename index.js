const express = require("express");
const fetch = require("fetch");
const app = express();

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/url", (req, res) => {
  const options = {
    headers: {
      Authorization: process.env.token
    }
  };

  fetch.fetchUrl(req.query.url, options, function(error, meta, body) {
    res.send(body.toString());
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening on port 3000!")
);
