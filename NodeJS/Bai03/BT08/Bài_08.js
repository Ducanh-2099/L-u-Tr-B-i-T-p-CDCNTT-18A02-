const fs = require('fs');

const TM = './data';
const FC = './data/ghichu.txt';
const FM = './data/ghichu_moi.txt';
const FT = './data/tam.txt';

async function main() {
    try {
        await fs.promises.mkdir(TM, { recursive: true });
        console.log('1-Thư mục đã được tạo thành công.');
        const ND = 'Dòng-1: Học lâp trình Node.js\nDòng-2: Học lập trình MongoDB\nDòng-3: Học lập trình ReactJS';
        await fs.promises.writeFile(FC, ND, 'utf8');
        console.log('2-Tạo tập tin ghichu.txt và ghi chú nội dung thành công.');
        await fs.promises.rename(FC, FM);
        console.log('3-Chuyển tên tập tin ghichu.txt thành công sang ghichu_moi.txt.');
        const DL = await fs.promises.readFile(FM, 'utf8');
        console.log('4-Nội dung tập tin ghichu_moi.txt:');
        console.log(DL);
        await fs.promises.writeFile(FT,'Đây là tập tin tạm thời', 'utf8');
        console.log('5-Tạo tập tin tạm thời tam.txt thành công.');
        await fs.promises.unlink(FT);
        console.log('6-Xóa tập tin tạm thời tam.txt thành công.');

        console.log('7-Kết thúc chương trình.');
    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    }
}

main();