# BÀI THỰC HÀNH 03 - NODE.JS FILE SYSTEM

## 1. Yêu cầu bài tập

- Sử dụng module fs.
- Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên.
- Đọc và hiển thị nội dung tập tin lên Terminal.
- Sử dụng appendFile() để ghi nối tên lớp vào cuối tập tin.
- Đọc lại tập tin để kiểm tra nội dung đã cập nhật.

## 2.Các hàm đã sử dụng

- require('fs')
- fs.writeFile()
- fs.readFile()
- fs.appendFile()
- Callback và xử lý lỗi

## 3. Các bước thực hiện

### Bước 1: Tạo file bt3.js

Tạo file bt3.js trong thư mục Bt03.

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

    node bt3.js

## 5. Hình ảnh minh chứng

### Hình 1: Mã nguồn bt3.js

<img width="868" height="738" alt="image" src="https://github.com/user-attachments/assets/6220f821-0f11-4b30-9423-872408a1ded2" />


### Hình 2: Kết quả chạy chương trình trên Terminal

<img width="921" height="300" alt="image" src="https://github.com/user-attachments/assets/17709577-6c59-47e3-b649-cbf4273a3e57" />

### Hình 3: Nội dung file thongtin.txt

<img width="300" height="164" alt="image" src="https://github.com/user-attachments/assets/6939c340-af0a-4d25-8092-1ecceef6bb8c" />

