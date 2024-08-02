# Đối tượng sử dụng: SubPM
## 1. Màn hình điều khiển, dashboard
Màn hình này hiển thị các thông tin thống kê tổng quát về tất cả dự án:

  ![db.png](/img/subpm/db.png)
-	Chọn dự án:
    - Danh sách dự án gồm tất cả các dự án được gán cho SubPM đó
    - Nếu không chọn dự án nào thì sẽ mặc định chọn dự án gần nhất gửi kết quả lên cho SubPM đó
-	Chọn công việc:
    - Chỉ hiển thị danh sách công việc thuộc dự án đã chọn
    - Mặc định hiển thị công việc đầu tiên của dự án
- Sau khi chọn dự án/ công việc ở trên thì sẽ hiển thị các thông số ở dưới tương ứng như:
    - Tổng số trạm: Tổng số trạm có công việc tương ứng theo bộ lọc. Click xem chi tiết chuyển hướng đến màn chi tiết dự án
    - Tổng số trạm hoàn thành: Tổng số trạm của dự án hoàn thành công việc đã chọn. Click xem chi tiết chuyển hướng đến màn danh sách phê duyệt: hiển thị danh sách các phê duyệt hoàn thành tương ứng
    - Tiến độ tổng hợp: bằng tổng số trạm hoàn thành/ tổng số trạm
- Icon quả chuông: Hiển thị số thông báo người dùng chưa xem chi tiết. Click hiển thị những thông báo gần nhất, nhấn xem tất cả để chuyển đến màn xem tất cả thông báo
- Email/ Tài khoản: Click vào email tài khoản, nhấn Đăng xuất để thoát khỏi tài khoản đang đăng nhập


## 2. Quản lý người dùng
SubPM có quyền quản lý với các tài khoản đội thi công cho SubPM đó tạo ra
![nd1.png](/img/subpm/nd1.png)
### 2.1 Danh sách người dùng
Màn hình hiển thị danh sách toàn bộ đội thi công do SubPM đó tạo ra
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tài khoản, Họ tên, Điện thoại, Vai trò, Tình trạng (1)
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)

### 2.2 Tạo tài khoản đội thi công
#### 2.2.1 Tạo tài khoản trên giao diện web
Các bước thực hiện:
- Bước 1: Tại màn hình danh sách người dùng, bấm button "Tạo mới"
  ![nd4.png](/img/pm/nd4.png)
- Bước 2: Hệ thống chuyển đến giao diện tạo mới người dùng. Khai báo các thông tin sau, trường bắt buộc đánh dấu "*"
![nd2.png](/img/subpm/nd2.png)
  - Họ và tên: Họ và tên tài khoản, bắt buộc khai báo
  - Tài khoản: Tên đăng nhập hoặc email, bắt buộc khai báo
  - Số điện thoại: Số điện thoại của người dùng, không bắt buộc khai báo
  - Mật khẩu: Trường hợp tài khoản là email, hệ thống sẽ tự động gửi thông tin xác thực về email tương ứng. Trường hợp tài khoản không phải email, bắt buộc phải khai báo mật khẩu cho tài khoản, mật khẩu tối thiểu phải có 8 ký tự
  - Vai trò (bắt buộc): Cho phép SubPM tạo tài khoản với vai trò là Đội thi công
  - Ghi chú: Nhập thông tin ghi chú cho tài khoàn
- Bước 3: Sau khi nhập đầy đủ các thông tin, bấm button Lưu, sau đó bấm Đồng ý tại popup Xác nhận để hoàn thiện tạo tài khoản.
Tài khoản được tạo đăng nhập theo thông tin Tài khoản/ Mật khẩu như khi khai báo
#### 2.2.2 Tạo tài khoản bằng cách import file
- Bước 1: Tại màn danh sách người dùng, bấm button "Nhập excel". Tại popup "Nhập thông tin tài khoản", tải file mẫu về máy
 ![nd01.png](/img/pm/nd01.png)
- Bước 2: File mẫu bôi đỏ các trường bắt buộc, thông tin validate như khi khai báo trực tiếp trên giao diện (đã mô tả chi tiết trong file)
 ![nd02.png](/img/subpm/nd02.png)
- Bước 3: Sau khi điền đầy đủ các thông tin khai báo trong file. Click Chọn file tại popup, sau đó chọn file khai báo tương ứng rồi bấm xác nhận. Hệ thống tiến hành kiểm tra và lưu thông tin:
    - Trường hợp dữ liệu hợp lệ: Hiển thị thông báo thành công, đóng popup quay trở về màn danh sách với các tài khoản như khai báo trong file
  ![nd04.png](/img/pm/nd04.png)
    - Trường hợp dữ liệu không hợp lệ: Hiển thị thông báo Lỗi, giữ nguyên popup, cho phép tải về file báo lỗi, ghi chú lỗi cụ thể tại mỗi bản ghi
  ![nd05.png](/img/pm/nd05.png)
 
 
### 2.3 Chỉnh sửa tài khoản/ Cập nhật mật khẩu
Cho phép chỉnh sửa thông tin tài khoản trên hệ thống.
Các bước thực hiện như sau:
- Bước 1: Tài màn danh sách tài khoản, bấm vào textlink để truy cập màn chi tiết
![s1.png](/img/pm/s1.png)
- Bước 2: Tại màn chi tiết tài khoản, bấm button Sửa, hệ thống chuyển đến giao diện Sửa tài khoản
![s2.png](/img/pm/s2.png)
- Bước 3: Tại giao diện chỉnh sửa, cho phép sửa các thông tin sau:
  - Họ và tên
  - Số điện thoại
  - Mật khẩu: cho phép đổi mật khẩu của tài khoản
![s3.png](/img/pm/s3.png)
- Bước 4: Sau khi chỉnh sửa các thông tin, click button Lưu, sau đó bấm Đồng ý trong popup xác nhận để hoàn tất thao tác
![s4.png](/img/pm/s4.png)
### 2.4 Xóa tài khoản
Cho phép xóa những tài khoản chưa được sử dụng/ tài khoản không còn ràng buộc thông tin trên hệ thống

***Trường hợp tài khoản đội thi công đã được gán trạm, khi muốn xóa phải xóa thông tin của dự án đó trước***

Các bước thực hiện:
- Bước 1: Tại màn hình danh sách người dùng, click vào checkbox tại những bản ghi người dùng muốn xóa
- Bước 2: Click icon xóa
- Bước 3: Tại popup xác nhận, click Đồng ý để xác nhận xóa, Hủy bỏ để hủy bỏ thao tác
  ![nd3.png](/img/pm/nd3.png)

## 3. Quản lý mẫu kiểm tra
SubPM chỉ có quyền xem danh sách và xem chi tiết, không có quyền chỉnh sửa/ xóa mẫu kiểm tra
### 3.1 Danh sách mẫu kiểm tra
![tem1.png](/img/subpm/tem1.png)
Màn hình hiển thị danh sách toàn bộ mẫu kiểm tra trên hệ thống
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tên mẫu kiểm tra, mã mẫu kiểm tra, công việc
-	Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang.

### 3.2 Xem chi tiết mẫu kiểm tra
- Click thao tác xem chi tiết tại màn hình danh sách để truy cập màn chi tiết mẫu kiểm tra
![tem2.png](/img/subpm/tem2.png)

## 4. Quản lý dự án
### 4.1 Danh sách dự án
![da1.png](/img/pm/da1.png)
Màn hình hiển thị danh sách toàn bộ dự án trên hệ thống
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tên dự án, Trạng thái, Tổng số công việc, Tổng số trạm, Tổng số SubPM, Ngày bắt đầu, Ngày kết thúc
-	Đối với dự án không phải do tài khoản PM đó tạo ra thì ẩn checkbox trước mỗi bản ghi
-	Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang.

### 4.2 Chỉnh sửa dự án (Cập nhật thông tin đội thi công)
SubPM không có quyền thêm mới dự án hay bất kỳ công việc/ trạm nào trong dự án
SubPM chỉ có quyền xem những trạm mà mình được PM gán và gán những trạm đó cho đội thi công thuộc quản lý của mình
Có 2 cách gán đội thi công cho trạm:
- Cách 1: Thêm trực tiếp trên giao diện web
  - Bước 1: Click icon sửa tại mỗi bản ghi, hiển thị popup. Đối với SubPM chỉ được tác động thông tin Đội thi công
  ![da1.png](/img/subpm/da1.png)
- Cách 2: Thêm bằng cách import file
![da2.png](/img/subpm/da2.png)
  - Bước 1: Click export, xuất danh sách trạm ra file excel
  - Bước 2: Sử dụng file xuất ở bước 1, cập nhật thông tin đội thi công (Tên tài khoản/ Email đăng nhập)
  ![da3.png](/img/subpm/da3.png)
  - Bước 3: Chọn file import lên hệ thống, sau đó click xác nhận tại popup
    - Trường hợp dữ liệu hợp lệ: Hiển thị thông báo thành công, đóng popup
    - Trường hợp file có chứa bản ghi không hợp lệ: Vẫn import những bản ghi hợp lệ và trả về file báo lỗi những bản ghi không hợp lệ

**Lưu ý**: Không cho phép sửa Đội thi công nếu trạm đã có kết quả gửi lên

## 5. Quản lý phê duyệt
### 5.1 Danh sách phê duyệt
![pd1.png](/img/subpm/pd1.png)
Màn hình hiển thị danh sách toàn bộ kết quả thực hiện công việc ở các trạm mà Đội thi công đã gửi lên
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin (1): Dự án, Công việc, Tỉnh/thành phố, Tên trạm, Đội thi công, Ngày gửi, Trạng thái
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)
- Cho phép xuất danh sách phê duyệt (4): Sau khi lọc thông tin, click "Xuất excel" để tải file danh sách về máy người sử dụng
- Click icon tại cột Chi tiết để truy cập màn hình chi tiết của báo cáo
### 5.2 Phê duyệt chi tiết
![pd2.png](/img/subpm/pd2.png)
**Thông tin chung:**
  - Tên dự án
  - Tên công việc
  - Tỉnh/ thành
  - Quận/ huyện
  - Mã trạm
  - Tên trạm
  - Địa chỉ
  - Ngày gửi: ngày SubPM gửi báo cáo
  - Đội thi công phụ trách
  - Ghi chú: nhập nội dung chú thích (nếu có)

**Kiểm tra kết quả của trạm:**
  - Bên trái là danh sách tất cả các danh mục theo template (1). Những danh mục nào có thành phần thì click vào mũi tên xuống để hiển thị danh sách thành phần. 
  - Click vào từng danh mục hoặc thành phần sẽ hiển thị kết quả tương ứng ở phía bên phải
  - Kết quả sẽ bao gồm những dữ liệu gửi lên
  - Đánh giá (bắt buộc): Chỉ được chọn 1 trong 2 đánh giá: Tốt hoặc không tốt. Nếu đánh giá Không tốt thì bắt buộc phải nhập nội dung phản hồi cho SubPM ở dưới
  - Đội thi công phản hồi: hiển thị nếu có
  - PM phản hồi: Hiển thị nếu có
  - Gửi cho PM: nhập thông tin muốn gửi tới PM
  - Gửi cho đội thi công (bắt buộc nếu đánh giá kết quả là không tốt): nhập nội dung phản hồi cho đội thi công

**Sau khi kiểm tra tất cả các kết quả:**
  - Button Chấp nhận: 
    - Chỉ enable khi toàn bộ thông tin được đánh giá tốt
    - Trong trường hợp có ít nhất 1 thành phẩn bị đánh giá Không tốt thì button “Chấp nhận” sẽ bị Disable
    - Click button Chấp nhận, hiển thị popup Xác nhận
    ![pd3.png](/img/pm/pd3.png)
    Trường hợp click Đồng ý, hiển thị chấp nhận thành công, quay về màn chi tiết, chuyển trạng thái phê duyệt sang Chờ PM duyệt
  - Button Từ chối:
    - Enable khi có ít nhất 1 thành phần bị đánh giá không tốt
    - Click button tử chối, hệ thống cũng hiển thị popup Xác nhận tương tự như khi chấp nhận. Khi click Đồng ý, hiển thị từ chối kết quả chạm thành công, quay về màn chi tiết, chuyển trạng thái phê duyệt sang SubPM từ chối. Đồng thời thông báo và chuyển trạng cho Đội thi công
### 5.3 Cập nhật thông tin phê duyệt
Cho phép SubPM chỉnh sửa, cập nhật thông tin phê duyệt trước khi gửi tới PM:
  - Cho phép SubPM sửa thông tin do Đội thi công đã gửi lên (thêm, sửa, xóa) nhưng vẫn phải đảm bảo đáp ứng mẫu kiểm tra (về kiểu định dạng, số lượng ảnh...)
  - SubPM chấp nhận/ từ chối kết quả sẽ đồng bộ thông tin mới nhất (theo chỉnh sửa của SubPM) tới PM và Đội thi công


## 6. Báo cáo
### 6.1 Báo cáo tiến độ tổng hợp
![bc.png](/img/pm/bc.png)
**Bộ lọc (1): Chọn các điều kiện để xem báo cáo**
  - Dự án (bắt buộc): hiển thị danh sách tất cả các dự án có trên hệ thống
  - Tỉnh/ thành phố: Hiển thị danh sách các tỉnh thành của dự án đã chọn
    - Trong trường hợp không chọn tỉnh/ thành thì báo cáo sẽ hiển thị tất cả tỉnh/ thành của dự án đã chọn và thống kê các số liệu theo từng tỉnh/ thành
    - Trong trường hợp chọn tỉnh/ thành thì báo cáo sẽ hiển thị các số liệu thống kê theo từng quận/ huyện của tỉnh/ thành đã chọn
  - Quận/ huyện: hiển thị danh sách tất cả các quận/ huyện thuộc tỉnh/ thành và dự án đã chọn.
  - Ngày/ tháng: chọn ngày để xem báo cáo. Ngày hiển thị ở báo cáo sẽ là ngày đã chọn ở đây.

**Xem báo cáo (2)**
  - Click button "Báo cáo" để xem báo cáo
  - Báo cáo: hiển thị tiến độ thực hiện công việc ở các trạm của từng tỉnh thành hoặc quận huyện theo form
    - STT
    - Tỉnh/thành phố: danh sách các tỉnh/thành hoặc quận/ huyện thuộc dự án đã chọn
    - Tổng số trạm
      - Nếu chọn tỉnh/ thành: hiển thị tổng số trạm theo từng quận/ huyện của tỉnh thành đã chọn
      - Nếu không chọn tỉnh/ thành: hiển thị tổng số trạm theo từng tỉnh/ thành
    - Danh sách các công việc của dự án. Thông tin hiển thị theo từng công việc gồm:
      - Số trạm: tổng số trạm đã hoàn thành
      - Tỉ lệ: tổng số trạm đã hoàn thành / tổng số trạm theo tỉnh/ thành hoặc

**Xuất báo cáo (3)**:
  - Click vào để xuất báo cáo dưới dạng file excel

## 7. Thông báo
![tb.png](/img/pm/tb.png)
-	Màn hình này hiển thị tất cả các thông báo mà SubPM nhận được trong các trường hợp sau:
  - Khi Đội thi công gửi kết quả lên
  - Khi PM từ chối kết quả trạm
  - Khi PM chấp nhận kết quả trạm
- Cho phép xóa 1/ nhiều hoặc tất cả thông báo
- Click vào thông báo, chuyển hướng đển phê duyệt tương ứng

## 8. Quản lý danh mục
### 8.1 Tỉnh/ thành phố
Thông tin 63 tỉnh/ thành phố là thông tin cố định của hệ thống, chỉ được phép xem, không được phép sửa xóa
![tinh.png](/img/pm/tinh.png)
Màn hình hiển thị danh sách toàn bộ tỉnh/ thành phố có trên hệ thống
- Danh sách được sắp xếp theo alphabet
- Hiển thị và cho phép lọc theo các thông tin (1): Tên, Mã
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)

### 8.2 Quận huyện
#### 8.2.1 Danh sách Quận/ huyện
SubPM chỉ có quyền xem danh sách quận huyện, không được phép thêm sửa xóa
![huyen.png](/img/subpm/huyen.png)
Màn hình hiển thị danh sách toàn bộ quận/huyện phố có trên hệ thống
- Danh sách được sắp xếp theo alphabet
- Hiển thị và cho phép lọc theo các thông tin (1): Tên, Mã, Tỉnh/Thành phố
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)







