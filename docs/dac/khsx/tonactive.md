# Báo cáo tồn active

## 1. Xem danh sách Báo cáo tồn active
Các bước thực hiện như sau

- Bước 1: Đăng nhập vào hệ thống > Truy cập phân hệ Quản lý kế hoạch sản xuất > Báo cáo tồn active

![tonactive1.png](/img/tonactive/tonactive1.png)

![tonactive2.png](/img/tonactive/tonactive2.png)

- Bước 2: Hệ thống hiển thị màn hình danh sách Báo cáo tồn active, cho phép người dùng tìm kiếm theo các bộ lọc: Tên báo cáo, Ngày tạo, Người tạo, Ngày cập nhật, Người cập nhật

![tonactive3.png](/img/tonactive/tonactive3.png)

## 2. Tạo mới và tổng hợp báo cáo tồn active
Các bước thực hiện:

- Bước 1: Tại màn hình danh sách báo cáo, click button "Tạo mới". Giao diện hiển thị popup Tạo mới báo cáo, người dùng khai báo Tên báo cáo > Click đồng ý

![tonactive4.png](/img/tonactive/tonactive4.png)

- Bước 2: Hệ thống hiển thị thông báo thành công, chuyển hướng đến màn khai báo chi tiết

![tonactive5.png](/img/tonactive/tonactive5.png)

    Lưu ý: 
    Màn chi tiết được chia thành 3 section:
    - Thông tin báo cáo: Hiển thị tên báo cáo như khai báo ở Bước 1 (không cho sửa)
    - Dữ liệu báo cáo: Dữ liệu đầu vào do người dùng khai báo để tổng hợp báo cáo, được chia thành 7 tab:
        - Kế hoạch sản xuất (KHSX): Người dùng nhập kế hoạch sản xuất thực tế
        - Tồn nhà máy: Người dùng nhập số lượng linh kiện còn tồn tại nhà máy (mốc chốt được lấy theo KHSX)
        - Báo cáo SCC: Người dùng nhập kế hoạch mua sắm vật tư
        - Kế hoạch hàng lẻ: Người dùng nhập kế hoạch xuất bán hàng lẻ
        - Kế hoạch Prototype: Ngưởi dùng nhập kế hoạch sử dụng nguyên vật liệu cho prototype
        - Kế hoạch Sửa chữa bảo hành: Ngưởi dùng nhập kế hoạch sử dụng nguyên vật liệu cho sửa chữa bảo hành
        - Tổn kho: Hệ thống tự đồng đồng bộ số liệu tồn kho linh kiện từ hệ thống kho theo mốc chốt của KHSX
    - Báo cáo tổng hợp: Báo cáo output được thông kê từ dữ liệu báo cáo 

- Bước 3: Thực hiện khai báo thông tin tại section "Dữ liệu báo cáo"
  
        - Tại mỗi tab đều cho phép người dùng tải file mẫu
        - Các tab thông tin khác chỉ enable khi đã nhập thông tin KHSX
        - Khi import file, nếu dữ liệu trong file hợp lệ, import thành công, hiển thị dữ liệu lên giao diện web
        - Trường hợp dữ liệu trong file không hợp lệ, trả về file báo lỗi tại hàng cụ thể
        - Khi import file nếu các trường số để trống, hệ thống sẽ tự động hiểu giá trị là 0

- Bước 4: Sau khi nhập đủ dữ liệu báo cáo, click button Báo cáo, hệ thống tiến hành tổng hợp báo cáo và hiển thị thông tin báo cáo tại section "Báo cáo tổng hợp"

![khsx2.png](/img/tonactive/khsx2.png)

## 3. Xuất báo cáo
Các bước thực hiện:

![khsx3.png](/img/tonactive/khsx3.png)
- Bước 1: Tại màn hình chi tiết báo cáo tồn active (sau khi đã có dữ liệu tổng hợp), click button "Xuất excel"
- Bước 2: Hệ thống hiển thị popup Xuất dữ liệu, click "Bấm vào đây để xuất dữ liệu", hệ thống xuất báo cáo về máy NSD, báo cáo gồm 3 trang thông tin tương ứng với 3 tab hiển thị trên hệ thống:
    - Kế hoạch hàng còn về
    - Báo cáo tồn active
    - Kế hoạch nguyên vật liệu

## 4. Chỉnh sửa báo cáo
Cho phép người dùng sửa thông tin dữ liệu import và tổng hợp lại báo cáo
Các bước thực hiện:
- Bước 1: Tại màn hình danh sách, click vào tên báo cáo muốn chỉnh sửa
- Bước 2: Tại màn hình chi tiết báo cáo, chỉnh sửa dữ liệu đầu vào/ tổng hợp lại báo cáo: thao tác tương tự như khi tạo mới

## 5. Xem lịch sử thay đổi và revert (trở lại) báo cáo cũ
Cho phép người dùng xem lịch sử thay đổi và trở lại bản báo cáo tổng hợp cũ
Các bước thực hiện:
- Bước 1: Tại màn hình danh sách, click vào tên báo cáo muốn chỉnh sửa
![bc.png](/img/tonactive/bc.png)
- Bước 2: Tại màn hình chi tiết báo cáo, click button "Lịch sử thay đổi"
![bc1.png](/img/tonactive/bc1.png)
- Bước 3: Hệ thống hiển thị Lịch sử thay đổi báo cáo, mỗi lần click "Báo cáo" được lưu thành 1 version, click Trở lại phiên bản này để quay lại phiên bản đó. Click vào file cho phép tải file về