class SinhVien {
    constructor(ten, maSV, tuoi, diem) {
        this.ten = ten;
        this.maSV = maSV;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien('Nguyen Van Be', 'CD001', 20, 8.5),
    new SinhVien('Tran Thi Loan', 'CD002', 21, 7.2),
    new SinhVien('Le Van Bui', 'CD003', 19, 9.1),
    new SinhVien('Pham Thi Diem', 'CD004', 22, 6.8),
    new SinhVien('Hoang Van An', 'CD005', 20, 4.5),
    new SinhVien('Vo Minh Dung', 'CD006', 21, 5.0),
];

const sinhviendau = danhSachSinhVien.filter(sv => sv.diem >= 5);

console.log('Danh sách sinh viên đạt:');
sinhviendau.forEach(sv => {
    console.log(`Tên: ${sv.ten}, Mã SV: ${sv.maSV}, Tuổi: ${sv.tuoi}, Điểm: ${sv.diem}`);
});
