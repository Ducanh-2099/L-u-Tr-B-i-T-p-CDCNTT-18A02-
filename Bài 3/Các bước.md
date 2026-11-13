<h1>Bài Tập: Tạo ứng dụng Node.js sử dụng module http. Server chạy tại cổng 3000</h1>

Bước 1:
-Sau khi đã tải và cài đặt Node.JS, truy cập vào visual Code Studio.
-Dùng lệnh cd để truy cập thư mục bài tập trên ổ đĩa.

<img width="945" height="81" alt="image" src="https://github.com/user-attachments/assets/1dc1eac0-51a5-46f7-a02c-51463b617e5d" />


-Tạo file mang tên Sinh Viên.js.

<img width="860" height="278" alt="image" src="https://github.com/user-attachments/assets/54d096b4-c4d1-4900-be63-84c89fbc7b62" />

Bước 2:

Nhập code:

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Chào Mừng</title></head><body><h1>Lưu Huỳnh Đức Anh</h1><p>Mã Sinh Viên: CD_CNTT18A02</p><p>Chào Mừng Đến Với Node.js Server!</p></body></html>');
});

server.listen(3000, function () {
    console.log('Server đã chạy ở : http://localhost:3000');
});

Bước 3:
-Truy cập Terminal và nhập lệnh node sv.js để khởi chạy Server.

<img width="950" height="95" alt="image" src="https://github.com/user-attachments/assets/b0bd2ca7-4863-4f28-8c90-5a56f1fa25f3" />

-Cuối cùng nhấn tổ hợp Ctrl+Chuột phải để truy cập server.

<img width="940" height="100" alt="image" src="https://github.com/user-attachments/assets/ea5d22d0-3f44-4b4f-bde0-1a846da3cfa1" />

