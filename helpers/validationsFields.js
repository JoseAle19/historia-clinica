const { request } = require("express");
const { validationResult } = require("express-validator");

const validationFields = (req = request, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      msg: "Ocurrio un error",
      errors,
    });
  }

  next();
};


module.exports = {
    validationFields
}