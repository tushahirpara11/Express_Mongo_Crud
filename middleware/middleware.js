const jwt = require('jsonwebtoken');

const { Message } = require('../commonFunctions/responceFuntion');

exports.verifyToken = function (req, res, next) {
  const headers = req.headers['authorization'];
  if (typeof headers != 'undefined') {
    jwt.verify(headers, process.env.SECRET_KEY, (err, decode) => {
      if (err) res.json(Message("false", "Invalid Token"));
      req.user = decode;
      next();
    });
  } else {
    return res.json(Message("false", "Invalid Token"));
  }
}