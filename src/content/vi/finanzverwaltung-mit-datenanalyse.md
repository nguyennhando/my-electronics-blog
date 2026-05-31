---
translation_id: local-post-1779957810945
language: vi
slug: quan-ly-tai-chinh-voi-phan-tich-du-lieu
title: Quản lý tài chính với phân tích dữ liệu
category: Softwareentwicklung
image_url: /my-electronics-blog/images/posts/finanzmanager-main.webp
image_gallery:
- /my-electronics-blog/images/posts/finanzmanager-1.webp
- /my-electronics-blog/images/posts/finanzmanager-2.webp
- /my-electronics-blog/images/posts/finanzmanager-3.webp
excerpt: Quản lý thu nhập và chi tiêu cá nhân với nhập xuất CSV, phân tích dữ liệu theo thời gian thực và giao diện đồ họa hiện đại. Mã nguồn đầy đủ có trong liên kết dự án.
tags:
- C++
- Qt 6.9
read_time: 5 phút
published: true
created_at: '2026-05-28T08:43:30.945Z'
external_link: https://github.com/nguyennhando/finanzmanager
project_status: done
sort_order: 30
---

# Quản lý tài chính với phân tích dữ liệu

## GeldPilot - Quản lý tài chính cá nhân

GeldPilot là ứng dụng desktop hiện đại để quản lý tài chính cá nhân, được phát triển bằng C++, Qt 6 và SQLite. Phần mềm hỗ trợ theo dõi thu nhập và chi tiêu, nhập xuất CSV và phân tích dữ liệu theo thời gian thực thông qua giao diện đồ họa hiện đại.

Nút `Mở dự án` ở cuối trang dẫn đến toàn bộ mã nguồn.

## Tổng quan

GeldPilot là ứng dụng thân thiện để quản lý thu nhập và chi tiêu. Giao diện trực quan cho phép quản lý giao dịch, tổ chức category và tạo báo cáo tài chính chi tiết.

## Tính năng chính

- **Quản lý giao dịch:** Thêm, sửa và xóa thu nhập hoặc chi tiêu
- **Phân loại:** Sử dụng category có sẵn và category tự tạo
- **Bộ lọc thời gian:** Lọc linh hoạt theo ngày và category
- **Tổng quan tài chính:** Tự động tính thu nhập, chi tiêu và số dư
- **Trực quan hóa:** Hiển thị tài chính bằng biểu đồ cột tương tác
- **Nhập và xuất:** Trao đổi dữ liệu bằng tệp CSV
- **In báo cáo:** Tạo báo cáo chuyên nghiệp với logo công ty

## Yêu cầu hệ thống

### Yêu cầu tối thiểu

- Hệ điều hành: Windows 10 hoặc 11, macOS 10.15+, hoặc Linux Ubuntu 20.04+
- Bộ nhớ: 4 GB RAM
- Dung lượng đĩa: 100 MB
- Độ phân giải màn hình: 1024 x 768

### Khuyến nghị

- Bộ nhớ: 8 GB RAM trở lên
- Độ phân giải màn hình: 1920 x 1080 trở lên

## Cài đặt

### Phiên bản Windows đã biên dịch

1. Tải phiên bản mới nhất từ trang Releases.
2. Giải nén vào thư mục mong muốn.
3. Chạy `GeldPilot.exe`.

### Biên dịch từ mã nguồn

Yêu cầu:

- Qt 6.9 trở lên
- CMake 3.16 trở lên
- Trình biên dịch tương thích C++17:
  - Windows: MinGW-w64 hoặc MSVC 2019+
  - macOS: Xcode 12+
  - Linux: GCC 9+ hoặc Clang 10+

Các bước biên dịch:

```bash
git clone https://github.com/username/geldpilot.git
cd geldpilot
mkdir build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
cmake --build . --config Release
```

Khởi chạy ứng dụng:

```bash
# Windows
./Release/GeldPilot.exe

# Linux hoặc macOS
./GeldPilot
```

## Bắt đầu sử dụng

### Thêm giao dịch đầu tiên

1. Khởi động GeldPilot.
2. Nhập ngày, số tiền và mô tả.
3. Chọn category, ví dụ `Lương`.
4. Chọn loại: `Thu nhập` hoặc `Chi tiêu`.
5. Nhấn `Giao dịch mới`.

### Lọc dữ liệu

- Sử dụng menu chọn category.
- Đặt ngày bắt đầu và ngày kết thúc.
- Nhấn `Lọc` để cập nhật danh sách.

### Tạo báo cáo

- Nhấn `Biểu đồ` để xem trực quan.
- Dùng `In` để tạo báo cáo chuyên nghiệp.
- Xuất dữ liệu CSV để phân tích thêm.

## Hướng dẫn sử dụng

### Quản lý giao dịch

Khi thêm giao dịch, điền đủ các trường bắt buộc:

- Ngày: ngày giao dịch
- Số tiền: luôn nhập giá trị dương
- Mô tả: mô tả ngắn
- Category: nhóm của giao dịch
- Loại: `Thu nhập` hoặc `Chi tiêu`

Để sửa giao dịch:

1. Chọn một hàng trong bảng.
2. Dữ liệu tự động xuất hiện trong ô nhập.
3. Thực hiện thay đổi.
4. Nhấn `Lưu`.

Để xóa:

- Một giao dịch: chọn hàng rồi nhấn `Xóa`.
- Nhiều giao dịch: chọn nhiều hàng bằng `Ctrl + Click` rồi nhấn `Xóa`.

### Category

Các category có sẵn:

- Giải trí
- Lương
- Sức khỏe
- Thực phẩm
- Tiền thuê nhà
- Khác
- Giao thông
- Bảo hiểm
- Đầu tư
- Liên lạc
- Nhà ở

### Lọc và tìm kiếm

Lọc theo category:

- Chọn `Tất cả category` để xem toàn bộ.
- Chọn một category cụ thể để lọc danh sách.

Lọc theo khoảng thời gian:

1. Đặt ngày bắt đầu và ngày kết thúc.
2. Nhấn `Lọc`.

### Nhập và xuất dữ liệu

Nhập CSV:

1. Chuẩn bị tệp CSV với các cột `ID`, `Ngày`, `Số tiền`, `Mô tả`, `Category` và `Loại`.
2. Nhấn `Nhập`.
3. Chọn tệp CSV.

Xuất CSV:

1. Nhấn `Xuất`.
2. Chọn vị trí lưu và tên tệp.
3. Danh sách hiện tại trong bảng được xuất ra.

### Biểu đồ và báo cáo

Nhấn `Biểu đồ` để xem biểu đồ cột. Biểu đồ hiển thị category, tổng thu nhập, tổng chi tiêu và số dư với mã màu tương tác.

Để in báo cáo:

1. Mở biểu đồ.
2. Nhấn `In`.
3. Chọn máy in và thiết lập.
4. Ứng dụng tạo bản in chuyên nghiệp kèm logo.

## Chi tiết kỹ thuật

### Kiến trúc

- Framework GUI: Qt 6.9
- Cơ sở dữ liệu: tệp SQLite cục bộ
- Biểu đồ: Qt Charts
- Hệ thống build: CMake
- Trình biên dịch trên Windows: MinGW-w64

### Schema cơ sở dữ liệu

Bảng giao dịch:

```sql
CREATE TABLE transaktionen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datum DATE NOT NULL,
    betrag REAL NOT NULL,
    beschreibung TEXT,
    kategorie TEXT NOT NULL,
    typ TEXT NOT NULL CHECK (typ IN ('Einnahme', 'Ausgabe'))
);
```

Bảng category:

```sql
CREATE TABLE kategorien (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL
);
```

### Cấu trúc dự án

```text
geldpilot/
  src/
    main.cpp                 Điểm khởi đầu
    mainwindow.cpp/h         Cửa sổ chính
    chartwindow.cpp/h        Cửa sổ biểu đồ
    datenbankmanager.cpp/h   Logic cơ sở dữ liệu
    centerdelegate.h         Định dạng giao diện
  ui/
    mainwindow.ui            Giao diện cửa sổ chính
    chartwindow.ui           Giao diện biểu đồ
  resources/
    icons/                   Biểu tượng ứng dụng
  CMakeLists.txt             Cấu hình build
  README.md                  Tài liệu
```

## Phát triển

Quy ước code:

- Chuẩn C++17
- Quy ước Qt
- Tên biến tiếng Đức có mô tả rõ ràng
- Chú thích đầy đủ

Để đóng góp:

1. Fork repository.
2. Tạo feature branch.
3. Thực hiện thay đổi.
4. Kiểm thử kỹ.
5. Tạo pull request.

Các nội dung đã biết:

- Đã triển khai chọn nhiều giao dịch để xóa.
- Đã lập chỉ mục cơ sở dữ liệu để cải thiện hiệu năng.
- Chức năng sao lưu đang được lên kế hoạch.

## Hỗ trợ

Khi cần trợ giúp:

- Tài liệu: đọc toàn bộ README.
- Issues: báo lỗi trên GitHub.
- E-mail: `support@geldpilot.de`

Câu hỏi thường gặp:

- **Không mở được cơ sở dữ liệu:** Kiểm tra quyền ghi trong thư mục cài đặt.
- **Không hiển thị biểu đồ:** Kiểm tra Qt Charts đã được cài đặt hay chưa.
- **Nhập dữ liệu thất bại:** Kiểm tra định dạng CSV. Các cột phải được phân tách bằng dấu chấm phẩy.

## Giấy phép

Bản quyền 2025 Nguyen Nhan Do. Bảo lưu mọi quyền.  
Phiên bản: 1.0.0  
Nhà phát triển: Nguyen Nhan Do  
Build: Qt 6.9, MinGW-w64, CMake

Sử dụng GeldPilot để kiểm soát tài chính và chủ động xây dựng tương lai tài chính của bạn.
