# Bài Ví Dụ: Tạo một Todo List

## 1. Các bước thực hiện

### Bước 1: Khởi tạo thư mục dự án
- Tạo thư mục baividu và mở bằng Visual Studio Code.
- Mở Terminal và chạy lệnh:
     npm init -y
     npm install express pug
     npm install --save-dev nodemon

### Bước 2: Cấu hình package.json
- Thiết lập các lệnh chạy ứng dụng:

 json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
 }

### Bước 3: Tạo cấu trúc thư mục MVC
baividu/
├── controllers/
│   └── todoController.js
├── models/
│   └── todoModel.js
├── routes/
│   └── todoRoutes.js
├── views/
│   ├── layout.pug
│   └── index.pug
├── public/
│   └── style.css
├── Baividu.js
└── package.json

### Bước 4: Xây dựng Model và Controller
- Model: Quản lý danh sách công việc, thêm, xóa và cập nhật trạng thái.
- Controller: Tiếp nhận yêu cầu, xử lý logic và gửi dữ liệu đến giao diện.

### Bước 5: Xây dựng Routes

Khai báo các đường dẫn xử lý chức năng:

- GET /: Hiển thị danh sách công việc.
- POST /add: Thêm công việc.
- POST /toggle/:id: Đánh dấu hoàn thành.
- POST /delete/:id: Xóa công việc.

### Bước 6: Xây dựng giao diện bằng Pug
Tạo hai file layout.pug và index.pug để thiết kế bố cục và hiển thị danh sách công việc, các ô nhập liệu và nút chức năng.

### Bước 7: Thiết kế CSS và cấu hình Express
- Sử dụng style.css để trang trí giao diện.
- Trong app.js, cấu hình Express, Pug, middleware, thư mục CSS và kết nối Routes.
- Khởi chạy server tại cổng 3000.
  
### Bước 8: Chạy và kiểm tra ứng dụng
- Chạy lệnh:

  npm run dev

## Truy cập http://localhost:3000 để kiểm tra các chức năng thêm, hiển thị, hoàn thành và xóa công việc.

## 2.Hình ảnh giao diện và cách chức năng

### Hình ảnh giao diện:
<img width="713" height="459" alt="image" src="https://github.com/user-attachments/assets/7fcc3e30-ead8-4570-925a-6f7ad94aac5f" />

### Chức năng thêm công việc:

<img width="626" height="455" alt="image" src="https://github.com/user-attachments/assets/c87facd1-60fe-44cc-a5aa-1c08564b94b5" />
<img width="266" height="200" alt="image" src="https://github.com/user-attachments/assets/b5a25b27-b392-46bd-a380-e7d63df4af58" />

### Chức năng đánh dấu hoành thành công việc:

<img width="685" height="406" alt="image" src="https://github.com/user-attachments/assets/cfa9330a-0812-49e1-8445-c76e05271aa0" />
<img width="175" height="42" alt="image" src="https://github.com/user-attachments/assets/fe6a6381-8e43-4f0e-aa79-3656324fa584" />

