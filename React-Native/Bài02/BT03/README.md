# BÀI TẬP 03 – PRODUCTAPP

## 1. Link ứng dụng Expo

Link Expo của ứng dụng:https://snack.expo.dev/@ducanh-cdcntt18a/productapp

## 3. Cấu trúc component

Dự án được chia thành các component:

- **App.js:** Component chính, kết hợp các component.
- **Header.js:** Hiển thị tên cửa hàng.
- **ProductCard.js:** Hiển thị thông tin sản phẩm thông qua props.
- **ProductList.js:** Quản lý và hiển thị danh sách sản phẩm bằng FlatList.

## 4. Các chức năng đã thực hiện

- Hiển thị danh sách 6 sản phẩm công nghệ.
- Hiển thị hình ảnh sản phẩm.
- Hiển thị tên sản phẩm.
- Hiển thị giá sản phẩm.
- Hiển thị mô tả sản phẩm.
- Sử dụng props để truyền dữ liệu vào ProductCard.
- Sử dụng FlatList để kết xuất danh sách sản phẩm.
- Chia giao diện thành các component riêng biệt.

## 5. Các dòng code quan trọng

### ProductCard.js

```jsx
export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
    </View>
  );
}
```

### ProductList.js

```jsx
<FlatList
  data={products}
  keyExtractor={(item) => item.id}
  numColumns={2}
  renderItem={({ item }) => (
    <ProductCard product={item} />
  )}
/>
```

## 6. Hình ảnh kết quả

### Giao diện chính

<img width="397" height="656" alt="image" src="https://github.com/user-attachments/assets/98e6aae8-2940-4790-8c95-4d577cf97319" />

### Component Header

<img width="336" height="135" alt="image" src="https://github.com/user-attachments/assets/c0aea7b4-bb46-4c1e-bf73-f9445aa96266" />

<img width="609" height="608" alt="image" src="https://github.com/user-attachments/assets/8ebe6b75-87ab-4f12-9fb0-38f7c084b35e" />

### Component ProductCard

<img width="157" height="277" alt="image" src="https://github.com/user-attachments/assets/6b1324b8-b4a2-4375-a15b-9c1ec2a943e8" />

<img width="944" height="658" alt="image" src="https://github.com/user-attachments/assets/3032d2cd-aca5-4c1f-89c0-90ffebd79295" />

### Component ProductList

<img width="932" height="637" alt="image" src="https://github.com/user-attachments/assets/43fc31c9-11d5-47f8-8705-3a7995411e13" />

<img width="933" height="424" alt="image" src="https://github.com/user-attachments/assets/55c8e873-1d57-4109-b8ff-c2d2748b7ebd" />

