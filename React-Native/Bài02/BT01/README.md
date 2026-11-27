# BÀI TẬP 01 – MYAPP_V2

## 1. Thông tin bài tập

- **Tên bài nộp:** MyApp_V2
- **Tên ứng dụng:** Game Library
- **Công nghệ sử dụng:** React Native, Expo
- **Ngôn ngữ:** JavaScript

## 2. Link ứng dụng Expo

https://snack.expo.dev/@ducanh-cdcntt18a/myapp_v2

## 3. Giới thiệu ứng dụng

Game Library là ứng dụng quản lý danh sách trò chơi. Người dùng có thể xem danh sách game, tìm kiếm game, thêm game mới, chọn hình ảnh cho game, xem thông tin chi tiết, bình luận và xóa game.

## 4. Các thành phần và thay đổi giao diện

Ứng dụng được chia thành nhiều component để dễ quản lý và tái sử dụng.

### 4.1. Theme.js – Giao diện và màu sắc

Thay đổi giao diện ứng dụng sang tông màu đen kết hợp xanh lá neon.

```javascript
const theme = {
  background: '#080808',
  card: '#171717',
  secondary: '#262626',
  border: '#333333',
  primary: '#A3E635',
  text: '#E5E5E5',
  textSecondary: '#A3A3A3',
  white: '#FFFFFF',
  danger: '#EF4444',
};

export default theme;
```

### 4.2. Header.js – Thanh tiêu đề

Hiển thị tên ứng dụng GAME LIBRARY, biểu tượng trò chơi và màu sắc theo giao diện mới.

**Hình ảnh giao diện:**

<img width="334" height="590" alt="image" src="https://github.com/user-attachments/assets/20f3c34d-5cb0-4769-a1d3-ac4955e4273f" />



### 4.3. HomeScreen.js – Trang chủ

Hiển thị lời chào, giới thiệu ứng dụng, thống kê số lượng game và một số game gần đây.

**Hình ảnh giao diện:**

<img width="332" height="424" alt="image" src="https://github.com/user-attachments/assets/a3184d79-61e5-4be0-be57-deda01f73e86" />


### 4.4. GameList.js và GameCard.js – Danh sách trò chơi

Hiển thị danh sách game dưới dạng các thẻ. Mỗi thẻ hiển thị thông tin trò chơi và hỗ trợ chọn để xem chi tiết hoặc xóa game.

**Hình ảnh giao diện:**

<img width="330" height="498" alt="image" src="https://github.com/user-attachments/assets/a3d60fbb-ebdf-439e-b0f0-3c10a2c4c693" />


### 4.5. GameDetail.js – Chi tiết trò chơi

Hiển thị thông tin chi tiết của game, hình ảnh, mô tả và phần bình luận. Người dùng có thể thêm bình luận hoặc xóa game.

**Hình ảnh giao diện:**

<img width="336" height="596" alt="image" src="https://github.com/user-attachments/assets/9266bd0c-b081-4928-b05f-bde66371f8a8" />


<img width="331" height="569" alt="image" src="https://github.com/user-attachments/assets/06ae0910-8d37-4762-a4c2-82e261803332" />


### 4.6. AddGame.js – Thêm trò chơi

Cho phép nhập tên game, thể loại, năm phát hành, nhà phát hành, điểm đánh giá, mô tả và chọn hình ảnh từ thư viện thiết bị.

Một số dòng code sử dụng thư viện chọn ảnh:

```javascript
import * as ImagePicker from 'expo-image-picker';

const result = await ImagePicker.launchImageLibraryAsync({
  mediaTypes: ['images'],
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.8,
});

if (!result.canceled) {
  setImage(result.assets[0].uri);
}
```

**Hình ảnh giao diện:**

<img width="332" height="511" alt="image" src="https://github.com/user-attachments/assets/d4afe9d2-15bb-41c8-b081-ded1ad826cfc" />


### 4.7. SearchGames.js – Tìm kiếm trò chơi

Cho phép người dùng nhập từ khóa để tìm kiếm game trong danh sách.

**Hình ảnh giao diện:**

<img width="333" height="507" alt="image" src="https://github.com/user-attachments/assets/03334a72-5891-4688-bd3e-b6c344495d65" />


### 4.8. TabBar.js – Thanh điều hướng

Tạo thanh điều hướng gồm bốn mục: Trang chủ, Danh sách, Tìm kiếm và Thêm game. Mục đang được chọn được làm nổi bật bằng màu xanh lá neon.

**Hình ảnh giao diện:**

<img width="335" height="71" alt="image" src="https://github.com/user-attachments/assets/ced196d0-f47a-44c9-8b11-c9dd30057182" />


## 5. Tổng kết

Sau khi hoàn thành, ứng dụng Game Library có giao diện tối màu kết hợp xanh lá neon, được chia thành các component riêng biệt và hỗ trợ các chức năng quản lý trò chơi.

Các chức năng chính:
- Hiển thị danh sách trò chơi.
- Thêm trò chơi mới.
- Chọn hình ảnh cho trò chơi.
- Tìm kiếm trò chơi.
- Xem thông tin chi tiết.
- Thêm bình luận.
- Xóa trò chơi.
