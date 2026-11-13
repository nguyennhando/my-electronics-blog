---
id: gwentts
slug: gwentts
translation_id: gwentts
language: vi
content_type: project
title: GwenTTS – Phòng thu giọng nói AI trên Windows
category: Phần mềm, AI
image_url: /my-electronics-blog/images/posts/gwentts-logo.png
excerpt: Từ kịch bản đến tệp âm thanh. GwenTTS tạo lời thuyết minh và hội thoại bằng bảy ngôn ngữ ngay trên máy tính Windows.
tags:
- Text-to-Speech
- Windows
- Tauri
- Python
read_time: 3 phút
published: true
created_at: '2026-11-13T12:00:00.000Z'
project_status: in_progress
---

> **Một kịch bản, hai giọng nói, một tệp âm thanh hoàn chỉnh.** GwenTTS đưa công nghệ tổng hợp giọng nói đa ngôn ngữ lên máy tính Windows.

**Nền tảng** · Windows\
**Định dạng xuất** · WAV và MP3\
**Công nghệ** · Tauri 2, Rust, React, TypeScript và Python

## 1. Ý tưởng dự án

Một video cần lời thuyết minh, một bài học ngoại ngữ cần đoạn luyện nghe, còn bản nháp podcast có thể cần hai giọng khác nhau. GwenTTS gom các bước vào một giao diện để bạn nhập kịch bản, tạo giọng, nghe thử rồi xuất tệp âm thanh để biên tập hoặc chia sẻ.

Sau khi thiết lập mô hình phù hợp, máy tính tự xử lý phần tổng hợp giọng nói. Kịch bản và bản thu tham chiếu nằm trên thiết bị trong suốt quá trình đó.

## 2. Từ văn bản đến âm thanh

1. **Chuẩn bị lời đọc.** Dán văn bản vào Studio. Với hội thoại, đánh dấu từng lượt lời để ứng dụng biết nhân vật nào sẽ nói.
2. **Chọn giọng.** Dùng giọng có sẵn hoặc tạo hồ sơ giọng từ bản thu tham chiếu mà bạn có quyền sử dụng. Hồ sơ có thể dùng lại cho những kịch bản sau.
3. **Nghe thử và xuất tệp.** Nghe lại trong Studio, tìm kết quả trong lịch sử và xuất dưới dạng WAV hoặc MP3. Ứng dụng dùng FFmpeg để xuất MP3.

Ở chế độ hội thoại, GwenTTS tạo âm thanh cho từng lượt lời rồi ghép thành một tệp. Bạn có thể chèn phản ứng ngắn như “Ừm” đúng chỗ để nhịp trò chuyện tự nhiên hơn.

## 3. Bảy ngôn ngữ, hai bộ tổng hợp tích hợp sẵn

| Bộ tổng hợp | Ngôn ngữ |
| --- | --- |
| **VieNeu** | Tiếng Việt |
| **Pocket TTS** | Tiếng Anh, Đức, Pháp, Tây Ban Nha, Ý và Bồ Đào Nha |

## 4. Bên trong GwenTTS

Giao diện dùng React và TypeScript. Tauri trao đổi dữ liệu JSON với phần xử lý viết bằng Python, nơi quản lý hồ sơ giọng nói, tổng hợp âm thanh và lưu lịch sử. Hai bộ tổng hợp tích hợp chạy trong các môi trường Python riêng. GwenTTS có giao thức được tài liệu hóa để kết nối thêm các bộ tổng hợp đã cài trên máy dưới dạng tiến trình riêng.
