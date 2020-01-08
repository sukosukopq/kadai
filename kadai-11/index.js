const http = require('http')
const server = http.createServer((req, res) => {
    //リクエストを確認
    console.log(req.url)
    res.write('domo')
    res.end()
})
server.listen(4000)
console.log('The server is listening...')