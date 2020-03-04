const express = require("express");
const cors = require("cors");

const common = [
  express.json(),
  express.urlencoded({ extended: true, type: "application/json" }),
  cors()
];

module.exports = common;
