---
title: "1. Tổng quan giải pháp đề xuất xây dựng phần mềm"
section: "1"
---

# Tổng quan giải pháp đề xuất xây dựng phần mềm

## Mục tiêu và yêu cầu của phần mềm

### Mục tiêu của phần mềm

Mục tiêu chính của phần mềm là xây dựng Hệ thống quản lý trường học thông minh phục vụ cho Trường THPT Quốc Học Huế, bao gồm quản lý dữ liệu học sinh, giáo viên, lớp học, điểm danh, thư viện, và kết nối đồng bộ với hệ thống quản lý của Sở Giáo dục & Đào tạo Thừa Thiên Huế (HUE-S). Cụ thể:

- Tin học hóa và số hóa toàn bộ hoạt động quản lý nhà trường, từ quản lý học sinh, giảng dạy, điểm danh, học bổng, rèn luyện, đến thư viện và camera giám sát.

- Kết nối, chia sẻ dữ liệu với hệ thống quản lý tập trung của Sở GD&ĐT qua trục LGSP/NGSP theo kiến trúc Chính phủ điện tử.

- Tích hợp công nghệ AI, IoT và camera thông minh để giám sát, điểm danh tự động và phân tích dữ liệu học sinh -- giáo viên.

- Cung cấp công cụ điều hành -- báo cáo -- phân tích dữ liệu phục vụ Ban Giám hiệu và CBQL ra quyết định nhanh, chính xác.

- Tạo trải nghiệm học tập -- làm việc thông minh, an toàn cho học sinh, giáo viên và cán bộ trong môi trường số.

### Yêu cầu về kỹ thuật và công nghệ

- Kiến trúc phần mềm: Microservices.

- Back-end: .NET Core.

- Front-end: Angular.

- Cơ sở dữ liệu: SQL Server

- Mobile app: Native App hoặc Cross Platform/Hybrid App.

- Tích hợp -- liên thông: Qua trục LGSP/NGSP, hỗ trợ giao thức HTTP, gRPC, AMQP (Pub/Sub), RPC (Request/Response).

- Dữ liệu và bảo mật:

<!-- -->

- Tuân thủ các quy định tại Thông tư 03/2013/TT-BTTTT, Thông tư 12/2022/TT-BTTTT và các tiêu chuẩn về an toàn thông tin cấp độ.

- Dữ liệu tuân thủ định dạng XML/JSON, có cơ chế lưu phiên bản dữ liệu để phục vụ tra cứu, khôi phục, đối chiếu.

### Yêu cầu về quy chuẩn, tiêu chuẩn áp dụng về ứng dụng CNTT

- Thông tư số 03/2013/TT-BTTTT ngày 22/1/2013 của Bộ Thông tin và Truyền thông quy định áp dụng tiêu chuẩn, quy chuẩn kỹ thuật đối với trung tâm dữ liệu;

- Văn bản số 1276/BTTTT-UDCNTT ngày 06/5/2013 của Bộ Thông tin và Truyền thông về hướng dẫn các yêu cầu phi chức năng chung cho các hệ thống thông tin cung cấp dịch vụ công trực tuyến được mô tả tại mục yêu cầu phi chức năng;

- Văn bản 3788/BTTTT-THH ngày 26/12/2014 của Bộ Thông tin và Truyền thông về việc hướng dẫn liên thông, trao đổi dữ liệu có cấu trúc bằng ngôn ngữ XML giữa các hệ thống thông tin trong cơ quan nhà nước;

- Thông tư 06/2015/TT-BTTTT ngày 23/02/2015 của Bộ trưởng Bộ Thông tin và Truyền thông Quy định Danh mục tiêu chuẩn bắt buộc áp dụng về chữ ký số và dịch vụ chứng thực chữ ký số;

- Thông tư số 39/2017/TT-BTTTT ngày 15/12/2017 của Bộ Thông tin và Truyền thông ban hành danh mục tiêu chuẩn kỹ thuật về ứng dụng công nghệ thông tin trong cơ quan nhà nước;

- Thông tư 23/2022/TT-BTTT của Bộ Thông tin và Truyền thông về việc sửa đổi thông tư 03/2013/TT-BTTTT quy định áp dụng tiêu chuẩn, quy chuẩn kỹ thuật đối với trung tâm dữ liệu do Bộ trưởng Bộ Thông tin và Truyền thông ban hành

- Thông tư 12/2022/TT-BTTTT của Bộ Thông tin và Truyền thông hướng dẫn Nghị định 85/2016/NĐ-CP về bảo đảm an toàn hệ thống thông tin theo cấp độ do Bộ trưởng Bộ Thông tin và Truyền thông ban hành

- Quyết định số 1016/QĐ-UBND ngày 14/05/2018 của UBND tỉnh Thừa Thiên Huế về việc ban hành Quy định về đầu tư, quản lý và phối hợp vận hành hệ thống camera phục vụ phát triển dịch vụ đô thị thông minh;

- Quyết định số 4138/QĐ-BGDĐT ngày 01/12/2020 của Bộ Giáo dục và Đào tạo về việc ban hành Khung kiến trúc chính phủ điện tử Bộ Giáo dục và Đào tạo;

- Quyết định 2568/QĐ-BTTTT ngày 29/12/2023 của Bộ Thông tin và truyền thông về Khung Kiến trúc Chính phủ điện tử Việt Nam, phiên bản 3.0, hướng tới Chính phủ số.

### Yêu cầu về quy chuẩn, tiêu chuẩn của dữ liệu và kết nối trao đổi dữ liệu

- Dữ liệu danh mục điện tử dùng chung: Thống nhất sử dụng danh mục điện tử dùng chung do trục NGSP hoặc LGSP cung cấp. Đối với các danh mục khác, hệ thống quản lý danh mục và sẵn sàng cơ chế ánh xạ đồng bộ dữ liệu danh mục này khi trục LGSP sẵn sàng.

- Dữ liệu thông tin cán bộ: Tuân thủ theo các quy định về dữ liệu và biểu mẫu tại Quyết định 06/2007/QĐ-BNV, Quyết định 02/2008/QĐ-BNV và Thông tư 07/2019/TT-BNV của Bộ Nội vụ, Quyết định 4223/QĐ-BNV ngày 30/11/2016 của Bộ trưởng Bộ Nội vụ.

- Dữ liệu thông tin giáo viên, học sinh: Tuân thủ theo các quy định hiện hành của Bộ Thông tin và Truyền thông, Bộ Giáo dục và Đào tạo, và các quy định có liên quan khác.

- Đối với một số dữ liệu quan trọng, cần có cơ chế lưu giữ thông tin phiên bản của dữ liệu để phục vụ tra cứu, khôi phục, đối sánh dữ liệu trong các trường hợp cần thiết. Kết nối trao đổi dữ liệu giữa các ứng dụng nội bộ: Tuỳ theo tính chất, các dịch vụ, ứng dụng nội bộ sẽ tích hợp với nhau thông qua các giao thức phù hợp:

<!-- -->

- Giao tiếp trực tiếp với nhau: Đây là phương án dành cho các dịch vụ, ứng dụng đã biết chính xác địa chỉ API cần truy cập, tính chất giao dịch là cần tuần tự, đồng bộ, hoặc cần tối ưu tốc độ thực thi. Các dịch vụ lõi, và các ứng dụng nội bộ có thể sử dụng phương án này qua các giao thức như Http hay gRPC;

- Giao tiếp thông qua trục tích hợp với việc gửi thông điệp bằng giao thức AMQP, theo kiểu Pub-Sub, chuẩn dữ liệu JSON. Phương pháp này dành cho các dịch vụ, ứng dụng không biết chính xác đối tượng nhận thông điệp sẽ là đối tượng nào, và cách thức thực hiện giao dịch là không đồng bộ. Các dịch vụ về thông báo nhắc việc, điều phối và quản lý quy trình có thể sử dụng phương án này;

- Giao tiếp thông qua trục tích hợp với việc gửi thông điệp bằng RPC, theo kiểu request-response, chuẩn dữ liệu JSON. Phương pháp này khắc phục được nhược điểm của RPC là không làm tăng sự phụ thuộc giữa đối tượng gọi và đối tượng thực thi lời gọi nhưng vẫn giữ được tính chất giao dịch động bộ của nó. Cách thức này có thể sử dụng cho các dịch vụ, ứng dụng cần những giao dịch đồng bộ như đồng bộ các CSDL phân tán, đồng bộ danh mục dùng chung giữa các dịch vụ.

- Ngoài ra, thông qua trục tích hợp và các nguyên tắc hoạt động chung, các ứng dụng có thể giao tiếp với nhau một cách dễ dàng thông qua các sự kiện được quy định sẵn và giao thức Pub-Sub. Kết nối trao đổi dữ liệu đối với các hệ thống ngoài

- Đối với các hệ thống trong Bộ, phương án kết nối là thông qua trục tích hợp LGSP của Bộ hoặc tạm thời kết nối trực tiếp nếu trục kết nối của Bộ chưa sẵn sàng hoặc chưa hỗ trợ đầy đủ;

- Đối với các hệ thống của Bộ Ngành, địa phương, phương án kết nối là thông qua trục tích hợp NGSP và trục LGSP của Bộ. Trong trường hợp trục tích hợp chưa sẵn sàng hoặc chưa hỗ trợ đầy đủ, có thể tạm thời thực hiện kết nối trực tiếp đến các hệ thống này.

- Đối với các hệ thống của Bộ Ngành, địa phương, phương án kết nối là thông qua trục tích hợp NGSP và trục LGSP của Bộ. Trong trường hợp trục tích hợp chưa sẵn sàng hoặc chưa hỗ trợ đầy đủ, có thể tạm thời thực hiện kết nối trực tiếp đến các hệ thống này.

<!-- -->

- Các yêu cầu phi chức năng khác tuân theo yêu cầu cần đáp ứng tại mục I.3.3 trong Chương V. Yêu cầu về kỹ thuật

