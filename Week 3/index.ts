import express from 'express';

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/about", (req, res) => {
    res.send("This is the about page");
});

app.get("/", (req, res) => {
    res.send("Hellow World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
