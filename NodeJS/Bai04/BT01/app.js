
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Sử dụng CSS
app.use(express.static('public'));

// Nội dung các trang
const pages = {
  '/': ['Trang chủ', 'Xin chào! Chào mừng đến website cá nhân của tôi.'],
  '/about': ['Giới thiệu', 'Họ tên: Lưu Huỳnh Đức Anh | Lớp: CD-CNTT18A | MSSV: CDCNTT18A02'],
  '/skills': ['Kỹ năng', 'HTML, CSS, JavaScript, Node.js, Express'],
  '/hobbies': ['Sở thích', 'Chơi game, nghe nhạc, lập trình và công nghệ'],
  '/contact': ['Liên hệ', 'Email: LuuD0519@gmail.com']
};

// Tạo giao diện dùng chung
function createPage(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <header><h1>WEBSITE CÁ NHÂN</h1></header>

      <nav>
        <a href="/">Trang chủ</a>
        <a href="/about">Giới thiệu</a>
        <a href="/skills">Kỹ năng</a>
        <a href="/hobbies">Sở thích</a>
        <a href="/contact">Liên hệ</a>
      </nav>

      <main>
        <h2>${title}</h2>
        <p>${content}</p>
      </main>

      <footer>© 2026 - Website cá nhân</footer>
    </body>
    </html>
  `;
}

// Tạo Route tự động
for (const [url, data] of Object.entries(pages)) {
  app.get(url, (req, res) => {
    res.send(createPage(data[0], data[1]));
  });
}

// Xử lý lỗi 404
app.use((req, res) => {
  res.status(404).send(createPage(
    '404 - Không tìm thấy',
    'Đường dẫn bạn truy cập không tồn tại!'
  ));
});

// Khởi động server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
