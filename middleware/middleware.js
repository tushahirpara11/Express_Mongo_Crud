const jwt = require('jsonwebtoken');

exports.verifyToken = function (req, res, next) {
  const headers = req.headers['authorization'];
  if (typeof headers != 'undefined') {
    jwt.verify(headers, process.env.SECRET_KEY, (err, decode) => {
      if (err) res.json({ status: false, message: "Invalid Token" });
      req.user = decode;
      next();
    });
  } else {
    return res.json({ status: false, message: "Invalid Token" });
  }
}