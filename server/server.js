const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const PORT = 3000;
//node ./server/server.js
// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/api/coins", (req, response) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=10&sort=cmc_rank",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "00621e99-a961-4bae-af28-e4d6afa0b1aa",
        },
      }
    )
    .then(({ data }) => {
      console.log(data);
      response.json(data);
    });
});
app.get("/api/top20", (req, response) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=20&sort=cmc_rank",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "00621e99-a961-4bae-af28-e4d6afa0b1aa",
        },
      }
    )
    .then(({ data }) => {
      response.json(data);
    });
});
app.get("/api/top100", (req, response) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=100&sort=cmc_rank",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "00621e99-a961-4bae-af28-e4d6afa0b1aa",
        },
      }
    )
    .then(({ data }) => {
      response.json(data);
    });
});
app.get("/api/inactivecoins", (req, response) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=30&listing_status=inactive",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "00621e99-a961-4bae-af28-e4d6afa0b1aa",
        },
      }
    )
    .then(({ data }) => {
      response.json(data);
    });
});
// serve index.html on the route '/'
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/
