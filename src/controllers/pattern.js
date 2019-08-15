const patternModel = require("../models/pattern");
const help = require("../helpers/helpers");

module.exports = {
  getPattern: (req, res) => {
    patternModel
      .getPattern()
      .then(resultPattern => {
        help.response(res, resultPattern, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  getPatternNow: (req, res) => {
    patternModel
      .getPatternNow()
      .then(resultPattern => {
        help.response(res, resultPattern, 200);
      })
      .catch(error => {
        console.log(error);
      });
  },
  insertPattern: (req, res) => {
    const data = {
      pattern_type: req.body.pattern_type,
      combo_lengt: req.body.combo_lengt,
      status: 0
    };
    patternModel
      .insertPattern(data)
      .then(resultPattern => {
        const result = resultPattern;
        help.response(res, result, 200, data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  updatePattern: (req, res) => {
    const id_pattern = req.params.id_pattern;
    patternModel
      .updatePatternNow(id_pattern)
      .then(resultPattern => {
        const result = resultPattern;
        help.response(res, result, 200, id_pattern);
      })
      .catch(error => {
        console.log(error);
      });
  },
  deleteUser: (req, res) => {
    const id_ktp = req.params.id_ktp;

    userModel
      .deleteUser(id_ktp)
      .then(resultUser => {
        const result = resultUser;
        help.response(res, result, 200, id_ktp);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
