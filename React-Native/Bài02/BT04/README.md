# BÀI THỰC HÀNH 04 – MULTISCREENAPP

## 1. Link ứng dụng Expo

Link Expo của ứng dụng: https://snack.expo.dev/@ducanh-cdcntt18a/multiscreenapp

## 2. Cấu trúc dự án

```text
MultiScreenApp/
│
├── App.js
│
├── navigation/
│   └── AppNavigator.js
│
└── screens/
    ├── HomeScreen.js
    ├── ListScreen.js
    └── DetailScreen.js
```

## 3. Nội dung các component

### 3.1. AppNavigator.js

- Sử dụng NavigationContainer.
- Sử dụng createNativeStackNavigator.
- Khai báo 3 màn hình Home, List, Detail.
- Thiết lập Home là màn hình mặc định.

Code quan trọng:

```javascript
const Stack = createNativeStackNavigator();

<Stack.Screen
  name="Home"
  component={HomeScreen}
/>

<Stack.Screen
  name="List"
  component={ListScreen}
/>

<Stack.Screen
  name="Detail"
  component={DetailScreen}
/>
```

### 3.2. HomeScreen.js

- Thiết kế giao diện trang chủ.
- Hiển thị lời chào và giới thiệu ứng dụng.
- Tạo nút chuyển sang danh sách khóa học.

Code quan trọng:

```javascript
navigation.navigate('List');
```

### 3.3. ListScreen.js

- Hiển thị danh sách 6 khóa học bằng FlatList.
- Hiển thị tên, giảng viên và thời lượng.
- Cho phép chọn khóa học để xem chi tiết.

Code quan trọng:

```javascript
navigation.navigate('Detail', {
  course: item
});
```

### 3.4. DetailScreen.js

- Nhận thông tin khóa học từ ListScreen.
- Hiển thị tên, giảng viên, thời lượng và mô tả.
- Có nút quay lại danh sách.

Code quan trọng:

```javascript
const { course } = route.params;

navigation.goBack();
```

## 4. Hình ảnh kết quả thực hiện

### 4.1. Giao diện HomeScreen

<img width="335" height="649" alt="image" src="https://github.com/user-attachments/assets/f3db58ca-c8a4-46f0-b1f3-dee593b46ec5" />

### 4.2. Giao diện ListScreen

<img width="337" height="648" alt="image" src="https://github.com/user-attachments/assets/37a5bd4f-3ec1-4edb-83e7-67e9e30cafea" />

### 4.3. Giao diện DetailScreen

<img width="340" height="657" alt="image" src="https://github.com/user-attachments/assets/98f4e08c-f87e-43e4-8434-3ff74330668e" />

### 4.4. Kết quả điều hướng

<img width="333" height="654" alt="image" src="https://github.com/user-attachments/assets/67190f0b-a105-4a71-8c59-d75bfc5caddf" />

<img width="335" height="651" alt="image" src="https://github.com/user-attachments/assets/89faf68b-5f3c-4aab-aab6-128dc16d7dd8" />

<img width="342" height="697" alt="image" src="https://github.com/user-attachments/assets/83588893-aba7-4ee5-b39d-79025e157e7f" />
