const express = require("express");
const path = require("path");
const app = express();
const port = 9988;

app.use(express.static(path.join(__dirname, "./public")));

app.get("/api/vehicle", (req, res) => {
  const vehicles = require("./server_api/vehicles.js");
  res.json(vehicles);
});

app.get("/api/vehicle/:id", (req, res) => {
  const vehicle = require("./server_api/vehicle_" + req.params.id + ".js");
  res.json(vehicle);
});

app.listen(port, error => {
  if (!error) {
    console.log(`Server listening on ${port}`);
  } else {
    throw new Error(error);
  }
});
