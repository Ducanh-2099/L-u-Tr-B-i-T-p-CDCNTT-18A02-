# Bài 5:Tìm kiếm, cập nhật và sắp xếp MongoDB

## 1.Các bước thực hiện
### Bước 1: Khởi tạo dự án

npm init -y

<img width="352" height="264" alt="image" src="https://github.com/user-attachments/assets/a18911f8-3121-4d13-9def-143870a7e6e3" />

### Bước 2: Cài đặt mongodb

npm install mongodb

<img width="499" height="70" alt="image" src="https://github.com/user-attachments/assets/500cce06-d428-4d99-90fe-d1a7ff78e330" />

### Bước 3: Kết nối với mongodb
 Sử dụng địa chỉ:

 mongodb://localhost:27017

<img width="1063" height="165" alt="image" src="https://github.com/user-attachments/assets/b4db4e43-f738-49eb-afe0-cf2fad07fd43" />

### Bước 4: Chạy chương trình

 node Bài_05.js

### Bước 5: Các bước tính toán:

- Tìm kiếm Sinh Viên: Sử dụng find() và toán tử $gte để tìm sinhvien có điểm >=7.
- Sắp xếp Sinh Viên: Sử dụng Sort({ diem -1 }) để sắp xếp theo thứ tự giảm dần.

<img width="960" height="421" alt="image" src="https://github.com/user-attachments/assets/b16356b6-4fd5-4820-ba66-f52fc326ae8d" />

- Cập nhật điểm: Sử dụng updateOne() và $set cập nhật mã sinh viên SV001 thành 9.5.
- Kiểm tra kết quả: Sử dụng findOne() để hiển thị lại thông tin sinh viên sau khi cập nhật.

<img width="941" height="220" alt="image" src="https://github.com/user-attachments/assets/5a0a58d3-4d15-4721-956f-c1f3277e1d62" />


