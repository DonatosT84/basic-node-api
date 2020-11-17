function authentication(request, response, next) {
  // some auth logic here
  let auth = true;

  // call to identity server

  if (auth) {
    next()

  } else {
    response.status(401).json({"error": "Not Authenticated"})
  }
}

module.exports = authentication;