# Thiết bị

Quản lý thông tin thiết bị theo từng serial

## 1. Xem danh sách thiết bị

Người dùng có thể xem danh sách thiết bị, danh sách thiết bị được cập nhật thêm mới khi hệ thống Inventory hoàn thành xuất kho theo đơn hàng đã tạo trên hệ thống DAC. Sau đó các thông tin thiết bị sẽ được tự động cập nhật từ hệ thống DHSXKD khi có API cập nhật.

- Bước 1: Đăng nhập vào hệ thống, truy cập "Thiết bị", chọn "Danh sách thiết bị", hệ thống hiển thị danh sách thiết bị theo quyền tương ứng của người sử dụng:
  ![dv_list](/img/device/dv_list.png)

- Ý nghĩa trạng thái thiết bị:

| Trạng thái    | Mô tả                                                                                        |
| ------------- | -------------------------------------------------------------------------------------------- |
| Xuất xưởng    | Khi thiết bị đã xuất theo đơn hàng (Trạng thái yêu cầu xuất kho có thiết bị = “Đã xuất”)     |
| Đã kích hoạt  | Thiết bị được kích hoạt và ghi nhận trên các hệ thống quản lý tương ứng (One Mesh, GNMS, ….) |
| Đang bảo hành | Thiết bị có ticket chưa close ở DMS                                                          |
| Hỏng          | Thiết bị được bên sửa chữa bảo hành báo hỏng                                                 |

- Ý nghĩa trạng thái thiết bị trên hệ thống

| Trạng thái | Mô tả                                                                                |
| ---------- | ------------------------------------------------------------------------------------ |
| Online     | Trạng thái thiết bị là online trên các hệ thống quản lý tương ứng (One Mesh, GNMS…)  |
| Offline    | Trạng thái thiết bị là offline trên các hệ thống quản lý tương ứng (One Mesh, GNMS…) |

## 2. Tìm kiếm thiết bị

**Cách 1: Tìm kiếm trực tiếp bằng bộ lọc trên giao diện web**  
Người dùng có thể tìm kiếm thiết bị theo các tiêu chí tìm kiếm như khu vực, mã khách hàng, gói cước,… tại màn hình danh sách thiết bị - khu vực tìm kiếm

- Tìm kiếm thiết bị theo:
  - Khu vực: tìm kiếm thiết bị theo khu vực
  - Mã khách hàng: tìm kiếm thiết bị theo mã khách hàng
  - Gói cước: gói cước của thiết bị
  - Hợp đồng: Hợp đồng tương ứng của thiết bị
  - Serial number: mã serial number của thiết bị
  - Ngày kích hoạt từ đến: lọc theo thời gian kích hoạt của thiết bị
  - Mã đơn hàng: Mã đơn hàng tương ứng của thiết bị
  - Trạng thái thiết bị
  - Trạng thái thiết bị trên hệ thống:
  - Danh sách
    - Có gói cước: chỉ hiển thị những thiết bị có gói cước
    - Có ngày kích hoạt: chỉ hiển thị những thiết bị có ngày kích hoạt
  - Dòng thiết bị: Dòng tương ứng của thiết bị
  - Loại thiết bị: Loại tương ứng của thiết bị
  - Mã thương mại: Mã thương mại tương ứng của thiết bị
  - Mã Man: Mã MAN tương ứng của thiết bị
  - Số phiếu xuất: Số phiếu xuất trên ERP
  - Số phiếu yêu cầu: Số phiếu yêu cầu trong đơn hàng
- Ví dụ: tìm kiếm thiết bị theo Khu vực và danh sách thiết bị có ngày kích hoạt
  - Nhập/chọn khu vực cần tìm kiếm và chọn Danh sách Có ngày kich hoạt rồi nhấn nút “Tìm kiếm”
- Hệ thống trả về danh sách thiết bị của khách hàng trong khu vực đã chọn
  ![dv_search](/img/device/dv_search.png)
  Cho phép xem thông tin thiết bị và lịch sử thiết bị

**Cách 2: Tìm kiếm theo danh sách serial mport**  
Người dùng có thể import danh sách serial dưới dạng file excel để tìm kiếm

- Bước 1: Đăng nhập vào hệ thống, truy cập màn hình Danh sách thiết bị
- Bước 2: Click icon nhập tại màn hình danh sách, hệ thống hiển thị popup "Nhập danh sách Serial Number để tìm kiếm", người dùng có thể tải file mẫu tại đây
  ![dv_import](/img/device/dv_import.png)
- Bước 3: Chọn file tải lên sau đó click "Đồng ý" tại popup để bắt đầu tìm kiếm
  ![dv_import_acc](/img/device/dv_import_acc.png)
  Hệ thống trả về kết quả tìm kiếm những serial có trong file và tồn tại trên hệ thống

## 3. Cấu hình các cột hiển thị trong bảng danh sách thiết bị

Tính năng này cho phép người dùng cấu hình thêm các cột hiển thị trong bảng danh sách thiết bị. Các bước thực hiện như sau

- Bước 1: Vào màn hình danh sách thiết bị > bấm vào mục Cột
  ![dv_cot](/img/device/dv_cot.png)
- Bước 2: tích chọn thêm hoặc bỏ bớt các cột mà bạn không muốn hiển thị
  ![dv_cot1](/img/device/dv_cot1.png)
- Bước 3: sau khi chọn xong bấm ra ngoài khu vực pop-up chọn cột để xem lại màn hình danh sách thiết bị.

## 4. Xem chi tiết thiết bị

- Bước 1: Đăng nhập vào hệ thống. Truy cập vào mục “Thiết bị” > chọn “Danh sách thiết bị” > chọn “Serial” muốn xem chi tiết
  ![dv_click](/img/device/dv_click.png)
- Bước 2: Hệ thống hiển thị thông tin chi tiết của Serial tương ứng
  ![dv_detail](/img/device/dv_detail.png)

## 5. Xem lịch sử thiết bị

Người dùng có thể xem lại lịch sử thiết bị bằng 2 cách
**Cách 1: Xem lịch sử thiết bị từ màn hình chi tiết thiết bị**

- Bước 1: Vào màn hình chi tiết thiết bị, bấm nút Xem lịch sử thiết bị
  ![dv_his](/img/device/dv_his.png)
  Hệ thống chuyển đến màn hình Lịch sử thiết bị
  ![dv_his1](/img/device/dv_his1.png)

**Cách 2: Xem lịch sử thiết bị từ menu Lịch sử thiết bị**

- Bước 1: Đăng nhập vào hệ thống, vào mục Thiết bị > Lịch sử thiết bị
  ![dv_his2](/img/device/dv_his2.png)
- Bước 2: Nhập thông tin serial cần tra cứu lịch sử vào ô serial  
   Màn hình hiển thị lịch sử của thiết bị vừa tra cứu như sau:
  ![dv_his3](/img/device/dv_his3.png)

## 6. Xem danh sách dòng thiết bị (Quản lý thông tin sản phẩm)

Quản lý thông tin thiết bị theo 4 level: Dòng thiết bị, Loại thiết bị, Mã thương mại, Mã MAN
Thông tin mã MAN được đồng bộ từ hệ thống kho, người dùng có thể xem và tìm kiếm trong danh sách
![dv_dong](/img/device/dv_dong.png)

## 7. Thu hồi thiết bị

a. Danh sách Yêu cầu nhập kho là tất cả các Yêu cầu nhập kho do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách Yêu cầu nhập kho như sau

- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Thiết bị” > chọn Thu hồi thiết bị

Hệ thống hiển thị danh sách Yêu cầu nhập đã tạo với các trạng thái

- Mới: Khi mới tạo Yêu cầu nhập kho
- Đang xử lý: Yêu cầu nhập kho đã được xác nhận và đẩy giao dịch sang Inventory và chờ được xử lý.
- Hoàn thành: Yêu cầu nhập kho đã được Xác nhận bên Inventory và đồng bộ trạng thái về hệ thống DAC
- Đã hủy: Yêu cầu nhập kho đã hủy

Đối với tài khoản admin: xem danh sách yêu cầu đặt hàng của tất cả các khu vực
![img1.png](/img/device/img1.png)
Bước 2: Người dùng có thể tìm kiếm các trường trong danh sách và bấm vào Số phiếu yêu cầu để xem chi tiết

b. Tạo mới Yêu cầu nhập kho

Người dùng có thể tạo mới yêu cầu nhập kho bằng cách: import file excel thông tin yêu cầu nhập kho. Các bước thực hiện:

- Bước 1: Đăng nhập vào hệ thống > Truy cập vào mục “Thiết bị” > Vào “Thu hồi thiết bị”

- Bước 2: Tại màn hình danh sách YCNK, bấm nút “Tạo mới”
  ![img2.png](/img/device/img2.png)
- Bước 3: Nhập thông tin các trường dữ liệu, tải lên file danh sách serial import, bấm vào icon ![icon1.png](/img/device/icon1.png) để tải file lên thành công. Nếu cần lấy file mẫu bạn cũng có thể tải tại màn hình này.
  ![img3.png](/img/device/img3.png)
- Bước 4: Bấm nút LƯU để hệ thống thực hiện tạo mới YCNK thành công, chuyển đến màn hình chi tiết YCNK.
  ![img4.png](/img/device/img4.png)
  ![img5.png](/img/device/img5.png)
  c. Xem chi tiết Yêu cầu nhập kho
- Từ màn hình danh sách Hợp đồng, người dùng chọn 1 mã hợp đồng để xem thông tin chi tiết
- Tại màn hình chi tiết, chỉ được phép xem thông tin và tải các file đính kèm
- Các hợp đồng đã có Đơn hàng hiển thị danh sách các đơn hàng tương ứng 
  ![img6.png](/img/device/img6.png)

d. Xác nhận Yêu cầu nhập kho

- Người dùng thực hiện xác nhận Yêu cầu nhập kho để tạo phiếu nhập kho tương ứng sang hệ thống Inventory
  Các bước thực hiện như sau:
- Bước 1: Đăng nhập vào hệ thống > truy cập vào mục “Thiết bị” > vào “Thu hồi thiết bị” > chọn Số phiếu yêu cầu nhập kho cần xác nhận. Trạng thái của phiếu cần xác nhận phải = Mới.
  Hệ thống điều hướng đến màn hình chi tiêt YCNK
- Bước 2: Bấm chọn button “Xác nhận”  
  ![img7.png](/img/device/img7.png)
- Bước 3: Xác nhận tạo phiếu
  - Hệ thống hiện thị popup xác nhận “Xác nhận tạo phiếu nhập?”
  - Nhấn nút “Đồng ý” nếu để xác nhận đơn hàng, đồng thời tạo mới phiếu nhập trên hệ thống Inventory.
- Bước 4: Kiểm tra thông tin phiếu nhập tạo ra trên hệ thống Inventory sau khi xác nhận tại màn hình chi tiết YCNK thông tin trường Số phiếu nhập, Trạng thái YCNK  
  ![img8.png](/img/device/img8.png)
  YCNK đã hoàn thành, có trạng thái = Hoàn thành.
  ![img9.png](/img/device/img9.png)

e. Hủy Yêu cầu nhập kho

Người dùng có thể hủy Yêu cầu nhập kho ở trạng thái Đang xử lý, sau khi hủy YCNK sẽ chuyển sang trạng thái Đã hủy.

- Bước 1: Đăng nhập vào hệ thống > Truy cập vào mục “Thiết bị” > vào “Thu hồi thiết bị” > Chọn Số phiếu yêu cầu muốn hủy
  - Hệ thống điều hướng đến màn hình chi tiết YCNK, bấm nút “Hủy”
    ![img10.png](/img/device/img10.png)
- Bước 2: Xác nhận hủy YCNK
  - Hệ thống hiển thị popup xác nhận “Xác nhận hủy yêu cầu nhập kho?”
  - Nhấn nút “Đồng ý” nếu muốn xác nhận yêu cầu xuất kho, nhấn “Hủy” nếu không muốn thực hiện 
    ![img11.png](/img/device/img11.png)
    Yêu cầu nhập kho sau khi hủy có trạng thái “Đã hủy”
    ![img12.png](/img/device/img12.png)

f. Xóa Yêu cầu nhập kho

Cho phép xóa yêu cầu nhập kho ở trạng thái Mới. Các bước xóa yêu cầu nhập kho như sau:

- Bước 1: Đăng nhập vào hệ thống
- Bước 2: Truy cập vào mục “Thiết bị” > vào “Thu hồi thiết bị”
  Hệ thống hiển thị màn hình danh sách yêu cầu xuất kho
- Bước 3: Kích chọn một hoặc nhiều yêu cầu nhập kho muốn xóa > nhấn nút “Xóa”  
  ![img13.png](/img/device/img13.png)
- Bước 4: Xác nhận Xóa
  - Hệ thống hiển thị popup xác nhận “Bạn có chắc chắn muốn xóa không?”
  - Nhấn nút “Xóa” nếu muốn xóa tài khoản khách hàng đã chọn, nhấn “Hủy Bỏ” nếu không muốn thực hiện  
    ![img14.png](/img/device/img14.png)

## 8. Điều chuyển thiết bị
a. *Xem danh sách* 

Danh sách điều chuyển thiết bị là tất cả các Điều chuyển thiết bị do người dùng trên hệ thống DAC tạo ra, có thể xem danh sách điều chuyển thiết bị như sau  

- Bước 1: Đăng nhập vào hệ thống  

- Bước 2: Truy cập vào mục “Thiết bị” > chọn Điều chuyển thiết bị > Hệ thống hiển thị danh sách điều chuyển thiết bị. 

- Bước 3: Người dùng có thể tìm kiếm thông tin bằng cách sử dụng searchbox tương ứng ở các cột thông tin 

Đối với tài khoản admin: xem danh sách Điều chuyển thiết bị của tất cả các khu vực  
![img15.png](/img/device/img15.png)

- Thông tin lưu ý: Click icon ![icon2.png](/img/device/icon2.png) của 1 bản ghi cho phép tải file list thiết bị tương ứng đã import về máy. 

b.  *Import thông tin điều chuyển*

- Bước 1: Đăng nhập vào hệ thống 

- Bước 2: Truy cập vào mục “Thiết bị” > vào Điều chuyển thiết bị > Click button “Nhập thông tin điều chuyển” 
![img16.png](/img/device/img16.png)
- Bước 3: Tại popup “Thông tin điều chuyển” nhập tất cả các trường thông tin hợp lệ > Click “Đồng ý” 
![img17.png](/img/device/img17.png)
Thông tin điều chuyển được import thành công, hiển thị ở đầu danh sách với tên và mô tả như đã nhập