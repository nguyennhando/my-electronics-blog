---
id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
slug: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
translation_id: tablio-kasse-lokales-pos-system-mit-tse-fiskalisierung-von-grund-auf
language: vi
content_type: project
title: TABLIO Kasse – Phần mềm tính tiền nhà hàng chạy cục bộ, xây quanh luật tài chính Đức
category: Software, POS
image_url: /my-electronics-blog/images/posts/1785878544700-screenshot-2026-08-04-231005.webp
image_gallery:
- /my-electronics-blog/images/posts/tablio-devices-concept.webp
- /my-electronics-blog/images/posts/1785878562041-screenshot-2026-08-04-230901.webp
- /my-electronics-blog/images/posts/1785878568627-screenshot-2026-08-04-230914.webp
- /my-electronics-blog/images/posts/1785878575589-screenshot-2026-08-04-230927.webp
- /my-electronics-blog/images/posts/tablio-kitchen-display.webp
- /my-electronics-blog/images/posts/tablio-tables-mobile.webp
- /my-electronics-blog/images/posts/1785878581909-screenshot-2026-08-04-230955.webp
excerpt: Hệ thống bán hàng chạy cục bộ cho nhà hàng ở Đức, có sơ đồ bàn, màn hình bếp thời gian thực, thanh toán, sổ quỹ và báo cáo. Kiến trúc tài chính với lớp TSE và DSFinV-K được xây sẵn từ đầu. Sản phẩm đã hoàn thành và sẽ được dùng ngay khi gắn được TSE đã chứng nhận.
tags:
- POS
- Máy tính tiền
- NestJS
- React
- PostgreSQL
- TSE
read_time: 11 phút
published: true
created_at: '2026-08-04T21:03:35.667Z'
external_link: https://demo.tavrion.de/
pdf_url: /my-electronics-blog/documents/steckbrief/tablio-vi.pdf
project_status: done
sort_order: 60
---

# TABLIO Kasse
### Hệ thống tính tiền coi trọng luật tài chính của Đức

**Một hệ thống bán hàng (POS) chạy cục bộ cho nhà hàng: sơ đồ bàn, gọi món, màn hình bếp, thanh toán, sổ quỹ và báo cáo, tất cả trong mạng Wi-Fi của quán và không cần đám mây.**

**Công nghệ:** React 19, NestJS 11, PostgreSQL 16, TypeScript  
**Ngôn ngữ:** tiếng Đức, Anh, Việt  
**Triển khai:** bộ cài Windows, thiết bị Linux, Docker khi phát triển  
**Trạng thái dự án:** sản phẩm đã hoàn thành, **chưa đưa vào sử dụng thực tế vì chưa gắn TSE đã chứng nhận**

---

## 1. Tổng quan dự án

### TABLIO Kasse là gì?

TABLIO Kasse là một **hệ thống bán hàng cho nhà hàng** mà tôi phát triển từ tháng 7 năm 2026. Nó chạy trên một máy tính trong quán, còn các thiết bị của đội ngũ kết nối qua Wi-Fi nội bộ: máy thu ngân chính ở quầy, máy tính bảng và điện thoại của nhân viên phục vụ, và màn hình trong bếp.

Mọi dữ liệu nằm ngay tại quán. Không bắt buộc có tài khoản đám mây, không có máy chủ thuê bao, và không bị gián đoạn khi mất internet.

### Ý tưởng cốt lõi

**Nền tảng tài chính không phải là phần thêm vào, mà là điểm xuất phát của kiến trúc.**

Nước Đức có một số quy định về máy tính tiền nghiêm ngặt nhất châu Âu. Nhiều giải pháp POS tự làm hoặc dùng chung coi đó là việc vá thêm về sau. TABLIO được xây từ đầu sao cho mọi lần thanh toán, hủy và hoàn tiền đều đi qua cùng một lớp giao dịch.

> ⚠️ **Quan trọng:** ở dạng hiện tại, dự án **chưa được phép dùng để bán hàng hợp pháp tại Đức**. TSE mặc định chỉ là mô-đun phát triển. Chi tiết ở mục 6.

### Tự dùng thử

Có một bản demo đang chạy trên **máy chủ Linux**: [demo.tavrion.de](https://demo.tavrion.de/)

1. Mở trang và chọn **WAITER 01**.
2. Nhập mã PIN **2222**.
3. Khám phá giao diện.

Tài khoản này được thiết lập ở vai trò **nhân viên phục vụ (waiter)** và cố ý giới hạn ở **các chức năng cơ bản**. Các chức năng khác như thanh toán, báo cáo hay quản trị không dùng được trong chế độ này. Bản demo không chứa dữ liệu thật.

---

## 2. Vấn đề cần giải quyết

**Quy định an toàn máy tính tiền (KassenSichV)** của Đức yêu cầu mọi giao dịch liên quan phải được ký bởi một **thiết bị an ninh kỹ thuật (TSE)** đã được chứng nhận. Dữ liệu phải được lưu chống giả mạo và có thể xuất bất cứ lúc nào theo định dạng **DSFinV-K** cho cơ quan thuế. Thêm vào đó là các nguyên tắc kế toán đúng đắn (GoBD), như số hóa đơn liên tục không đứt quãng và hóa đơn không thể sửa.

Với nhà hàng, thực tế hằng ngày còn khó hơn: giờ cao điểm, nhiều thiết bị cùng lúc, nhân viên thay đổi, thanh toán chia, tiền boa, đơn mang đi. Máy tính tiền phải không sai sót giữa mọi sự hối hả đó.

---

## 3. Chức năng

### Vận hành nhà hàng

- **Sơ đồ bàn** có khu vực, đặt bàn tự do, kiểu vuông, tròn, chữ U và chữ L, kèm trạng thái trực tiếp. Sau khi thanh toán, bàn tự động được giải phóng.
- **Đơn tại bàn và đơn mang đi** trong cùng một quy trình.
- **Thực đơn** có nhóm, danh mục, sản phẩm, tùy chọn và món thêm, thuế suất, giảm giá và lý do hủy món.
- **Các lượt món (Gang):** món có thể gom thành các lượt đánh số, mỗi lượt gửi xuống bếp riêng.
- **Màn hình bếp** thời gian thực qua WebSocket: Mới → Đang chế biến → Xong → Đã phục vụ.
- **Chuyển bàn, gộp đơn và chia hóa đơn** ngay tại đơn hàng.

### Thanh toán và hóa đơn

- Thanh toán tiền mặt, thẻ và **thanh toán chia** với chốt hóa đơn idempotent.
- Có thể in lại hóa đơn. Lỗi máy in không bao giờ làm mất hóa đơn đã chốt.
- **Hủy và hoàn tiền** là các thao tác riêng, có ghi nhật ký. Đơn đã thanh toán không thể sửa.
- **Hệ thống phiếu quà tặng (voucher):** phát hành, bán, sử dụng, hoàn tiền, khóa và mở khóa, điều chỉnh số dư thủ công, mỗi biến động đều truy vết được riêng.
- In qua các lớp ESC/POS cho máy in mạng và USB, kể cả phiếu bếp.

### Quản trị

- **Ca làm việc và sổ quỹ:** số dư đầu ca, biến động tiền mặt, chốt ca, báo cáo X/Z và nhật ký kiểm tra.
- **Báo cáo** doanh thu, VAT, sản phẩm, danh mục, nhân viên phục vụ, hình thức thanh toán và các đơn hủy.
- **Vai trò và quyền:** Admin, Quản lý, Phục vụ và Bếp, cộng thêm quyền riêng cho từng người dùng.
- Chấm công, lịch làm việc kèm nghỉ phép, quản lý khách hàng và đặt bàn.
- Ba ngôn ngữ, đổi được ngay trong ứng dụng.

---

## 4. Kiến trúc

Luồng dữ liệu từ các thiết bị đến cơ sở dữ liệu:

1. **Thiết bị trong quán:** máy thu ngân Windows, máy tính bảng, điện thoại và màn hình bếp
2. **Wi-Fi nội bộ** nối chúng với máy tính tiền
3. **Giao diện:** React và Vite
4. **REST và Socket.IO** truyền yêu cầu và cập nhật trực tiếp
5. **NestJS API** chứa toàn bộ logic nghiệp vụ
6. **Ba khối nằm bên dưới:** PostgreSQL với Prisma, lớp máy in ESC/POS và lớp nhà cung cấp TSE

- **Frontend:** React 19, Vite, TypeScript, Tailwind CSS, Zustand và TanStack Query.
- **Backend:** NestJS 11 với REST, Socket.IO, JWT và phân quyền theo vai trò.
- **Dữ liệu:** PostgreSQL 16 với Prisma và logic nghiệp vụ theo giao dịch.
- **Gói dùng chung:** kiểu dữ liệu, quyền, enum và logic VAT chỉ định nghĩa một lần cho cả backend và frontend.
- **Công cụ:** npm workspaces, Docker Compose, Jest, Vitest và Playwright.

### Từ bàn đến hóa đơn

1. Mở bàn hoặc đơn mang đi
2. Thêm món
3. Gửi xuống bếp
4. Chế biến và phục vụ
5. Thanh toán tiền mặt, thẻ hoặc chia
6. Chốt hóa đơn
7. Bàn trở nên trống

Việc chốt hóa đơn chạy trong **một giao dịch cơ sở dữ liệu**. Giá và VAT được ghi lại trên từng món và trên hóa đơn, nên hóa đơn cũ không bao giờ đổi về sau. Một khóa idempotency cho mỗi lần thử ngăn việc bấm đúp hay kết nối lại tạo ra khoản thanh toán thứ hai.

---

## 5. Vận hành tại nhà hàng

- **Bộ cài Windows:** khi khởi động, TABLIO mở như một ứng dụng desktop. Một dịch vụ khởi chạy cơ sở dữ liệu, API và giao diện. Điện thoại và máy tính bảng cùng Wi-Fi chỉ cần quét **mã QR** là kết nối, không cần cấu hình hay chỉnh tường lửa.
- **Thiết bị Linux:** gói cài cho một mini PC không dùng Docker, do hệ điều hành quản lý như một dịch vụ.
- **Tự khởi động:** máy chủ tự chạy sau khi đăng nhập. Tắt màn hình không làm nó dừng.
- **Sao lưu:** sao lưu tự động mỗi đêm, kèm hướng dẫn khôi phục.
- **Giấy phép ngoại tuyến:** mỗi bản cài có 30 ngày dùng thử. Khóa giấy phép được ký, gắn với máy và kiểm tra tại chỗ, **không cần máy chủ cấp phép**.
- **Bản giao sạch:** bộ cài chỉ chứa dữ liệu mẫu. Không có đơn hàng, khách hàng, thông tin đăng nhập hay nhật ký thật.

### Đơn đặt món online

Tùy chọn, máy tính tiền lấy đơn mang đi và yêu cầu đặt bàn từ một website đặt món online, ví dụ [nền tảng nhà hàng](https://nguyennhando.github.io/my-electronics-blog/?post=gem-restaurant-platform) trong dự án khác của tôi. Máy tính tiền **tự hỏi thăm** thay vì nhận kết nối từ internet, nhờ vậy từ bên ngoài không thể chạm tới nó. Nhân viên xác nhận từng đơn kèm giờ lấy hàng, rồi đơn mới xuống bếp.

---

## 6. Tình trạng tài chính, nói thẳng

Đây là mục quan trọng nhất với tôi.

- **Chữ ký TSE:** có lớp nhà cung cấp cho thiết bị TSE và một mô-đun phát triển được đánh dấu rõ là chưa chứng nhận. Để vận hành thật cần **phần cứng TSE hoặc dịch vụ đã chứng nhận** và một tích hợp đã được kiểm chứng.
- **Chốt chặn production:** ở chế độ production, **backend từ chối chốt hóa đơn tài chính** chừng nào chưa có nhà cung cấp nào báo là đã chứng nhận. Mô-đun giả vì vậy không thể vô tình bị coi là hợp pháp.
- **DSFinV-K:** bản xuất cung cấp quy trình (tác vụ, CSV và ZIP) ở dạng đơn giản hóa. Vẫn cần kiểm chứng theo bảng phân loại chính thức hiện hành.
- **Máy in:** có mô-đun giả cùng kết nối mạng và USB làm điểm khởi đầu. Mỗi tổ hợp máy in và driver phải được thử.
- **Trước khi nhận thanh toán thật:** tích hợp một TSE đã chứng nhận, kiểm chứng bản xuất DSFinV-K và nhờ một cố vấn thuế rà soát toàn bộ hệ thống.

Cho các buổi trình diễn có một công tắc demo tường minh. Nó không bao giờ được bật trong bản giao cho khách thật.

---

## 7. Các phiên bản khác

### Bản Android (nghiên cứu và demo)

Một lớp vỏ Cordova bọc cùng giao diện, kèm máy chủ Node nhúng chạy không cần internet. Bản này dùng cho demo và thử nghiệm có giám sát với khách, và **không phải sản phẩm hoàn chỉnh**. Lớp TSE của nó có hai chế độ: một mô-đun thử nghiệm hiển thị rõ là chưa chứng nhận, và một kết nối phần cứng **thất bại một cách an toàn (fail closed)** chừng nào chưa có SDK chính thức của hãng và các bài kiểm tra phần cứng thật. Nó không bao giờ âm thầm quay về mô-đun giả.

### Ứng dụng iPhone không cần internet (PWA)

Một ứng dụng web độc lập cho iPhone, sau khi cài thì chạy không cần internet và lưu mọi dữ liệu trong cơ sở dữ liệu của trình duyệt. Qua 16 giai đoạn phát triển, nó bao gồm bàn, đơn hàng, bếp, thanh toán, sổ quỹ, báo cáo và một bản xuất lõi DSFinV-K.

---

## 8. Những điều tôi học được

### Chuyện đồng thời chỉ lộ ra trên cơ sở dữ liệu thật

Một đợt kiểm tra với cơ sở dữ liệu thật cho thấy khi hai thiết bị cùng chốt một đơn một lúc, hệ thống tạo ra hai khoản thanh toán, hai hóa đơn và hai giao dịch tài chính đã ký cho một lần bán. Hai cú bấm “mở ca” cùng lúc tạo ra hai ca đang mở. Những lỗi như vậy vô hình trong các bài kiểm thử đơn vị dùng cơ sở dữ liệu giả lập. Cách sửa là cập nhật có điều kiện và giao dịch serializable có thử lại, được chứng minh bằng một bài kiểm thử bắn hàng loạt lời gọi thật sự đồng thời.

### VAT phải khớp theo từng thuế suất, không theo từng dòng

Khi làm tròn từng dòng riêng lẻ, bảng phân tích thuế in trên hóa đơn có giảm giá lệch tới hai xu so với tổng, một lỗi thật về tính toàn vẹn của hóa đơn. Giờ các khoản được cộng theo từng thuế suất trước, làm tròn một lần, và nhóm lớn nhất nhận phần xu dư. Nhờ vậy bảng phân tích luôn khớp.

### Hủy là một thao tác mới, không phải cái công tắc

Lúc đầu, việc hủy chỉ đặt một cờ trên hóa đơn, còn doanh thu vẫn bị tính ở mọi nơi. Ngày nay hệ thống tạo một hóa đơn đối ứng với các tổng bị đảo dấu và bảng thuế bị đảo dấu, kèm một bản ghi tài chính được ký riêng. Các báo cáo cũng cộng trừ hoàn tiền và hủy vào mọi tổng.

### Thất bại thay vì đoán

Cùng một nguyên tắc áp dụng ở mọi nơi: gộp các đơn có mức giảm giá khác nhau bị từ chối thay vì âm thầm chọn một bên. Một TSE chưa sẵn sàng sẽ chặn việc chốt. Kiểm tra giấy phép chịu được một lỗi đọc thoáng qua nhưng sẽ khóa khi mã máy mãi không đọc được.

### Cục bộ trước nghĩa là không có cánh cửa ra bên ngoài

Máy tính tiền cố ý chỉ truy cập được trong mạng nội bộ. Vì vậy các kết nối với internet chạy dưới dạng yêu cầu đi ra. Kết quả là bề mặt tấn công nhỏ, đánh đổi bằng độ trễ vài giây, điều không quan trọng với đơn mang đi.

---

## 9. Chất lượng

- Hơn **70 file kiểm thử** với Jest, Vitest và Playwright.
- Một bài kiểm thử riêng trên **cơ sở dữ liệu PostgreSQL thật** cho mọi luồng liên quan tới tiền và dữ liệu tài chính.
- Bộ cài được kiểm tra tự động sau khi dựng. Nó chỉ được chứa dữ liệu mẫu đã làm sạch.
- Các quyết định của dự án được ghi trong một nhật ký kèm lý do.

---

## 10. Trạng thái hiện tại và bước tiếp theo

- Sản phẩm đã hoàn thành (bộ cài Windows phiên bản 0.2.x). Hiện chưa dùng thực tế vì chưa gắn TSE đã chứng nhận.
- **Còn mở để dùng thật hợp pháp:** tích hợp TSE đã chứng nhận, kiểm chứng bản xuất DSFinV-K và được cố vấn thuế duyệt.
- Với bản Android, còn thiếu SDK chính thức của hãng và các bài kiểm tra phần cứng thật.
- Chưa có giấy phép công khai. Dự án là mã nguồn độc quyền.

---

## Kết luận

TABLIO Kasse cho thấy một chiếc máy tính tiền tưởng đơn giản cần cẩn thận đến mức nào: xử lý đồng thời, làm tròn, bất biến dữ liệu và một mô hình tài chính thà thất bại còn hơn đoán mò. Bước tiếp theo mang tính quyết định là tích hợp một TSE đã chứng nhận, để một kiến trúc được xây cẩn thận trở thành một sản phẩm được cho phép.

---

## Mã nguồn

Mã nguồn nằm trên GitHub nhưng không được chia sẻ công khai để bảo vệ dự án. Nếu bạn cần xem mã nguồn, chẳng hạn để đánh giá năng lực của người thực hiện dự án, vui lòng liên hệ với tôi qua e-mail donguyennhan.de@gmail.com.

---

### TABLIO Kasse

**Phát triển bởi Nguyen Nhan Do**

Các hình là dữ liệu demo. Hình thiết bị đầu tiên là hình minh họa ý tưởng.
