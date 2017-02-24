function basicLoggerBootstrap (xyz, config) {
  let config = config || {}
  let route = config.route || 'CALL'
  let port = config.port || xyz.id().port

  xyz.middlewares().transport.client(route).register(0, require('./middlewares/xyz.transport.global.send.logger'))
  xyz.middlewares().transport.server(route)(port).register(0, require('./middlewares/xyz.transport.global.receive.logger'))

  xyz.logger.info(`basic logger middleware started at [Outgoing route ${route}] [Incomming route ${route} port ${port}]`)
}
