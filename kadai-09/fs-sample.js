const fs = require('fs')

// fs.writeFileSync('./kadai-9/hello.txt','こんにちは')
const text = fs.readFileSync('./kadai-09/hello.txt')
console.log(text.toString())