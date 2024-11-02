const root = __dirname
const server = require (`${root}/server`)
const routes = require (`${root}/routes.json`)

server.init ()
server.set ({port: 8888})

const route = server.route (routes)

server.spectate ()

console.log (route)