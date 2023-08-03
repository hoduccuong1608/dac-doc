# Đơn hàng

Cho phép ban Kinh doanh tạo Đơn hàng theo hợp đồng đã tạo
Các đơn hàng sau khi được tạo có thể tạo yêu cầu xuất kho tương ứng

## 1. Xem danh sách đơn hàng

Danh sách đơn hàng là tất cả các đơn hàng do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách đơn hàng như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào Đơn hàng
  - Hệ thống hiển thị danh sách đơn hàng đã tạo với các trạng thái
    - Mới: Đơn hàng mới được tạo ra
    - Đang xử lý: Ít nhất 1 yêu cầu xuất kho thuộc đơn hàng đã được chuyển sang kho
    - Đang giao hàng: Ít nhất 1 yêu cầu xuất kho của đơn hàng đã xuất
    - Hoàn thành: Số lượng thiết bị (yêu cầu) trong đơn hàng được nhập kho viễn thông tỉnh
    - Thanh lý: Đơn hàng ở trạng thái “Đang giao hàng” và các YCXK thuộc đơn hàng đều ở trạng thái “Đã xuất”- tài khoản có quyền thực hiện thanh lý Đơn hàng hoặc những đơn hàng chuyển thanh lý do thuộc Hợp đồng đã thanh lý
    - Đã hủy: Đơn hàng bị hủy
- Bước 2: Người dùng có thể tìm kiếm và bấm vào mã đơn hàng để xem chi tiết đơn hàng

## 2. Tạo mới đơn hàng

Người dùng có thể tạo mới yêu cầu xuất kho bằng 2 cách: nhập tay hoặc import file excel thông tin đơn hàng

- Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào “Đơn hàng”
  ![img1.png](/img/order/img1.png)
  **Cách 1: Import thông tin đơn hàng bằng file excel**
- Bước 1: Tại màn hình danh sách đơn hàng, bấm nút “NHẬP EXCEL”
  ![img2.png](/img/order/img2.png)
- Bước 2: Tải lên file import, bấm vào nút TẢI FILE để tải lên file excel đơn hàng cần nhập. Nếu cần lấy file mẫu bạn cũng có thể tải tại màn hình này
  ![img3.png](/img/order/img3.png)
- Bước 3: Bấm nút ĐỒNG Ý để hệ thống thực hiện lưu thông tin file import + Lưu ý các thông tin Hợp đồng của Đơn hàng ở file import là các mã hợp đồng đã được khai báo trên hệ thống
  ![img4.png](/img/order/img4.png)
- Bước 4: Kiểm tra lại đơn hàng vừa tạo tại màn hình Danh sách đơn hàng. Đơn hàng tạo ra có trạng thái Mới, bấm vào mã đơn hàng để xem chi tiết đơn hàng

**Cách 2: Nhập bằng tay thông tin đơn hàng**

- Bước 1: Tại màn hình danh sách đơn hàng, bấm nút “TẠO MỚI”
  ![img5.png](/img/order/img5.png)
- Bước 2: Hiển thị màn hình tạo mới, nhập thông tin đơn hàng
  - Các thông tin có dấu “\*” là các thông tin bắt buộc nhập
  - Lưu ý: mã đơn hàng không được phép trùng
  - Thông tin giao hàng: bấm nút “Thêm khu vực” để thêm khu vực giao hàng
  - Một đơn hàng thể bao gồm nhiều mã MAN và nhiều khu vực
- Bước 3: Sau khi nhập xong thông tin đơn hàng, bấm nút “LƯU” để hệ thống lưu lại đơn hàng
  ![img6.png](/img/order/img6.png)

## 3. Chi tiết đơn hàng

- Từ màn hình danh sách đơn hàng, người dùng chọn 1 mã đơn hàng bất kỳ để xem thông tin chi tiết
  ![img7.png](/img/order/img7.png)

## 4. Sửa đơn hàng

Người dùng chỉ được phép sửa đơn hàng ở trạng thái Mới/ Đang xử lý/ Đang giao hàng
Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào Đơn hàng > bấm chọn mã đơn hàng cần sửa
- Bước 2: Tại màn hình chi tiết đơn hàng, bấm nút “Sửa”
  ![img8.png](/img/order/img8.png)
- Bước 3: Cập nhật các thông tin muốn sửa
  Lưu ý các thông tin không được phép sửa phụ thuộc vào trạng thái đơn hàng, cụ thể:

| Trạng thái đơn hàng         | Thông tin được phép sửa                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mới                         | Cho phép sửa tất cả các thông tin như khi tạo mới trừ thông tin hợp đồng                                                                                                                                                                                                                                                                                                                   |
| Đang xử lý / Đang giao hàng | Thông tin giao hàng:<br />- Đối với những khu vực đã khai báo:<br />+ Không cho phép sửa thông tin khu vực, Dòng thiết bị, Loại thiết bị, Tên thương mại, Mã MAN<br />+ Cho phép sửa số lượng lớn hơn hoặc bằng số lượng thuộc YCXK<br />+ Những thông tin khác cho phép sửa theo nguyên tắc như khi tạo mới đơn hàng<br />+ Không cho phép xóa<br />- Cho phép thêm mới thông tin khu vực |

- Bước 4: Nhấn “Lưu”, chuyển đến màn hình chi tiết đơn hàng đã duyệt với các thông tin đã được sửa

## 5. Hủy đơn hàng

Người dùng chỉ có thể hủy đơn hàng ở trạng thái Mới, sau khi hủy đơn hàng sẽ chuyển sang trạng thái Huỷ

Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > “Đơn hàng” > chọn 1 mã đơn hàng ở trạng thái Mới
- Hệ thống di chuyển đến màn hình chi tiết đơn hàng đã duyệt, bấm nút “Huỷ đơn hàng”
  ![img9.png](/img/order/img9.png)
- Bước 2: Xác nhận hủy đơn hàng
  - Hệ thống hiển thị popup xác nhận “Bạn muốn huỷ đơn hàng này?”
  - Nhấn nút “Đồng Ý” nếu muốn xác nhận huỷ yêu cầu đặt hàng, nhấn “Hủy” nếu không muốn thực hiện
    ![img10.png](/img/order/img10.png)
  - Đơn hàng sau khi hủy có trạng thái “Huỷ”
    ![img11.png](/img/order/img11.png)

## 6. Xóa đơn hàng

Chỉ cho phép xóa đơn hàng ở trạng thái mới và chưa có phiếu xuất kho đẩy sang Inventory
Các bước xóa hợp đồng như sau:

- Bước 1: Đăng nhập vào hệ thống
- Bước 2: Truy cập vào mục “Đặt hàng” > Đơn hàng
  - Hệ thống hiển thị màn hình danh sách hợp đồng
- Bước 3: Kích chọn một hoặc nhiều đơn hàng muốn xóa > nhấn nút “Xóa”
  ![img12.png](/img/order/img12.png)
- Bước 4: Xác nhận xóa
  - Hệ thống hiển thị popup xác nhận “Bạn có chắc chắn muốn xóa không?”
  - Nhấn nút “Xóa” nếu muốn xóa hợp đồng đã chọn, nhấn “Hủy Bỏ” nếu không muốn thực hiện

![img13.png](/img/order/img13.png)
Sau khi xoá thành công, các đơn hàng vừa chọn để xoá sẽ không còn hiển thị trên danh sách, các YCXK tương ứng của đơn hàng cũng đồng thời bị xóa
