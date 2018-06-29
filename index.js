const express = require("express");
const fetch = require("fetch");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/url", (req, res) => {
  const options = {
    headers: {
      Authorization: "Token 8691b66c9198e00b32eafafaf64f5be5f6e05840"
    }
  };

  fetch.fetchUrl(req.query.url, options, function(error, meta, body) {
    res.send(body.toString());
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Example app listening on port 3000!")
);
