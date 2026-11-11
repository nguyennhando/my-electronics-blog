---
id: lm5116-bo-giam-ap-dong-bo-24v-8v
slug: lm5116-bo-giam-ap-dong-bo-24v-8v
translation_id: lm5116-buck-converter-24v-8v
language: vi
content_type: project
title: LM5116 – Bộ giảm áp đồng bộ 24 V xuống 8 V / 3 A (KiCad, Prototype Rev A)
category: Power, PCB
image_url: /my-electronics-blog/images/posts/lm5116-buck-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/lm5116-buck-block-diagram.webp
- /my-electronics-blog/images/posts/lm5116-buck-schematic.webp
- /my-electronics-blog/images/posts/lm5116-buck-placement.webp
- /my-electronics-blog/images/posts/lm5116-buck-copper-layers.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-vin-sweep.webp
- /my-electronics-blog/images/posts/lm5116-buck-sim-load-transient.webp
excerpt: Bộ giảm áp đồng bộ bốn lớp, không cách ly, dùng TI LM5116, đầu vào 24 V và đầu ra 8 V, 3 A. Thiết kế hoàn toàn bằng KiCad 10, có dữ liệu chế tạo đã đóng băng, báo cáo kiểm tra, mô phỏng LTspice và kế hoạch khởi động. Mạch mẫu chưa được chế tạo và mọi phép đo vẫn còn phía trước.
tags:
- LM5116
- KiCad
- Bộ giảm áp
- 4 lớp
- LTspice
- Điện tử công suất
read_time: 12 Min.
published: true
created_at: '2026-11-10T23:00:00.000Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/lm5116-vi.pdf
project_status: in_progress
sort_order: 35
---

# Bộ giảm áp LM5116
### 24 V xuống 8 V / 3 A, đồng bộ, bốn lớp, Prototype Rev A

**Một thiết kế nguồn đi từ chọn linh kiện đến dữ liệu chế tạo, phân biệt rõ cái gì đã tính, cái gì đã mô phỏng và cái gì chưa đo.**

**Vi mạch điều khiển:** Texas Instruments LM5116  
**Đầu vào:** 24 V danh định, 18 đến 28 V khi đang chạy  
**Đầu ra:** 8 V, 3 A (24 W), không cách ly  
**Tần số chuyển mạch:** khoảng 251 kHz  
**Bo mạch:** 4 lớp, 85 × 50 mm, FR-4 dày 1,6 mm, ENIG  
**Công cụ:** KiCad 10, LTspice  
**Tình trạng:** phần cứng đã đóng băng, mạch mẫu chưa đặt làm và chưa đo

---

## 1. Tổng quan dự án

### Dự án nói về gì?

Thiết kế là một bộ giảm áp đồng bộ cho nguồn một chiều 24 V, loại thường gặp trong công nghiệp và máy móc. Nó được dùng để tạo ra 8 V với dòng đến 3 A. Dự án được làm như một công việc phát triển hoàn chỉnh: sơ đồ nguyên lý, bo mạch, dữ liệu chế tạo, báo cáo kiểm tra, mô phỏng và kế hoạch kiểm tra cho các phép đo sau này.

### Vì sao ghi chép kỹ như vậy?

Một bộ nguồn chỉ thật sự tốt khi biết nó tốt **đến đâu**. Vì vậy dự án phân loại nghiêm ngặt theo loại bằng chứng:

- **Đã tính:** từ datasheet và công thức, kèm giả định được nêu rõ
- **Mô phỏng chính thức:** kết quả của một chiến dịch mô phỏng đã được rà soát, nhưng vẫn là mô hình
- **Đặc trưng của mô hình:** hành vi hoặc giới hạn của mô hình, không phải bằng chứng từ phần cứng
- **Đã đo:** hiện **chưa có gì**

Điều tôi coi trọng là không bao giờ để một kết quả mô phỏng được trình bày như một phép đo.

### Tình trạng thẳng thắn

- **Phần cứng đã đóng băng** (phiên bản `v1.0.0-prototype-rev-a`), cùng dữ liệu chế tạo.
- Mạch mẫu **chưa được đặt làm và chưa được chế tạo**.
- Cả 17 phép đo dự kiến (T00 đến T16) **chưa được thực hiện**.
- Không có chứng nhận chất lượng cho sản xuất hàng loạt, không có chứng nhận và không có tuyên bố về tương thích điện từ.

---

## 2. Thông số kỹ thuật

- **Cấu trúc:** bộ giảm áp đồng bộ không cách ly với điều khiển chế độ dòng
- **Đầu vào:** 24 V một chiều danh định. Khi đang chạy dự kiến 18 đến 28 V. Khởi động nguội ở đúng 18 V không được bảo đảm vì ngưỡng dưới áp của vi mạch có sai lệch.
- **Đầu ra:** 8 V với dòng đến 3 A. Điểm đặt tính toán là 8,05 V (điện áp chuẩn 1,215 V, cầu chia 6,81 kΩ trên 1,21 kΩ).
- **Tần số chuyển mạch:** khoảng 251 kHz, tính toán 251,8 kHz
- **Tầng công suất:** hai MOSFET kênh N 60 V (SI7850DP), cuộn cảm 22 µH (XAL1510-223MED), điện trở đo dòng 18 mΩ nối kiểu Kelvin
- **Tụ đầu ra:** 3 × 47 µF gốm, phân tích dùng khoảng 57 µF hiệu dụng ở 8 V và 50 °C, có tính đến suy giảm điện dung do điện áp một chiều
- **Điều khiển:** bù loại II (9,76 kΩ, 3,3 nF, 100 pF) và mạng dốc

---

## 3. Thiết kế mạch

### Bảo vệ đầu vào

Đầu vào được bảo vệ nhiều lớp, theo thứ tự:

1. **Cầu chì** F1, chậm, 3,15 A
2. **Chống đảo cực** bằng một MOSFET kênh P có cổng được kẹp ở 12 V
3. **Điốt TVS** SMAJ28A chống xung điện áp
4. **Tụ đầu vào:** 4 × 10 µF gốm và một tụ polymer 100 µF

Ngoài ra vi mạch còn có khóa dưới áp, khởi động mềm và giới hạn dòng từng chu kỳ.

### Tầng công suất và điều khiển

LM5116 điều khiển trực tiếp hai khóa. Dòng được đo qua RS1, 18 mΩ, lấy tín hiệu bằng các điểm đo riêng (Kelvin). Mạng hồi tiếp, mạng bù và dốc nhân tạo khép kín vòng điều khiển. Sơ đồ được chia thành các khối: đầu vào và bảo vệ, tụ đầu vào, vi mạch điều khiển, điều khiển cổng, bộ lọc đầu ra, đo dòng và hồi tiếp.

---

## 4. Bo mạch

Bo mạch được thiết kế trong KiCad 10, cấu tạo và thứ tự lớp được bố trí cho việc chuyển mạch dòng lớn với sườn xung nhanh:

- **4 lớp**, 85 × 50 mm, **mọi linh kiện nằm ở mặt trên**
- **Mặt phẳng nối đất liên tục** ở lớp thứ hai làm đường về và che chắn
- **Vòng nhỏ** gồm tụ đầu vào, MOSFET và điện trở đo dòng, để giữ nhiễu và xung nhọn ở mức thấp
- **Diện tích nút chuyển mạch nhỏ**, để bức xạ ít nhiễu
- **Lớp mạng (net class)** cho dòng lớn, điều khiển cổng, đường tương tự nhạy cảm và đường Kelvin, cùng một quy tắc khoảng cách riêng tại vi mạch
- **Tản nhiệt tại vi mạch:** 15 lỗ xuyên tản nhiệt dưới miếng đệm hở và một mẫu in kem hàn riêng gồm tám ô với độ phủ 70 %, cần được giữ nguyên khi cập nhật thư viện

---

## 5. Dữ liệu chế tạo và kiểm tra

Gói chế tạo đã đóng băng và được kiểm tra. Nó gồm tệp Gerber và khoan cho JLCPCB, bảng vật tư kèm mã nhà sản xuất, danh sách đặt linh kiện (41 linh kiện SMD, tổng 45 linh kiện), bản vẽ lắp ráp, lớp stencil, sơ đồ nguyên lý dạng PDF, bản đồ khoan, hình 3D và danh sách mã kiểm (SHA-256) của cả 40 tệp.

**Kết quả kiểm tra:**

- **ERC (sơ đồ nguyên lý):** 0 vi phạm
- **DRC (bo mạch, đã đổ lại vùng đồng):** 0 lỗi, 0 phần tử chưa nối
- **Đối chiếu sơ đồ và bo mạch:** 0 khác biệt
- **Kiểm tra Gerber và khoan:** đạt 37 trên 37 phép kiểm
- **Đối chiếu bảng vật tư, danh sách đặt và bo mạch:** đạt 18 trên 18
- **Danh sách mã kiểm:** khớp 40 trên 40 tệp

Tệp bo mạch được lưu với vùng đồng chưa đổ. Vì thế DRC chạy trên tệp ở trạng thái đã lưu sẽ hiện các phần tử có vẻ chưa nối, còn các kết quả trên lấy từ một bản sao đã đổ lại vùng đồng.

### Việc còn tồn đọng trước khi đặt làm

- Khi kiểm tra, C_BULK1, RS1, F1 và L1 không có hoặc không đủ hàng ở nhà lắp ráp. Cần kiểm tra lại vào lúc đặt hàng và không có linh kiện thay thế nào được phê duyệt.
- Q1 và Q2 phải đặt là **SI7850DP-T1-GE3**; sơ đồ nguyên lý vẫn ghi chữ -T1-E3.
- Hình 3D hiện cầu chì F1 không có thân vì không có mô hình. Trong mạch thì F1 có mặt.
- Đơn đặt đầu tiên là **năm bo mạch trần**, không lắp ráp và không stencil.

---

## 6. Mô phỏng

Một chiến dịch đã được rà soát được chạy bằng LTspice với mô hình TI của LM5116 (điện áp vào từ 18 đến 28 V, khởi động, tắt, độ gợn, nhảy tải, nhảy đường vào, biểu đồ Bode). Một vài kết quả, tất cả đều **là mô phỏng và chưa đo**:

- **Độ gợn đầu ra:** khoảng 7 đến 10 mV đỉnh-đỉnh
- **Vòng điều khiển:** tần số cắt 19 đến 24,5 kHz với dự trữ pha 53 đến 56 độ
- **Nhảy tải từ 1,5 lên 3 A** trong 1 µs: điện áp ra sụt và vọt khoảng 170 mV mỗi chiều, rồi ổn định nhanh
- **Tần số chuyển mạch:** khoảng 250,7 kHz trên toàn dải đầu vào

### Giới hạn của mô hình

Mô phỏng chỉ tốt bằng mô hình của nó, và dự án nêu rõ các sai lệch:

- **Ngưỡng dưới áp** trong mô hình TI khác với datasheet. Các lần chạy ở 18 V vì vậy là mô phỏng chế độ hoạt động bình thường, không phải bằng chứng cho khởi động nguội.
- **Độ lợi đo dòng** trong mô hình khác rõ rệt so với datasheet. Việc dự đoán giới hạn dòng và một phần phân tích vòng vì thế bị hạn chế.
- **Mức điều khiển cổng** trong mô hình không phải bằng chứng cho điều khiển thật.
- Lỗi khởi động ở tải rất nhẹ trong mô phỏng là giới hạn của bộ giải, không phải dấu hiệu lỗi phần cứng.

---

## 7. Kế hoạch kiểm tra

Để khởi động mạch có hướng dẫn bằng tiếng Đức, Anh và Việt, một kế hoạch kiểm tra kèm ma trận yêu cầu và một nhật ký kiểm tra. 17 phép đo dự kiến gồm:

- **T00 đến T02:** kiểm tra bằng mắt, kiểm tra điện trở và điốt khi chưa cấp điện, cấp điện lần đầu theo từng bước
- **T03 đến T04:** ngưỡng dưới áp, chạy không tải và tải nhẹ
- **T05 đến T08:** đường đặc tính tải và hiệu suất, ổn định theo điện áp vào và theo tải, độ gợn đầu ra
- **T09 đến T10:** nút chuyển mạch và điều khiển cổng
- **T11:** hành vi nhiệt
- **T12 đến T13:** nhảy tải, khởi động và tắt
- **T14 đến T15:** bảo vệ và đảo cực, giới hạn dòng
- **T16:** độ ổn định của vòng điều khiển

Mỗi phép kiểm giữ trạng thái "chưa kiểm tra" cho đến khi thật sự được thực hiện. Kết quả tích cực chỉ được ghi vào sau một phép đo.

---

## 8. Điều tôi rút ra

Với dự án này, điều tôi quan tâm không phải bản thân bộ nguồn mà là cách làm việc: đóng băng thiết kế và dữ liệu chế tạo, ghi rõ loại bằng chứng đằng sau mỗi phát biểu, nói rõ giới hạn của công cụ và chỉ đo khi đã có kế hoạch. Đó là cách tôi sẽ bàn giao phần cứng trong một công ty.

---

## 9. Nguồn và quyền

Các tệp thiết kế (dự án KiCad, dữ liệu chế tạo, mô phỏng, báo cáo và kế hoạch kiểm tra) không công khai. Nếu bạn muốn đánh giá cách tôi làm việc, bạn có thể xem **khi có yêu cầu**, kể cả các báo cáo thiết kế bằng ba thứ tiếng: [donguyennhan.de@gmail.com](mailto:donguyennhan.de@gmail.com)

Thiết kế chưa được thử nghiệm thực tế, chưa được chứng nhận cho sản xuất, chưa có chứng nhận và chưa kiểm tra tuân thủ tương thích điện từ. Bảo lưu mọi quyền, © 2026 Nguyen Nhan Do.
