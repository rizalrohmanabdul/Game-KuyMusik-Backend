const express = require("express");
const Route = express.Router();

const patternController = require("../controllers/pattern");
const Auth = require("../helpers/auth");

Route.all("/*", Auth.authInfo)
  .get("/", patternController.getPattern)
  .get("/now/", patternController.getPatternNow)
  .post(`/`, patternController.insertPattern)
  .patch(`/:id_pattern`, patternController.updatePattern)

//   .patch(`/:id_ktp`, patternController.updateUser)
//   .delete(`/:id_ktp`, patternController.deleteUser)

module.exports = Route;
