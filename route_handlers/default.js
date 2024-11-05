const Handler = (props)=>
{
  for (let x in props.data.methods)
  {
    if (props.data.methods[x] == "GET")
    {
      this.get = get ({express: props.express, data: props.data})
    }
  }

  return this
}

const get = (props)=>
{
  props.express.get (props.data.path, (request, response)=>{
    response.status (props.data.status)
    response.append('Content-Type', `${props.data.content_type}; charset=UTF-8`)

    response.send ('Works')
  })
}

module.exports = Handler