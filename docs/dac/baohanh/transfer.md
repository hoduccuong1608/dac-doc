# Yêu cầu chuyển DVKT
Sau khi tiếp nhận thiết bị, đơn vị tiếp nhận khai báo thông tin lô, ticket tương ứng trên hệ thống. Dựa vào thông tin ticket, hệ thống xác nhận những thiết bị được phép bảo hành (không tích chọn từ chối bảo hành hoặc ở trạng thái cảnh báo), những thiết bị đó được chuyển đến đơn vị DVKT để chờ nhập kho bảo hành.
Mục này cho phép đơn vị tiếp nhận tạo yêu cầu chuyển DVKT từ lô nhận đã khai báo hoặc từ danh sách serial
Hiện tại có 2 đơn vị tiếp nhận bảo hành từ khách hàng là TASC và VHHT.

## 1. Xem danh sách Yêu cầu chuyển DVKT
Danh sách Yêu cầu chuyển DVKT hiển thị tất cả các yêu cầu tạo trên hệ thống, các bước truy cập màn danh sách yêu cầu chuyển như sau:

- Bước 1: Đăng nhập vào hệ thống, truy cập phân hệ Quản lý bảo hành. Truy cập Nhập/ Xuất kho bảo hành > Yêu cầu chuyển. Hệ thống hiển thị danh sách yêu cầu chuyển có trên hệ thống
![img19.png](/img/transfer/yc1.png)

- Bước 2: Người dùng có thể tìm kiếm theo các trường thông tin tại danh sách 
![img19.png](/img/transfer/yc2.png)


## 2. Thêm mới yêu cầu chuyển DVKT

- Bước 1: Tại màn hình danh sách yêu cầu chuyển, bấm nút "Tạo mới".
![img19.png](/img/transfer/yc3.png)

- Bước 2: Hệ thống hiển thị màn hình thêm mới yêu cầu chuyển DVKT. Nhập thông tin khai báo, phần có hiển thị dấu "*" là trường bắt buộc.
Có 2 cách khai báo thông tin sản phẩm cho yêu cầu chuyển DVKT. Lưu ý: Nếu đã chọn lô nhận trên giao diện thì không được phép thao tác chọn file nữa, và ngược lại, nếu đã chọn file thì không chọn được giá trị trên combobox tại giao diện
  - Cách 1: Chọn lô nhận trực tiếp tại combobox trên giao diện
![img19.png](/img/transfer/yc4.png)

  - Cách 2: Import file danh sách lô hoặc danh sách thiết bị.
  Click "tại đây" để tại mẫu file import
![img19.png](/img/transfer/yc5.png)
Lưu ý: File mẫu gồm 2 sheet thông tin- Sheet 1: Serial, Sheet 2: Mã lô. Hệ thống ưu tiên đọc sheet mã lô (nghĩa là nếu có thông tin ở cả 2 sheet, sẽ lấy dữ liệu trong sheet mã lô)
Sau khi tải file mẫu và điền thông tin vào file, click "Chọn file" để tải file lên hệ thống
![img19.png](/img/transfer/yc0.png)

Sau khi chọn mã lô/ import file, thông tin sản phẩm sẽ được ghi xuống bảng danh sách

- Bước 3: Sau khi nhập đầy đủ các thông tin, nhấn “Lưu” để tạo yêu cầu chuyển. Hệ thống thông báo tạo mới yêu cầu chuyển thành công, chuyển đến màn chi tiết của yêu cầu vừa tạo
![img19.png](/img/transfer/yc6.png)

## 3. Xem chi tiết yêu cầu chuyển

- Bước 1: Tại màn hình danh sách yêu cầu chuyển, bấm vào số phiếu yêu cầu muốn xem chi tiết
![img19.png](/img/transfer/yc7.png)

- Bước 2: Hệ thống hiển thị màn hình chi tiết yêu cầu chuyển
![img19.png](/img/transfer/yc8.png)

Tại màn hình chi tiết, click "Xuất file excel" để xuất phiếu dưới dạng excel
![img19.png](/img/transfer/yc9.png)

## 4. Chỉnh sửa thông tin yêu cầu chuyển 

- Bước 1: Tại màn hình danh sách yêu cầu chuyển, bấm vào số phiếu yêu cầu muốn chỉnh sửa
![img19.png](/img/transfer/yc7.png)

- Bước 2: Tại màn hình chi tiết yêu cầu click button "Sửa"
![img19.png](/img/transfer/yc10.png)

- Bước 3: Tại màn hình chỉnh sửa yêu cầu, cập nhật thông tin, sau đó click button "Lưu". Hệ thống thông báo chỉnh sửa thành công, trở về màn hình chi tiết yêu cầu vừa cập nhật
![img19.png](/img/transfer/yc11.png)

## 5. Xóa yêu cầu chuyển

- Bước 1: Tại màn hình danh sách yêu cầu chuyển, tích chọn checkbox trước yêu cầu chuyển muốn xóa

- Bước 2: Bấm button "Xóa"

- Bước 3: Bấm "Xóa" tại popup để xác nhận xóa, hệ thống thông báo xóa thành công, trở về màn hình danh sách
![img19.png](/img/transfer/yc12.png)