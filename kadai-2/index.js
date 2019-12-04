console.log('hello') // helloと出力します

const name = 'Tama'
const age = 80

console.log(name) // Tama
console.log(age) // 80

//letは再代⼊可能な変数を宣⾔する
let name2='Pochi'
name2='Hachi'//OK
console.log(name2)

// lstは置き換え可能だけど使わないほうがいい
let number = 1
number = number + 1
console.log(number) //2

//数字はじまりの名前の変数はできない
const hello123 ='Mike' //OK
console.log(hello123)

const phrase1 = 'どうもどうも'
console.log(phrase1)

const isCat = true
const isDog = false
console.log(isCat)
console.log(isDog)

console.log(typeof name) //typeofでデータ型を出力できる
