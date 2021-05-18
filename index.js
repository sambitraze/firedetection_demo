const express = require("express");
const path = require("path");
const cors = require("cors");

const https = require("https");

const app = express();

app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

// app.listen(3000, () =>
//   console.log(`fire detection Server is running on port 3000`)
// );

const httpsServer = https.createServer(
    {
      key: fs.readFileSync(path.resolve(__dirname,'./ssl/privkey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname,'./ssl/fullchain.pem'))
    },
    app
  );


  httpsServer.listen(443, () => {
    console.log("HTTPS Server running on port 443");
  });