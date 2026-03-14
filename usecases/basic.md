# Basic Flow — Đăng ký Lớp học
> **Core Domain:** Learning Management
> **Tác nhân:** Học sinh (HV)
> **Mức độ:** Chức năng cơ bản — User Goal

---

## 1. Thông tin tổng quan

| Trường | Giá trị |
|--------|---------|
| **Tên chức năng** | Đăng ký lớp học |
| **Actor chính** | Học sinh (HV) |
| **Tiền điều kiện** | Học sinh đã đăng nhập thành công; Hệ thống có danh sách lớp đang mở đăng ký |
| **Hậu điều kiện** | Học sinh được ghi nhận tham gia lớp học; có thể truy cập nội dung lớp |
| **Độ ưu tiên** | Cao — là điểm vào của toàn bộ hành trình học tập |

---

## 2. Basic Flow (Luồng chính)

```
[HV] Truy cập menu "Lớp học"
        │
        ▼
[SYS] Hiển thị danh sách lớp đang mở đăng ký
        │
        ▼
[HV] Xem thông tin giới thiệu lớp học
        │
        ▼
[HV] Nhấn "Đăng ký"
        │
        ▼
[SYS] Kiểm tra điều kiện đăng ký
        │
        ├──[PASS]──► Lưu thông tin đăng ký vào CSDL
        │                   │
        │                   ▼
        │            [SYS] Hiển thị thông báo "Đăng ký thành công"
        │                   │
        │                   ▼
        │            [HV] Được chuyển vào trang nội dung lớp học
        │
        └──[FAIL]──► [SYS] Hiển thị thông báo lỗi (đã đăng ký / hết chỗ / không đủ điều kiện)
                            │
                            ▼
                     [HV] Quay lại danh sách lớp
```

### 2.1 Luồng ngoại lệ

| Tình huống | Xử lý |
|-----------|-------|
| Học sinh đã đăng ký lớp này trước đó | Hiển thị thông báo "Bạn đã đăng ký lớp này" — nút đổi thành "Vào học" |
| Lớp hết chỗ (đã đủ sĩ số) | Hiển thị thông báo "Lớp đã đầy" — gợi ý lớp tương tự |
| Phiên đăng nhập hết hạn | Chuyển về màn hình đăng nhập, giữ lại URL redirect |

---

## 3. Màn hình & Wireframe

---

### Màn hình 1 — Danh sách lớp học có thể đăng ký

**Mục đích:** Học sinh khám phá và tìm lớp muốn tham gia.

```
┌─────────────────────────────────────────────────────────────────────┐
│  🏫 Quốc Học Huế           [🔔] [👤 Nguyễn Văn A ▾]               │
├─────────────────────────────────────────────────────────────────────┤
│  Trang chủ  >  Lớp học                                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📚 Danh sách lớp học                                               │
│                                                                     │
│  ┌─ Tìm kiếm & Lọc ───────────────────────────────────────────┐    │
│  │  🔍 [Nhập tên lớp, môn học, giáo viên...        ]          │    │
│  │  Năm học: [2024-2025 ▾]   Môn: [Tất cả ▾]   [Tìm kiếm]   │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌──────────────────────────────────┐  ┌──────────────────────────┐ │
│  │ 📖 Toán Nâng cao 12A             │  │ 📖 Vật Lý Lý thuyết 12B │ │
│  │ GV: Nguyễn Thị B                 │  │ GV: Trần Văn C          │ │
│  │ 📅 01/09 – 31/12/2025            │  │ 📅 01/09 – 31/12/2025   │ │
│  │ 👥 28/35 học sinh                │  │ 👥 15/35 học sinh       │ │
│  │ ⭐ Trực tuyến + Trực tiếp        │  │ ⭐ Trực tuyến            │ │
│  │              [Xem chi tiết]      │  │         [Xem chi tiết]  │ │
│  └──────────────────────────────────┘  └──────────────────────────┘ │
│                                                                     │
│  ┌──────────────────────────────────┐  ┌──────────────────────────┐ │
│  │ 📖 Hóa học Hữu cơ 12C           │  │ 📖 Lịch sử Việt Nam 12A │ │
│  │ GV: Lê Thị D                     │  │ GV: Phạm Văn E          │ │
│  │ 📅 15/09 – 31/12/2025            │  │ 📅 01/09 – 31/12/2025   │ │
│  │ 👥 32/35 học sinh                │  │ 👥 20/35 học sinh       │ │
│  │ ⭐ Trực tiếp                     │  │ ⭐ Trực tuyến            │ │
│  │              [Xem chi tiết]      │  │         [Xem chi tiết]  │ │
│  └──────────────────────────────────┘  └──────────────────────────┘ │
│                                                                     │
│  Hiển thị 1–4 / 12 lớp      [< 1  2  3 >]                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Ghi chú thiết kế:**
- Card lớp học hiển thị đủ thông tin ra quyết định: GV, thời gian, sĩ số còn trống, hình thức học
- Thanh tìm kiếm nằm đầu trang, lọc theo năm học + môn
- Phân trang ở dưới, mặc định 12 lớp/trang

---

### Màn hình 2 — Chi tiết lớp học & Xác nhận đăng ký

**Mục đích:** Học sinh xem đầy đủ thông tin trước khi quyết định đăng ký.

```
┌─────────────────────────────────────────────────────────────────────┐
│  🏫 Quốc Học Huế           [🔔] [👤 Nguyễn Văn A ▾]               │
├─────────────────────────────────────────────────────────────────────┤
│  Trang chủ  >  Lớp học  >  Toán Nâng cao 12A                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌── Thông tin lớp học ──────────────────────────────────────────┐  │
│  │                                                               │  │
│  │  📖 TOÁN NÂNG CAO 12A                       [Đang mở ĐK 🟢]  │  │
│  │  ─────────────────────────────────────────────────────────   │  │
│  │  👩‍🏫 Giáo viên    : Nguyễn Thị B                               │  │
│  │  📅 Thời gian     : 01/09/2025 – 31/12/2025                  │  │
│  │  🕐 Lịch học      : Thứ 3, Thứ 5 — 07:00-08:30              │  │
│  │  🏛️  Hình thức    : Trực tuyến + Trực tiếp (Phòng A201)      │  │
│  │  👥 Sĩ số         : 28 / 35  (còn 7 chỗ)                    │  │
│  │                                                               │  │
│  │  📝 Mô tả                                                     │  │
│  │  Lớp tập trung ôn luyện chuyên sâu Toán 12 theo chương       │  │
│  │  trình mới, chuẩn bị cho kỳ thi THPT Quốc gia. Nội dung      │  │
│  │  bao gồm: Giải tích, Hình học không gian, Xác suất thống kê.  │  │
│  │                                                               │  │
│  │  📦 Nội dung học                                              │  │
│  │  ✅ 24 bài giảng video    ✅ 8 bộ đề luyện tập                │  │
│  │  ✅ Tài liệu PDF          ✅ 3 bài kiểm tra định kỳ           │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌── Xác nhận đăng ký ───────────────────────────────────────────┐  │
│  │                                                               │  │
│  │  Bạn đang đăng ký lớp:  Toán Nâng cao 12A                    │  │
│  │  Học sinh:               Nguyễn Văn A — Lớp 12A1             │  │
│  │                                                               │  │
│  │         [  Hủy  ]             [  ✅ Xác nhận Đăng ký  ]      │  │
│  │                                                               │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

**Ghi chú thiết kế:**
- Badge trạng thái lớp (🟢 Đang mở ĐK / 🔴 Hết chỗ / ⚪ Chưa mở) — nổi bật góc trên phải
- Hiển thị số chỗ còn lại — tạo cảm giác urgency
- Box xác nhận tóm tắt lại thông tin trước khi submit — tránh đăng ký nhầm

---

### Màn hình 3 — Kết quả đăng ký thành công

**Mục đích:** Xác nhận đăng ký và dẫn học sinh vào lớp học ngay.

```
┌─────────────────────────────────────────────────────────────────────┐
│  🏫 Quốc Học Huế           [🔔 1] [👤 Nguyễn Văn A ▾]             │
├─────────────────────────────────────────────────────────────────────┤
│  Trang chủ  >  Lớp học  >  Toán Nâng cao 12A                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                                                                     │
│              ✅                                                     │
│         Đăng ký thành công!                                         │
│                                                                     │
│      Bạn đã tham gia lớp  Toán Nâng cao 12A                        │
│      Giáo viên: Nguyễn Thị B                                        │
│      Buổi học đầu tiên: Thứ 3, 02/09/2025 — 07:00                  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  📋 Tiếp theo bạn có thể:                                   │    │
│  │                                                             │    │
│  │  📖 [Vào học ngay]   — Xem nội dung & tài liệu lớp học     │    │
│  │  📅 [Xem lịch học]   — Thêm lịch học vào lịch cá nhân      │    │
│  │  🔍 [Đăng ký lớp khác] — Quay lại danh sách lớp            │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│  💡 Lớp của bạn (3)                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ Toán NC 12A  │  │ Vật Lý 12B   │  │ Hóa HC 12C   │             │
│  │  🟢 Mới ĐK  │  │  ▶ Đang học  │  │  ▶ Đang học  │             │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
```

**Ghi chú thiết kế:**
- Icon ✅ to, màu xanh — feedback rõ ràng ngay lập tức
- CTA chính: **"Vào học ngay"** — giữ momentum, không để học sinh thoát ra
- Section "Lớp của bạn" ở dưới — cross-navigation sang các lớp đã có
- Badge 🔔 tăng lên 1 — hệ thống đã gửi thông báo xác nhận

---

## 4. State Diagram — Trạng thái đăng ký

```
         ┌──────────┐
         │  Chưa    │
         │ đăng ký  │
         └────┬─────┘
              │ Nhấn "Đăng ký"
              ▼
         ┌──────────┐    Kiểm tra thất bại    ┌──────────────┐
         │  Đang    │ ──────────────────────► │  Lỗi đăng ký │
         │  xử lý  │                          │ (toast error) │
         └────┬─────┘                          └──────────────┘
              │ Kiểm tra thành công
              ▼
         ┌──────────┐
         │  Đã      │
         │ đăng ký  │ ──► Có thể truy cập nội dung lớp học
         └──────────┘
```

---

## 5. API Contract (sơ lược)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| `GET` | `/api/courses?status=open&yearId={id}` | Lấy danh sách lớp đang mở đăng ký |
| `GET` | `/api/courses/{courseId}` | Lấy chi tiết một lớp học |
| `POST` | `/api/enrollments` | Đăng ký vào lớp học |
| `GET` | `/api/enrollments/me` | Lấy danh sách lớp học sinh đã đăng ký |

**Request body — POST `/api/enrollments`:**
```json
{
  "courseId": "uuid",
  "studentId": "uuid"
}
```

**Response thành công:**
```json
{
  "enrollmentId": "uuid",
  "courseId": "uuid",
  "courseName": "Toán Nâng cao 12A",
  "enrolledAt": "2025-09-01T07:00:00Z",
  "status": "active"
}
```
