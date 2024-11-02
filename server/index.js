const Express = require ('express')
const root = __dirname

const init = ()=>{
  this.app = Express ()
}
const set = (prop)=>{
  if (prop)
  {
    if (prop.port)
    {
      this.port = prop.port || process.env.PORT
    }
  }
}
const spectate = ()=>{
  if (!this.port)
  {
    console.log ("Port number is not set.")
  }
  else
  {
    this.app.listen (this.port, ()=> console.log (`Server is running on Port: ${this.port}.`))
  }
}

const route = (props)=>{
  this.routing = require (`${root}/routing`)
  this.routing.initiate ({router: this.app})
  return this.routing
}

this.init = init
this.spectate = spectate
this.set = set
this.route = route