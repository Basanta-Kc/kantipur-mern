const express = require("express");
const app = express();
const port = 3000;

const todos = ["learn html", "learn css", "learn php"];

app.get("/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.send(`
    <h2>hello ${req.query.name}</h2>
    <p>your tasks</p>
    <ul>
     <li>learn html </li>
    </ul>
    `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
