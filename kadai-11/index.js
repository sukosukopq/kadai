const http = require('http')
const server = http.createServer((req, res) => {
    
    const num = Math.random()

    // CROSヘッダーを返す
    res.setHeader('Access-Control-Allow-Origin', '*')

    //ここにおみくじ貼る
        if(num < 0.5) {
            res.write(`吉です`)
        } else if (num < 0.8) {
            res.write(`中吉です`)
        } else {
            res.write(`大吉です`)
        }
    
    res.end()
})
server.listen(4000)
console.log('The server is listening...')