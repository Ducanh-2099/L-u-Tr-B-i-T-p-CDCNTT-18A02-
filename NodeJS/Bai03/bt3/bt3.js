const fs = require('fs');
const HT = "Luu Huynh Duc Anh";
const MSV = "CDCNTT18A02";
const LOP = "CD-CNTT18A";
fs.writeFile('ThongTin.txt',
    `Họ tên: ${HT}
Mã sinh viên: ${MSV}
`,
    (err) => {
        if (err) {
            console.log('Loi khi ghi vao ThongTin.txt');
            return;
        }
        console.log('Da ghi thong tin vao file ThongTin.txt');
        fs.readFile('ThongTin.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('Loi khi doc file ThongTin.txt');
                return;
            }
            console.log('\n=== NOI DUNG BAN DAU ===');
            console.log(data);
            fs.appendFile('ThongTin.txt',
                `Lớp: ${LOP}\n`,
                (err) => {
                    if (err) {
                        console.log('Loi khi ghi noi ten lop');
                        return;
                    }
                    console.log('Da ghi noi ten lop thanh cong!');
                    fs.readFile('ThongTin.txt', 'utf8', (err, data) => {
                        if (err) {
                            console.log('Loi khi doc lai file');
                            return;
                        }
                        console.log('\n=== NOI DUNG SAU KHI CAP NHAT ===');
                        console.log(data);
                    });
                }
            );
        });
    }
);
