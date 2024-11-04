const fs = require ('fs')
const { threadId } = require('worker_threads')
const Router = class
{
  #express
  #data
  #handlers
  #root
  constructor (props)
  {
    this.#express = props.express
    this.status = "on"
    this.#root = props.data.root
    this.#handlers = `${this.#root}${props.config.route_handlers_path}`

    if (props.data)
    {
      this.routes = []
      this.#data = props.data.routes
      for (let x in this.#data)
      {
        const data = {
          id: this.#data[x].id,
          name : this.#data[x].name,
          methods: this.#data[x].methods,
          path: this.#data[x].path
        }
        
        this.routes[this.#data[x].id] = data
        
        this.routes[this.#data[x].id].handler = require (`${this.#handlers}${this.#data[x].handler}`) ({data, express: this.#express})
      }
    }
  }
  #setRoutes ()
  {

  }
}

module.exports = Router