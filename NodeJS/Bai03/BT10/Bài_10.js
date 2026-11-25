const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Kết nối MongoDB thành công!");

        const db = client.db("qlsinhvien");

        const phongban = db.collection("phongban");
        const sinhvien = db.collection("sinhvien_j");

        await phongban.deleteMany({});
        await sinhvien.deleteMany({});

        const PBD = [
            {
                makhoa: "CNTT",
                tenkhoa: "Công nghệ thông tin"
            },
            {
                makhoa: "QTKD",
                tenkhoa: "Quản trị kinh doanh"
            },
            {
                makhoa: "KT",
                tenkhoa: "Kế toán"
            }
        ];

        const RD = await phongban.insertMany(PBD);

        console.log("\n1. Thêm khoa thành công:",
            RD.insertedCount);

        const SVD = [
            {
                masv: "SV01",
                hoten: "Nguyen Van An",
                makhoa: "CNTT"
            },
            {
                masv: "SV02",
                hoten: "Tran Thi Binh",
                makhoa: "QTKD"
            },
            {
                masv: "SV03",
                hoten: "Le Van Cuong",
                makhoa: "CNTT"
            },
            {
                masv: "SV04",
                hoten: "Pham Thi Dung",
                makhoa: "KT"
            }
        ];

        const RS = await sinhvien.insertMany(SVD);

        console.log("2. Thêm sinh viên thành công:",
            RS.insertedCount);

        const result = await sinhvien.aggregate([
            {
                $lookup: {
                    from: "phongban",
                    localField: "makhoa",
                    foreignField: "makhoa",
                    as: "thongtinkhoa"
                }
            },
            {
                $unwind: "$thongtinkhoa"
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: "$thongtinkhoa.tenkhoa"
                }
            }
        ]).toArray();

        console.log("\n3. DANH SÁCH SINH VIÊN KÈM TÊN KHOA:");
        console.log("----------------------------------------");

        result.forEach((sv, index) => {
            console.log(`Sinh viên ${index + 1}:`);
            console.log("Mã SV:", sv.masv);
            console.log("Họ tên:", sv.hoten);
            console.log("Mã khoa:", sv.makhoa);
            console.log("Tên khoa:", sv.tenkhoa);
            console.log("----------------------------------------");
        });

        console.log("Tổng số sinh viên:", result.length);

    } catch (error) {
        console.error("Lỗi:", error);
    } finally {
        await client.close();
        console.log("\nĐã đóng kết nối MongoDB!");
    }
}

main();
