function authentication(request, response, next) {
  // some auth logic here
  let auth = true;

  // call to identity server

  if (auth) {
    next()

  } else {
    // return next(new Error('Not Authenticated'));
    response.status(401).json({"error": "Not Authenticated"});
  }
}

module.exports = authentication;