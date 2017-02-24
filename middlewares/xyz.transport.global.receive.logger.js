function globalReceiveLogger (params, next, end, xyz) {
  let logger = xyz.logger
  let wrapper = xyz.Util.wrapper
  let request = params[0]

  logger.verbose(`${wrapper('bold', 'LOGGER')} | request Receive at ${request.url} | body is ${JSON.stringify(body)}`)
  next()
}

module.exports = globalReceiveLogger
