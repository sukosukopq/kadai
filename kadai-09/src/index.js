const a = require('./module-a')
const b = require('./module-b')

a()
b()

const cowsay = require('cowsay')
console.log(cowsay.say({ text: 'Moo! '}))