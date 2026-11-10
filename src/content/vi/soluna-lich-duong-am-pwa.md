---
id: soluna-lich-duong-am-pwa
slug: soluna-lich-duong-am-pwa
translation_id: soluna-calendar-pwa
language: vi
content_type: project
title: SOLUNA – Lịch dương và âm dạng Progressive Web App
category: Web, Software
image_url: /my-electronics-blog/images/posts/soluna-today-desktop.webp
image_gallery:
- /my-electronics-blog/images/posts/soluna-month-desktop.webp
- /my-electronics-blog/images/posts/soluna-month-mobile.webp
- /my-electronics-blog/images/posts/soluna-month-dark.webp
- /my-electronics-blog/images/posts/soluna-converter-mobile.webp
- /my-electronics-blog/images/posts/soluna-today-mobile.webp
- /my-electronics-blog/images/posts/soluna-settings.webp
excerpt: Ứng dụng lịch cài được lên điện thoại, hiển thị song song lịch dương và lịch âm tính theo thiên văn. Chạy trên iPhone, Android và trình duyệt, kể cả khi ngoại tuyến, không cần tài khoản hay máy chủ.
tags:
- PWA
- React
- TypeScript
- Lịch âm
- Vite
- Kiểm thử
read_time: 9 phút
published: true
created_at: '2026-11-10T21:30:00.000Z'
external_link: 
project_status: in_progress
sort_order: 80
---

# SOLUNA
### Lịch dương và âm dạng Progressive Web App

**Một cuốn lịch cho những người sống với hai cách tính thời gian: dương lịch và âm lịch.**

**Công nghệ:** React 19, TypeScript, Vite, PWA  
**Lịch:** Việt Nam, Trung Quốc và Hàn Quốc (tính theo thiên văn)  
**Ngôn ngữ:** tiếng Việt, Anh, Đức, Trung, Nhật, Hàn, Thái  
**Phiên bản:** 0.1.0  
**Trạng thái dự án:** đang phát triển, các chức năng chính đã chạy và được kiểm thử

---

## 1. Tổng quan dự án

### SOLUNA là gì?

SOLUNA là một **Progressive Web App**: mở trong trình duyệt và có thể cài lên màn hình chính của iPhone hay Android. Sau lần tải đầu tiên, ứng dụng cũng chạy được khi không có internet.

Với mỗi ngày, ứng dụng hiển thị ngày dương lịch và **ngày âm lịch** tương ứng. Ngoài ra còn có chế độ xem Tháng, Tuần, Ngày, bộ chuyển đổi hai chiều, ngày lễ, kỳ nghỉ học và lời nhắc.

### Ý tưởng cốt lõi

**Một cuốn lịch coi trọng âm lịch: dùng thiên văn thật thay vì bảng tra cứu.**

Nhiều ứng dụng lịch chỉ hiển thị ngày âm một cách sơ sài hoặc sai. SOLUNA tự tính từ vị trí của Mặt Trời và Mặt Trăng, rồi kiểm tra kết quả bằng bài kiểm thử cho từng ngày một, từ năm 1900 đến 2100.

---

## 2. Chức năng

### Hôm nay

- Bảng ngày lớn với ngày dương lịch và ngày âm lịch.
- Thẻ về nhịp trăng: ngày trong tháng âm, độ dài tháng (29 hoặc 30 ngày) và đó là tháng thường hay tháng nhuận.
- Gợi ý về **ngày nghỉ tiếp theo** và lời nhắc của hôm nay.

### Lịch

- **Tháng, Tuần và Ngày** trong một màn hình, điều hướng nhanh.
- Mỗi ô có ngày âm. Mùng 1 âm lịch được đánh dấu dạng “1/10”, ngày Rằm (15) được gạch chân.
- Cuối tuần màu đỏ, ngày lễ có vòng tròn màu.
- Chạm vào một ngày sẽ mở cửa sổ chi tiết.

### Bộ chuyển đổi

Công cụ **dương sang âm và âm sang dương**. Nó hiểu tháng nhuận và báo lỗi khi nhập sai, ví dụ ngày 30 trong tháng chỉ có 29 ngày.

### Ngày lễ và kỳ nghỉ học

- Ngày lễ theo luật cho cả **16 bang của Đức**, kèm các quy tắc địa phương đặc biệt (ví dụ cho Augsburg hoặc một phần của Sachsen và Thüringen).
- **Kỳ nghỉ học** theo từng bang, tải từ OpenHolidays API và lưu đệm cục bộ.
- Tên gọi bằng cả bảy ngôn ngữ của giao diện.

### Lời nhắc

Với mỗi ngày có thể tạo, sửa và xóa một lời nhắc gồm tiêu đề và giờ tùy chọn. Lời nhắc nằm trên thiết bị. Đến giờ đã chọn, ứng dụng hiện thông báo.

### Cài đặt

- Giao diện: sáng, tối hoặc theo hệ thống.
- Ngôn ngữ giao diện, ngày đầu tuần (Thứ Hai hoặc Chủ Nhật).
- Múi giờ cho “hôm nay”: giờ thiết bị hoặc giờ Việt Nam.
- **Ảnh nền** riêng cho trang chủ, chọn từ thư viện ảnh. Ảnh được thu nhỏ ngay trên thiết bị và lưu tại đó.

---

## 3. Lịch âm

Trái tim của ứng dụng là một phép tính tự viết bằng TypeScript thuần, không dùng thư viện ngoài.

### Cách tính

1. Ngày được đổi thành số ngày Julian.
2. **Ngày sóc thiên văn** (trăng mới) gần nhất được ước lượng và khoanh vùng bằng phương pháp kiểu Meeus.
3. Trăng mới được gán vào ngày dương mà nó rơi vào theo múi giờ cố định.
4. Từ kinh độ Mặt Trời, ứng dụng xác định đang ở **trung khí** nào.
5. Tháng 11 là tháng chứa ngày đông chí.
6. Trong năm có 13 tháng, tháng đầu tiên không có trung khí trở thành **tháng nhuận**.
7. Chiều ngược lại dựng lại tháng 11 và ngày bắt đầu tháng.

### Ba loại lịch, một nền thiên văn

Lịch Việt Nam, Trung Quốc và Hàn Quốc dùng cùng một thiên văn nhưng khác múi giờ tham chiếu: **UTC+7, UTC+8 và UTC+9**. Phép tính nhận múi giờ làm tham số. Trên giao diện, ngôn ngữ quyết định loại lịch: tiếng Trung hiển thị lịch Trung Quốc, tiếng Hàn hiển thị lịch Hàn Quốc, các ngôn ngữ còn lại hiển thị lịch Việt Nam.

### Một giới hạn được nói thẳng

Phạm vi được bảo đảm là **từ 01/01/1900 đến 31/12/2100**. Ngoài phạm vi, ứng dụng hiển thị dấu gạch ngang và không bịa ra giá trị. Với thời kỳ trước 1976, kết quả lịch Việt Nam là suy ngược theo quy tắc hiện đại, không phải lịch pháp lý trong lịch sử.

---

## 4. Công nghệ và cấu trúc

- **Frontend:** React 19 và TypeScript 5.7, đóng gói bằng Vite 6.
- **Điều hướng:** React Router dùng đường dẫn hash, để ứng dụng chạy được mà không cần cấu hình máy chủ.
- **PWA:** service worker qua vite-plugin-pwa. Bản cập nhật được đề nghị chứ không âm thầm cài.
- **Thiết kế:** biến CSS cho màu và khoảng cách, giao diện sáng và tối, tôn trọng thiết lập giảm chuyển động.
- **Bố cục:** thanh bên trên máy tính, thanh điều hướng dưới trên điện thoại.

### Tách logic khỏi giao diện

Mã nguồn chia thành các tầng:

- `core/dates`: kiểu ngày riêng không có giờ và múi giờ, để không bị lệch do giờ mùa hè.
- `core/calendar`: dựng lưới tháng.
- `core/lunar`: phép tính lịch âm.
- `features`: các trang Hôm nay, Lịch, Chuyển đổi, Ngày lễ, Lời nhắc và Cài đặt.
- `shared`: các thành phần dùng chung, thiết kế và bản dịch.

Giao diện không chứa thiên văn. Nhờ vậy phép tính có thể kiểm thử độc lập và sau này dùng lại trong worker hoặc công cụ xuất dữ liệu.

---

## 5. Kiểm thử và chất lượng

- **308 bài kiểm thử trong 22 file** đều đạt.
- Phép tính lịch âm được kiểm tra cho **cả 73.414 ngày** trong phạm vi, với từng loại trong ba loại lịch: chuyển đổi hai chiều, ánh xạ không trùng lặp, độ dài tháng và tháng nhuận đúng.
- Dữ liệu tham chiếu từ các nguồn đã công bố kiểm tra, trong số khác, các ngày Tết và những trường hợp rất nhạy, như một ranh giới vào năm 2054 mà chỉ bài kiểm tra toàn diện mới phát hiện ra.
- Một bài kiểm thử đổi múi giờ của hệ thống và kiểm tra kết quả không đổi.
- Playwright kiểm tra quy trình ở hai cỡ màn hình, việc lưu cài đặt và **bộ nhớ đệm ngoại tuyến** của bản chính thức, cùng **khả năng truy cập** bằng axe.
- Mã chạy không có cảnh báo ESLint nào, với Prettier và độ phủ tối thiểu 80 phần trăm.

---

## 6. Quyền riêng tư

- **Không tài khoản, không máy chủ, không theo dõi.**
- Cài đặt, lời nhắc và ảnh nền nằm trong bộ nhớ của trình duyệt trên thiết bị.
- Lời gọi mạng duy nhất của ứng dụng là tới OpenHolidays API để lấy kỳ nghỉ học. Kết quả được lưu cục bộ.

---

## 7. Giới hạn

- Lời nhắc chỉ hiện khi ứng dụng đang mở, vì không có máy chủ để gửi thông báo đẩy.
- **Widget iPhone** thật không làm được với PWA. Cần một ứng dụng native.
- Không có đồng bộ giữa các thiết bị.
- Dữ liệu tham chiếu của lịch Trung Quốc và Hàn Quốc cố ý nhỏ hơn và được đối chiếu ít rộng rãi hơn so với lịch Việt Nam.
- Chưa có Can Chi (chu kỳ con giáp và ngũ hành), giờ tốt, xuất `.ics` và đồng bộ.

---

## 8. Trạng thái hiện tại và bước tiếp theo

- Các chức năng chính đã được hiện thực và kiểm thử.
- Ứng dụng hiện ở phiên bản 0.1.0.
- Các bước tiếp theo hợp lý: Can Chi và giờ tốt, xuất `.ics`, và kiểm tra thêm dữ liệu tham chiếu của lịch Trung Quốc và Hàn Quốc.
- Chưa gán giấy phép.

---

## Kết luận

SOLUNA cho thấy ngay cả một công cụ tưởng đơn giản như cuốn lịch cũng có thể được xây dựng cẩn thận: phép tính có thể truy vết, kiểm thử đầy đủ cho toàn bộ phạm vi dữ liệu, và giao diện chạy được ngoại tuyến, giữ dữ liệu trên thiết bị.

---

## Mã nguồn

Mã nguồn nằm trên GitHub nhưng không được chia sẻ công khai để bảo vệ dự án. Nếu bạn cần xem mã nguồn, chẳng hạn để đánh giá năng lực của người thực hiện dự án, vui lòng liên hệ với tôi qua e-mail donguyennhan.de@gmail.com.

---

### SOLUNA

**Phát triển bởi Nguyen Nhan Do**

Tất cả hình ảnh là ảnh chụp màn hình của ứng dụng đang chạy.
