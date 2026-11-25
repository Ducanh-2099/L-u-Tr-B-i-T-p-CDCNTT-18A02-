# BÀI TẬP 10 - MONGODB AGGREGATE VÀ LOOKUP

## 1. Nội dung

- kết nối MongoDB bằng Node.js.
- Tạo collection phongban chứa thông tin các phòng ban.
- Tạo collection sinhvien_j chứa thông tin sinh viên.
- Thêm ít nhất 2 khoa.
- Thêm ít nhất 4 sinh viên.
- Sử dụng aggregate() kết hợp $lookup.
- Liên kết sinh viên với khoa thông qua makhoa.
- Hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.

## 2. Các lệnh thực hiện

khởi tạo dự án:

npm init -y

Cài đặt MongoDB:

npm install mongodb

Khởi chạy chương trình:

node Bài_10.js

## 3. Kết quả

- Thêm thành công 3 khoa.
- Thêm thành công 4 sinh viên.

<img width="313" height="73" alt="image" src="https://github.com/user-attachments/assets/a36e4eea-c21c-42f8-85c7-da426b19ff46" />

- Sử dụng $lookup liên kết hai collection.
- Hiển thị danh sách sinh viên kèm tên khoa.

<img width="259" height="100" alt="image" src="https://github.com/user-attachments/assets/bf4a8d51-254c-4113-b8a7-e32c91fcdca5" />

- Tổng số sinh viên: 4.

<img width="408" height="475" alt="image" src="https://github.com/user-attachments/assets/4cc15176-fdf9-4265-bef6-5543e6023bd5" />
