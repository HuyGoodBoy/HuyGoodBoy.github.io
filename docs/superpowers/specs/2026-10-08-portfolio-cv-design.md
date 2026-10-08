# Cập nhật portfolio theo CV — giữ giao diện hiện tại

## Phạm vi đã chọn

Giữ giao diện portfolio hiện tại: phần mở đầu có rừng, trăng và sao; nền xanh đen; điểm nhấn hồng; các phần nội dung nền sáng. Cập nhật nội dung tiếng Anh theo `buigiahuy.pdf`, ưu tiên thông tin nghề nghiệp và khả năng đọc trên điện thoại.

## Cấu trúc và triển khai

- `index.html`, `style.css`, `script.js` tiếp tục nằm ở root repository. Không chuyển trang chính vào `src/` hay `dist/`.
- Giữ `CNAME` là `profile.huygoodboy.io.vn` và workflow `.github/workflows/static.yml` triển khai từ root trên nhánh `master`.
- Tiếp tục dùng các component React hiện có, không thêm framework hay bước build bắt buộc.
- Đồng bộ các bản HTML/CSS/JS trong `dist/` và mã nguồn tương ứng trong `src/` để tránh nội dung cũ khi chỉnh sửa sau này. Trang được deploy vẫn lấy từ root.
- CV gốc nằm tại root; nút Download CV dùng đường dẫn tương đối `./buigiahuy.pdf`.

## Nội dung

1. **Home:** tên Bùi Gia Huy; AI Engineer; trọng tâm LLMs, RAG và Edge-Cloud AI; các nút xem dự án, tải CV và liên hệ.
2. **About:** giới thiệu ngắn dựa trên CV; Hanoi, Vietnam; tập trung AI ứng dụng, mô hình biên, trợ lý giọng nói và hệ thống truy xuất.
3. **Experience:** trình bày từ mới đến cũ: Vinfast (Jul–Oct 2026), TD Consulting (Jul–Dec 2025), VKX Company (Jan–Jun 2025), Giong AI (Oct–Dec 2024). Giữ chức danh và nhiệm vụ theo CV; không suy diễn việc làm hiện tại hoặc số năm kinh nghiệm.
4. **Projects:** thay danh sách cũ bằng bốn dự án trong CV: UWB Contactless Respiration Monitoring System; Hybrid Edge-Cloud In-Cabin Voice Assistant & Intent Prediction System; RAG & Tool-Calling Test Case Generation System; Legal RAG Chatbot. Hiển thị vai trò và đóng góp; mô tả kết quả TCN nhỏ hơn khoảng 79% so với LSTM baseline đúng phạm vi CV. Không tự tạo URL repository hoặc demo cho dự án thiếu liên kết trong CV.
5. **Skills:** chia AI, Development và Tools, dùng đúng danh sách CV; không dùng thanh phần trăm kỹ năng.
6. **Education & Achievements:** FPT University, BSc Artificial Intelligence, 2022–2026; Second Prize tại FPTxNRC AI Hackathon 2025; Vingroup Applied AI Talent Program; Excellent Student Summer 2025. Thêm Vietnamese — Native, English — Intermediate.
7. **Contact:** email `giahuy31639801@gmail.com`, điện thoại `0985643876`, GitHub và LinkedIn từ CV. Thay form có `action="#"` bằng các liên kết `mailto:` và `tel:` sử dụng được trên website tĩnh. Giữ các liên kết mạng xã hội cá nhân hiện có nếu còn phù hợp; ưu tiên GitHub và LinkedIn.

## Giao diện và tương tác

- Thêm các mục mới bằng bố cục và màu sắc hiện có, với khoảng cách và độ rộng đọc phù hợp.
- Menu có liên kết đến các mục mới, sử dụng nút thật với trạng thái `aria-expanded`; đóng khi chọn mục hoặc nhấn Escape, hỗ trợ bàn phím.
- Thêm viewport metadata, mô tả trang và nhãn truy cập cho các liên kết biểu tượng.
- Sửa thao tác cuộn để không làm phần mở đầu mất nội dung; hỗ trợ `prefers-reduced-motion`.
- Hiển thị thông tin dự án đầy đủ bằng văn bản; hình minh họa không được trình bày như ảnh chụp sản phẩm nếu không có ảnh thật.
- Không thêm backend, biểu mẫu gửi giả, hoặc số liệu thành tích ngoài CV.

## Kiểm tra nghiệm thu

- Kiểm tra JavaScript và chạy trang qua HTTP cục bộ.
- Kiểm tra hiển thị desktop và mobile: không tràn ngang, chữ không bị cắt, menu và các mục đọc được.
- Kiểm tra menu, Escape, liên kết nội trang, email, điện thoại, GitHub, LinkedIn và tải CV.
- Kiểm tra nội dung bốn công việc, bốn dự án, kỹ năng, học vấn và thành tích khớp CV.
- Kiểm tra root `index.html`, các tài nguyên tương đối và CV trả về thành công; `CNAME` và đường dẫn upload artifact của workflow được giữ nguyên.
- Báo rõ trạng thái sửa cục bộ và trạng thái deploy; không báo website đã cập nhật nếu chưa push và deploy.

## Chỉnh giao diện theo phản hồi tiếp theo của người dùng

Người dùng yêu cầu hỏi Astra và chỉnh giao diện đẹp hơn sau khi bản cập nhật nội dung đã được triển khai. Phần này cập nhật định hướng hiển thị ở trên; dữ liệu CV và cấu trúc GitHub Pages vẫn được giữ.

- Thay stylesheet cũ bằng một hệ thống thống nhất: Inter sans, container 1120px, nền navy `#111923`, điểm nhấn hồng `#f477be`, nội dung nền sáng.
- Giữ rừng, trăng và bầu trời đêm ở mức nhẹ; bỏ nhân vật màu vàng, ảnh nền tác giả cũ, các mép cắt chéo và hiệu ứng cuộn trang trí.
- Hero căn trái có tiêu đề rõ ràng, nút xem dự án/tải CV và sơ đồ nhỏ minh họa đúng kiến trúc Edge-Cloud trong CV.
- Navigation dạng liên kết trên desktop và menu truy cập bằng bàn phím trên mobile. Thống nhất nhãn Projects.
- Dự án thành thẻ hai cột, một cột trên điện thoại; biểu tượng nhỏ, mô tả đọc được và nhấn mạnh kết quả 79% đúng phạm vi CV.
- Kinh nghiệm là các hàng timeline gọn; kỹ năng, học vấn và thành tích theo cùng quy tắc typography, đường viền và khoảng cách.
- Contact và footer đi theo luồng trang thông thường. SVG rừng đặt ở `assets/forest.svg`, các trang root/dist đều tham chiếu đúng.
- Astra đã đánh giá hai lượt, gồm ảnh desktop và mobile; sửa dính từ trong tiêu đề sơ đồ mobile, tăng kích thước chữ và vùng bấm.
