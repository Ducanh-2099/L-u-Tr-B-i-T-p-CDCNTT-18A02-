const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
    async function main() {
        try { 
            await client.connect();
            console.log("Đãng kết nối với MongoDB thành công");
            const db = client.db('qlsinhvien');
            const collection = db.collection('sinhvien');
            const sinhvien = [
                {
                    masv:  "SV001",
                    hoten: "Lưu Bảo Bình",
                    tuoi: 20,
                    diem: 7.0
                },
                {
                    masv:  "SV002",
                    hoten: "Nguyễn Văn Dũng",
                    tuoi: 21,
                    diem: 8.5
                },
                {
                    masv:  "SV003",
                    hoten: "Huỳnh Thành Đạt",
                    tuoi: 19,
                    diem: 9.0
                },
            ];
            const xoa = await collection.deleteMany({});
            const result = await collection.insertMany(sinhvien);
            console.log("Đã thêm dữ liệu sinh viên thành công:", result.insertedCount);
            console.log("\nDanh Sách Sinh Viên:");
            const data = await collection.find({}).toArray();
            console.log(data);
        } catch (error) {
            console.error("Lỗi khi kết nối hoặc thao tác với MongoDB:", error);
        } finally {
            await client.close();
            console.log("Đã đóng kết nối với MongoDB");
        }
    }
main();  