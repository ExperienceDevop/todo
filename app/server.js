const Server = class
{
  #express
  constructor (props)
  {
    this.#express = props.express ()
    this.status = "on"
    if (props.data)
    {
      this.port = props.data.port || process.env.PORT
    }
  }
  wait ()
  {
    this.#express.listen (this.port, ()=>{
      console.log (`Server is running on Port: ${this.port}`)
    })
  }
  getExpress ()
  {
    return this.#express
  }
}

module.exports = Server