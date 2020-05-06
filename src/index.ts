import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("works");
});

const server = app.listen(PORT, () => {
  console.log(` App is running at http://localhost:${PORT}`);
});

export default server;

