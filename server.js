const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
});

app.listen(3006, () => {
    console.log("Server is listening on port 3006")
});