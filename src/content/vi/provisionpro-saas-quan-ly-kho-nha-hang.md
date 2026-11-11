---
id: provisionpro-saas-quan-ly-kho-nha-hang
slug: provisionpro-saas-quan-ly-kho-nha-hang
translation_id: provisionpro-saas-restaurant-inventory
language: vi
content_type: project
title: ProvisionPro – Quản lý kho nhà hàng dạng ứng dụng web (SaaS)
category: Web, Software
image_url: /my-electronics-blog/images/posts/provisionpro-reports-1.webp
image_gallery:
- /my-electronics-blog/images/posts/provisionpro-reports-2.webp
- /my-electronics-blog/images/posts/provisionpro-reports-3.webp
- /my-electronics-blog/images/posts/provisionpro-reports-4.webp
excerpt: Ứng dụng web nhiều khách thuê cho nhà hàng. Gồm nguyên liệu, công thức có tính giá vốn, lô hàng theo FIFO và FEFO, mua hàng với đơn đặt và nhập kho, gợi ý bổ sung hàng và quét mã vạch hoặc QR trên điện thoại. Chạy trong trình duyệt, có thời gian dùng thử và giấy phép, bằng tiếng Đức, Anh, Việt và Trung.
tags:
- SaaS
- React
- TypeScript
- Fastify
- PostgreSQL
- Docker
read_time: 10 Min.
published: true
created_at: '2026-11-10T22:00:00.000Z'
external_link: https://provisionpro.tavrion.de/
pdf_url: /my-electronics-blog/documents/steckbrief/provisionpro-vi.pdf
project_status: done
sort_order: 45
---

# ProvisionPro
### Quản lý kho nhà hàng dạng ứng dụng web (SaaS)

**Một chương trình cho biết trong kho có gì, một món ăn thật sự tốn bao nhiêu vốn và cần đặt thêm gì, không cần bảng tính và không cần giấy ghi chú.**

**Công nghệ:** React, TypeScript, Node.js, Fastify, PostgreSQL, Docker  
**Hình thức:** ứng dụng web dạng dịch vụ (SaaS), nhiều khách thuê, cài được lên điện thoại  
**Ngôn ngữ giao diện:** Đức, Anh, Việt, Trung  
**Phiên bản:** 1.0.0  
**Demo:** chạy trực tuyến, xem nút "Mở dự án" ở cuối trang

---

## 1. Tổng quan dự án

### ProvisionPro là gì?

ProvisionPro là hệ thống quản lý kho cho nhà hàng, đặc biệt cho những bếp có nhiều nguyên liệu và công thức, như nhà hàng sushi và nhà hàng châu Á. Nó trả lời những câu hỏi xuất hiện mỗi ngày:

- Hiện trong kho có gì, và thứ gì sắp hết hạn?
- Một món ăn tốn bao nhiêu vốn khi giá nhập thay đổi?
- Cần đặt thêm gì, ở nhà cung cấp nào?
- Hàng trên kệ có khớp với số liệu trong hệ thống không?

### Nguồn gốc

Ứng dụng là bản xây dựng lại hoàn toàn từ phần mềm máy tính Windows trước đây của tôi. Các quy tắc nghiệp vụ đã được kiểm chứng, gồm tính giá vốn công thức, lô hàng theo FIFO và việc trừ kho nguyên tử khi bán một món, được giữ lại và làm lại thành dịch vụ web. Giờ mọi thứ chạy trong trình duyệt, trên mọi thiết bị và không cần cài đặt.

### Ý tưởng cốt lõi

**Mọi thay đổi tồn kho đều truy vết được, và không có lần quét nào ghi sổ nếu chưa được xác nhận rõ ràng.**

---

## 2. Chức năng

### Dữ liệu gốc

- **Nguyên liệu** với đơn vị, giá nhập, danh mục, mức tồn tối thiểu và tối đa, và nhiều mã vạch cho mỗi nguyên liệu.
- **Danh mục** và **nhà cung cấp** với thông tin liên hệ và phân tích theo từng nhà cung cấp.
- **Công thức** với danh sách nguyên liệu, giá bán và **phiên bản**. Phần tính giá cho biết giá vốn của từng món, và các phiên bản cũ vẫn được giữ.

### Kho

- **Lô hàng** với số lượng, giá nhập, vị trí lưu kho và hạn sử dụng. Xuất kho theo **FIFO** (nhập trước, dùng trước) hoặc **FEFO** (hết hạn trước, dùng trước).
- **Vị trí lưu kho** và **chuyển kho** giữa các vị trí.
- **Kiểm kê** với phiên đếm và chênh lệch.
- **Hao hụt** và điều chỉnh thủ công kèm lý do.
- Danh sách **lô sắp hết hạn** để không bỏ sót gì trong kho lạnh.

### Mua hàng

- **Đơn đặt hàng** qua các giai đoạn đã đặt, nhận một phần và nhận đủ.
- **Nhập kho**, kể cả giao hàng từng phần. Khi ghi sổ, phiếu nhập, lô hàng, biến động kho và tồn mới được tạo trong cùng một bước. Gửi hai lần cũng không ghi sổ hai lần.
- **Hóa đơn mua vào**, có thể liên kết với đơn đặt và phiếu nhập để so sánh đã đặt, đã nhận và đã lập hóa đơn.
- **Bổ sung hàng:** ứng dụng gợi ý số lượng từ mức tồn tối thiểu và tối đa, trừ đi phần đang trên đường về, làm tròn theo đơn vị đóng gói. Bạn chỉnh nhà cung cấp, số lượng và giá rồi tạo đơn nháp. **Hệ thống không bao giờ tự đặt hàng.**
- **Phân tích mua hàng:** mức giao đủ, đúng hẹn, chênh lệch số lượng và giá, lịch sử giá theo nguyên liệu và các đơn đang mở.

### Quét mã và kho trên điện thoại

Trang "Quét mã & Kho" dành cho điện thoại trong kho. Nó nhận mã vạch (EAN-13, UPC-A, Code 128) và nhãn QR của lô hàng và vị trí lưu kho, rồi đi thẳng đến nhập kho, chuyển kho, kiểm kê hoặc hao hụt.

- Camera **chỉ được yêu cầu sau khi bạn nhấn "Bật camera"**.
- Nếu camera không chạy hoặc không được phép, luôn có **nhập mã thủ công**.
- Mã lạ **không bao giờ** tự tạo dòng đặt hàng.
- Nhãn QR chỉ chứa một mã công khai ngẫu nhiên, không có số lượng, giá hay thông tin đăng nhập.

### Bán hàng, voucher và kết ngày

- **Bán món:** ghi nhận một món, kho tự động bị trừ theo FIFO hoặc FEFO và giá vốn được tính.
- **Voucher:** voucher một mục đích và đa mục đích, phát hành, sử dụng, hoàn tiền và điều chỉnh, có lịch sử.
- **Báo cáo cuối ngày:** nhập tổng của máy tính tiền bên ngoài theo từng mức thuế VAT.
- **Thuế:** ước tính VAT hằng tháng từ báo cáo cuối ngày và các giao dịch voucher, trừ thuế đầu vào.
- **Báo cáo:** doanh thu, chi phí, tồn kho, hao hụt và nhà cung cấp, theo ngày, tuần hoặc tháng.

### Trung tâm hành động và nhật ký

**Trung tâm hành động** gom những việc cần xử lý: lô đã hết hạn, tồn dưới mức tối thiểu, đơn hàng, thời gian dùng thử và giấy phép. Thông báo không lặp lại. **Nhật ký hoạt động** ghi lại ai đã thay đổi gì và khi nào.

---

## 3. Mô hình SaaS

### Khách thuê và vai trò

Mỗi nhà hàng là một **khách thuê** riêng với dữ liệu tách biệt. Một nhà hàng không bao giờ thấy dữ liệu của nhà hàng khác, kể cả qua mã vạch: một mã chỉ là duy nhất trong phạm vi một nhà hàng và có thể dùng lại ở nhà hàng khác. Có ba vai trò: quản trị cao nhất, chủ nhà hàng và nhân viên.

### Dùng thử và giấy phép

Nhà hàng mới bắt đầu với **thời gian dùng thử Premium**. Sau đó một khóa giấy phép mở gói **Plus** hoặc **Premium**, **một năm hoặc vĩnh viễn**. Khóa được ký bằng **Ed25519** và do máy chủ kiểm tra. Khi hết dùng thử, trung tâm hành động sẽ báo và ứng dụng hiển thị trạng thái rõ ràng.

### Sao lưu

Có công cụ **sao lưu và khôi phục**. Các gán mã vạch được giữ nguyên. Mã định danh nội bộ của lô hàng được cấp lại khi khôi phục để các bản sao lưu không va chạm nhau.

---

## 4. Kỹ thuật

### Cấu trúc

- **Máy chủ:** Node.js 22 với TypeScript, Fastify và Zod để kiểm tra dữ liệu đầu vào
- **Cơ sở dữ liệu:** PostgreSQL với Prisma, khoảng 28 bảng
- **Giao diện:** React, TypeScript, Vite, Tailwind CSS và shadcn/ui (Radix), lấy dữ liệu bằng TanStack Query
- **Ngôn ngữ:** react-i18next, bốn tệp ngôn ngữ có kiểm tra nhất quán
- **Đăng nhập:** JWT trong cookie httpOnly, mật khẩu băm bằng bcrypt
- **Vận hành:** Docker Compose và Nginx trên máy chủ Linux, có kiểm tra sức khỏe, nhật ký có cấu trúc, mã theo dõi yêu cầu và sổ tay vận hành

Dự án là một không gian làm việc gồm hai phần: máy chủ và giao diện web.

### Chất lượng

- **Kiểm thử đơn vị** có độ phủ và **kiểm tra bảo mật** các thư viện phụ thuộc
- **Kiểm thử tích hợp** trên một cơ sở dữ liệu PostgreSQL được tạo riêng rồi xóa đi
- **Kiểm thử đầu cuối** bằng Playwright cho máy tính và điện thoại, kèm kiểm thử khả năng truy cập
- **Kiểm thử tải** bằng k6
- **Đối soát tồn kho:** một công cụ chỉ đọc, kiểm tra tồn của từng nguyên liệu có khớp với các lô và biến động hay không

### Điều tôi học được

Ai làm hệ thống kho cũng nhanh chóng nhận ra khó khăn không nằm ở hình ảnh trên màn hình mà ở các quy tắc phía sau: ghi sổ không bao giờ được dở dang, nhấn đúp không được ghi hai lần, và mọi con số phải truy ngược được về nguồn.

---

## 5. Demo

Bản demo với dữ liệu mẫu của một nhà hàng sushi đang chạy trực tuyến: [provisionpro.tavrion.de](https://provisionpro.tavrion.de/). Tài khoản demo:

- **E-mail:** `tan@tavrion.de`
- **Mật khẩu:** `Tan123.,` (kết thúc bằng dấu chấm và dấu phẩy)

Thời gian dùng thử của bản demo có thể đã hết. Khi đó ứng dụng sẽ hiển thị như vậy và một số chức năng bị giới hạn.

Các hình ở trên là phần báo cáo của ứng dụng với dữ liệu mẫu của một nhà hàng sushi: doanh thu và món bán chạy, tỷ lệ giá vốn, mức sinh lời từng món, giá trị tồn kho theo danh mục, rủi ro hết hạn, hao hụt, chi tiêu theo nhà cung cấp và doanh thu theo ngày trong tuần. (Giao diện hiển thị bằng tiếng Đức.)

---

## 6. Mã nguồn

Mã nguồn không công khai. Nếu bạn muốn đánh giá cách tôi làm việc, bạn có thể xem **khi có yêu cầu**: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)
