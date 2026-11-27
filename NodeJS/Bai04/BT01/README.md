# BAI04 - BT01: WEBSITE CÁ NHÂN NODE.JS

## 1. Thông tin sinh viên
- Họ tên: Lưu Huỳnh Đức Anh
- MSSV: CDCNTT18A02
- Lớp: CD-CNTT18A

## 2. Giới thiệu
Xây dựng website cá nhân sử dụng Node.js và Express.

Các chức năng:
- `/`: Trang chủ
- `/about`: Giới thiệu
- `/skills`: Kỹ năng
- `/hobbies`: Sở thích
- `/contact`: Liên hệ
- Xử lý lỗi HTTP 404.
- Giao diện HTML/CSS có menu điều hướng.

## 3. Các bước thực hiện

**Bước 1: Khởi tạo dự án**
```bash
npm init -y
```

**Bước 2: Cài đặt Express**
```bash
npm install express
```

**Bước 3: Chạy chương trình**
```bash
npm start
```

**Bước 4: Truy cập website**
```text
http://localhost:3000
```

## 4. Kết quả trên máy cá nhân

Chụp ảnh giao diện website và kết quả chạy trên localhost tại đây.

![Trang chủ](images/home.png)

![Các chức năng](images/routes.png)

![Lỗi 404](images/404.png)

## 5. Triển khai Hosting

Khảo sát 3 dịch vụ hosting miễn phí:
- Render
- Railway
- Koyeb

**Dịch vụ lựa chọn:** Render.

Các bước triển khai:
1. Đưa mã nguồn lên GitHub.
2. Kết nối GitHub với Render.
3. Tạo Web Service.
4. Build Command: `npm install`.
5. Start Command: `npm start`.
6. Chọn gói Free và Deploy.

**Link website:** [Bổ sung link Render tại đây]

![Kết quả triển khai](images/render.png)

## 6. Kết luận

Hoàn thành website cá nhân bằng Node.js và Express, xây dựng các Route, thiết kế giao diện HTML/CSS, xử lý lỗi 404 và triển khai ứng dụng lên hosting Render.
