const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Kết nối với MongoDB thành công");
        const db = client.db("qlsinhvien");
        const collection = db.collection("sinhvien");

        console.log("\nDanh sách sinh viên có điểm cao hơn >=7:");

        const sinhvien = await collection.find({diem: {$gte: 7}}).sort({
            diem: -1
        }).toArray();

        console.log(sinhvien);
        const masvCanSua = "SV001";
        const diemMoi = 9.5;

        const result = await collection.updateOne({masv: masvCanSua}, {$set: {diem: diemMoi}});
        if (result.modifiedCount > 0) {
            console.log(`\nCập nhật điểm thành công cho sinh viên !`);
            console.log(`Mã sinh viên: ${masvCanSua},\nĐiểm mới: ${diemMoi}`);
        } else {
            console.log(`\nKhông tìm thấy sinh viên có mã ${masvCanSua} để cập nhật`);
        }
        console.log("\nDanh sách sinh viên sau khi cập nhật:");
        const data = await collection.findOne({masv: masvCanSua});
        console.log(data);
    } catch (err) {
        console.error("Lỗi khi kết nối hoặc thao tác với MongoDB:", err);
    } finally {
        await client.close();
        console.log("Đóng kết nối với MongoDB");
    }
}
run();