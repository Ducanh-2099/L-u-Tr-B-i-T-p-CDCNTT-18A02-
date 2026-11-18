const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    const myUrl = new URL(req.url, `http://localhost:3001`);
    const pathname = myUrl.pathname;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    
    if (pathname === '/XinChao') {
        const name = myUrl.searchParams.get('name');
        if (!name || !name.trim()) {
            res.statusCode = 400;
            res.end('<h1>Lỗi:400</h1><p>Thiếu tên đường dẫn</p>');
        } else {
            res.statusCode = 200;
            res.end(`<h1>Xin chào ${name.trim()}</h1>`);
        }
    }

    else if (pathname === '/TinhTong') {
        const a = myUrl.searchParams.get('a');
        const b = myUrl.searchParams.get('b');
        if (a=== null || b === null || a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('<h1>Lỗi:400</h1><p>Vui Lòng Không Để Trống Tham Số a và b</p>');
        } else if (!Number.isFinite(Number(a)) || !Number.isFinite(Number(b))) {
            res.statusCode = 400;
            res.end('<h1>Lỗi:400</h1><p>Vui Lòng Nhập Tham Số a và b Là Số</p>');
        } else {
            const tong = Number(a) + Number(b);

            res.statusCode = 200;
            res.end(`<h1>Tổng là: ${tong}</h1>`);
        }
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Lỗi:404</h1><p>Không tìm thấy đường dẫn</p>');
    }
});

server.listen(3001, () => {
    console.log('Server đang chạy tại http://localhost:3001');
});
