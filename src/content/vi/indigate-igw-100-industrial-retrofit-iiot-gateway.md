---
id: indigate-igw-100-industrial-retrofit-iiot-gateway
slug: indigate-igw-100-industrial-retrofit-iiot-gateway
translation_id: indigate-igw-100-industrial-retrofit-iiot-gateway
language: vi
content_type: project
title: INDIGATE IGW-100 Industrial Retrofit & IIoT Gateway
category: IoT, PCB
image_url: /my-electronics-blog/images/posts/1793034606935-screenshot-2026-10-25-233453.webp
image_gallery:
- /my-electronics-blog/images/posts/1793034652491-screenshot-2026-10-25-232347.webp
- /my-electronics-blog/images/posts/1793034662507-screenshot-2026-10-25-232414.webp
- /my-electronics-blog/images/posts/1793034671708-screenshot-2026-10-25-232740.webp
- /my-electronics-blog/images/posts/1793034678020-screenshot-2026-10-25-232725.webp
- /my-electronics-blog/images/posts/1793034684538-screenshot-2026-10-25-233244.webp
- /my-electronics-blog/images/posts/1793034689868-screenshot-2026-10-25-233230.webp
- /my-electronics-blog/images/posts/1793034694960-screenshot-2026-10-25-233308.webp
excerpt: Gateway truyền thông và thu thập dữ liệu công nghiệp để số hóa các máy móc và dây chuyền hiện có.
tags:
[]
read_time: 5 phút
published: true
created_at: '2026-10-26T17:01:57.523Z'
external_link: 
pdf_url: /my-electronics-blog/documents/steckbrief/indigate-vi.pdf
project_status: in_progress
sort_order: 20
---

# INDIGATE IGW-100
### Industrial Retrofit & IIoT Gateway

**Gateway truyền thông và thu thập dữ liệu công nghiệp để số hóa các máy móc và dây chuyền hiện có.**

**Phần cứng:** IGW100-HW-REV-A  
**Nền tảng:** STM32H573  
**Phát triển:** KiCad 10.0  
**Trạng thái dự án:** Đã hoàn thành phát triển phần cứng, đang chờ chế tạo bo mẫu và kiểm chứng

---

## 1. Tổng quan dự án

### INDIGATE IGW-100 là gì?

**INDIGATE IGW-100** là một gateway công nghiệp do tôi tự phát triển, nhằm kết nối các máy móc, cảm biến và hệ thống điều khiển hiện có với các hệ thống truyền thông và thu thập dữ liệu số hiện đại.

Trong nhiều nhà máy, máy móc đã hoạt động hàng chục năm. Chúng vẫn chạy ổn định, nhưng thường không có giao diện mạng hiện đại hoặc khả năng thu thập dữ liệu tập trung.

Việc hiện đại hóa toàn bộ những hệ thống như vậy thường rất tốn kém.

Đó chính là chỗ INDIGATE IGW-100 phát huy tác dụng.

Thiết bị được dự kiến làm **giao diện trung gian giữa phần cứng công nghiệp hiện có và các hệ thống IT hay IIoT hiện đại**.

Nhiều loại tín hiệu công nghiệp và giao diện truyền thông khác nhau có thể được thu thập và xử lý trên cùng một nền tảng phần cứng.

Trọng tâm là cải tạo, nâng cấp các hệ thống hiện có mà không cần thay thế toàn bộ kỹ thuật điều khiển của chúng.

### Ý tưởng cốt lõi

**Tiếp tục sử dụng máy móc hiện có, giúp dữ liệu sẵn có trở nên dễ truy cập và kết nối các hệ thống công nghiệp với nhau tốt hơn.**

Vì vậy, IGW-100 được thiết kế để trở thành một nền tảng phần cứng nhỏ gọn, bền bỉ và linh hoạt trong sử dụng.

---

## 2. Dự án nhằm giải quyết vấn đề gì?

Trong các nhà máy, nhiều thế hệ máy móc và bộ điều khiển thường tồn tại song song.

Những khó khăn điển hình là:

- Máy cũ không có giao diện Ethernet.
- Cảm biến chỉ cung cấp tín hiệu analog hoặc số.
- Các bộ điều khiển khác nhau dùng các giao diện truyền thông khác nhau.
- Trạng thái vận hành và dữ liệu quy trình không có sẵn ở một nơi tập trung.
- Hiện đại hóa toàn bộ kỹ thuật điều khiển không phải lúc nào cũng hợp lý về kinh tế.
- Việc tích hợp hệ thống hiện có vào các hệ thống cấp cao hơn rất tốn công.

IGW-100 được phát triển để cung cấp một nền tảng phần cứng chung cho các nhiệm vụ này.

### Ví dụ thực tế

Một máy sản xuất cũ có nhiều cảm biến và một bộ điều khiển với giao diện RS-485.

Máy vẫn chạy ổn định, nhưng dữ liệu vận hành của nó không thể dễ dàng đưa lên mạng Ethernet.

Một gateway công nghiệp có thể đóng vai trò cầu nối giữa chiếc máy hiện có và môi trường mạng hiện đại.

Để làm việc này, IGW-100 cung cấp các giao diện phần cứng cần thiết:

1. Ngõ vào số để thu thập tín hiệu của máy.
2. Ngõ vào analog để thu thập giá trị quy trình.
3. RS-485 để giao tiếp với các thiết bị hiện có.
4. CAN-FD để kết nối với các hệ thống điều khiển và truyền thông phù hợp.
5. Ethernet làm giao diện mạng.
6. Ngõ ra số để điều khiển các tải bên ngoài phù hợp.

Firmware sau này sẽ quy định cách dữ liệu được xử lý, truyền đi và cung cấp cho từng ứng dụng cụ thể.

**Quan trọng:** Phần cứng đã được thiết kế, nhưng việc phát triển firmware chưa bắt đầu. Vì vậy các ứng dụng được mô tả là những khả năng sử dụng dự kiến, chưa phải chức năng đã được chứng minh của thiết bị.

---

## 3. Mục tiêu dự án

Mục tiêu chính là phát triển một phần cứng gateway công nghiệp độc lập, tích hợp nhiều giao diện truyền thông và vào/ra trên cùng một nền tảng.

### Cải tạo công nghiệp

Các máy móc và dây chuyền hiện có có thể được bổ sung thêm khả năng thu thập dữ liệu và truyền thông.

### Thu thập dữ liệu tập trung

Tín hiệu số và analog có thể được xử lý trên một nền tảng vi điều khiển chung.

### Kết nối các giao diện khác nhau

Ethernet, RS-485 và CAN-FD cùng có mặt trên một nền tảng phần cứng.

### Kiến trúc phần cứng bền vững

Mạch được thiết kế cho nguồn công nghiệp 24 VDC.

Các mạch bảo vệ, giao diện cách ly điện và một watchdog phần cứng độc lập là một phần của thiết kế.

### Khả năng mở rộng

Phần cứng làm nền tảng cho các chức năng firmware và ứng dụng công nghiệp trong tương lai.

---

## 4. Kiến trúc hệ thống

Trái tim của IGW-100 là vi điều khiển **STM32H573ZIT6** của STMicroelectronics.

Trong kiến trúc hệ thống dự kiến, nó đảm nhận việc xử lý trung tâm và điều khiển các giao diện được kết nối.

Phần cứng gồm nhiều nhóm chức năng.

### Khối xử lý trung tâm

**STM32H573ZIT6**

Vi điều khiển cung cấp các ngoại vi cần thiết để giao tiếp với các mô-đun phần cứng khác nhau.

Bao gồm:

- Ethernet MAC
- FDCAN
- USART
- SPI
- I²C
- GPIO
- Các chức năng ADC
- USB
- SD/MMC
- Giao diện gỡ lỗi SWD

### Các giao diện truyền thông

**Ethernet**

Giao diện mạng 10/100BASE-T được cung cấp qua chip Ethernet PHY DP83825I.

Đây là nền tảng phần cứng cho giao tiếp Ethernet về sau.

**RS-485**

Hai kênh RS-485 cách ly điện cho phép kết nối với các thiết bị truyền thông công nghiệp phù hợp.

Bộ thu phát được dùng là ISO3082.

**CAN-FD**

Một giao diện CAN-FD cách ly điện dựa trên ISO1042 cho phép kết nối với các thiết bị dùng CAN.

**USB-C**

Giao diện USB 2.0 Full Speed dành cho các chức năng bảo trì, chẩn đoán và nạp firmware.

### Ngõ vào/ra công nghiệp

**Ngõ vào số**

Tám ngõ vào số 24 V dùng để thu thập các tín hiệu đóng cắt công nghiệp.

Ví dụ về các nguồn tín hiệu có thể có:

- Công tắc hành trình
- Cảm biến tiệm cận
- Tín hiệu trạng thái vận hành
- Tín hiệu báo lỗi
- Tín hiệu cho phép

**Ngõ ra số**

Bốn ngõ ra số 24 V kiểu high-side dành để điều khiển các tải bên ngoài phù hợp.

Giá trị mục tiêu kỹ thuật là dòng liên tục 0,25 A mỗi kênh.

**Ngõ vào analog**

Hai kênh ngõ vào analog dành cho các tín hiệu công nghiệp chuẩn:

- 0–10 V
- 4–20 mA

Nhờ đó có thể thu thập, chẳng hạn, các giá trị quy trình từ các cảm biến phù hợp.

---

## 5. Thông số kỹ thuật

| Chức năng | Thông số |
|---|---|
| Vi điều khiển | STM32H573ZIT6 |
| Điện áp nguồn | 24 VDC danh định |
| Dải điện áp nguồn | 18–30 VDC |
| Ethernet | 1 × 10/100BASE-T |
| Ethernet PHY | DP83825I |
| RS-485 | 2 × cách ly điện |
| Bộ thu phát RS-485 | ISO3082 |
| CAN-FD | 1 × cách ly điện |
| Bộ thu phát CAN | ISO1042 |
| Ngõ vào số | 8 × 24 V |
| Ngõ ra số | 4 × 24 V high-side |
| Dòng ngõ ra | 0,25 A mỗi kênh (mục tiêu thiết kế) |
| Ngõ vào analog | 2 × 0–10 V / 4–20 mA |
| Analog front end | ADS8684 |
| USB | USB-C, Full Speed |
| Bộ nhớ ngoài | NOR flash |
| Bộ nhớ bổ sung | microSD |
| Đồng hồ thời gian thực | RV-3028-C7 |
| Watchdog phần cứng | TPS3851H33E |
| Gỡ lỗi | SWD / SWO / UART |
| PCB | 6 lớp |
| Độ dày PCB | 1,6 mm |
| Kích thước PCB | 146 × 184 mm |
| Phần mềm phát triển | KiCad 10.0 |
| Mô phỏng mạch | LTspice |

Các thông tin trên mô tả thiết kế phần cứng hiện tại. Chức năng điện phải được xác nhận bằng phép đo sau khi chế tạo.

---

## 6. Nguồn cấp và phương án bảo vệ

Thiết bị công nghiệp phải hoạt động tin cậy trong nhiều điều kiện điện khác nhau.

Vì vậy, khi phát triển IGW-100, tôi đặc biệt chú trọng đến nguồn cấp và việc tách biệt các vùng chức năng khác nhau.

### Nguồn 24 VDC

Thiết bị được thiết kế cho điện áp nguồn danh định 24 VDC.

Dải điện áp vào liên tục dự kiến là 18 đến 30 VDC.

### Bảo vệ ngõ vào

TPS26600 được dùng làm cầu chì điện tử (eFuse).

Nó là một phần của phương án bảo vệ tầng đầu vào.

### Chuyển đổi điện áp

LT8640S tạo ra nguồn 5 V nội bộ.

Các tầng nguồn tiếp theo cung cấp các mức điện áp cần cho mạch logic và các mô-đun phần cứng khác nhau.

### Cách ly điện

Nhiều giao diện được thực hiện với cách ly điện.

Bao gồm:

- Hai kênh RS-485
- CAN-FD
- Nhóm ngõ vào số
- Nhóm ngõ ra số

Cách ly điện nhằm tách các vùng điện khác nhau khỏi nhau.

### Watchdog phần cứng

Một watchdog độc lập loại TPS3851H33E là một phần của kiến trúc hệ thống.

Nó hỗ trợ việc giám sát vi điều khiển.

### An toàn và EMC

Khi phát triển PCB, các vùng cách ly và khoảng cách điện đã được tính đến.

Quy tắc thiết kế có các lớp khoảng cách 8 mm và 4 mm.

Tuy nhiên, các kiểm tra này không thay thế cho việc đánh giá đầy đủ theo các tiêu chuẩn an toàn và EMC liên quan.

Hiện chưa có chứng nhận tương ứng.

---

## 7. Phát triển PCB

Toàn bộ phần cứng được phát triển thành một bo mạch sáu lớp trong **KiCad 10.0**.

Thiết kế bao gồm nguồn cấp, vi điều khiển, các giao diện truyền thông, các ngõ vào/ra công nghiệp cũng như các chức năng bộ nhớ và giám sát bổ sung.

### Dữ liệu PCB

| Đặc tính | Giá trị |
|---|---|
| Phiên bản PCB | IGW100-HW-REV-A |
| Số lớp đồng | 6 |
| Kích thước | 146 × 184 mm |
| Độ dày PCB | 1,6 mm |
| Độ dày đồng | 35 µm |
| Hoàn thiện bề mặt | ENIG |
| Lớp phủ hàn (solder mask) | Xanh đậm |
| Lớp in ký hiệu | Trắng |
| Footprint | 423 |
| Net điện | 275 |
| Via | 884 |
| Độ rộng đường mạch tối thiểu | 0,15 mm |
| Khoảng cách đồng tối thiểu | 0,127 mm |
| Đường kính lỗ via tối thiểu | 0,3 mm |

### Trọng tâm phát triển

Khi phát triển PCB, các điểm sau được đặt lên hàng đầu:

- Tách biệt các vùng điện áp và vùng mass khác nhau
- Tính đến các rào cách ly điện
- Đi dây các tín hiệu Ethernet RMII
- Tích hợp nhiều giao diện công nghiệp
- Cấp nguồn cho các ngõ ra số
- Khả năng tiếp cận các giao diện gỡ lỗi
- Khả năng chế tạo của bo sáu lớp
- Chuẩn bị tài liệu sản xuất

### Design Rule Check

Phiên bản PCB hiện tại đã được kiểm tra bằng KiCad Design Rule Checker.

**Kết quả:**

| Kiểm tra | Kết quả |
|---|---|
| Lỗi DRC | 0 |
| Cảnh báo DRC | 0 |
| Net chưa được nối | 0 |
| Lỗi đối chiếu sơ đồ nguyên lý | 0 |

Ngoài ra, các khoảng cách cách ly và một số dữ liệu sản xuất được chọn đã được kiểm tra độc lập.

**Những kết quả này chỉ xác nhận các bước kiểm tra thiết kế đã thực hiện. Chúng không phải bằng chứng cho hoạt động của một bo mạch đã được chế tạo.**

---

## 8. Phát triển mạch và mô phỏng

Việc phát triển phần cứng bao gồm cả vẽ sơ đồ nguyên lý và phân tích một số vùng chức năng điện được chọn.

### KiCad

Việc phát triển mạch được thực hiện bằng KiCad.

Dự án sơ đồ nguyên lý gồm 17 trang phân cấp.

Các nhóm chức năng khác nhau được phát triển riêng rồi tích hợp vào mạch tổng thể.

### LTspice

LTspice được dùng để phân tích kiến trúc nguồn cấp.

Các file mô phỏng nằm trong thư mục:

`hardware/power/`

Sơ đồ chính là:

`hardware/power/g2_power.asc`

### Mở mô phỏng

Trên Windows, có thể chạy file

`OPEN_LTSPICE.bat`

ở thư mục gốc của repository.

Script sẽ tìm bản cài đặt LTspice có sẵn và mở sơ đồ tương ứng.

Mô phỏng không tự động chạy.

Cần cài LTspice từ trước.

[Tải LTspice](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html)

---

## 9. Quy trình phát triển

Dự án được phát triển từng bước, từ xác định yêu cầu đến chuẩn bị chế tạo bo mẫu.

### Giai đoạn 1 — Yêu cầu

Xác định các yêu cầu cơ bản:

- Nguồn công nghiệp 24 VDC
- Nền tảng vi điều khiển
- Truyền thông Ethernet
- RS-485 và CAN-FD
- Ngõ vào/ra số và analog
- Cách ly điện
- Truy cập gỡ lỗi và bảo trì

### Giai đoạn 2 — Kiến trúc phần cứng

Xác định các nhóm chức năng và chọn các linh kiện chính.

### Giai đoạn 3 — Phát triển mạch

Vẽ các sơ đồ nguyên lý phân cấp và kiểm tra các kết nối điện.

### Giai đoạn 4 — Layout PCB

Phát triển bo sáu lớp, gồm bố trí linh kiện, đi dây và các vùng đồng.

### Giai đoạn 5 — Rà soát thiết kế

Thực hiện:

- Electrical Rule Check (ERC)
- Design Rule Check (DRC)
- Kiểm tra khoảng cách cách ly
- Kiểm tra footprint
- Kiểm tra dữ liệu sản xuất

### Giai đoạn 6 — Chuẩn bị sản xuất

Tạo bộ hồ sơ sản xuất gồm dữ liệu Gerber và dữ liệu khoan.

Bản phát hành sản xuất hiện tại là **Release 3**.

### Giai đoạn 7 — Chế tạo bo mẫu và kiểm chứng

Giai đoạn này vẫn chưa thực hiện.

---

## 10. Trạng thái dự án hiện tại

**Phiên bản phần cứng: IGW100-HW-REV-A**

Giai đoạn hiện tại là chuẩn bị chế tạo bo mẫu đầu tiên.

Việc phát triển sơ đồ nguyên lý và PCB đã hoàn thành.

Bộ hồ sơ sản xuất đã được tạo và kiểm tra ở mức thiết kế.

Cho đến nay chưa có bo mạch thực nào được chế tạo.

### Tổng quan trạng thái

| Hạng mục phát triển | Trạng thái |
|---|---|
| Xác định yêu cầu | Hoàn thành |
| Kiến trúc hệ thống | Hoàn thành |
| Chọn linh kiện | Hoàn thành |
| Phát triển sơ đồ nguyên lý | Hoàn thành |
| Layout PCB | Hoàn thành |
| Design Rule Check | Đạt |
| Dữ liệu sản xuất | Đã tạo |
| Đặt hàng bo mẫu | Chờ thực hiện |
| Lắp ráp linh kiện lên PCB | Chờ thực hiện |
| Cấp điện và chạy thử phần cứng | Chờ thực hiện |
| Đo đạc điện | Chờ thực hiện |
| Phát triển firmware | Chưa bắt đầu |
| Kiểm tra EMC | Chờ thực hiện |
| Đánh giá an toàn | Chờ thực hiện |

### Các điểm kỹ thuật còn mở

Trước khi chế tạo và cấp điện chạy thử, cần đặc biệt lưu ý các điểm sau:

- Nhà sản xuất PCB xác nhận độ dày đồng yêu cầu
- Phê duyệt sản xuất cho via được lấp đầy và phủ kín
- Kiểm tra yêu cầu sản xuất cho lớp in ký hiệu
- Rà soát mã linh kiện của bộ dao động Y701 trước khi xuất bảng vật tư (BOM)
- Đo thời gian (timing) Ethernet RMII trên bo mẫu thật
- Kiểm tra điện cho phần nguồn cấp
- Kiểm chứng các giao diện cách ly điện
- Kiểm tra các ngõ vào/ra số và analog

Các chi tiết kỹ thuật khác được ghi trong các báo cáo của dự án.

---

## 11. Hướng phát triển tiếp theo

Sau khi hoàn thành phát triển phần cứng sẽ là chế tạo và kiểm chứng thực tế.

### Phần cứng

- [x] Xác định yêu cầu hệ thống
- [x] Phát triển kiến trúc phần cứng
- [x] Chọn linh kiện
- [x] Vẽ sơ đồ nguyên lý
- [x] Phát triển PCB sáu lớp
- [x] Chạy Design Rule Check
- [x] Chuẩn bị dữ liệu sản xuất
- [ ] Đặt hàng PCB
- [ ] Lắp ráp linh kiện
- [ ] Cấp điện và chạy thử phần cứng
- [ ] Kiểm tra nguồn cấp
- [ ] Kiểm tra giao diện Ethernet
- [ ] Kiểm tra các giao diện RS-485
- [ ] Kiểm tra giao diện CAN-FD
- [ ] Kiểm tra các ngõ vào và ngõ ra số
- [ ] Hiệu chuẩn và kiểm chứng các ngõ vào analog
- [ ] Lên kế hoạch kiểm tra sơ bộ EMC và an toàn

### Firmware

Việc phát triển firmware được dự kiến cho một giai đoạn sau của dự án.

Các mảng phát triển dự kiến là:

- Khởi tạo STM32H573
- Truyền thông Ethernet
- Truyền thông RS-485
- Truyền thông CAN-FD
- Các chức năng bảo trì qua USB
- Điều khiển ngõ vào và ngõ ra số
- Thu thập dữ liệu analog
- Quản lý bộ nhớ
- Giám sát lỗi
- Cập nhật firmware an toàn

Các giao thức ứng dụng cụ thể và kiến trúc phần mềm về sau phải được xác định và hiện thực trong quá trình phát triển firmware.

---

## 12. Cấu trúc dự án

```text
INDIGATE-IGW100/
│
├── README.md
├── README.de.md
├── README.vi.md
│
├── OPEN_LTSPICE.bat
│
├── hardware/
│   │
│   ├── pcb/
│   │   ├── igw100/
│   │   ├── footprints/
│   │   └── picture/
│   │
│   ├── kicad/
│   │   └── igw100/
│   │
│   ├── power/
│   │
│   └── bom/
│
├── fabrication/
│
├── docs/
│
├── agent_reports/
│
├── references/
│
├── firmware/
│
├── assets/
│
├── PROJECT.md
├── AGENTS.md
│
└── LICENSE
```

---

## 13. Mở dự án trong KiCad

Để chỉnh sửa cần **KiCad 10.0**.

Dự án được lưu lần cuối bằng KiCad 10.0.4.

### Dự án PCB

```text
hardware/pcb/igw100/igw100.kicad_pro
```

### Dự án sơ đồ nguyên lý

```text
hardware/kicad/igw100/igw100.kicad_pro
```

Các thư viện symbol và footprint riêng của dự án nằm trong repository.

Đường dẫn thư viện dùng `${KIPRJMOD}` và được định nghĩa tương đối so với thư mục của từng dự án.

Nhờ vậy, sau khi clone repository, có thể mở dự án cùng các thư viện đi kèm.

---

## 14. Tài liệu

Thông tin kỹ thuật chi tiết hơn nằm trong các file và thư mục sau:

| File / thư mục | Nội dung |
|---|---|
| [`PROJECT.md`](PROJECT.md) | Tình trạng dự án hiện tại |
| [`AGENTS.md`](AGENTS.md) | Quy tắc phát triển kỹ thuật |
| [`docs/README.md`](docs/README.md) | Tổng quan tài liệu |
| [`docs/hardware/power.md`](docs/hardware/power.md) | Kiến trúc nguồn cấp |
| [`agent_reports/`](agent_reports/) | Các báo cáo rà soát kỹ thuật |
| [`references/INDEX.md`](references/INDEX.md) | Datasheet và tài liệu tham khảo |
| [`fabrication/README.md`](fabrication/README.md) | Hồ sơ sản xuất |
| [`firmware/`](firmware/) | Phát triển firmware trong tương lai |

---

## 15. Tổng kết

**INDIGATE IGW-100** là một dự án phần cứng công nghiệp tự phát triển, với mục tiêu giúp việc tích hợp máy móc và dây chuyền hiện có vào các hệ thống thu thập dữ liệu và truyền thông hiện đại trở nên dễ dàng hơn.

Dự án kết hợp vi điều khiển STM32H573 mạnh mẽ với Ethernet, RS-485 và CAN-FD cách ly điện, cùng các ngõ vào/ra số và analog công nghiệp.

Tôi đặc biệt chú trọng đến nguồn 24 VDC bền vững, cách ly điện, các biện pháp bảo vệ điện và quá trình phát triển phần cứng có thể truy vết.

Bo mạch sáu lớp được phát triển hoàn toàn trong KiCad. Các sơ đồ nguyên lý, layout PCB và hồ sơ sản xuất đều đã có.

**Tình trạng dự án hiện tại là một thiết kế phần cứng đã hoàn thành cùng bộ hồ sơ sản xuất đã chuẩn bị. Việc chế tạo bo mẫu đầu tiên, kiểm chứng điện và phát triển firmware vẫn chưa thực hiện.**

Về lâu dài, IGW-100 sẽ là nền tảng phần cứng linh hoạt cho việc cải tạo công nghiệp, thu thập dữ liệu máy và các ứng dụng IIoT.

---

### INDIGATE IGW-100

**Industrial Retrofit & IIoT Gateway**

Hardware Revision A — Phát triển bo mẫu

Dự án phần cứng độc quyền. Bảo lưu mọi quyền.

Xem [LICENSE](LICENSE).
