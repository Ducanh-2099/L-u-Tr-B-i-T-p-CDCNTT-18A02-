# BÀI THỰC HÀNH 02 - NODE.JS HTTP SERVER

## 1. Yêu cầu bài tập

- Sử dụng module http để tạo Web Server.
- Khởi chạy Web Server tại cổng 3000.
- Khi truy cập đường dẫn /: hiển thị lời chào và mã sinh viên.
- Khi truy cập đường dẫn /about: hiển thị thông tin giới thiệu bản thân.
- Khi truy cập đường dẫn không tồn tại: trả về mã trạng thái HTTP 404.

## 2. Các bước thực hiện

### Bước 1: Tạo file bt2.js

Tạo file Bài_2.js trong thư mục bt02.

### Bước 2: Viết chương trình

- Sử dụng require('http') để import module HTTP.
- Sử dụng http.createServer() để tạo Web Server.
- Sử dụng req.url để kiểm tra đường dẫn.
- Sử dụng res.end() để trả nội dung HTML.
- Sử dụng res.statusCode để thiết lập mã trạng thái HTTP.

### Bước 3: Chạy chương trình

Mở Terminal tại thư mục bt02 và chạy lệnh:

    node bt2.js

### Bước 4: Kiểm tra trên trình duyệt

Trang chủ:
http://localhost:3000

Trang giới thiệu:
http://localhost:3000/about

Trang không tồn tại:
http://localhost:3000/404

## 4. Hình ảnh minh chứng

### Hình 1: Mã nguồn bt2.js

<img width="854" height="738" alt="image" src="https://github.com/user-attachments/assets/bb91643a-1838-4ae6-8ba2-a7dec509ef03" />

### Hình 2: Kết quả chạy Web Server trên Terminal

<img width="521" height="55" alt="image" src="https://github.com/user-attachments/assets/40035ff8-f8f8-4f66-ade4-e7c454f657ba" />


### Hình 3: Kết quả trang chủ

<img width="364" height="236" alt="image" src="https://github.com/user-attachments/assets/4a596140-3c97-4c66-8301-0fa53f1a707e" />

### Hình 4: Kết quả trang giới thiệu

<img width="391" height="320" alt="image" src="https://github.com/user-attachments/assets/4b70f42e-0e38-45a9-9142-3a3416f31037" />

### Hình 5: Kết quả lỗi HTTP 404

<img width="359" height="171" alt="image" src="https://github.com/user-attachments/assets/6d2f3972-7529-4a5e-b046-483300721667" />
