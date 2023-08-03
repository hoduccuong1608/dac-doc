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
