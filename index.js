// import express framework
const express = require("express");

const app = express();
app.get("/", function (req, res) {
    return res.send("Hello World");
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running on port 8000");
});

module.exports = app;
