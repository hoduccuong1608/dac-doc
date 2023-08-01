# Hợp đồng
Kinh doanh tạo các Hợp đồng dựa trên hợp đồng đã ký vật lý. Thông tin về hợp đồng trên hệ thống DAC chỉ dừng ở mức quản lý
## 1. Xem danh sách Hợp đồng
Danh sách hợp đồng là tất cả các hợp đồng do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách hợp đồng như sau
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > chọn Hợp đồng
Hệ thống hiển thị danh sách hợp đồng đã tạo
![SO_list.png](/img/order_contract/SO_list.png) 
- Bước 2: Người dùng có thể tìm kiếm các trong danh sách 
![SO_list_01](/img/order_contract/SO_list_01.png)
## 2. Tạo mới hợp đồng
Người dùng có thể tạo mới yêu cầu xuất kho bằng 2 cách: nhập tay hoặc import file excel thông tin hợp đồng.  
Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > vào “Hợp đồng”.  
**Cách 1: Import thông tin hợp đồng bằng file excel**  
- Bước 1: Tại màn hình danh sách hợp đồng, bấm nút “NHẬP EXCEL”
![SO_import](/img/order_contract/SO_import.png) 
- Bước 2: Tải lên file import, bấm vào nút TẢI FILE để tải lên file excel hợp đồng cần nhập. Nếu cần lấy file mẫu bạn cũng có thể tải tại màn hình này
![SO_popup_import.png](/img/order_contract/SO_popup_import.png) 
- Bước 3: Bấm nút ĐỒNG Ý để hệ thống thực hiện lưu thông tin file import
![SO_import_acc.png](/img/order_contract/SO_popup_import.png) 
- Bước 4: Kiểm tra lại hợp đồng vừa tạo tại màn hình Danh sách hợp đồng. Hợp đồng tạo ra có trạng thái Mới, hiển thị trên đầu danh sách, bấm vào mã hợp đồng để xem chi tiết hợp đồng  

**Cách 2: Nhập tay hợp đồng**  
Người dùng tạo Hợp đồng qua các bước như sau: 
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > chọn Hợp đồng > Chọn nút “Tạo mới”. Hệ thống hiển thị popup chọn Loại hợp đồng: Hợp đồng khung/ Hợp đồng bán lẻ/ Hợp đồng tập trung
![SO_create](/img/order_contract/SO_create.png)
- Bước 2: Click chọn loại hợp đồng muốn tạo, truy cập màn hình tạo mới
- Bước 3: Nhập các thông tin cho hợp đồng, phần có hiển thị dấu * là thông tin bắt buộc nhập
     - Tạo hợp đồng khung
     ![SO_khung](/img/order_contract/SO_khung.png)
     - Tạo mới hợp đồng tập trung
     ![SO_taptrung](/img/order_contract/SO_taptrung.png)
     - Tạo mới hợp đồng bán lẻ
     ![SO_banle](/img/order_contract/SO_banle.png)
     Một số trường thông tin cần lưu ý: 
     Thông tin Loại thiết bị, Tên thương mại sẽ hiển thị danh sách các giá trị tương ứng với Dòng thiết bị đã chọn.    
     Khách hàng được chọn sẽ nằm trong danh sách khách hàng đã khai báo trên hệ thống.    
     Thông tin người tiếp nhận là không bắt buộc, nếu nhập, người tiếp nhận sẽ nhận được email thông báo khi hợp đồng tạo mới thành công.  
- Bước 3: Sau khi nhập đầy đủ các thông tin, nhấn “Lưu” để tạo hợp đồng. Tạo mới hợp đồng thành công, chuyển đến màn hình chi tiết hợp đồng
## 3. Chi tiết Hợp đồng
- Bước 1: Đăng nhập vào hệ thống, truy cập danh sách hợp đồng
- Bước 2: Click vào Số hợp đồng tại bản ghi muốn xem chi tiết
![SO_detail](/img/order_contract/SO_detail.png)
## 4. Chỉnh sửa hợp đồng
- Bước 1: Đăng nhập vào hệ thống, truy cập màn hình danh sách Hợp đồng, bấm chọn số hợp đồng cần sửa 
- Bước 2: Tại màn hình chi tiết hợp đồng, bấm nút “Sửa”
![SO_edit](/img/order_contract/SO_edit.png)  
Lưu ý: Thông tin được phép sửa phụ thuộc vào loại hợp đồng và trạng thái, cụ thể:

| Trạng thái hợp đồng | Loại              | Thông tin được phép sửa                                      |
| ------------------- | ----------------- | ------------------------------------------------------------ |
| Mới                 | Khung             | Cho phép sửa tất cả các thông tin như khi tạo mới            |
|                     | Tập trung/ Bán lẻ | Cho phép sửa tất cả các thông tin như khi tạo mới            |
| Mới đã có đơn hàng  | Khung             | Thông tin hợp đồng: Cho phép sửa toàn bộ thông tin như khi tạo mới<br />Thông tin sản phẩm trong hợp đồng: Cho phép sửa thời gian bảo hành |
|                     | Tập trung/ Bán lẻ | Thông tin hợp đồng: Cho phép sửa toàn bộ thông tin như khi tạo mới<br />Thông tin sản phẩm trong hợp đồng: <br />\+ Không cho phép sửa thông tin Dòng/ Loại/ Mã thương mại/ Mã Man<br />\+ Số lượng- cho phép sửa lớn hơn hoặc bằng tổng số lượng thuộc đơn hàng, <br />\+ Thời gian bảo hành: Cho phép sửa theo quy tắc như khi tạo mới<br />\+ Không cho phép xóa những dòng đã khai báo<br/> \- Cho phép thêm mới dòng thiết bị |
| Đang xử lý          | Khung             | Thông tin hợp đồng: Cho phép sửa toàn bộ thông tin như khi tạo mới<br />Thông tin sản phẩm trong hợp đồng: Cho phép sửa thời gian bảo hành |
|                     | Tập trung/ Bán lẻ | Thông tin hợp đồng: Cho phép sửa toàn bộ thông tin như khi tạo mới<br />Thông tin sản phẩm trong hợp đồng: <br />Đối với những sản phẩm đã khai báo<br />\+ Không cho phép sửa thông tin Dòng/ Loại/ Mã thương mại/ Mã Man và thời hạn bảo hành<br />\+ Số lượng- cho phép sửa lớn hơn hoặc bằng tổng số lượng thuộc đơn hàng, <br />\+ Không cho phép xóa những dòng đã khai báo<br /> \- Cho phép thêm mới dòng thiết bị |

- Bước 3: Sau khi cập nhật thông tin, nhấn nút “Lưu” để lưu lại các thông tin vừa sửa
## 5. Thanh lý hợp đồng
Người dùng chỉ có thể thanh lý các hợp đồng thỏa mãn các điều kiện: Hợp đồng ở trạng thái “Đang xử lý” và các YCXK thuộc hợp đồng đều ở trạng thái “Đã xuất” đồng thời số lượng xuất < Số lượng đặt hàng trong hợp đồng.  
Các bước thực hiện như sau:
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Hợp đồng” > Chọn mã hợp đồng thỏa mãn điều kiện. Tại màn hình chi tiết chọn "Thanh lý"
![SO_thanhly](/img/order_contract/SO_thanhly.png) 
- Bước 2: Xác nhận thanh lý Hợp đồng  
Hệ thống hiển thị popup xác nhận “Bạn muốn chắc chắn thanh lý hợp đồng?”  
Nhấn nút “Đồng Ý” nếu muốn xác nhận thanh lý hợp đồng, nhấn “Hủy” nếu không muốn thực hiện 
![SO_thanhly1](/img/order_contract/SO_thanhly1.png)  
Hệ thống thông báo thanh lý thành công, quay trở về màn hình chi tiết, hợp đồng chuyển trạng thái thành Thanh lý
![SO_thanhly2](/img/order_contract/SO_thanhly2.png) 
## 6. Hoàn thành hợp đồng
Người dùng chỉ có thể thanh lý các hợp đồng thỏa mãn các điều kiện: Hợp đồng ở trạng thái “Đang xử lý” và các YCXK thuộc hợp đồng đều ở trạng thái “Đã xuất” đồng thời số lượng xuất = Số lượng đặt hàng trong hợp đồng
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Hợp đồng” > Chọn mã hợp đồng thỏa mãn điều kiện. Tại màn hình chi tiết chọn "Hoàn thành" 
- Bước 2: Xác nhận Hoàn thành Hợp đồng  
Hệ thống hiển thị popup xác nhận “Bạn muốn chắc chắn hoàn tất hợp đồng?”  
Nhấn nút “Đồng Ý” nếu muốn xác nhận hoàn tất hợp đồng, nhấn “Hủy” nếu không muốn thực hiện 
- Bước 3: Hệ thống thông báo hoàn tất thành công, quay trở về màn hình chi tiết, hợp đồng chuyển trạng thái Hoàn thành
## 7. Xóa hợp đồng
Chỉ cho phép xóa hợp đồng ở trạng thái mới và chưa có phiếu xuất kho đẩy sang Inventory
Các bước xóa hợp đồng như sau:
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Đặt hàng” > click "Hợp đồng", truy cập màn hình danh sách hợp đồng
- Bước 2: Kích chọn một hoặc nhiều hợp đồng muốn xóa > nhấn nút “Xóa”   




