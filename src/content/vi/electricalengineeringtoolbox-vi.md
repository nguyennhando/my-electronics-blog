---
id: electricalengineeringtoolbox-vi
slug: electricalengineeringtoolbox-vi
translation_id: electrical-engineering-toolbox-privacy-policy
language: vi
content_type: project
title: Electrical Engineering Toolbox – Bộ tính toán ngoại tuyến và công cụ dự án cho thiết kế điện
category: Software
image_url: /my-electronics-blog/images/posts/EEToolbox-main-1.webp
image_gallery:
- /my-electronics-blog/images/posts/EEToolbox-main-2.webp
- /my-electronics-blog/images/posts/EEToolbox-main-3.webp
- /my-electronics-blog/images/posts/EEToolbox-main-4.webp
excerpt: Ứng dụng Windows dành cho người thiết kế điện, kỹ thuật viên và sinh viên. Có máy tính sụt áp, tiết diện cáp, thiết bị bảo vệ, dòng động cơ và máy biến áp, cùng danh sách tải, bảng cáp và báo cáo PDF. Mọi thứ chạy ngoại tuyến, không cần tài khoản và không thu thập dữ liệu. Có trên Microsoft Store.
tags:
- C++
- Qt 6
- Windows
- Ngoại tuyến
- SQLite
- Microsoft Store
read_time: 8 Min.
published: true
created_at: '2026-06-19T06:29:08.495Z'
external_link: https://apps.microsoft.com/detail/9P368QBV3S27?hl=neutral&gl=DE&ocid=pdpshare
project_status: done
sort_order: 50
---

# Electrical Engineering Toolbox
### Bộ tính toán ngoại tuyến và công cụ dự án cho thiết kế điện

**Ứng dụng Windows gom các phép tính hằng ngày của thiết kế điện vào một nơi: nhanh, truy vết được và không cần đám mây.**

**Công nghệ:** C++17, Qt 6 (Widgets), SQLite, CMake  
**Nền tảng:** Windows 10 và 11 (64 bit)  
**Ngôn ngữ giao diện:** Đức, Anh, Việt, Trung giản thể  
**Phiên bản:** 1.0.0  
**Phát hành:** trên Microsoft Store (xem nút "Mở dự án" ở cuối trang)

---

## 1. Tổng quan dự án

### Toolbox là gì?

Electrical Engineering Toolbox là phần mềm máy tính dành cho **người thiết kế điện, kỹ thuật viên, thợ lắp đặt và sinh viên**. Nó thay thế đống bảng tính Excel, công thức bấm máy và giấy ghi chú mà người ta thường dùng để ước tính cáp, thiết bị bảo vệ và sụt áp.

Chương trình chạy hoàn toàn trên máy của bạn. Nó **không cần tài khoản, không cần internet, không cần đăng ký thuê bao**, không có quảng cáo và không gửi dữ liệu sử dụng.

### Ý tưởng cốt lõi

**Một công cụ giúp tiết kiệm thời gian khi thiết kế và làm cho mọi kết quả truy vết được qua công thức và dữ liệu đầu vào.**

Kết quả chỉ là công cụ hỗ trợ tính toán cho giai đoạn thiết kế sơ bộ. Việc chọn kích cỡ cuối cùng vẫn thuộc về người có chuyên môn, theo tiêu chuẩn hiện hành.

---

## 2. Chức năng

### Máy tính

- **Định luật Ohm** với đại lượng cần tính tùy chọn: điện áp, dòng điện, điện trở hoặc công suất.
- **Máy tính công suất** cho một chiều và xoay chiều, gồm công suất tác dụng, phản kháng và biểu kiến.
- **Sụt áp** cho đường dây một pha và ba pha, theo phần trăm và theo điện áp tại tải.
- **Tiết diện cáp** theo dòng điện, cách lắp đặt, nhiệt độ môi trường và mức sụt áp cho phép, kèm các phương án thay thế.
- **Thiết bị bảo vệ:** chọn cỡ chuẩn kế tiếp từ 6 A đến 630 A.
- **Dòng động cơ** ở đầy tải.
- **Máy biến áp:** tỷ số và công suất biểu kiến.
- **Chuyển đổi đơn vị** cho các đại lượng điện thông dụng.

Bên cạnh kết quả, mỗi máy tính đều hiển thị **công thức đã dùng** và một ghi chú ngắn về các giả định.

### Không gian dự án

Với công trình lớn hơn có một không gian làm việc riêng:

1. Đặt thông tin dự án: điện áp, hệ pha, hệ số đồng thời.
2. Nhập tải bằng tay hoặc **nhập từ CSV hay Excel**. Việc ghép cột được thực hiện trong bản xem trước, tên trùng có thể được đổi tên khi cần.
3. Tạo **bảng cáp** chỉ bằng một cú nhấp: với mỗi tải, chương trình tính dòng điện, tiết diện cáp, sụt áp và thiết bị bảo vệ, kèm trạng thái (đạt, cảnh báo, lỗi).
4. Xuất bảng cáp ra CSV hoặc xuất **báo cáo đầy đủ ra PDF**.

Danh sách tải được thiết kế cho dự án lớn và vẫn mượt với vài trăm dòng.

### Tra cứu nhanh IEC

Công cụ tra cứu hoạt động không cần internet: cấp bảo vệ IP, các cấp điện áp, tiết diện cáp, dãy thiết bị bảo vệ, công suất máy biến áp, hệ số công suất, hiệu suất động cơ, tần số, ký hiệu và đơn vị. Các giá trị nằm sẵn trong chương trình và là giá trị tham khảo chung, không sao chép từ văn bản tiêu chuẩn.

### Trợ lý thông minh

Một trợ lý dựa trên quy tắc đưa ra gợi ý về tải, cáp và thiết bị bảo vệ, ví dụ khi sụt áp quá cao hoặc thiết bị bảo vệ lớn hơn cáp. Trợ lý hoạt động **không cần dịch vụ AI trực tuyến**, chỉ dùng các quy tắc cố định mà bạn có thể kiểm tra.

### Lịch sử

Mọi phép tính đều có thể lưu lại. Lịch sử có thể lọc, xuất ra CSV hoặc PDF và xóa nhiều mục cùng lúc.

### Giao diện

Nền tối và nền sáng, bốn ngôn ngữ với hơn 1.000 chuỗi đã dịch, đổi được ngay khi đang chạy.

---

## 3. Cách chương trình tính toán

### Chọn cáp

Việc chọn cáp theo một logic đơn giản, kiểm tra được:

1. **Dòng tải** được xác định từ công suất, điện áp, hệ pha và hệ số công suất.
2. Khả năng mang dòng lấy từ bảng tham chiếu theo IEC 60364 được **giảm** theo cách lắp đặt và nhiệt độ môi trường.
3. Chọn tiết diện nhỏ nhất mà khả năng mang dòng sau khi giảm đạt dòng tải **và** sụt áp nằm dưới giá trị cho phép (mặc định 3 %).
4. Chương trình còn hiển thị cỡ lớn hơn kế tiếp và độ dự phòng an toàn theo phần trăm.

Sụt áp tính bằng **ΔU = 2 · I · L · R · cos φ** cho một pha và **ΔU = √3 · I · L · R · cos φ** cho ba pha.

### Thiết bị bảo vệ

1. Dòng tải được nhân với hệ số theo loại tải (1,25 cho động cơ và máy biến áp, 1,0 cho các tải khác).
2. Chọn **cỡ chuẩn nhỏ nhất** đạt giá trị đó. Ví dụ: dòng động cơ 28 A cho ra 35 A, nên chọn thiết bị 40 A.
3. Nếu đã chọn cáp thì **phối hợp** được kiểm tra: thiết bị bảo vệ không được lớn hơn khả năng mang dòng của cáp.

### Giới hạn, nói thẳng

- Tải một chiều không được đánh giá bởi phần chọn cáp xoay chiều.
- Hành vi khởi động động cơ chưa được mô hình hóa chi tiết.
- Mọi kết quả chỉ là ước tính cho thiết kế sơ bộ và phải được đối chiếu với quy định hiện hành.

---

## 4. Kỹ thuật

### Cấu trúc

- **Ngôn ngữ và giao diện:** C++17 với Qt 6 (Widgets, SVG, SQL, công cụ dịch)
- **Build:** CMake 3.16 trở lên, MSVC 2022
- **Lưu trữ:** SQLite, cục bộ, cho lịch sử tính toán
- **Bộ cài:** Inno Setup, và MSIX cho Microsoft Store

Mã nguồn được chia thành bốn lớp:

- **Lõi:** các mô-đun tính toán, mô hình dự án, kiểm tra dữ liệu
- **Dịch vụ:** nhập, xuất, báo cáo, ngôn ngữ, lịch sử
- **Giao diện:** trang, widget, quy trình
- **Dữ liệu:** cơ sở dữ liệu, cùng kiểu dáng, biểu tượng và bảng tham chiếu dưới dạng tài nguyên

### Chất lượng

Ứng dụng có bộ kiểm thử tự động gồm **66 bài kiểm tra**: đơn vị, tích hợp, giao diện và mô phỏng. Các mô-đun tính toán được tách khỏi giao diện nên có thể kiểm thử mà không cần cửa sổ.

---

## 5. Yêu cầu hệ thống

- **Hệ điều hành:** Windows 10 hoặc Windows 11 (64 bit)
- **Màn hình:** tối thiểu 1366 × 768, khuyến nghị 1920 × 1080
- **Dung lượng:** khoảng 150 MB
- **Mạng:** không bắt buộc

---

## 6. Quyền riêng tư

**Hiệu lực:** 18/06/2026 · **Phiên bản:** 1.0.0  
**Bên chịu trách nhiệm:** Nguyen Nhan Do  
**Liên hệ về quyền riêng tư và hỗ trợ:** [nguyennhan.do@outlook.com](mailto:nguyennhan.do@outlook.com)

Trang này đồng thời là chính sách quyền riêng tư của ứng dụng trên Microsoft Store.

### Tóm tắt

- Ứng dụng là **chương trình ngoại tuyến**. Khi dùng bình thường, nó **không thu thập, không bán và không truyền dữ liệu cá nhân**.
- **Không có phân tích, không có đo từ xa, không có quảng cáo và không đồng bộ đám mây.**
- Không có tài khoản và không có giao dịch trong ứng dụng.
- Lịch sử, cài đặt và tệp dự án chỉ nằm **trên thiết bị của bạn**.

### Dữ liệu lưu cục bộ

- **Lịch sử tính toán** trong cơ sở dữ liệu cục bộ tại `%LOCALAPPDATA%\ElectricalEngineeringToolbox\`
- **Cài đặt** như ngôn ngữ và giao diện, cũng ở nơi đó
- **Tệp dự án** (`.eetproject`) và **tệp CSV, PDF đã xuất** trong thư mục do bạn tự chọn
- **Nhật ký chẩn đoán** (`logs\app.log`), chỉ lưu cục bộ và không bao giờ được tải lên

Nhà phát triển không nhận được những dữ liệu này. Các tệp đã xuất nằm hoàn toàn dưới quyền kiểm soát của bạn.

### Dữ liệu không thu thập

Họ tên, địa chỉ e-mail, vị trí, mã định danh thiết bị cho quảng cáo, thống kê sử dụng, báo cáo sự cố, dữ liệu tính toán, dữ liệu dự án, ảnh, danh bạ, lịch hay micro.

### Liên hệ qua e-mail

Nếu bạn viết thư cho tôi, tôi xử lý địa chỉ e-mail, nội dung thư và tệp đính kèm để trả lời yêu cầu của bạn (Điều 6(1)(b) hoặc (f) GDPR). Dữ liệu được xóa khi không còn cần cho mục đích đó. Tôi không dùng chúng cho quảng cáo.

### Quyền của bạn

Tại EEA, Vương quốc Anh và Thụy Sĩ, bạn có quyền truy cập, chỉnh sửa, xóa, hạn chế xử lý, phản đối và chuyển dữ liệu, cũng như quyền khiếu nại với cơ quan giám sát. Hãy liên hệ theo địa chỉ ở trên.

### Quyền kiểm soát của bạn

Bạn có thể xóa lịch sử trong ứng dụng, tự xóa tệp dự án, và xóa toàn bộ dữ liệu ứng dụng bằng cách gỡ cài đặt rồi xóa thư mục `%LOCALAPPDATA%\ElectricalEngineeringToolbox\`.

### Trẻ em

Ứng dụng là công cụ kỹ thuật đa dụng và không dành cho trẻ dưới 13 tuổi. Không có dữ liệu nào của trẻ em được thu thập.

### Thay đổi

Nếu chính sách này thay đổi, ngày "Hiệu lực" ở đầu trang sẽ thay đổi theo.

---

## 7. Lưu ý

### Lưu ý kỹ thuật

Mọi kết quả, bảng cáp, đề xuất thiết bị bảo vệ, giá trị tham chiếu và gợi ý của trợ lý đều là **công cụ hỗ trợ tính toán**, không phải tư vấn chuyên môn, pháp lý hay an toàn. Việc chọn kích cỡ, lựa chọn thiết bị, lắp đặt, phối hợp bảo vệ và nghiệm thu phải do **người có chuyên môn** thực hiện theo tiêu chuẩn hiện hành và dữ liệu của nhà sản xuất (ví dụ IEC, DIN, VDE, EN, NEC). Người dùng chịu trách nhiệm kiểm tra kết quả.

### Sử dụng

Phần mềm được cung cấp "nguyên trạng" và, trong phạm vi pháp luật cho phép, không kèm bảo hành. Trong phạm vi pháp luật cho phép, không chịu trách nhiệm về thiệt hại phát sinh khi sử dụng, như sai sót thiết kế, chậm tiến độ hay mất dữ liệu. Dịch ngược, giải mã và phân phối lại vượt quá quyền theo luật cần có sự đồng ý bằng văn bản của nhà phát triển.

### Mã nguồn

Mã nguồn không công khai. Nếu bạn muốn đánh giá cách tôi làm việc, bạn có thể xem **khi có yêu cầu**: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

---

© 2026 Nguyen Nhan Do. Bảo lưu mọi quyền.
