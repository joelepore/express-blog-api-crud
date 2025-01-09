const notFound = (req, res, next) => {
  res.status(404).json({
    message: 'Resource not found',
    status: 404,
    error: 'Not Found'
  })
}

module.exports = notFound;