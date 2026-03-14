# Test Cases — Đăng ký Lớp học
> **Chức năng:** Đăng ký lớp học
> **Core Domain:** Learning Management
> **Tham chiếu:** `usecases/basic.md`
> **Người soạn:** BA
> **Ngày:** 2026-03-14

---

## Tổng quan

| Mục | Giá trị |
|-----|---------|
| **Tổng số test case** | 22 |
| **Happy path** | 5 |
| **Negative / Exception** | 11 |
| **UI / Display** | 6 |
| **Màn hình liên quan** | MH1 — Danh sách lớp · MH2 — Chi tiết & Xác nhận · MH3 — Kết quả |
| **API liên quan** | `GET /api/courses` · `GET /api/courses/{id}` · `POST /api/enrollments` |

---

## Nhóm 1 — Happy Path (Luồng chính thành công)

### TC-01 — Đăng ký lớp học thành công (luồng đầy đủ)

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-01 |
| **Tiêu đề** | Học sinh đăng ký lớp học còn chỗ thành công |
| **Mức độ** | Critical |
| **Tiền điều kiện** | Học sinh đã đăng nhập; Lớp "Toán Nâng cao 12A" đang mở ĐK, còn chỗ trống; Học sinh chưa đăng ký lớp này |

**Các bước thực hiện:**

| # | Bước | Dữ liệu |
|---|------|---------|
| 1 | Truy cập menu **Lớp học** | — |
| 2 | Hệ thống hiển thị danh sách lớp đang mở đăng ký | — |
| 3 | Nhấn **Xem chi tiết** vào lớp "Toán Nâng cao 12A" | courseId: `uuid-toan-12a` |
| 4 | Hệ thống hiển thị trang chi tiết lớp học | — |
| 5 | Nhấn **Xác nhận Đăng ký** | — |
| 6 | Hệ thống xử lý và trả kết quả | — |

**Kết quả mong đợi:**
- Màn hình 3 hiển thị: icon ✅, tiêu đề "Đăng ký thành công!"
- Hiển thị đúng tên lớp, GV, ngày buổi học đầu tiên
- Badge 🔔 trên header tăng lên 1
- Section "Lớp của bạn" xuất hiện lớp "Toán NC 12A" với badge 🟢 Mới ĐK
- API `POST /api/enrollments` trả về HTTP 201, body có `status: "active"`
- Số sĩ số trong DB tăng từ 28 → 29

---

### TC-02 — Danh sách lớp hiển thị đúng sau khi đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-02 |
| **Tiêu đề** | Lớp vừa đăng ký xuất hiện trong "Lớp của bạn" |
| **Mức độ** | High |
| **Tiền điều kiện** | TC-01 đã thực hiện thành công |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Nhấn **Vào học ngay** trên màn hình kết quả |
| 2 | Quan sát trang nội dung lớp học |

**Kết quả mong đợi:**
- Chuyển sang trang nội dung lớp học "Toán Nâng cao 12A"
- Học sinh có thể xem danh sách nội dung lớp học
- Không hiển thị nút "Đăng ký" nữa (đã đăng ký rồi)

---

### TC-03 — Tìm kiếm lớp theo từ khóa trước khi đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-03 |
| **Tiêu đề** | Tìm kiếm lớp theo từ khóa tên lớp |
| **Mức độ** | High |
| **Tiền điều kiện** | Học sinh đã đăng nhập; đang ở màn hình Danh sách lớp (MH1) |

**Các bước thực hiện:**

| # | Bước | Dữ liệu |
|---|------|---------|
| 1 | Nhập từ khóa vào ô tìm kiếm | `"Toán"` |
| 2 | Nhấn **Tìm kiếm** | — |

**Kết quả mong đợi:**
- Danh sách chỉ hiển thị các lớp có tên chứa "Toán"
- Số lượng kết quả và phân trang cập nhật đúng
- API `GET /api/courses?status=open&keyword=Toán` được gọi

---

### TC-04 — Lọc lớp theo năm học

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-04 |
| **Tiêu đề** | Lọc danh sách lớp theo năm học 2024-2025 |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Học sinh đã đăng nhập; đang ở MH1 |

**Các bước thực hiện:**

| # | Bước | Dữ liệu |
|---|------|---------|
| 1 | Mở dropdown **Năm học** | — |
| 2 | Chọn **2024-2025** | yearId: `2024-2025` |
| 3 | Nhấn **Tìm kiếm** | — |

**Kết quả mong đợi:**
- Chỉ hiển thị các lớp thuộc năm học 2024-2025
- Dropdown hiển thị đúng giá trị đã chọn

---

### TC-05 — Nhấn "Hủy" trên màn hình xác nhận

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-05 |
| **Tiêu đề** | Nhấn Hủy trên màn hình xác nhận — không thực hiện đăng ký |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Học sinh đang ở MH2 (Chi tiết lớp) |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Nhấn **Hủy** trong box xác nhận đăng ký |

**Kết quả mong đợi:**
- Không gọi API `POST /api/enrollments`
- Quay lại MH1 (Danh sách lớp) hoặc ở lại MH2 tùy UX
- Số sĩ số lớp không thay đổi

---

## Nhóm 2 — Negative / Exception (Luồng ngoại lệ)

### TC-06 — Đăng ký lớp đã đăng ký trước đó

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-06 |
| **Tiêu đề** | Học sinh cố đăng ký lại lớp đã tham gia |
| **Mức độ** | High |
| **Tiền điều kiện** | Học sinh đã đăng ký lớp "Toán Nâng cao 12A" từ trước |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Truy cập trang chi tiết lớp "Toán Nâng cao 12A" |
| 2 | Quan sát UI và nút hành động |

**Kết quả mong đợi:**
- Nút **Xác nhận Đăng ký** KHÔNG hiển thị
- Thay vào đó hiển thị nút **Vào học**
- Không có khả năng gọi API `POST /api/enrollments` lần 2
- Nếu gọi thẳng API: trả về HTTP 409 Conflict, message "Học sinh đã đăng ký lớp này"

---

### TC-07 — Đăng ký lớp đã hết chỗ

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-07 |
| **Tiêu đề** | Học sinh đăng ký lớp đã đầy sĩ số (35/35) |
| **Mức độ** | High |
| **Tiền điều kiện** | Lớp học đang ở trạng thái 35/35 học sinh |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Truy cập trang chi tiết lớp đã đầy |
| 2 | Quan sát badge trạng thái và nút hành động |

**Kết quả mong đợi:**
- Badge hiển thị 🔴 **Hết chỗ**
- Nút đăng ký bị disabled hoặc ẩn
- Hiển thị gợi ý "Lớp tương tự" bên dưới
- Nếu gọi thẳng API: trả về HTTP 422, message "Lớp đã đạt sĩ số tối đa"

---

### TC-08 — Race condition: 2 học sinh cùng đăng ký chỗ cuối cùng

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-08 |
| **Tiêu đề** | Chỉ 1 trong 2 học sinh đăng ký thành công khi tranh chỗ cuối |
| **Mức độ** | High |
| **Tiền điều kiện** | Lớp còn đúng 1 chỗ (34/35) |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | HV-A và HV-B cùng nhấn Đăng ký đồng thời |
| 2 | Quan sát kết quả của cả 2 |

**Kết quả mong đợi:**
- Đúng 1 học sinh đăng ký thành công (HTTP 201)
- Học sinh còn lại nhận thông báo lỗi "Lớp đã đầy" (HTTP 422)
- DB không vượt quá 35 bản ghi enrollment cho lớp đó (transaction lock)

---

### TC-09 — Phiên đăng nhập hết hạn khi nhấn Đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-09 |
| **Tiêu đề** | Token hết hạn trong khi học sinh đang ở MH2 |
| **Mức độ** | High |
| **Tiền điều kiện** | Học sinh đang ở MH2, token JWT đã expired |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Nhấn **Xác nhận Đăng ký** |
| 2 | API trả về HTTP 401 |

**Kết quả mong đợi:**
- Hệ thống redirect về trang đăng nhập
- URL redirect giữ lại path hiện tại: `/login?redirect=/courses/uuid-toan-12a`
- Sau khi đăng nhập lại, học sinh quay về đúng trang chi tiết lớp

---

### TC-10 — Lỗi mạng khi gọi API đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-10 |
| **Tiêu đề** | Mất kết nối mạng trong khi submit đăng ký |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Học sinh đang ở MH2, mạng bị ngắt kết nối |

**Các bước thực hiện:**

| # | Bước |
|---|------|
| 1 | Nhấn **Xác nhận Đăng ký** |
| 2 | API call timeout / network error |

**Kết quả mong đợi:**
- Hiển thị toast lỗi: "Có lỗi kết nối. Vui lòng thử lại."
- Nút đăng ký trở lại trạng thái active (không bị disabled mãi)
- Học sinh KHÔNG bị đăng ký 2 lần nếu nhấn lại (idempotent)

---

### TC-11 — Lỗi server (HTTP 500) khi đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-11 |
| **Tiêu đề** | API trả về lỗi 500 Internal Server Error |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Server gặp lỗi nội bộ |

**Kết quả mong đợi:**
- Hiển thị thông báo thân thiện: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau."
- KHÔNG hiển thị stack trace hay thông tin kỹ thuật ra ngoài
- Ghi log lỗi phía server

---

### TC-12 — Lớp học chưa mở đăng ký

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-12 |
| **Tiêu đề** | Học sinh truy cập lớp có trạng thái "Chưa mở" |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Lớp tồn tại nhưng chưa đến ngày mở đăng ký |

**Kết quả mong đợi:**
- Badge hiển thị ⚪ **Chưa mở**
- Nút đăng ký disabled, tooltip hiển thị ngày mở dự kiến
- Gọi trực tiếp API POST: HTTP 422, message "Lớp chưa mở đăng ký"

---

### TC-13 — Học sinh không có quyền đăng ký lớp

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-13 |
| **Tiêu đề** | Tài khoản không có role HV — không được phép đăng ký |
| **Mức độ** | High |
| **Tiền điều kiện** | Đăng nhập bằng tài khoản Giáo viên (GV) hoặc CBQL |

**Kết quả mong đợi:**
- Nút đăng ký không hiển thị (hoặc disabled)
- Gọi API POST: HTTP 403 Forbidden
- Không có lộ trình nào bypass qua UI để đăng ký

---

### TC-14 — Tìm kiếm không có kết quả

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-14 |
| **Tiêu đề** | Từ khóa tìm kiếm không khớp với lớp học nào |
| **Mức độ** | Low |
| **Tiền điều kiện** | Đang ở MH1 |

**Các bước thực hiện:**

| # | Bước | Dữ liệu |
|---|------|---------|
| 1 | Nhập từ khóa không tồn tại | `"xyz_khong_co_lop_nay_123"` |
| 2 | Nhấn Tìm kiếm | — |

**Kết quả mong đợi:**
- Hiển thị trạng thái empty state: "Không tìm thấy lớp học phù hợp"
- Có gợi ý "Xóa bộ lọc" để reset về danh sách gốc
- Không hiển thị lỗi kỹ thuật

---

### TC-15 — Học sinh truy cập URL chi tiết lớp không tồn tại

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-15 |
| **Tiêu đề** | Truy cập `/courses/uuid-khong-ton-tai` |
| **Mức độ** | Medium |

**Kết quả mong đợi:**
- API `GET /api/courses/{id}` trả về HTTP 404
- Hiển thị trang lỗi thân thiện: "Không tìm thấy lớp học này"
- Có nút quay lại danh sách lớp

---

### TC-16 — Nhấn Đăng ký nhiều lần liên tiếp (double-click)

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-16 |
| **Tiêu đề** | Double-click nút Xác nhận Đăng ký |
| **Mức độ** | Medium |

**Kết quả mong đợi:**
- Chỉ gọi API `POST /api/enrollments` đúng 1 lần
- Nút bị disable ngay sau lần nhấn đầu tiên (loading state)
- DB không tạo duplicate enrollment

---

## Nhóm 3 — UI / Display (Giao diện)

### TC-17 — Màn hình 1: Hiển thị đầy đủ thông tin card lớp học

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-17 |
| **Tiêu đề** | Card lớp học hiển thị đủ các trường thông tin |
| **Mức độ** | Medium |

**Kết quả mong đợi:**
Mỗi card lớp học hiển thị đủ:
- [ ] Tên lớp học
- [ ] Tên giáo viên
- [ ] Thời gian bắt đầu – kết thúc
- [ ] Sĩ số (đã đăng ký / tổng)
- [ ] Hình thức học (Trực tuyến / Trực tiếp / Kết hợp)
- [ ] Nút **Xem chi tiết**

---

### TC-18 — Màn hình 1: Phân trang hoạt động đúng

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-18 |
| **Tiêu đề** | Phân trang hiển thị đúng số trang và điều hướng đúng |
| **Mức độ** | Medium |
| **Tiền điều kiện** | Hệ thống có 13 lớp đang mở đăng ký |

**Kết quả mong đợi:**
- Trang 1 hiển thị 12 lớp, trang 2 hiển thị 1 lớp
- Nút `<` disable ở trang 1; nút `>` disable ở trang cuối
- Label "Hiển thị 1–12 / 13 lớp" đúng

---

### TC-19 — Màn hình 2: Badge trạng thái đúng màu theo từng trạng thái

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-19 |
| **Tiêu đề** | Badge trạng thái lớp hiển thị đúng màu và nhãn |
| **Mức độ** | Medium |

| Trạng thái lớp | Badge mong đợi |
|----------------|---------------|
| Đang mở đăng ký | 🟢 Đang mở ĐK |
| Hết chỗ | 🔴 Hết chỗ |
| Chưa mở | ⚪ Chưa mở |
| Đã đóng đăng ký | 🔴 Đã đóng |

---

### TC-20 — Màn hình 3: Thông tin xác nhận hiển thị đúng

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-20 |
| **Tiêu đề** | Màn hình kết quả hiển thị đúng thông tin lớp vừa đăng ký |
| **Mức độ** | Medium |

**Kết quả mong đợi:**
- [ ] Tên lớp khớp với lớp vừa đăng ký
- [ ] Tên giáo viên đúng
- [ ] Ngày buổi học đầu tiên đúng (lấy từ lịch học lớp)
- [ ] 3 CTA hiển thị: "Vào học ngay", "Xem lịch học", "Đăng ký lớp khác"
- [ ] Section "Lớp của bạn" bao gồm lớp mới đăng ký

---

### TC-21 — Responsive: Màn hình mobile (375px)

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-21 |
| **Tiêu đề** | Giao diện hiển thị đúng trên thiết bị di động |
| **Mức độ** | Medium |

**Kết quả mong đợi:**
- MH1: Card lớp học chuyển sang 1 cột (thay vì 2 cột)
- MH2: Thông tin và box xác nhận hiển thị full width
- MH3: CTA buttons hiển thị dạng stack dọc
- Không bị overflow ngang

---

### TC-22 — Loading state khi đang gọi API

| Trường | Nội dung |
|--------|----------|
| **ID** | TC-22 |
| **Tiêu đề** | Hiển thị trạng thái loading trong khi chờ API phản hồi |
| **Mức độ** | Low |

**Kết quả mong đợi:**
- MH1 khi load: Skeleton cards hiển thị thay cho nội dung thực
- MH2 khi nhấn Đăng ký: Nút đổi sang trạng thái loading (spinner), text đổi thành "Đang xử lý..."
- Không cho phép nhấn nút khác trong khi đang xử lý

---

## Bảng tổng hợp

| ID | Tiêu đề | Nhóm | Mức độ | Màn hình |
|----|---------|-------|--------|----------|
| TC-01 | Đăng ký thành công luồng đầy đủ | Happy Path | Critical | MH1→MH2→MH3 |
| TC-02 | Lớp xuất hiện trong "Lớp của bạn" sau đăng ký | Happy Path | High | MH3 |
| TC-03 | Tìm kiếm lớp theo từ khóa | Happy Path | High | MH1 |
| TC-04 | Lọc lớp theo năm học | Happy Path | Medium | MH1 |
| TC-05 | Nhấn Hủy — không đăng ký | Happy Path | Medium | MH2 |
| TC-06 | Đăng ký lại lớp đã tham gia | Negative | High | MH2 |
| TC-07 | Đăng ký lớp đã hết chỗ | Negative | High | MH2 |
| TC-08 | Race condition chỗ cuối cùng | Negative | High | API |
| TC-09 | Token hết hạn khi nhấn đăng ký | Negative | High | MH2 |
| TC-10 | Lỗi mạng khi submit | Negative | Medium | MH2 |
| TC-11 | Server trả về 500 | Negative | Medium | MH2 |
| TC-12 | Lớp chưa mở đăng ký | Negative | Medium | MH2 |
| TC-13 | Tài khoản không có quyền | Negative | High | MH2 |
| TC-14 | Tìm kiếm không có kết quả | Negative | Low | MH1 |
| TC-15 | URL lớp không tồn tại | Negative | Medium | MH2 |
| TC-16 | Double-click nút đăng ký | Negative | Medium | MH2 |
| TC-17 | Card hiển thị đủ thông tin | UI/Display | Medium | MH1 |
| TC-18 | Phân trang đúng | UI/Display | Medium | MH1 |
| TC-19 | Badge trạng thái đúng màu | UI/Display | Medium | MH2 |
| TC-20 | Màn hình kết quả đúng thông tin | UI/Display | Medium | MH3 |
| TC-21 | Responsive mobile | UI/Display | Medium | MH1-3 |
| TC-22 | Loading state đúng | UI/Display | Low | MH1-3 |
