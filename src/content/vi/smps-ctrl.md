---
id: smps-ctrl
slug: smps-ctrl
translation_id: smps-ctrl
language: vi
content_type: knowledge
title: SMPS-CTRL – Bộ nguồn DC để bàn dạng mô-đun dùng STM32
category: Power
excerpt: Nghiên cứu đang hoàn thiện về bộ nguồn DC bốn đầu ra độc lập, được điều khiển và giám sát tập trung bằng STM32.
tags:
- SMPS
- STM32
- DC-DC
read_time: 2 phút
published: true
created_at: '2026-11-13T12:00:00.000Z'
project_status: in_progress
sort_order: 2
---

Tôi đang hoàn thiện nghiên cứu và thiết kế **SMPS-CTRL**, một bộ nguồn để bàn dùng nguồn **24 V DC cách ly** để cấp cho bốn đầu ra độc lập. Ba kênh có điện áp cố định **12 V, 5 V và 3,3 V**. Kênh thứ tư dự kiến điều chỉnh từ **1,8 đến 12 V** và có giới hạn dòng.

STM32 được dùng trong thiết kế để theo dõi điện áp, dòng điện, nhiệt độ và báo lỗi. Tài liệu tổng quan trình bày kiến trúc hệ thống, các chức năng bảo vệ và kế hoạch kiểm thử. Phiên bản **0.1** ghi lại thiết kế đề xuất. Bước chế tạo và đo kiểm nguyên mẫu vẫn ở phía trước.

## Đọc tài liệu tổng quan PDF

- [Tiếng Việt (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_VI.pdf)
- [Deutsch (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_DE.pdf)
- [English (PDF)](/my-electronics-blog/documents/steckbrief/SMPS-CTRL_Project_Overview_EN.pdf)
