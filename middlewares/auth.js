function authentication(request, response, next) {
  // some auth logic here
  let auth = true;

  // call to identity server

  if (auth) {
    next()

  } else {
    response.send("Error: Not Authenticated")
  }
}

module.exports = authentication;