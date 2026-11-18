const {tinhDiemTB, xepLoai} = require('./xuLydiem');

const sinhvien = [
    {
        hoten: "Nguyên Văn Bé",
        diem1: 8,
        diem2: 9,
        diem3: 8
    },
    {
        hoten: "Trần Thị Tràm",
        diem1: 7,
        diem2: 6,
        diem3: 7
    },
    {
        hoten: "Lê Bá Dũng",
        diem1: 4,
        diem2: 5,
        diem3: 3
    },
];

console.log("--------------------KẾT QUẢ HỌC TẬP-------------------");

sinhvien.forEach((sv, index) => {
    const diemTB = tinhDiemTB(sv.diem1, sv.diem2, sv.diem3);
    const loai = xepLoai(diemTB);
    console.log(`\nSinh viên ${index + 1}: ${sv.hoten}`);
    console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);
    console.log(`Xếp loại: ${loai}`);
});