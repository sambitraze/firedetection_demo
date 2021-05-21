const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const http = require("http");

const app = express();

app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

// app.listen(3000, () =>
//   console.log(`fire detection Server is running on port 3000`)
// );

const httpServer = https.createServer(
    app
  );


  httpServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });