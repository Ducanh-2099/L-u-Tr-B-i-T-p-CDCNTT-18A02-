const http = require('http');

const server = http.createServer(function (req, res) {

    
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    
    res.end('<h1>Lưu Huỳnh Đức Anh</h1> <p>Chào Mừng Đến Với Node.js Server!</p>');
});

server.listen(3000, function () {
    console.log('Server dang chay tai http://localhost:3000');
});