const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Chào Mừng</title></head><body><h1>Lưu Huỳnh Đức Anh</h1><p>Mã Sinh Viên: CD_CNTT18A02</p><p>Chào Mừng Đến Với Node.js Server!</p></body></html>');
});

server.listen(3000, function () {
    console.log('Server đã chạy ở : http://localhost:3000');
});
