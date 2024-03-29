const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

const SwaggerJSON = require('./swagger.json')
const SwaggerUI = require('swagger-ui-express')

app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(SwaggerJSON))

require("./app/routes/player.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
