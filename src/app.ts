import express from "express";
import bodyParser from "body-parser";
import router from '../src/routes/api'

const app: express.Application = express();
app.use(bodyParser.json());
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1", router)


app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
  console.log(`Server running on port ${process.env.PORT} `)

});
