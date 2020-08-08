const eventEmit = require("events")

class Sales extends eventEmit {
  constructor() {
    super()
  }
}

const myevent = new Sales()

myevent.on("newsale", () => console.log("There is a new sale!"))
myevent.on("newsale", () => console.log("my name is mecha2k"))
myevent.on("newsale", (stock) => console.log(`There are now ${stock} items left in a stock`))

myevent.emit("newsale", 9)

// server module also use eventEmit
const http = require("http")

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Hello from the server')
})

// server.on("reqest", (req, res) => {
//   console.log("request received!")
//   console.log(req.url)
//   res.end("request received")
// })

// server.on("reqest", (req, res) => {
//   console.log("another request received 😍")
// })

// server.on("close", (req, res) => {
//   res.end("server closed")
// })

server.listen(3000, "localhost", () => console.log("Listening to requests on port 3000..."))
