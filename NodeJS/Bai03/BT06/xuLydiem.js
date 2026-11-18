function tinhDiemTB(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

function xepLoai(diemTB) {
    if (diemTB >= 9) {
        return "Xuất sắc";
    } else if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 7) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

module.exports = {
    tinhDiemTB,
    xepLoai
};
