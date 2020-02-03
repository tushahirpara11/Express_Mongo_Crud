function verifyToken(req, res, next) {
  const headers = req.headers['authorizattions'];
  if (typeof headers !== 'undefined') {
    const getToken = headers.split[' '];
    const headToken = getToken[1];
    req.token = headToken;
    next();
  } else {
    return res(500, "Invalid Token");
  }
}