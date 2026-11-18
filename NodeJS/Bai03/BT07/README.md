# BÀI 07 - MODULE HTTP VÀ ĐỐI TƯỢNG URL TRONG NODE.JS
## 1. Các bước thực hiện

### Bước 1: Tạo file bai07.js

- Sử dụng module http và đối tượng URL để xây dựng Web Server.

<img width="344" height="55" alt="image" src="https://github.com/user-attachments/assets/7a1bbf75-c6d3-42da-b979-838b989b91ed" />


### Bước 2: Tạo Web Server

- Sử dụng http.createServer() để tạo máy chủ tại cổng 3001.

<img width="538" height="95" alt="image" src="https://github.com/user-attachments/assets/08cbbfcf-8242-4894-b1e0-6ef9d3523e71" />

### Bước 5: Chạy chương trình

 node bai07.js

### Bước 4: Xử lý đường dẫn /hello

- Nhận tham số name từ URL.
- Hiển thị lời chào Xin chào Anh.
- Thông báo lỗi nếu thiếu tham số name.

<img width="574" height="215" alt="image" src="https://github.com/user-attachments/assets/373023a9-b505-4fba-a3aa-55f664123694" />

<img width="438" height="111" alt="image" src="https://github.com/user-attachments/assets/3088f2df-3774-40d6-b7d7-33daa90d7f00" />

<img width="392" height="173" alt="image" src="https://github.com/user-attachments/assets/bc2d02fe-0ae6-4624-b3d6-d28d0f0f7392" />


### Bước 5: Xử lý đường dẫn /sum

- Nhận hai tham số a và b.
- Kiểm tra dữ liệu hợp lệ.

<img width="737" height="189" alt="image" src="https://github.com/user-attachments/assets/747c7fbd-338f-4289-a865-5acf146d918b" />

<img width="346" height="228" alt="image" src="https://github.com/user-attachments/assets/c80e8030-91cd-4ecf-8422-6ac231713d25" />

- Tính tổng hai số.
- Hiển thị kết quả Tổng = a + b.

<img width="435" height="115" alt="image" src="https://github.com/user-attachments/assets/4f88c381-2d2f-4905-95b3-e327b677bda4" />


