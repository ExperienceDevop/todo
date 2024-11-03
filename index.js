const root = __dirname
const config = require (`${root}/config.json`)
const app = require (`${root}${config.app_path}`)
const routes = require (`${root}${config.routes_path}`)

const server = app.serve (config.server)
const router = app.route ({routes, root})

server.wait ()

console.log (router)