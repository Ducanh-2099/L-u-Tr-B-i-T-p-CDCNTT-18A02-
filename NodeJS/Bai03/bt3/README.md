# BÀI THỰC HÀNH 03 - NODE.JS FILE SYSTEM

## 1. Thông tin bài tập

- Môn học: Lập trình Node.js
- Bài thực hành: Bai03 - Bt03
- Tên chương trình: bai03.js
- Module sử dụng: fs

## 2. Yêu cầu bài tập

- Sử dụng module fs.
- Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên.
- Đọc và hiển thị nội dung tập tin lên Terminal.
- Sử dụng appendFile() để ghi nối tên lớp vào cuối tập tin.
- Đọc lại tập tin để kiểm tra nội dung đã cập nhật.

## 3. Các bước thực hiện

### Bước 1: Tạo file bai03.js

Tạo file bai03.js trong thư mục Bt03.

### Bước 2: Khai báo module fs

Sử dụng lệnh:

    const fs = require('fs');

### Bước 3: Tạo và ghi tập tin

Sử dụng fs.writeFile() để tạo file thongtin.txt và ghi họ tên, mã sinh viên.

### Bước 4: Đọc tập tin

Sử dụng fs.readFile() để đọc nội dung và hiển thị trên Terminal.

### Bước 5: Ghi nối tên lớp

Sử dụng fs.appendFile() để ghi nối tên lớp vào cuối tập tin.

### Bước 6: Đọc lại tập tin

Sử dụng fs.readFile() lần thứ hai để kiểm tra nội dung sau cập nhật.

### Bước 7: Chạy chương trình

Mở Terminal tại thư mục Bt03 và chạy lệnh:

    node bai03.js

## 4. Hình ảnh minh chứng

### Hình 1: Mã nguồn bai03.js

Chèn ảnh mã nguồn tại đây.

### Hình 2: Kết quả chạy chương trình trên Terminal

Chèn ảnh Terminal tại đây.

### Hình 3: Nội dung file thongtin.txt

Chèn ảnh nội dung file tại đây.

## 5. Kết luận

Đã hoàn thành bài thực hành sử dụng module fs trong Node.js.

Các kiến thức đã sử dụng:
- require('fs')
- fs.writeFile()
- fs.readFile()
- fs.appendFile()
- Callback và xử lý lỗi
