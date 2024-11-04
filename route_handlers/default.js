const Handler = (props)=>
{
  for (let x in props.data.methods)
  {
    console.log (x)
    if (props.data.methods[x] == "GET")
    {
      this.get = get ({express: props.express, data: props.data})
    }
  }

  return this
}

const get = (props)=>
{

  return props.express.get (props.data.path, (request, response)=>{
    response.send ('Works')
  })
}

module.exports = Handler