function globalDispatchLogger (params, next, end, xyz) {
  let logger = xyz.logger
  let wrapper = xyz.Util.wrapper
  let requestConfig = params[0]

  logger.verbose(`${wrapper('bold','LOGGER')} | request being sent to ${wrapper('bold', requestConfig.hostname)}:${requestConfig.port}${requestConfig.path} with json ${JSON.stringify(requestConfig.json)}`)
  next()
}

module.exports = globalDispatchLogger
