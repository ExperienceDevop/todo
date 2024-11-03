const Express = require ('express')
const root = __dirname

const App = class
{
  #express
  #root
  #config
  #server_class
  #router_class
  constructor (props)
  {
    this.status = "on"
    this.#express = props.Express
    this.#root = props.root
    this.#config = require (`${this.#root}/config.json`)
  }
  serve (props)
  {
    this.#server_class = require (`${this.#root}${this.#config.app.server_path}`)
    return this.server = new this.#server_class ({config: this.#config.server, express: this.#express, data: props})
  }
  route (props)
  {
    this.#router_class = require (`${this.#root}${this.#config.app.router_path}`)
    return this.router = new this.#router_class ({data: props, express: this.server.getExpress (), config: this.#config.router})
  }
}

module.exports = new App ({Express, root})