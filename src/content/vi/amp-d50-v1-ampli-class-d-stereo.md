---
id: amp-d50-v1-ampli-class-d-stereo
slug: amp-d50-v1-ampli-class-d-stereo
translation_id: amp-d50-v1-stereo-class-d
language: vi
content_type: project
title: AMP-D50-V1 – Ampli Class-D stereo với USB Audio
category: Audio, PCB
image_url: /my-electronics-blog/images/posts/amp-d50-v1-3d-iso.webp
image_gallery:
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-3d-top.webp
- /my-electronics-blog/images/posts/amp-d50-v1-block-diagram-vi.webp
- /my-electronics-blog/images/posts/amp-d50-v1-audio-signal-flow-vi.webp
- /my-electronics-blog/images/posts/amp-d50-v1-power-distribution-vi.webp
- /my-electronics-blog/images/posts/amp-d50-v1-connector-location-vi.webp
- /my-electronics-blog/images/posts/amp-d50-v1-pcb-bottom.webp
excerpt: Bộ khuếch đại Class-D stereo tự thiết kế với TPA3255, đầu vào USB-C audio và RCA analog. Mục tiêu là 2 × 50 W trên tải 4 Ω từ nguồn 28 V. Sơ đồ nguyên lý và PCB đã hoàn thành, nhưng chưa chế tạo và chưa đo đạc gì.
tags:
- Class-D
- TPA3255
- USB Audio
- XMOS
- KiCad
- Thiết kế PCB
read_time: 9 phút
published: true
created_at: '2026-11-10T18:00:00.000Z'
external_link: 
project_status: in_progress
sort_order: 20
---

# AMP-D50-V1
### Ampli Class-D stereo với USB Audio

**Một bộ khuếch đại nhỏ gọn để nghe nhạc nghiêm túc: vào bằng USB-C hoặc RCA, ra hai loa bookshelf.**

**Tầng công suất:** Texas Instruments TPA3255  
**Mục tiêu thiết kế:** 2 × 50 W trên tải 4 Ω từ nguồn 28 V DC  
**Ngõ vào:** USB-C (XMOS XU316 + PCM5122) và 2 × RCA  
**Phát triển:** KiCad, LTspice  
**Trạng thái dự án:** Sơ đồ nguyên lý V1.0 đã duyệt, PCB đã đi dây xong, chưa chế tạo và chưa đo

---

## 1. Tổng quan dự án

### AMP-D50-V1 là gì?

AMP-D50-V1 là bo mạch của một **bộ khuếch đại công suất Class-D stereo** mà tôi tự phát triển hoàn toàn: từ yêu cầu, sơ đồ nguyên lý, mô phỏng, kiểm chứng linh kiện cho đến bản layout PCB 4 lớp đã đi dây hoàn chỉnh.

Ampli dùng để kéo loa bookshelf thụ động và kết nối trực tiếp với máy tính Mac hoặc Windows. Vì vậy bo có sẵn đường USB audio riêng với DAC tích hợp. Ai thích nghe nguồn analog thì dùng hai ngõ RCA.

### Ý tưởng cốt lõi

**Nhỏ, êm và sạch: tản nhiệt thụ động, không có điện lưới trên bo, cùng mạch bảo vệ và giám sát tự động tắt tiếng đầu ra khi có bất kỳ sự cố nào.**

Bo mạch này rõ ràng là một **dự án phát triển**. Vỏ máy, tản nhiệt và adapter nguồn nằm ngoài phạm vi.

---

## 2. Mục tiêu dự án

- Một ampli stereo chất lượng cao cho nhạc acoustic như piano, đàn dây và dàn nhạc.
- Hai đường vào trên cùng một bo: số qua USB-C và analog qua RCA.
- Chỉ một nguồn ngoài duy nhất: adapter 28 V có chứng nhận. Trên bo **không có điện lưới**.
- Tản nhiệt thụ động, không quạt.
- Lắp ráp kết hợp: nhà máy gắn linh kiện SMD, còn linh kiện lớn và đầu nối do chủ sở hữu tự hàn.
- Tài liệu có thể truy vết: mỗi giá trị đều được ghi rõ là kết quả đo, giá trị datasheet, tính toán hay giả định.

---

## 3. Kiến trúc hệ thống

Đường tín hiệu có hai ngõ vào, được một rơ-le dẫn vào bộ chỉnh âm lượng chung và tầng công suất.

### Đường số

**USB-C → XMOS XU316 → PCM5122**

Vi điều khiển XU316 hoạt động như thiết bị USB Audio Class 2 và chuyển I²S sang DAC PCM5122. Định dạng dự kiến là PCM 24 bit ở 44,1, 48, 88,2 và 96 kHz. Mã nguồn firmware đã có nhưng chưa được build.

### Đường analog

**RCA → OPA1662 (tầng đảo) → rơ-le**

Ngõ RCA đi qua các tầng đảo OPA1662 với trở kháng vào khoảng 10,5 kΩ. Mức tín hiệu đến 4 Vrms được đánh giá là an toàn theo tính toán.

### Đường chung

**Rơ-le K401 → PGA2311 → OPA1662 (buffer + đảo) → TPA3255**

- Rơ-le chọn nguồn. Khi không cấp điện, ngõ **RCA** được chọn.
- PGA2311 chỉnh âm lượng và được XU316 điều khiển qua SPI.
- Hai OPA1662 tạo ra tín hiệu **vi sai** cho tầng công suất.
- Tụ phim WIMA (2,2 µF) ghép tín hiệu vào TPA3255.

### Tầng công suất và bộ lọc ngõ ra

**TPA3255** hoạt động ở chế độ cầu (BTL) với hai kênh. Mỗi ngõ ra có bộ lọc LC gồm cuộn cảm 10 µH (Coilcraft MA5172-AE) và tụ phim 1 µF, cộng thêm mạch Zobel 3,3 Ω và 10 nF. Loa nối vào hai đầu nối Phoenix J7 và J8.

---

## 4. Nguồn cấp và bảo vệ

Mọi thứ chạy từ **một** ngõ vào 28 V (danh định, khoảng nghiên cứu 26,6 đến 29,4 V). Adapter ngoài cấp tối thiểu 8 A hay 224 W. Tôi cố ý chưa chọn một adapter cụ thể.

### Bảo vệ ngõ vào

1. **Cầu chì F101** 10 A.
2. **Diode TVS** SMCJ33CA chống xung điện áp.
3. **FET chặn Q101** (CSD19532Q5B): bảo vệ chống đảo cực và dòng ngược.
4. **Hai eFuse TPS26631 song song**, mỗi con giới hạn dòng khoảng 6 A. Chúng nạp tụ đệm 2000 µF trong khoảng 44 đến 74 ms (hạn chế dòng khởi động).

### Các đường nguồn

- **PVDD 28 V** cho TPA3255.
- **+12 V và +5,2 V** từ hai bộ buck LMR36520 (cấp cho GVDD và nguồn phụ).
- **+3,3 V, +1,8 V và +0,9 V** từ ba bộ buck TPS62822 cho XU316 và mạch logic.
- **±5 V analog** (+5 VA và −5 VA) từ các LDO nhiễu thấp cho op-amp và bộ chỉnh âm lượng, thêm 4,5 V cho cuộn rơ-le.

Thứ tự được cố định: PVDD, rồi +5,2 V và +12 V, rồi +3,3 V, +1,8 V và +0,9 V. Chỉ sau đó mạch giám sát mới cho phép XU316 khởi động.

---

## 5. An toàn khi lỗi: Reset, Mute và Watchdog

Ampli không được phép làm “một điều gì đó” khi xảy ra lỗi. Vì vậy có một mạch giám sát thuần phần cứng, hoạt động không cần firmware:

- **Giám sát cửa sổ điện áp** của các đường nguồn (TPS3700) và một đường power-good chung.
- **Trễ reset** (TPS3808) khoảng 0,34 đến 0,80 s sau khi cấp điện.
- **Watchdog phần cứng** (TPS3431) với tín hiệu nhịp tim từ XU316.
- **Chốt (latch):** một lỗi khi đã được phát hiện sẽ được giữ lại và chỉ bị xóa bởi một mức power-good thấp thật sự.

Kết quả là một phép AND: `PWR_RDY = RDY AND WD_OK AND LATCH_OK`. Nó giữ TPA3255 ở trạng thái reset và PGA2311 ở trạng thái tắt tiếng cho đến khi mọi thứ ổn. Các điện trở kéo xuống giúp ampli vẫn tắt tiếng ngay cả khi mạch logic chưa có điện hoặc chưa được nạp chương trình.

---

## 6. Bo mạch in (PCB)

- **Kích thước:** 172,10 × 115,10 mm, **4 lớp**, 1,6 mm, ENIG
- **Cấu trúc lớp:** JLC04161H-3313 (tín hiệu, mặt phẳng GND, mặt phẳng PVDD, tín hiệu/công suất)
- **Linh kiện:** 344 footprint, tất cả ở mặt trên
- **USB:** cặp vi sai với đường mạch 0,15 mm, tính toán khoảng 92,5 Ω (mục tiêu 90 Ω ±10 %)
- **Kiểm tra:** ERC 0 lỗi, DRC 0 lỗi, đối chiếu sơ đồ nguyên lý không có sai lệch
- **Cố định:** bốn lỗ M3

Phần công suất với bốn đường ngõ ra OUT_A đến OUT_D, các cuộn lọc và hai tụ hóa lớn 1000 µF nằm ở bên phải, còn phần audio và USB nhạy cảm nằm ở bên trái. Nhờ vậy dòng đóng cắt được tách khỏi đường tín hiệu về mặt vật lý.

### Chế tạo

Bộ hồ sơ sản xuất cho JLCPCB đã được chuẩn bị nhưng **chưa đặt hàng**. Nhà máy gắn 307 linh kiện SMD. Khoảng 33 linh kiện do tôi tự hàn: cuộn cảm, tụ hóa, tụ phim, đầu nối, rơ-le và cầu chì.

---

## 7. Các giá trị mục tiêu kỹ thuật

Tất cả giá trị đều là **mục tiêu thiết kế, số liệu datasheet hoặc tính toán**. Chưa có phép đo nào.

- **Công suất ra:** 2 × 50 W trên 4 Ω (1 kHz, 1 % THD+N, trong thời gian ngắn). Đây là mục tiêu, không phải cam kết.
- **Trên tải 8 Ω:** khoảng 42,5 W. Theo tính toán, không thể đạt 50 W ở 28 V.
- **Tải tối thiểu:** 3,4 Ω (BTL)
- **Độ lợi:** điển hình 21,5 dB
- **Hoạt động liên tục:** sóng sin 2 × 50 W không phải chế độ liên tục dự kiến. Với nhạc, giả định khoảng một phần tám công suất định mức.
- **Công suất tiêu tán:** khoảng 15 đến 18 W khi tải đầy (giá trị dùng để lập kế hoạch)
- **Tản nhiệt:** riêng PCB chỉ tản được khoảng 1,7 W. TPA3255 cần một tản nhiệt ngoài được nối đất, với lớp đệm cách điện có đặc tính nhiệt rõ ràng.

---

## 8. Đầu nối

- **J101:** ngõ vào nguồn DC 28 V (Kycon KPJX-4S)
- **J301:** USB-C (USB 2.0 High-Speed, tự cấp nguồn)
- **J401 / J402:** RCA trái / phải (REAN NYS367)
- **J7 / J8:** loa trái / phải (Phoenix MKDS)
- **J302:** đầu xSYS2 để nạp chương trình và gỡ lỗi
- **TP801 / TP802:** điểm đo cho `PWR_RDY` và `LATCH_OK`

**Quan trọng:** ngõ ra loa là ngõ ra dạng cầu. **Không được nối bất kỳ đầu nào với mass hoặc vỏ máy.**

---

## 9. Những điều tôi học được trong quá trình phát triển

### Mạch bảo vệ ngõ vào được thiết kế lại hoàn toàn

Giải pháp đầu tiên với LM5069, LM5050 và điện trở shunt không thể vận hành trong giới hạn điện áp cho phép (±0,3 V tại chân sense). Tôi thay bằng **hai TPS26631 song song** cùng một FET chặn. Cách này bỏ được shunt, bảo vệ đảo cực ngay trong chip và có thể dẫn chứng bằng số liệu datasheet.

### Logic watchdog từng có một sai sót

Giả định ban đầu của tôi về cách TPS3431 hoạt động lúc khởi động là sai. Nó chỉ báo sau khi hết thời gian timeout. Do đó, firmware bị treo có thể khiến ngõ ra bật tắt liên tục. Cách khắc phục là **mạch chốt** ở mục 5.

### Số liệu hiệu năng trung thực

Tôi đã rút lại các con số cũ về méo và công suất vì chúng chỉ là ngoại suy. Hiện giờ chỉ ghi những giá trị suy ra được từ datasheet, kèm lưu ý rằng chưa đo gì.

### Đường vào được xây dựng lại

Ngõ RCA nay đi qua hai tầng đảo OPA1662. Nhờ đó PGA2311 được kích bởi ngõ ra của op-amp, giúp xác định rõ trở kháng nguồn.

---

## 10. Trạng thái hiện tại và sự minh bạch

**Quan trọng:** hiện **chưa có bo nào được chế tạo** và **chưa có phép đo nào**.

- Sơ đồ nguyên lý V1.0 đã được duyệt (12 trang, 340 linh kiện, ERC 0).
- PCB đã đi dây hoàn chỉnh, với DRC 0 và đối chiếu sơ đồ nguyên lý 0 sai lệch.
- Bộ hồ sơ sản xuất đã chuẩn bị nhưng chưa đặt hàng.
- Firmware USB audio đã viết nhưng **chưa build**. Không có nó thì USB audio, âm lượng và chọn nguồn chưa hoạt động.
- Các hình 3D chỉ mang tính **minh họa**: 52 linh kiện dùng mô hình thay thế. Hình PCB là bản xuất từ KiCad, không phải ảnh chụp.
- **Không tuyên bố** tuân thủ CE, EMC hay chứng nhận nào khác.

### Lưu ý an toàn

- Chỉ có điện áp một chiều (28 V, đến khoảng 8 A). Bản thân adapter phải có chứng nhận và cách ly điện.
- Hai tụ 1000 µF vẫn tích trữ năng lượng sau khi tắt nguồn.
- Tản nhiệt, các cuộn cảm và TPA3255 có thể rất nóng.
- Lần cấp điện đầu tiên dùng **nguồn phòng thí nghiệm có giới hạn dòng**, không dùng adapter.

---

## 11. Các bước tiếp theo

1. Rà soát bộ hồ sơ sản xuất và đặt bo mẫu.
2. Cấp điện có kiểm soát với giới hạn dòng, từng đường nguồn một.
3. Build và thử firmware USB.
4. Đo đạc: méo, nhiễu, đáp tuyến tần số, công suất và nhiệt.
5. Thiết kế tản nhiệt và vỏ máy.
6. Cập nhật tài liệu bằng số liệu đo thật.

---

## Kết luận

AMP-D50-V1 cho thấy trọn vẹn một quy trình phát triển phần cứng: từ yêu cầu qua thiết kế mạch, phương án bảo vệ và mô phỏng cho đến bản layout PCB hoàn chỉnh. Bước tiếp theo và quan trọng nhất là kiểm chứng trong thực tế, tức là tấm bo đầu tiên được chế tạo và phép đo đầu tiên.
