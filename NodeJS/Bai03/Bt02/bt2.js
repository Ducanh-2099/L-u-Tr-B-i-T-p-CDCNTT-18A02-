const http = require('http');
const maSinhVien = "CDCNTT18A02"; 
const hoTen = "Luu Huynh Duc Anh"; 
const lop = "CD-CNTT18A";

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end(`
            <h1>Xin chào!</h1>
            <p>Mã sinh viên: ${maSinhVien}</p>
            <p>Họ tên: ${hoTen}</p>
        `);
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`
            <h1>GIỚI THIỆU BẢN THÂN</h1>
            <p>Họ tên: ${hoTen}</p>
            <p>Mã sinh viên: ${maSinhVien}</p>
            <p>Lớp: ${lop}</p>
            <p>Xin chào! Tôi đang học lập trình Node.js.</p>
        `);
    }
    else {
        res.statusCode = 404;

        res.end(`
            <h1>404 - NOT FOUND</h1>
            <p>Trang bạn truy cập không tồn tại!</p>
        `);
    }
});
server.listen(3000, () => {
    console.log('Web Server dang chay tai http://localhost:3000');
});
