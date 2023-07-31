# Hợp đồng
Kinh doanh tạo các Hợp đồng dựa trên hợp đồng đã ký vật lý
Thông tin về hợp đồng trên hệ thống DAC chỉ dừng ở mức quản lý
1. Xem danh sách
   Danh sách hợp đồng là tất cả các hợp đồng do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách hợp đồng như sau
-	Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > chọn Hợp đồng 
   - Hệ thống hiển thị danh sách hợp đồng đã tạo với các trạng thái
      - Mới: Khi mới tạo hợp đồng
      - Đang xử lý: Hợp đồng đang được xử lý. Ít nhất 1 đơn hàng trong hợp đồng đã xử lý (đơn hàng không còn ở trạng thái mới (có thể là đang xử lý, đang giao hàng hoặc hoàn thành))
      - Hoàn thành: Số lượng đặt hàng trong hợp đồng = Tổng số lượng đã xuất theo đơn hàng và người dùng chủ động xác nhận hoàn thành
     - Thanh lý: Với các hợp đồng ở trạng thái “Đang xử lý” và các YCXK thuộc hợp đồng đều ở trạng thái “Đã xuất” đồng thời số lượng xuất < Số lượng đặt hàng trong hợp đồng- tài khoản có quyền truy cập hệ thống và thực hiện thanh lý hợp đồng
+  Đối với tài khoản admin: xem danh sách yêu cầu đặt hàng của tất cả các khu vực
![list.png]("/img/contract/list.png")