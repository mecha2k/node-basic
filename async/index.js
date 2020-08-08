const fs = require("fs")
const agent = require("superagent")
const { resolve } = require("path")

const readfilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("I could not find the file 😂")
      resolve(data)
    })
  })
}

const writefilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("couldnot write file 😅")
      resolve("Dog image saved! 😁")
    })
  })
}

const getdogPicture = async () => {
  try {
    const data = await readfilePromise(`${__dirname}/dog.txt`)
    console.log("Breed: " + data)

    const res = await agent.get(`https://dog.ceo/api/breed/${data}/images/random`)
    console.log(res.body.message)

    await writefilePromise("dog-img.txt", res.body.message)
    console.log("Random dog image saved to file!")
  } catch (err) {
    console.log(err)
  }

  return "2: READY 😋"
}

console.log("1: will get dog pics!")
const x = getdogPicture()
console.log(x)
getdogPicture().then((x) => console.log(x))
console.log("3: done getting dog pics!")

readfilePromise(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log("Breed: " + data)
    return agent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  })
  .then((res) => {
    console.log(res.body.message)
    return writefilePromise("dog-img.txt", res.body.message)
  })
  .then(() => console.log("Random dog image saved to file!"))
  .catch((err) => console.log(err))
