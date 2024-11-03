const fs = require ('fs')
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
        this.routes[this.#data[x].id] = {
          id: this.#data[x].id,
          method: this.#data[x].method,
          path: this.#data[x].path
        }
        
        this.routes[this.#data[x].id].handler = require (`${this.#handlers}${this.#data[x].handler}`)
      }
    }
  }
  #setRoutes ()
  {

  }
}

module.exports = Router