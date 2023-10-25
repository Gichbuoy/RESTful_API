import express from "express";

// first endpoint
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.status(201); // created
  res.send("Hello Ninja!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});