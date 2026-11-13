---
id: gem-restaurant-nen-tang-dat-mon
slug: gem-restaurant-nen-tang-dat-mon
translation_id: gem-restaurant-platform
language: vi
content_type: project
title: Sao Mai Mainz – Đặt món online và đặt bàn cho nhà hàng
category: Web, Software
image_url: /my-electronics-blog/images/posts/sao-mai-home-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/sao-mai-order-page.webp
- /my-electronics-blog/images/posts/sao-mai-product-dialog.webp
- /my-electronics-blog/images/posts/sao-mai-home-mobile.webp
- /my-electronics-blog/images/posts/sao-mai-reservation.webp
- /my-electronics-blog/images/posts/sao-mai-admin-dashboard.webp
- /my-electronics-blog/images/posts/sao-mai-admin-orders.webp
- /my-electronics-blog/images/posts/sao-mai-admin-menu.webp
excerpt: Nền tảng tự phát triển, tự lưu trữ cho nhà hàng Việt Sao Mai tại Mainz: website khách hàng ba ngôn ngữ, đặt món lấy tại quán, đặt bàn, màn hình bếp và quầy, e-mail và web push. Đang chạy thật.
tags:
- PHP
- MySQL
- Docker
- Web Push
- Nhà hàng
- Đa ngôn ngữ
read_time: 10 phút
published: true
created_at: '2026-11-10T20:30:00.000Z'
external_link: https://online.tavrion.de/
pdf_url: /my-electronics-blog/documents/steckbrief/saomai-vi.pdf
project_status: in_progress
sort_order: 100
---

# Sao Mai Mainz
### Đặt món online và đặt bàn với nền tảng GEM Restaurant

**Một website và một hệ thống vận hành trong cùng một ứng dụng: khách đặt món và đặt bàn, nhân viên xử lý mọi thứ trực tiếp ở bếp và quầy.**

**Công nghệ:** PHP 8.2, MySQL 8, Apache trong Docker  
**Ngôn ngữ:** Đức, Anh, Việt  
**Chức năng:** đặt món lấy tại quán, đặt bàn, màn hình bếp và quầy, e-mail và web push  
**Phiên bản hiện tại:** 2026.11.10-staffpush  
**Trạng thái dự án:** đang chạy thật cho nhà hàng Sao Mai tại Mainz, vẫn tiếp tục phát triển  
**Xem trực tiếp:** [online.tavrion.de](https://online.tavrion.de/)

---

## 1. Tổng quan dự án

### GEM Restaurant là gì?

GEM Restaurant là một **ứng dụng web tự lưu trữ dành cho nhà hàng vừa và nhỏ**. Nó không thay thế một chức năng đơn lẻ nào, mà nối hai phía thường bị tách rời:

- **website cho khách** với thực đơn, đặt món online để lấy tại quán và đặt bàn,
- **khu quản trị**, nơi nhân viên xử lý đơn hàng, đặt bàn và quản lý nội dung.

Tất cả chạy trong một ứng dụng duy nhất, có thể vận hành trên máy chủ hoặc VPS riêng. Không phụ thuộc vào nền tảng đặt món của bên thứ ba và không mất hoa hồng cho mỗi đơn.

### Đang dùng tại Sao Mai

Nền tảng đang chạy thật cho **nhà hàng Sao Mai tại Mainz** (ẩm thực Việt Nam và sushi). Khách đặt món online để lấy tại quán và đặt bàn, còn nhân viên làm việc trong khu quản trị. Bạn có thể xem trực tiếp hệ thống: [online.tavrion.de](https://online.tavrion.de/).

### Ý tưởng cốt lõi

**Nhà hàng nên tự nắm giữ khách hàng, thực đơn và dữ liệu của mình, đồng thời vận hành công việc hằng ngày ở bếp và quầy mà không cần giấy tờ.**

Các hình trên trang này là hệ thống thật của Sao Mai Mainz. Thông tin liên hệ của khách đã được che đi.

---

## 2. Chức năng cho khách hàng

- Trang chủ responsive với chữ và hình ảnh có thể cấu hình.
- Giao diện **tiếng Đức, tiếng Anh và tiếng Việt**.
- Thực đơn theo danh mục, có thông tin món và các biến thể.
- **Đặt món online để lấy tại quán** với giỏ hàng và thanh toán.
- **Liên kết theo dõi** sau khi đặt, để khách xem được trạng thái đơn.
- **Thông báo push** tùy chọn trên thiết bị của khách về tình trạng đơn hàng.
- Đặt bàn với quy trình xác nhận và hủy.
- E-mail gửi khách bằng **đúng ngôn ngữ của họ** (đơn hàng và đặt bàn).
- Các trang pháp lý như thông tin nhà hàng và chính sách quyền riêng tư.

---

## 3. Chức năng cho nhân viên

### Công việc hằng ngày

- **Dashboard** với các con số chính: đơn mới, đang xử lý, đã xong và đã lấy, cùng các lượt đặt bàn mới.
- **Quản lý đơn hàng** từ lúc nhận đến lúc khách lấy, có thao tác nhanh cho nhiều đơn cùng lúc.
- **Màn hình bếp** và **màn hình quầy** cho ca phục vụ trực tiếp, dùng được cả trên máy tính bảng và điện thoại, có giao diện sáng và tối.
- **Âm báo** khi có đơn mới.
- **Thông báo push** cho đơn mới trên thiết bị quản trị. Tùy chọn theo từng thiết bị và không chứa dữ liệu khách.
- Phản hồi về **việc gửi e-mail**: nhân viên thấy e-mail trạng thái đã gửi, bị lỗi hay khách không có địa chỉ.
- **Đặt bàn** có thể xác nhận hoặc từ chối.

### Nội dung và cài đặt

- Trình chỉnh sửa cho **thực đơn, trang chủ, giờ mở cửa, ảnh nền và các trang pháp lý**.
- Tải ảnh WebP cho món ăn và website.
- Xuất danh sách khách và **thống kê** doanh thu, đơn hàng.
- **Nhật ký kiểm toán (audit log)** cho các thao tác quản trị quan trọng.
- Nhiều tài khoản quản trị với **phân quyền**.
- Tùy chọn: **in phiếu bếp** qua cầu nối in HTTP và **giao diện tích hợp máy tính tiền** qua khóa API.

---

## 4. Công nghệ và cấu trúc

- **Backend:** PHP 8.2 với Composer và PSR-4 autoloading, truy cập MySQL 8 qua PDO.
- **Frontend:** PHP render phía máy chủ cùng CSS và JavaScript, không dùng framework nặng.
- **Vận hành:** Docker Compose với các volume riêng cho cơ sở dữ liệu, ảnh tải lên và lưu trữ.
- **E-mail:** PHPMailer qua SMTP.
- **Push:** web push với service worker riêng; khóa được tạo tự động ở lần dùng đầu tiên.
- **Cài đặt:** trình hướng dẫn cài đặt tại `/install/`, migration SQL và dữ liệu khởi tạo.
- **Cấu hình:** qua `.env`, không để bí mật trong repository.

### Cấu trúc mã

Các trang trong `public/` và `admin/` chỉ là controller mỏng. Logic nghiệp vụ nằm trong `app/` và được chia thành các module: thực đơn, đơn hàng, đặt bàn, mail, push, theo dõi, giao hàng, bảo mật, cài đặt và nội dung trang chủ. Nhờ đó dễ kiểm thử và có thể tách dần khỏi các file trang lớn.

---

## 5. Bảo mật và quyền riêng tư

- Đăng nhập quản trị an toàn với quản lý phiên, chống CSRF và **giới hạn tần suất (rate limiting)**.
- **Header bảo mật** cùng kiểm tra đường dẫn và IP khách, kể cả khi chạy sau reverse proxy.
- Khóa API chỉ được lưu dưới dạng **băm (hash)**.
- Tin push **không chứa dữ liệu khách** và chỉ gửi đến thiết bị đã tự đăng ký.
- Bộ gửi push chỉ được gọi tới các endpoint đã được phép, để ngăn lạm dụng.
- Một lớp bảo vệ môi trường production ngăn các thao tác nguy hiểm trên hệ thống đang chạy.
- Bí mật, dữ liệu khách, ảnh tải lên và bản sao lưu không được đưa vào repository.

---

## 6. Vận hành và cập nhật

Có sẵn các công cụ riêng cho việc dùng hằng ngày trên máy chủ:

- **Kiểm tra phát hành:** một script xác nhận trước mỗi lần giao rằng gói đã sẵn sàng. Nó chặn lại nếu thiếu migration hoặc nếu mã sẽ được giao mà không kèm migration tương ứng.
- **Script cập nhật:** dừng lại nếu cấu hình chưa đầy đủ, trước khi chạy bất kỳ lệnh Docker nào.
- **Sao lưu** kèm checksum và cảnh báo khi bản sao lưu gần nhất đã quá cũ.
- **Lệnh trạng thái** cho tình trạng hệ thống, tuổi bản sao lưu và dung lượng đĩa. Lệnh chỉ đọc và an toàn trên hệ thống đang chạy.
- **Rollback:** có thể khôi phục các phiên bản mã cũ, kể cả khi mã mới đã tạo ra dữ liệu.

---

## 7. Những điều tôi học được

### Ảnh tải lên phải nằm trên volume bền vững

Ban đầu ảnh trang chủ được lưu trong thư mục phát hành. Chúng bị mất khi cập nhật. Từ đó, ảnh tải lên được ghi vào **volume tải lên bền vững**, còn các đường dẫn cũ vẫn hoạt động. Bằng chứng chạy trên máy chủ thật: ba ảnh đã tải lên vẫn nguyên vẹn sau khi tạo lại container.

### Máy chủ mail ngừng hoạt động không được làm nhân viên phải chờ

Phép đo với một máy chủ mail “chết” cho thấy mỗi lần đổi trạng thái đều phải chờ 15 giây, còn thao tác hàng loạt bốn đơn mất tới 60 giây. Giờ bộ gửi mail bỏ cuộc sau 5 giây và không thử lại trong 60 giây. Thao tác đầu mất khoảng 5 giây, các thao tác sau chỉ còn vài mili giây. Dữ liệu không bao giờ bị mất.

### Kiểm toán tìm ra lỗi âm thầm

Một đợt rà soát hệ thống e-mail cho thấy mã gửi xác nhận đặt bàn nằm trong một trình xử lý POST thứ hai không bao giờ được gọi tới. Lỗi đã được sửa. Ngoài ra, trước đây chưa từng có e-mail ngay sau khi thanh toán, chỉ có e-mail trạng thái. Những khoảng trống như vậy chỉ lộ ra khi kiểm tra quy trình từ đầu đến cuối.

### Thao tác đồng thời cần quyết định nguyên tử

Một lượt đặt bàn mà khách đã hủy thì không được phép xác nhận nữa. Vì vậy xác nhận và từ chối là một thao tác so sánh-và-đặt nguyên tử.

### Đối chiếu thực đơn lớn bằng script

Với một thực đơn lớn có sẵn script đồng bộ. Script này **idempotent**, không bao giờ xóa gì, tạo bản sao lưu trước, có chế độ chạy thử và dừng lại khi gặp kết quả khớp mơ hồ.

---

## 8. Kiểm thử và chất lượng

Bản phát hành ứng viên được kiểm tra gần nhất đạt **389 trên 389 bài kiểm thử tích hợp** và **83 trên 84 bài kiểm thử trình duyệt**. Bài còn lại được ghi nhận là trường hợp đặc biệt đã biết (lỗi thời gian với một nhãn checkbox).

Với web push có 13 kịch bản trình duyệt dùng service worker thật và một dịch vụ push giả lập. **Khi chạy thật trên thiết bị thật, web push hoạt động ổn định.**

---

## 9. Trạng thái hiện tại và các bước tiếp theo

- Nền tảng đang chạy thật tại Sao Mai và được mở rộng liên tục bằng các bản phát hành nhỏ, có tài liệu.
- Web push đã được hiện thực, kiểm thử tự động và hoạt động ổn định khi chạy thật.
- Còn mở, trong số khác: tiếp tục phát triển giao diện quản trị và tách các file trang lớn thành module.
- Chưa gán giấy phép; mã nguồn là độc quyền.

---

## Kết luận

GEM Restaurant cho thấy phía sau một trang đặt món và đặt bàn “đơn giản” có bao nhiêu việc vận hành: đa ngôn ngữ, màn hình trực tiếp cho bếp, e-mail đáng tin cậy, tin push, bảo mật, sao lưu và cập nhật an toàn. Trọng tâm là để công việc hằng ngày chạy ổn định và để lỗi được nhìn thấy thay vì bị bỏ sót.

---

### GEM Restaurant

**Phát triển bởi Nguyen Nhan Do**

Các hình là hệ thống thật của Sao Mai Mainz, thông tin liên hệ của khách đã được che đi. Dự án độc quyền, bảo lưu mọi quyền.
