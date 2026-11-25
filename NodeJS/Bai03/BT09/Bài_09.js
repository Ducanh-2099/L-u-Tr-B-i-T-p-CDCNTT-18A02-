const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log('Đã kết nối đến MongoDB');

        const db = client.db('qlsinhvien');
        const sinhvien = db.collection('sinhvien_thu');

        await sinhvien.deleteMany({});
        const DT = [
            { masv: "SV001", hoten: "Nguyen Van An", namsinh: 2000, lop: "CNTT1", diem: 8 },
            { masv: "SV002", hoten: "Tran Thi Best", namsinh: 2001, lop: "CNTT2", diem: 7 },
            { masv: "SV003", hoten: "Le Van Cut", namsinh: 2000, lop: "CNTT1", diem: 6 },
            { masv: "SV004", hoten: "Pham Thi Deo", namsinh: 2002, lop: "CNTT3", diem: 3 },
            { masv: "SV005", hoten: "Hoang Van Eo", namsinh: 2001, lop: "CNTT2", diem: 4 }
        ];
        const IR = await sinhvien.insertMany(DT);
        console.log("\n1. Đã thêm sinh viên thành công:", IR.insertedCount);

        console.log("\n2. Danh sách sinh viên ban đầu: ");
        console.log(await sinhvien.find().toArray());

        const DR = await sinhvien.deleteOne({ masv: "SV003" });
        console.log("\n3. Đã xóa sinh viên có mã SV003:", DR.deletedCount);

        const deleteManyResult = await sinhvien.deleteMany({ diem: { $lt: 5 } });
        console.log("\n4. Đã xóa sinh viên có điểm < 5:", deleteManyResult.deletedCount);

        console.log("\n5. Danh sách sinh viên sau khi xóa: ");
        const RS = await sinhvien.find({}).toArray();

        console.log(RS);
        console.log("\nTổng số sinh viên còn lại: ",RS.length);
    } catch (error){
      console.error("Lỗi:",error);
    } finally {
    await client.close();
    console.log("\nĐã đóng kết nối MongoDB!");
    }
}

run();
