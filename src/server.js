import express from "express";

// first endpoint
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});