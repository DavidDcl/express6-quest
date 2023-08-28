const isValid = (req, res) => {
  if (req.body.email === req.user.email) {
    res.send(req.user)
  } else {
    res.sendStatus(401)
  }
}

module.exports = { isValid }
