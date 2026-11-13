---
id: finora-portfolio-tracker-desktop
slug: finora-portfolio-tracker-desktop
translation_id: finora-portfolio-tracker
language: vi
content_type: project
title: Finora – Ứng dụng Windows quản lý danh mục đầu tư cá nhân
category: Software
image_url: /my-electronics-blog/images/posts/finora-overview.webp
image_gallery:
- /my-electronics-blog/images/posts/finora-portfolio.webp
- /my-electronics-blog/images/posts/finora-allocation.webp
- /my-electronics-blog/images/posts/finora-articles.webp
excerpt: Ứng dụng máy tính cho Windows tính toán cổ phiếu và tiền mã hóa từ chính các giao dịch của bạn, gồm giá trị danh mục, lãi lỗ, lịch sử, tiền mặt và phân bổ. Mọi dữ liệu nằm trên máy, giá lấy từ Binance, Deutsche Börse và Twelve Data, tỷ giá từ ECB. Xây dựng bằng Rust, Tauri và React.
tags:
- Rust
- Tauri
- React
- TypeScript
- SQLite
- Windows
read_time: 11 Min.
published: true
created_at: '2026-11-10T22:30:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/finora-vi.pdf
project_status: in_progress
sort_order: 90
---

# Finora
### Ứng dụng Windows quản lý danh mục đầu tư cá nhân

**Một công cụ điềm tĩnh, chính xác, tính từ chính các lệnh mua bán của bạn xem danh mục thật sự đang ra sao, không cần tài khoản và không có dữ liệu nào rời khỏi máy của bạn.**

**Công nghệ:** Rust, Tauri 2, React 19, TypeScript, SQLite, Apache ECharts  
**Nền tảng:** Windows 10 và 11 (64 bit)  
**Ngôn ngữ giao diện:** Đức, Anh, Việt  
**Phiên bản:** 1.0.3 (Limited Beta)  
**File cài đặt:** gửi theo yêu cầu qua email, xem bên dưới

---

## 1. Tổng quan dự án

### Finora là gì?

Finora là ứng dụng máy tính để theo dõi danh mục đầu tư cá nhân: cổ phiếu Mỹ, cổ phiếu Đức và châu Âu, và tiền mã hóa. Bạn nhập lệnh mua, lệnh bán và các khoản tiền mặt, hoặc nhập từ tệp của sàn môi giới. Finora tính từ đó giá trị vị thế, lãi lỗ và diễn biến theo thời gian.

### Finora không phải là gì

Finora không phải sàn môi giới và không phải nền tảng giao dịch. Nó không đặt lệnh và không cung cấp giá thời gian thực để giao dịch. Giá được cập nhật khoảng 15 phút một lần, đủ để theo dõi tài sản của chính mình. Tỷ giá của ECB là tỷ giá tham chiếu chứ không phải giá giao dịch được, và ứng dụng nói rõ điều đó.

### Ý tưởng cốt lõi

**Mỗi con số đều đến từ giao dịch truy vết được và dữ liệu thị trường thật. Chỗ nào thiếu dữ liệu thì nói rõ ra, không bịa.**

---

## 2. Chức năng

### Tổng quan

- **Toàn bộ danh mục** theo tiền tệ gốc (euro hoặc đô la Mỹ), cùng lãi lỗ chưa thực hiện và đã thực hiện.
- **Tổng theo tiền tệ gốc của từng vị thế:** một vị thế bằng euro và một vị thế bằng đô la không bao giờ bị cộng thẳng. Chỉ khi có tỷ giá ECB thật thì mới quy thành một con số chung.
- **Biểu đồ giá trị danh mục** theo 1 ngày, 1 tuần, 1 tháng, 3 tháng, 1 năm và tối đa, với hiệu suất đầu tư đã loại trừ các khoản nạp và rút.
- **Phân bổ** theo loại tài sản và theo vị thế, mức tập trung của các vị thế lớn nhất, đóng góp của từng vị thế vào lãi lỗ và mức phơi nhiễm tiền tệ.
- **Phân tích tiền mặt** gồm số dư, dòng tiền, thu nhập và chi phí.

### Danh mục

- Vị thế với số lượng, giá mua trung bình, giá hiện tại, giá trị, lãi lỗ và biểu đồ giá nhỏ.
- **Mua và bán** ngay trên từng vị thế, trong một hộp thoại riêng.
- Các thẻ riêng cho **tiền mã hóa** và **tiền mặt**.
- **Nhiều danh mục** trong một lần cài đặt, kể cả danh mục mô phỏng thuần túy.
- **Xuất** vị thế ra CSV.

### Danh sách theo dõi

Theo dõi những mã bạn không sở hữu, thấy giá và độ mới của dữ liệu chỉ trong một cái nhìn. Cửa sổ biểu đồ nhúng chỉ để xem và không bao giờ đi vào việc định giá danh mục.

### Nhập từ tệp của sàn môi giới

Giao dịch có thể lấy từ tệp thay vì gõ từng dòng: CSV của Scalable Capital, tài liệu PDF của Trade Republic và **CSV chung với cột ghép tùy ý** cùng các hồ sơ đã lưu. Tất cả đều qua cùng một chuỗi kiểm tra: xem trước, phát hiện trùng lặp, ghép với tài sản, kiểm tra thứ tự ghi sổ và một lần ghi sổ nguyên tử duy nhất. Không có con đường ghi sổ thứ hai song song. Phần nhập từ Scalable Capital và Trade Republic được đánh dấu là thử nghiệm.

### Tư vấn

Một quy trình cục bộ cho đề xuất đầu tư: một đề xuất gồm các dòng mua và bán kèm lý do. Nó được ghi lại thành một phiên bản bất biến với **mã kiểm SHA-256**. Cố vấn và khách hàng xác nhận đúng phiên bản này **một cách độc lập**. Chỉ khi cả hai xác nhận cùng một phiên bản thì nó mới được coi là đã thỏa thuận. Các lần từ chối và phiên bản cũ vẫn nằm trong lịch sử, và không có chức năng xóa. Sau đó có thể ghi lại việc thực hiện thật tại sàn môi giới. Không có gì được gửi đến sàn và không có gì được ký điện tử.

### Bài viết

Một cửa sổ riêng để đọc và quản lý bài viết và tài liệu, có tìm kiếm và danh mục.

### Sao lưu và xuất

Sao lưu và khôi phục toàn bộ cơ sở dữ liệu kèm kiểm tra tính toàn vẹn, cùng xuất CSV, tất cả qua các hộp thoại Windows thông thường.

---

## 3. Finora tính toán thế nào

### Kế toán

- **Giá bình quân gia quyền** làm giá vốn, lãi lỗ đã thực hiện và chưa thực hiện theo từng giao dịch và từng vị thế.
- **Chặn bán quá số lượng:** không thể bán nhiều hơn số đang có.
- **Các giá trị trung gian không bao giờ bị làm tròn.** Việc làm tròn chỉ diễn ra đúng một lần, khi hiển thị: euro và đô la đến 2 chữ số thập phân, số lượng tiền mã hóa đến 8 và cổ phiếu đến 4. Các quy tắc có trong tài liệu.

### Lịch sử không bịa dữ liệu

Giá trị danh mục của những ngày trước được **dựng lại** từ các giao dịch và giá đã lưu. Nếu một khoảng thời gian thiếu giá thì lịch sử được đánh dấu là **chưa đầy đủ**, kèm mục "chi tiết độ phủ" cho thấy thiếu ở đâu. Không có dữ liệu mẫu. Giá mô phỏng bị loại khỏi phần đánh giá thật.

### Tỷ giá

Euro và đô la được gộp bằng **tỷ giá tham chiếu chính thức của ECB**. Việc lấy tỷ giá dựa theo thời điểm công bố (khoảng 16:30 giờ Berlin) và các ngày nghỉ của hệ thống TARGET, có thời gian chờ sau lỗi và chỉ một yêu cầu chung khi nhiều màn hình cùng hỏi.

### Nguồn giá

- **Tiền mã hóa:** dữ liệu thị trường công khai từ giao diện Binance Spot, với cặp giao dịch đầy đủ như BTCEUR.
- **Cổ phiếu Đức và châu Âu:** dịch vụ dữ liệu trễ miễn phí chính thức của Deutsche Börse (Xetra), theo mã ISIN. Giá trễ khoảng 15 phút và được ghi rõ như vậy.
- **Cổ phiếu Mỹ:** Twelve Data, với khóa API riêng do bạn tự nhập trong phần cài đặt.

Giá hiện tại và nến lịch sử được lưu đệm riêng, để một báo giá mới nhất không bao giờ bị nhầm với một cây nến. "Trễ" và "cũ" là hai trạng thái khác nhau. Nếu một lần lấy dữ liệu thất bại, các giá trị gần nhất vẫn hiển thị và được ghi chú độ mới.

---

## 4. Kỹ thuật

### Cấu trúc

- **Giao diện:** React 19, TypeScript (chế độ nghiêm ngặt) và Vite, biểu đồ bằng Apache ECharts, tạo kiểu bằng Tailwind CSS 4 và các biến thiết kế
- **Vỏ ứng dụng và logic:** Tauri 2 với Rust. Mọi yêu cầu mạng đều chạy ở phần Rust, không bao giờ ở giao diện
- **Cơ sở dữ liệu:** SQLite, cục bộ, qua rusqlite, với các bản di chuyển có phiên bản (hiện là schema 27)
- **Thông tin xác thực:** khóa Twelve Data nằm trong kho thông tin xác thực của Windows, không bao giờ nằm trong cơ sở dữ liệu hay gói chương trình
- **Ngôn ngữ:** i18next với tiếng Đức, Anh và Việt, đổi được không cần khởi động lại

Các lớp được tách riêng: nguồn giá nằm sau một giao diện chung, một lớp tính toán thuần túy cho danh mục không phụ thuộc vào giao diện, và một lớp truy cập dữ liệu mà giao diện dùng làm đường duy nhất vào phần Rust.

### Đám mây tùy chọn

Có một máy chủ **tùy chọn** tên Finora Cloud (Rust với Axum và PostgreSQL, sau một đường hầm Cloudflare). Nó quản lý tài khoản và các quy trình tư vấn, mật khẩu lưu dạng Argon2id, phiên đăng nhập là các token ngẫu nhiên mà chỉ mã kiểm SHA-256 được lưu. Một danh mục chỉ được đồng bộ **sau khi bạn bấm rõ ràng** và chỉ theo từng danh mục, có xử lý xung đột ("giữ bản cục bộ" hoặc "dùng bản trên đám mây"). Máy chủ chưa chạy chính thức. Ứng dụng hoạt động đầy đủ khi không có nó.

### Chất lượng

- **Kiểm thử tính toán** bằng Vitest cho danh mục, định dạng, sao lưu, tỷ giá và nhập liệu
- **Kiểm thử Rust** cho di chuyển, truy cập dữ liệu, sao lưu và các ràng buộc
- **Kiểm thử hiệu năng** với dữ liệu nhân tạo đến **100.000 giao dịch**, 50.000 sự kiện tiền mặt và 20 lần khởi động lại liên tiếp. Việc này tìm ra một lỗi thật: mỗi lần ghi sổ đều kiểm tra lại toàn bộ lịch sử mà không có chỉ mục phù hợp. Một chỉ mục mới (schema 27) đưa việc thêm một giao dịch ở mức 100.000 dòng xuống còn khoảng 7 mili giây.

### Việc còn dang dở

Phiên bản này là **Limited Beta**. Phần nhập từ sàn môi giới còn thử nghiệm và chưa kiểm tra với tệp thật, đám mây chưa chạy chính thức, và bài kiểm thử chạy liên tục nhiều giờ vẫn chưa có. Ghi chú phát hành cũng nói như vậy.

---

## 5. Cài đặt và dữ liệu

Bộ cài (NSIS) cài Finora **chỉ cho tài khoản Windows của chính bạn**, không cần quyền quản trị. Vì nó chưa được ký bằng chứng chỉ, Windows SmartScreen có thể hiện cảnh báo ở lần chạy đầu. Khi đó bạn chọn "Thông tin thêm" rồi "Vẫn chạy".

Dữ liệu nằm trong một tệp cơ sở dữ liệu duy nhất trên máy của bạn và **trống** ở lần chạy đầu, không có dữ liệu mẫu hay demo. Khi gỡ cài đặt, cơ sở dữ liệu, nhật ký và bản sao lưu mặc định được giữ lại.

Các hình ở trên lấy từ một bản phát triển với số liệu ví dụ, và cho thấy trang tổng quan, danh mục, phân bổ và cửa sổ bài viết.

---

## 6. File cài đặt và mã nguồn

**File cài đặt** tôi gửi theo yêu cầu. Hãy nhắn cho tôi vài dòng về việc bạn muốn dùng Finora để làm gì: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

Mã nguồn không công khai. Nếu bạn muốn đánh giá cách tôi làm việc, bạn có thể xem **khi có yêu cầu** qua cùng địa chỉ này.

Finora là công cụ để theo dõi tổng quan và không phải tư vấn đầu tư. Mọi thông tin không kèm bảo đảm.
