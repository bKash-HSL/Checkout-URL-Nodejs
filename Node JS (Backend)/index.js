require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT ? process.env.PORT : 4000;

//bkash router
const bkashRouter = require("./routes/bkashRouter.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/bkash", bkashRouter);

app.get("/", (req, res) => {
  try {
    res.send("Hlw bKash PGW");
  } catch (e) {
    console.log(e);
  }
});

// Error handling middleware
app.use((err,req,res,next)=>{
  console.log(err.stack);
  res.status(500).send("Something Wrong !!!");
});

// Not found route
app.use((req,res,next)=>{
  console.log("Sorry, Not Found !!!");
  res.status(404).send("Sorry, Not Found !!!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
