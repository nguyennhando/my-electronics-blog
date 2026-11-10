---
id: amp-d50-v2-lite-ampli-class-d
slug: amp-d50-v2-lite-ampli-class-d
translation_id: amp-d50-v2-lite-class-d
language: vi
content_type: project
title: AMP-D50-V2-LITE – Ampli Class-D TPA3255 với USB-C Audio
category: Audio, PCB
image_url: /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/amp-d50-v2-lite-real-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-real-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-pcb-top.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-pcb-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-3d-bottom.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-placement.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-heatsink-fit.webp
- /my-electronics-blog/images/posts/amp-d50-v2-lite-simulation.webp
excerpt: Bộ khuếch đại Class-D stereo nhỏ gọn với TPA3255, ngõ vào USB-C audio và nguồn 24 V riêng, thiết kế bằng KiCad. Thiết kế đã hoàn chỉnh và bo PCB trần đã được chế tạo, nhưng chưa lắp linh kiện và chưa đo đạc gì.
tags:
- Class-D
- TPA3255
- USB Audio
- PCM2704C
- KiCad
- Thiết kế PCB
read_time: 9 phút
published: true
created_at: '2026-11-10T19:30:00.000Z'
external_link: 
project_status: in_progress
sort_order: 40
---

# AMP-D50-V2-LITE
### Ampli Class-D TPA3255 với USB-C Audio

**Một bộ ampli stereo thiết kế bằng KiCad: máy tính đưa âm thanh số vào qua USB-C, còn tầng công suất chạy bằng adapter 24 V riêng.**

**Tầng công suất:** Texas Instruments TPA3255 (2 × BTL)  
**USB DAC:** Texas Instruments PCM2704C  
**Nguồn:** 24 V DC, tách biệt với đường USB  
**PCB:** 2 lớp, đồng 2 oz, 182,1 × 145,6 mm  
**Phát triển:** KiCad 10, LTspice  
**Trạng thái dự án:** Thiết kế hoàn tất, bo PCB trần đã chế tạo, chưa lắp linh kiện và chưa đo

---

## 1. Tổng quan dự án

### AMP-D50-V2-LITE là gì?

AMP-D50-V2-LITE là thiết kế phần cứng của một **bộ khuếch đại công suất stereo** nhỏ gọn. Máy tính gửi âm thanh số qua USB-C tới DAC USB audio PCM2704C. Một tầng analog nhỏ sau đó kích tầng công suất Class-D **TPA3255**. Tầng này chạy bằng nguồn 24 V riêng và cấp cho mỗi loa một ngõ ra dạng cầu (BTL).

### Khác gì so với AMP-D50-V1

V2-LITE là một **biến thể đơn giản hơn** trong họ AMP-D50. Thay vì bo 4 lớp với vi điều khiển XMOS, nó dùng **bo 2 lớp đồng 2 oz**, một DAC USB đơn giản không cần firmware và chủ yếu là **linh kiện xuyên lỗ** có thể hàn bằng tay.

### Mục tiêu

**Một thiết kế KiCad hoàn chỉnh, có thể chế tạo: 11 trang sơ đồ nguyên lý, một PCB với quy tắc đi dây riêng, tản nhiệt gắn trên tầng công suất và bộ hồ sơ sản xuất có tài liệu.**

---

## 2. Tính năng chính

- **Tầng công suất:** TPA3255 với hai kênh BTL.
- **Ngõ vào số:** đầu cắm USB-C, USB 2.0 Full-Speed, DAC lấy nguồn từ bus USB.
- **Tương thích cáp:** thiết kế cho cáp USB-A sang USB-C và USB-C sang USB-C (kỳ vọng thiết kế, chưa được xác minh).
- **Ngõ vào nguồn:** jack tròn 5,5 × 2,5 mm, cực dương ở giữa, 24 V DC.
- **Ngõ ra:** stereo BTL với bốn cọc vít độc lập.
- **Bảo vệ:** cầu chì 10 A, P-MOSFET chống đảo cực, diode TVS 30 V, eFuse TPS26633, cùng mạch giám sát mute và reset.
- **Tản nhiệt:** tản nhiệt gắn trên mặt TPA3255.

**Không có số liệu công suất, méo hay nhiễu nào được tuyên bố.** Chưa đo gì cả.

---

## 3. Kiến trúc hệ thống

Đường 24 V và đường USB độc lập với nhau. USB chỉ cấp cho DAC. Tầng analog và các mạch kích cổng chạy bằng đường phụ 12 V lấy từ đường 24 V đã được bảo vệ.

### Đường USB audio

**Đầu cắm USB-C → bảo vệ ESD → PCM2704C**

- Đầu cắm J401 có điện trở kéo xuống 5,1 kΩ (Rd) riêng trên mỗi chân CC1 và CC2. Nhờ vậy cáp USB-A sang C đạt chuẩn sẽ để máy chủ cấp nguồn cho DAC.
- Linh kiện ESD USBLC6-2SC6 bảo vệ các đường dữ liệu.
- PCM2704C là thiết bị USB audio 16 bit stereo ở 32, 44,1 và 48 kHz. Theo datasheet, nó không cần driver riêng.

### Tầng analog

**Ghép AC → 2 × NE5532 → TPA3255**

Hai op-amp NE5532 kích tầng công suất theo kiểu vi sai. Chúng chạy bằng đường phụ 12 V.

### Tầng công suất và bộ lọc ngõ ra

**TPA3255** hoạt động ở chế độ cầu. Mỗi ngõ ra có bộ lọc LC với bốn cuộn cảm Coilcraft MA5172-AE (10 µH), tụ phim 1 µF và mạch Zobel. Loa nối vào hai đầu nối Phoenix J1001 và J1002.

### Giám sát

Mạch logic gồm LM339, TL431 và TPS3802K33 giữ ampli ở trạng thái reset và tắt tiếng cho đến khi đường 24 V và đường USB 5 V đều hợp lệ và thời gian trễ cho phép phát tiếng đã hết.

---

## 4. Nguồn cấp và bảo vệ

- **Ngõ vào:** 24 V DC trên jack tròn, **cực dương ở giữa**.
- **Adapter:** tối thiểu 5 A. Điện áp không tải không được vượt 25,2 V, vì diode TVS ngõ vào có điện áp làm việc 25,6 V. Thiết kế được tính toán và mô phỏng quanh Mean Well GST120A24-P1M. Chưa chọn hay thử adapter nào.
- **Ngân sách dòng:** 5 đến 5,25 A, đỉnh gần 6 A trong tối đa 25 ms (tính toán, chưa đo).

### Bảo vệ ngõ vào

1. **Cầu chì F1** 10 A.
2. **Chống đảo cực** bằng P-MOSFET IRF4905.
3. **Diode TVS** 1.5KE30A chống xung điện áp.
4. **eFuse TPS26633** để hạn chế dòng khởi động và giới hạn dòng.
5. **Tụ đệm:** 2 × 3300 µF, 50 V.

### Nguồn phụ

Bộ chuyển đổi RECOM R-78HB12-0.5 tạo đường phụ 12 V cho tầng analog, các mạch kích cổng và mạch giám sát.

**An toàn:** dùng adapter kín, cách điện kép, có dấu CE. Kiểm tra cực tính và điện áp không tải bằng đồng hồ vạn năng trước khi cắm. Chuỗi bảo vệ ngõ vào giảm rủi ro nhưng không thay thế bước kiểm tra này.

---

## 5. Bo mạch in (PCB)

- **Kích thước:** 182,1 × 145,6 mm
- **Lớp:** 2, đồng 2 oz (70 µm) cả hai mặt, 1,6 mm
- **Linh kiện:** 209 footprint, tất cả ở mặt trên, trong đó 150 là xuyên lỗ
- **Quy tắc:** 14 lớp net với quy tắc DRC riêng, khoảng cách 0,6 mm cho các net 24 V, nút đóng cắt, bootstrap và loa
- **Độ rộng đường mạch:** đường 24 V chính 1,4 mm, net loa và nút đóng cắt 0,8 mm
- **Kiểm tra (KiCad DRC, 18 tháng 10 năm 2026):** 0 lỗi, 0 net chưa nối, đối chiếu sơ đồ nguyên lý 0 sai lệch, 4 cảnh báo được chấp nhận có chủ ý

**Hai ảnh đầu tiên trong thư viện là ảnh chụp bo PCB thật đã chế tạo, chưa lắp linh kiện.** Các ảnh còn lại là **bản dựng CAD từ dự án KiCad**.

### Đi dây công suất

- Bốn nút OUT dùng đường mạch 1,0 mm với các liên kết ở mặt dưới và via song song.
- Các tụ bootstrap đặt gần TPA3255 nhất mà tản nhiệt cho phép.
- Các mảng đồng ở mặt trên cấp cho chân PVDD, hỗ trợ bởi các mảng đồng và dải via ở mặt dưới.

### Tản nhiệt

Với TPA3255 vỏ DDV, PowerPAD nằm ở **mặt trên**. Do đó dưới chip không có pad nhiệt. Tản nhiệt ATS-TI1OP-519-C1-R3 đặt lên vỏ chip và được cố định bằng hai vít M3 cách nhau 36,8 mm. Vật liệu dẫn nhiệt và khe hở tiếp xúc thực tế **chưa được xác định**.

---

## 6. Linh kiện chính

- **U4:** TI TPA3255 (HTSSOP-44), tầng công suất Class-D
- **U401:** TI PCM2704C (SSOP-28), DAC USB audio
- **J401:** Amphenol 12401610E4#2A, đầu cắm USB-C (chỉ USB 2.0)
- **U5, U6:** NE5532 (DIP-8), tầng analog
- **U201:** TI TPS26633, eFuse
- **Q101:** IRF4905, chống đảo cực
- **U2:** RECOM R-78HB12-0.5, nguồn phụ 12 V
- **U701, U702, U7:** LM339, TL431, TPS3802K33, giám sát
- **L2 đến L5:** Coilcraft MA5172-AE, 10 µH
- **C201, C202:** 3300 µF, 50 V
- **J101:** jack nguồn DC Same Sky PJ-102BH
- **J1001, J1002:** cọc loa Phoenix MKDS 3/2-5,08

Nhiều mã linh kiện thụ động trong thiết kế vẫn đang ghi “TBD”.

---

## 7. Đấu loa

TPA3255 kéo mỗi loa theo kiểu **cầu (BTL)**. Mỗi kênh có một ngõ ra dương và một ngõ ra âm: J1001 cho kênh trái, J1002 cho kênh phải.

**Cảnh báo: các cọc âm (L−, R−) KHÔNG được nối với mass, nối với nhau hay nối với cọc âm của kênh khác.** Cả hai cọc của mỗi loa đều là ngõ ra tích cực. Nối bất kỳ cọc nào với mass có thể làm hỏng ampli. Vì vậy lớp in trên PCB ghi “BTL OUTPUTS, L−/R− NOT GND”.

Dùng bốn dây cách điện độc lập, mỗi cọc một dây.

---

## 8. Mô phỏng và sản xuất

### LTspice

Dự án có một sơ đồ LTspice đấu dây đầy đủ của toàn bo với 206 linh kiện. Sơ đồ đã được đối chiếu với netlist KiCad và không có sai lệch. Đã mô phỏng chế độ DC, sóng sin 1 kHz, méo do bão hòa, đáp tuyến tần số và quá trình khởi động.

Tất cả IC đều là **mô hình hành vi, không phải mô hình của nhà sản xuất**. Vì vậy kết quả không phải là phép đo trên phần cứng.

### Bộ hồ sơ sản xuất

Cho JLCPCB có file Gerber, BOM và CPL cho 43 linh kiện SMD, cùng danh sách **150 linh kiện xuyên lỗ** phải tự hàn. Có thể tùy chọn chỉ nhờ lắp TPA3255.

**Bo PCB trần hiện đã được chế tạo** (xem ảnh trong thư viện). Với phần lắp SMD, mã linh kiện và tồn kho vẫn cần được xác nhận.

---

## 9. Hướng dẫn lắp ráp (khuyến nghị)

Đã có bo PCB trần trong tay, nhưng chưa lắp gì cả.

1. Kiểm tra PCB (2 lớp, 2 oz, 1,6 mm) xem có lỗi chế tạo không.
2. Gắn các linh kiện SMD trước (TPA3255, TPS26633, PCM2704C, TPS3802, linh kiện ESD, MOSFET, thạch anh, đầu cắm USB-C, tụ điện).
3. Hàn TPA3255 cẩn thận (HTSSOP-44, bước chân 0,635 mm, nhạy ẩm) và kiểm tra cầu chập.
4. Sau đó đến linh kiện xuyên lỗ: loại thấp trước, rồi đế, tụ hóa, cuộn cảm, đầu nối và cầu chì.
5. Gắn tản nhiệt sau cùng bằng hai vít M3.
6. Chọn và kiểm chứng vật liệu dẫn nhiệt phù hợp.
7. Trước khi cấp điện, kiểm tra cầu chập hàn, cực tính của tụ hóa và diode, đo điện trở giữa 24 V và mass cũng như giữa 12 V và mass.
8. Lần cấp điện đầu tiên dùng **nguồn phòng thí nghiệm có giới hạn dòng và không nối loa**. Chỉ sau khi kiểm tra đường 12 V và mạch mute mới nối tải hoặc loa.

---

## 10. Trạng thái hiện tại và hạn chế

**Quan trọng:** bo PCB **đã chế tạo nhưng chưa lắp linh kiện**. **Chưa có phép đo nào**.

- Sơ đồ nguyên lý và PCB đã hoàn chỉnh và qua DRC của KiCad.
- Bo PCB trần đã được chế tạo (ảnh trong thư viện).
- **USB:** việc nhận thiết bị và phát nhạc chưa được xác minh. Có thể có tiếng “bụp” khi máy tính vào chế độ ngủ hoặc thức dậy, vì tín hiệu suspend của DAC chưa được nối vào mạch mute.
- **Nguồn:** chưa chọn adapter, việc khởi động với adapter thật chưa được thử. Hành vi cắm nóng và khởi động đến từ các mô hình gần đúng.
- **Tản nhiệt:** nhà sản xuất không công bố dung sai vị trí và khe hở tiếp xúc chưa biết. Khoảng cách giữa đồng GVDD và chân tản nhiệt là 0,7 mm, còn rất ít dư địa.
- **BOM:** nhiều mã điện trở và tụ điện vẫn là “TBD”.
- **Lắp ráp:** mã linh kiện, tồn kho và góc xoay cho phần lắp SMD chưa được xác minh.
- **Hiệu năng:** không có phép đo nào về công suất, méo, nhiễu, nhiệt hay EMC.
- Không tuyên bố chứng nhận nào. Repository hiện chưa gán giấy phép.

---

## 11. Các bước tiếp theo

1. Mua linh kiện và xác nhận mã linh kiện.
2. Gắn linh kiện và hàn bo.
3. Cấp điện có kiểm soát với giới hạn dòng và không nối loa.
4. Thử việc nhận USB và phát nhạc trên Windows, macOS và Linux.
5. Chọn vật liệu dẫn nhiệt và đo hành vi nhiệt.
6. Đo công suất, méo và nhiễu.
7. Cập nhật tài liệu bằng số liệu đo thật.

---

## Kết luận

AMP-D50-V2-LITE là một thiết kế ampli được ghi tài liệu đầy đủ, chú trọng khả năng chế tạo: bo 2 lớp, linh kiện có thể hàn bằng tay, chuỗi bảo vệ rõ ràng và hồ sơ sản xuất có thể truy vết. Bước tiếp theo mang tính quyết định là lắp tấm bo đầu tiên và thực hiện phép đo đầu tiên.

---

### AMP-D50-V2-LITE

**Thiết kế bởi Nguyen Nhan Do**

Hai ảnh chụp thể hiện bo PCB thật đã chế tạo, chưa lắp linh kiện; các ảnh còn lại là bản dựng CAD. Phần cứng chưa được lắp linh kiện hay thử nghiệm.
