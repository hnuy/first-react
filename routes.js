const routes = module.exports = require('next-routes')()

routes
  .add({ pattern : '/about/:id?', page : 'about'})
  .add({ pattern : '/topic', page : 'topic'})
  .add({ pattern : '/form/:page', page : 'form'})
  .add({ pattern : '/pantip/:name?', page : 'pantip'})
  .add({ pattern : '/', page : 'index'})
  .add({ pattern : '(.*)', page : 'notfound'})

