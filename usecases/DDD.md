# DDD Subdomain Analysis — Hệ thống QLTH Thông minh Quốc Học Huế

## 📌 Core Domain (Lõi nghiệp vụ — lợi thế cạnh tranh chính)

| # | Subdomain | Mô tả ngắn | Bounded Context |
|---|-----------|------------|-----------------|
| 1 | **Learning Management** | Quản lý lớp học trực tuyến/trực tiếp, nội dung (SCORM, Video, File, Văn bản), bài tập, thảo luận, thi cử | `LMS Context` |
| 2 | **AI Attendance** | Điểm danh tự động bằng nhận diện khuôn mặt & hình dáng qua camera AI | `Attendance Context` |

> ⭐ Đây là 2 subdomain tạo **giá trị độc đáo** cho sản phẩm — đầu tư phát triển in-house, không mua ngoài.

---

## 🔷 Supporting Domain (Hỗ trợ nghiệp vụ — quan trọng nhưng không phải lợi thế cạnh tranh)

| # | Subdomain | Mô tả ngắn | Bounded Context |
|---|-----------|------------|-----------------|
| 3 | **School Administration** | Quản lý lớp học, học sinh, giáo viên, năm học (tích hợp từ Sở GD&ĐT qua LGSP) | `School Context` |
| 4 | **Assessment & Examination** | Ngân hàng câu hỏi, đề thi, tổ chức thi kiểm tra trực tuyến, chấm điểm | `Exam Context` |
| 5 | **Digital Library** | Quản lý tài liệu số, tra cứu, mượn/trả, cấu hình hệ thống thư viện | `Library Context` |
| 6 | **Analytics & Reporting** | Báo cáo thống kê học tập, điểm danh, phân tích dữ liệu camera, báo cáo cho BGH | `Analytics Context` |
| 7 | **AI Image Analysis** | Nền tảng xử lý hình ảnh: embedding khuôn mặt/hình dáng, so khớp vector, quản lý model AI | `AI Platform Context` |

---

## ⚙️ Generic Domain (Nghiệp vụ chung — có thể dùng giải pháp thị trường)

| # | Subdomain | Mô tả ngắn | Bounded Context |
|---|-----------|------------|-----------------|
| 8 | **Identity & Access (IAM)** | Đăng nhập SSO với HUE-S, quản lý tài khoản, phân quyền theo vai trò (QTHT, GV, HS, CBQL) | `IAM Context` |
| 9 | **Notification** | Gửi thông báo email, push notification, nhắc lịch học/thi | `Notification Context` |
| 10 | **Integration / Data Sync** | Kết nối LGSP/NGSP, đồng bộ danh mục dùng chung, liên thông HUE-S | `Integration Context` |

---

## 🗺️ Sơ đồ tổng quan Subdomain Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CORE DOMAIN                                  │
│                                                                     │
│   ┌──────────────────────┐     ┌──────────────────────────────┐     │
│   │  Learning Management │     │      AI Attendance           │     │
│   │  (LMS Context)       │     │      (Attendance Context)    │     │
│   └──────────────────────┘     └──────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      SUPPORTING DOMAIN                              │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  ┌──────────┐  │
│  │ School Admin │  │  Assessment  │  │  Digital   │  │Analytics │  │
│  │   Context    │  │  & Exam      │  │  Library   │  │& Report  │  │
│  └──────────────┘  └──────────────┘  └────────────┘  └──────────┘  │
│                                                                     │
│              ┌────────────────────────┐                             │
│              │   AI Platform Context  │                             │
│              └────────────────────────┘                             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       GENERIC DOMAIN                                │
│                                                                     │
│  ┌──────────────────┐  ┌─────────────────┐  ┌──────────────────┐   │
│  │ IAM Context      │  │  Notification   │  │  Integration     │   │
│  │ (SSO / HUE-S)    │  │  Context        │  │  Context (LGSP)  │   │
│  └──────────────────┘  └─────────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 Ghi chú chiến lược cho BA/Architect

| Điểm | Khuyến nghị |
|------|-------------|
| **Core Domain** phải build in-house | LMS + AI Attendance là lợi thế độc quyền, không outsource |
| **Generic Domain** nên mua/tái sử dụng | IAM (Keycloak/HUE-S SSO), Notification (Firebase/SendGrid) |
| **Integration Context** tách biệt hoàn toàn | Chỉ giao tiếp qua Anti-Corruption Layer (ACL) với LGSP/NGSP để tránh domain core bị ô nhiễm logic bên ngoài |
| **AI Platform** là Supporting, không phải Core | Vì đây là infra AI phục vụ Attendance, không trực tiếp sinh value cho người dùng cuối |
| **Exam Context** tách khỏi LMS | Ngân hàng câu hỏi & tổ chức thi có vòng đời và ownership khác biệt với quản lý nội dung học |
