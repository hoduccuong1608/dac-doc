# Yêu cầu xuất kho

Cho phép Dịch vụ kỹ thuật tạo Yêu cầu xuất kho theo Đơn hàngđã tạo
Các đơn hàng sau khi được tạo có thể tạo yêu cầu xuất kho tương ứng

## 1. Xem danh sách yêu cầu xuất kho

Danh sách yêu cầu xuất kho là tất cả các yêu cầu xuất kho do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách yêu cầu xuất kho như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào “Yêu cầu xuất kho”
  - Hệ thống hiển thị danh sách đơn hàng đã tạo với các trạng thái
    - Mới: Yêu cầu xuất kho mới được tạo ra
    - Đang xử lý: Yêu cầu xuất kho đã được xác nhận và tạo phiếu xuất kho trên hệ thống Inventory
    - Đã xuất: YCXK đã xuất xong
    - Đã hủy: YCXK đã hủy

![img1.png](/img/export_request/img1.png)

- Bước 2: Người dùng có thể tìm kiếm và bấm vào mã yêu cầu xuất kho để xem chi tiết yêu cầu xuất kho

## 2. Tạo mới yêu cầu xuất kho

Người dùng có thể tạo mới yêu cầu xuất kho bằng 2 cách: nhập tay hoặc import file excel thông tin yêu cầu xuất kho

- Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào “Yêu cầu xuất kho”

**Cách 1: Import thông tin đơn hàng bằng file excel**

- Bước 1: Tại màn hình danh sách Yêu cầu xuất kho, bấm nút “NHẬP EXCEL”
  ![img2.png](/img/export_request/img2.png)
- Bước 2: Tải lên file import, bấm vào nút TẢI FILE để tải lên file excel yêu cầu xuất kho cần nhập. Nếu cần lấy file mẫu bạn cũng có thể tải tại màn hình này
  ![img3.png](/img/export_request/img3.png)
- Bước 3: Bấm nút ĐỒNG Ý để hệ thống thực hiện lưu thông tin file import

  - Lưu ý các Đơn hàng ở file import là các mã đơn hàng đã có trên hệ thống và có số lượng thiết bị xuất còn lại theo đúng đơn hàng

  ![img4.png](/img/export_request/img4.png)

- Bước 4: Kiểm tra lại yêu cầu xuất kho vừa tạo tại màn hình Danh sách yêu cầu xuất kho. Yêu cầu xuất kho tạo ra có trạng thái Mới, bấm vào mã đơn hàng để xem chi tiết yêu cầu xuất kho
  Cách 1: Nhập bằng tay thông tin YCXK
- Bước 1: Tại màn hình danh sách Yêu cầu xuất kho, bấm nút “TẠO MỚI”
  ![img5.png](/img/export_request/img5.png)
- Bước 2: Hiển thị màn hình tạo mới, nhập thông tin yêu cầu xuất kho
  ![img6.png](/img/export_request/img6.png)
- - Các thông tin có dấu “\*” là các thông tin bắt buộc nhập
  - Lưu ý: mã đơn hàng hợp lệ là mã đơn hàng đã có trên hệ thống có trạng thái Mới hoặc Đang xử lý
  - Khi chọn mã đơn hàng: các thông tin liên quan sẽ được tự động fill: Khách hàng, Dự án, Hợp đồng
  - Khu vực của yêu cầu xuất kho sẽ ăn theo các khu vực thuộc đơn hàng
  - Thông tin giao hàng: bấm nút “Thêm khu vực” để thêm khu vực giao hàng
  - Một Yêu cầu xuất kho có thể bao gồm nhiều mã MAN và nhiều khu vực
- Bước 3: Sau khi nhập xong thông tin yêu cầu xuất kho, bấm nút “LƯU” để hệ thống lưu lại yêu cầu xuất kho

## 3. Chi tiết yêu cầu xuất kho

- Từ màn hình danh sách yêu cầu xuất kho, người dùng chọn 1 mã yêu cầu xuất kho để xem thông tin chi tiết
  ![img7.png](/img/export_request/img7.png)

## 4. Sửa yêu cầu xuất kho

Người dùng có quyền sửa yêu cầu xuất kho ở trạng thái Mới và Đang xử lý  
Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > “Yêu cầu xuất kho” > Bấm chọn YCXK cần sửa
- Bước 2: Tại màn hình chi tiết đơn hàng, bấm nút “SỬA”
  ![img8.png](/img/export_request/img8.png)
- Bước 3: Nhập thông tin cần chỉnh sửa, sau đó bấm “LƯU” để hoàn tất chỉnh sửa
  ![img9.png](/img/export_request/img9.png)
  **_Thao tác với thông tin giao hàng trong YCXK_**
- Sửa thông tin giao hàng (Đối với giao dịch trạng thái Mới/ Đang xử lý)
  ![img10.png](/img/export_request/img10.png)
  ![img11.png](/img/export_request/img11.png)
- Xóa thông tin giao hàng (Đối với những giao dịch ở trạng thái mới)
  ![img12.png](/img/export_request/img12.png)
- Hủy thông tin giao hàng (Đối với những giao dịch trạng thái Đang xử lý)
  ![img13.png](/img/export_request/img13.png)

## 4. Xác nhận yêu cầu xuất kho

Người dùng thực hiện xác nhận yêu cầu xuất kho để tạo phiếu xuất kho tương ứng sang hệ thống Inventory

Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào “Yêu cầu xuất kho” >chọn Mã yêu cầu xuất kho cần xác nhận

  Hệ thống di chuyển đến màn hình chi tiết yêu cầu xuất kho

- Bước 2: tích chọn vào khu vực giao hàng cần xác nhận (có thể tích chọn tất cả khu vực bằng cách bấm nào nút chọn tất cả). Sau đó bấm nút “XÁC NHẬN”
  ![img14.png](/img/export_request/img14.png)
- Bước 3: xác nhận tạo phiếu xuất
  - Hệ thống hiển thị popup xác nhận “Xác nhận tạo phiếu xuất?”
  - Nhấn nút “ĐỒNG Ý” nếu để xác nhận đơn hàng, đồng thời tạo mới phiếu xuất trên hệ thống Inventory.
    ![img15.png](/img/export_request/img15.png)
- Bước 4: Kiểm tra thông tin phiếu xuất tạo ra trên hệ thống Inventory sau khi xác nhận tại màn hình chi tiết đơn hàng thông tin trường Số phiếu xuất, Số lượng đã xuất.
  ![img16.png](/img/export_request/img16.png)

## 6. Hủy yêu cầu xuất kho

Người dùng có thể hủy yêu cầu xuất kho ở trạng thái Mới và Đang xử lý sau khi hủy YCXK sẽ chuyển sang trạng thái Đã hủy

Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào Yêu cầu xuất kho >chọn Mã yêu cầu xuất kho muốn huỷ

Hệ thống di chuyển đến màn hình chi tiết đơn hàng, bấm nút “HỦY YÊU CẦU XUẤT KHO”
![img17.png](/img/export_request/img17.png)

- Bước 2: Xác nhận hủy YCXK
  - Hệ thống hiển thị popup xác nhận “Xác nhận hủy yêu cầu xuất kho?”
  - Nhấn nút “Đồng ý” nếu muốn xác nhận yêu cầu xuất kho, nhấn “Hủy” nếu không muốn thực hiện

![img18.png](/img/export_request/img18.png)
Pop up xác nhận huỷ yêu cầu xuất kho ở trạng thái “Đang xử lý”
![img19.png](/img/export_request/img19.png)
Yêu cầu xuất kho sau khi hủy có trạng thái “Đã hủy”
![img20.png](/img/export_request/img20.png)

## 7. Xem lịch sử thay đổi Yêu cầu xuất kho

- Bước 1: Đăng nhập vào hệ thống
- Bước 2: Truy cập vào mục “Đặt hàng” > Yêu cầu xuất kho. Hệ thống hiển thị màn hình danh sách yêu cầu xuất kho
- Bước 3: Kích chọn xem chi tiết 1 YCXK, tại màn hình chi tiết kích “Lịch sử thay đổi để truy cập màn hình Lịch sử thay đổi YCXK
  ![img21.png](/img/export_request/img21.png)
  ![img22.png](/img/export_request/img22.png)

## 8. Xóa yêu cầu xuất ko

Cho phép xóa yêu cầu xuất kho ở trạng thái Mới hoặc trạng thái Đã hủy chưa có phiếu xuất kho trên hệ thống Inventory. Các bước xóa yêu cầu xuất kho như sau:

- Bước 1: Đăng nhập vào hệ thống
- Bước 2: Truy cập vào mục “Đặt hàng” > Yêu cầu xuất kho
  Hệ thống hiển thị màn hình danh sách yêu cầu xuất kho
- Bước 3: Kích chọn một hoặc nhiều yêu cầu xuất kho muốn xóa > nhấn nút “Xóa”
  ![img23.png](/img/export_request/img23.png)
- Bước 4: Xác nhận xóa + Hệ thống hiển thị popup xác nhận “Bạn có chắc chắn muốn xóa không?” + Nhấn nút “Xóa” nếu muốn xóa tài khoản khách hàng đã chọn, nhấn “Hủy Bỏ” nếu không muốn thực hiện
  ![img24.png](/img/export_request/img24.png)
