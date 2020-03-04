const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const common = [
  compression(), // gzip compression
  cors(), // cross-origin-resource-sharing
  express.json(), // parse incoming requests with json payloads
  helmet() // set security-related HTTP response headers
];

module.exports = common;
