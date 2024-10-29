const express = require("express");
const cors = require("cors");
//const cookieParser = require("cookie-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');
const dotenv = require("dotenv");
const formRoutes = require("./routes/formRoutes");
const path = require("path");

dotenv.config();
const app = express();

app.use(cors());
//app.use(cookieParser());
app.use(express.json());

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send('Hello');
});

//api routes
app.use("/v1", formRoutes);

app.listen(8000, () => {
  console.log("server is running !!!");
});
