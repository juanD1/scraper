const path = require("path");

const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

//Settings
// app.set('port', process.env.PORT || 3000)
// app.set('views', path.join(__dirname,'views'))
// app.set('view engine', 'pug')

//middlewares
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log("server on port ", port);
});
