# Đối tượng sử dụng: PM
## 1. Màn hình điều khiển, dashboard
Màn hình này hiển thị các thông tin thống kê tổng quát về tất cả dự án:

  ![pm1.png](/img/pm/pm1.png)
-	Chọn dự án:
    - Danh sách dự án gồm tất cả các dự án đã tạo
    - Nếu không chọn dự án nào thì sẽ mặc định chọn dự án gần nhất gửi phê duyệt lên cho PM
-	Chọn công việc:
    - Chỉ hiển thị danh sách công việc thuộc dự án đã chọn
    - Mặc định hiển thị công việc đầu tiên của dự án
- Chọn SubPM:
    - Danh sách giá trị bao gồm toàn bộ tài khoản SubPM có trên hệ thống
    - Mặc định để trống
- Sau khi chọn dự án/ công việc/ SubPM ở trên thì sẽ hiển thị các thông số ở dưới tương ứng như:
    - Tổng số trạm: Tổng số trạm có công việc tương ứng theo bộ lọc. Click xem chi tiết chuyển hướng đến màn chi tiết dự án
    - Tổng số trạm hoàn thành: Tổng số trạm của dự án hoàn thành công việc đã chọn. Click xem chi tiết chuyển hướng đến màn danh sách phê duyệt: hiển thị danh sách các phê duyệt hoàn thành tương ứng
    - Tiến độ tổng hợp: bằng tổng số trạm hoàn thành/ tổng số trạm
- Icon quả chuông: Hiển thị số thông báo người dùng chưa xem chi tiết. Click hiển thị những thông báo gần nhất, nhấn xem tất cả để chuyển đến màn xem tất cả thông báo

  ![pm2.png](/img/pm/pm2.png)
- Email tài khoản: Click vào email tài khoản, nhấn Đăng xuất để thoát khỏi tài khoản đang đăng nhập
  ![pm3.png](/img/pm/pm3.png)

## 2. Quản lý người dùng
PM có quyền quản lý với các tài khoản của PM, SubPM và Khách hàng
### 2.1 Danh sách người dùng
Màn hình hiển thị danh sách toàn bộ PM và SubPM trên hệ thống
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tài khoản, Họ tên, Điện thoại, Vai trò, Tình trạng (1)
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
  ![nd1.png](/img/pm/nd1.png)
- Cho phép cấu hình số lượng cột hiển thị (3)
  ![nd2.png](/img/pm/nd2.png)

### 2.2 Tạo tài khoản PM/SubPM
#### 2.2.1 Tạo tài khoản trên giao diện web
Các bước thực hiện:
- Bước 1: Tại màn hình danh sách người dùng, bấm button "Tạo mới"
  ![nd4.png](/img/pm/nd4.png)
- Bước 2: Hệ thống chuyển đến giao diện tạo mới người dùng. Khai báo các thông tin sau, trường bắt buộc đánh dấu "*"
  - Họ và tên: Họ và tên tài khoản, bắt buộc khai báo
  - Tài khoản: Tên đăng nhập hoặc email, bắt buộc khai báo
  - Số điện thoại: Số điện thoại của người dùng, không bắt buộc khai báo
  - Mật khẩu: Trường hợp tài khoản là email, hệ thống sẽ tự động gửi thông tin xác thực về email tương ứng. Trường hợp tài khoản không phải email, bắt buộc phải khai báo mật khẩu cho tài khoản, mật khẩu tối thiểu phải có 8 ký tự
  - Vai trò: Cho phép PM tạo tài khoản tương ứng với các vai trò- PM/SubPM/Khách hàng, bắt buộc khai báo. Trường hợp tạo tài khoản Khách hàng thì phải gán Dự án tương ứng cho khách hàng đó
  - Ghi chú: Nhập thông tin ghi chú cho tài khoàn
  - Dự án: Bắt buộc chọn khi tài khoản có vai trò là khách hàng, cho phép chọn một hoặc nhiều dự án trên hệ thống
  ![nd5.png](/img/pm/nd5.png)
  ![nd8.png](/img/pm/nd8.png)
- Bước 3: Sau khi nhập đầy đủ các thông tin, bấm button Lưu, sau đó bấm Đồng ý tại popup Xác nhận để hoàn thiện tạo tài khoản.
Tài khoản được tạo đăng nhập theo thông tin Tài khoản/ Mật khẩu như khi khai báo
![nd7.png](/img/pm/nd7.png)
#### 2.2.2 Tạo tài khoản bằng cách import file
- Bước 1: Tại màn danh sách người dùng, bấm button "Nhập excel". Tại popup "Nhập thông tin tài khoản", tải file mẫu về máy
 ![nd01.png](/img/pm/nd01.png)
- Bước 2: File mẫu bôi đỏ các trường bắt buộc, thông tin validate như khi khai báo trực tiếp trên giao diện (đã mô tả chi tiết trong file)
 ![nd02.png](/img/pm/nd02.png)
- Bước 3: Sau khi điền đầy đủ các thông tin khai báo trong file. Click Chọn file tại popup, sau đó chọn file khai báo tương ứng rồi bấm xác nhận. Hệ thống tiến hành kiểm tra và lưu thông tin:
 ![nd03.png](/img/pm/nd03.png)
    - Trường hợp dữ liệu hợp lệ: Hiển thị thông báo thành công, đóng popup quay trở về màn danh sách với các tài khoản như khai báo trong file
  ![nd04.png](/img/pm/nd04.png)
    - Trường hợp dữ liệu không hợp lệ: Hiển thị thông báo Lỗi, giữ nguyên popup, cho phép tải về file báo lỗi, ghi chú lỗi cụ thể tại mỗi bản ghi
  ![nd05.png](/img/pm/nd05.png)
  ![nd06.png](/img/pm/nd06.png)
 
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
  - Vai trò: Cho phép đổi vai trò của tài khoản. Trường hợp đổi vai trò giữa PM và SubPM, thông tin dự án gán với SubPM sẽ bị gỡ bỏ, ảnh hưởng đến trạm của đội thi công
  => Khuyến cáo không nên đổi vai trò của tài khoản
![s3.png](/img/pm/s3.png)
- Bước 4: Sau khi chỉnh sửa các thông tin, click button Lưu, sau đó bấm Đồng ý trong popup xác nhận để hoàn tất thao tác
![s4.png](/img/pm/s4.png)
### 2.4 Xóa tài khoản
Cho phép xóa những tài khoản chưa được sử dụng/ tài khoản không còn ràng buộc thông tin trên hệ thống

***Trường hợp tài khoản PM đã tạo dự án/ SubPM đã được phân giao công việc, khi muốn xóa phải xóa thông tin của dự án đó trước***

Các bước thực hiện:
- Bước 1: Tại màn hình danh sách người dùng, click vào checkbox tại những bản ghi người dùng muốn xóa
- Bước 2: Click icon xóa
- Bước 3: Tại popup xác nhận, click Đồng ý để xác nhận xóa, Hủy bỏ để hủy bỏ thao tác
  ![nd3.png](/img/pm/nd3.png)

## 3. Quản lý mẫu kiểm tra
### 3.1 Danh sách mẫu kiểm tra
![tem1.png](/img/pm/tem1.png)
Màn hình hiển thị danh sách toàn bộ mẫu kiểm tra trên hệ thống
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tên mẫu kiểm tra, mã mẫu kiểm tra, công việc
- Button “Copy”: Click vào button này để tạo thêm 1 mẫu khác có cấu trúc giống với mẫu kiểm tra hiện tại.
-	Đối với những mẫu kiểm tra đã được sử dụng đến bất kỳ công việc của dự án nào thì sẽ cho ẩn checkbox trước mỗi bản ghi
-	Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang.

### 3.2 Tạo mới mẫu kiểm tra
Cho phép PM thêm mới mẫu kiểm tra
Các bước thực hiện:
- Bước 1: Tại màn danh sách mẫu kiểm tra, bấm vào button "Thêm mới"
![tem2.png](/img/pm/tem2.png)
- Bước 2: Hệ thống chuyển hướng đến màn thêm mới mẫu kiểm tra.
![tem3.png](/img/pm/tem3.png)
  - Thông tin tổng quan:
    - Công việc (bắt buộc): chọn loại công việc cho mẫu (Khảo sát/ Lắp đặt/ QA-QC/ Hiệu chỉnh/ Chuyển hàng/ Phát sóng)
    - Mã mẫu kiểm tra: thông tin hệ thống tự sinh
    - Tên mẫu kiểm tra (bắt buộc)
    - Mô tả: nhập mô tả cho mẫu kiểm tra
  - Mẫu kiểm tra được tạo theo trình tự như sau:
    - Bước 2.1: Tạo danh mục
      - Click vào button Thêm danh mục tại section Danh mục để hiển thị popup Thêm danh mục
      ![dm1.png](/img/pm/dm1.png)
      - Tại popup Thêm danh mục, nhập thông tin tiêu đề (bắt buộc) và mô tả tương ứng
    - Bước 2.2: Tạo thành phần (không bắt buộc, có thể bỏ qua bước tạo thành phần)
      - Click button "Thêm thành phân" để hiển thị popup Thêm thành phần
      ![tp1.png](/img/pm/tp1.png)
      - Tại popup Thêm thành phần, nhập thông tin tiêu đề và mô tả tương ứng
      ![tp2.png](/img/pm/tp2.png)
    - Bước 2.3: Tạo thông tin chi tiết
    ![ct12.png](/img/pm/ct1.png)
      - Click button "Thêm chi tiết" để hiển thị popup Thêm chi tiết
      - Tại popup, khai báo thông tin tiêu đề, kiểu dữ liệu. Với các kiểu dữ liệu khác nhau, thông tin khai báo sẽ khác nhau:
        - Văn bản
        - Số dương
        - Số âm/dương
        - Góc độ 0-360
        - Barcode
        - QR code
        - Hình ảnh: Khi chọn giá trị này, hiển thị textbox số lượng ảnh- bắt buộc nhập giá trọ số tự nhiên, giới hạn 2 ký tự
        - Lựa chọn: Khi chọn giá trị này, hiển thị textbox Giá trị- bắt buộc nhập danh sách lựa chọn, các giá trị cách nhau bởi dấu ","
        - Yes/No: Khi chọn giá trị này, hiển thị textbox Giá trị- bắt buộc nhập 2 giá trị cách nhau bởi bởi “,”
- Bước 3: Sau khi khai báo đầy đủ các thông tin, click button Lưu đẻ hoàn tất khai báo

### 3.3 Chỉnh sửa mẫu kiểm tra
- Đối với những mẫu kiểm tra chưa được sử dụng cho dự án: Cho phép chỉnh sửa toàn bộ thông tin, tương tự như khi tạo mới
- Đối với mẫu kiểm tra đã được sử dụng (được gán cho công việc trong dự án): 
  - Không cho phép chỉnh sửa loại công việc
  - Tại popup sửa của chi tiết: không cho phép sửa “Kiểu dữ liệu”
  -	Sau khi sửa mẫu kiểm tra thành công, tất cả những đối tượng sử dụng mẫu (công việc trên ứng dụng, phê duyệt, báo cáo) đều cập nhật theo mẫu mới nhất

### 3.4 Xóa mẫu kiểm tra
Chỉ cho phép xóa những mẫu kiểm tra chưa được sử dụng cho dự án. Chỉ những mẫu được phép xóa mới hiển thị popup trước mỗi bản ghi tại màn danh sách
Các bước thực hiện như sau:
- Bước 1: Tại màn danh sách mẫu kiểm tra, click checkbox trước bản ghi muốn xóa
- Bước 2: Click icon xóa, hiển thị popup Xác nhận xóa
- Bước 3: Click Đồng ý tại popup Xác nhận xóa
![tem0.png](/img/pm/tem0.png)

## 4. Quản lý dự án
### 4.1 Danh sách dự án
![da1.png](/img/pm/da1.png)
Màn hình hiển thị danh sách toàn bộ dự án trên hệ thống
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin: Tên dự án, Trạng thái, Tổng số công việc, Tổng số trạm, Tổng số SubPM, Ngày bắt đầu, Ngày kết thúc
-	Đối với dự án không phải do tài khoản PM đó tạo ra thì ẩn checkbox trước mỗi bản ghi
-	Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang.

### 4.2 Tạo mới dự án
Cho phép PM tạo mới dự án
Các bước thực hiện:
- Bước 1: Tại màn danh sách dự án, bấm vào button "Tạo mới"
![da2.png](/img/pm/da2.png)
- Bước 2: Hệ thống chuyển hướng đến màn thêm mới dự án
![da3.png](/img/pm/da3.png)
- Bước 3: Khai báo thông tin dự án
  - Thông tin tổng quan dự án:
    - Tên dự án (bắt buộc)
    - Mã dự án: Hệ thống tự sinh
    - Trạng thái (bắt buộc): Khai báo trạng thái cho dự án (Chưa thực hiện/ Đang thi công/ Đã hoàn thành)
    - Thời gian dự kiến (bắt buộc): Nhập ngày bắt đầu và kết thúc dự kiến
    - Mô tả: Nhập thông tin mô tả cho dự án
  - Tạo công việc
    - Click button Thêm công việc => Hiển thị popup Thêm công việc
    ![da4.png](/img/pm/da4.png)
    - Tại popup thêm công việc khai báo các thông tin:
    ![da5.png](/img/pm/da5.png)
      - Tên công việc (bắt buộc): khai báo tên công việc
      - Mẫu kiểm tra (bắt buộc): gán mẫu kiểm tra cho công việc tương ứng
      - Mô tả
  - Phân công trạm - thành viên dự án:
    - Click vào từng công việc sẽ hiển thị danh sách các trạm và thành viên được phân công (nếu có). Cho phép lọc thông tin trạm theo Tỉnh/Thành phố, Quận/ Huyện, Tên trạm, Mã trạm, SubPM
    ![tram8.png](/img/pm/tram8.png)
      **Lưu ý**: khi chưa tạo công việc không thể thêm trạm và thành viên
    - Thêm trạm - thành viên: Có 2 cách thêm thông tin trạm
      - Cách 1: Khai báo trực tiếp trên giao diện web
        - B1: Click button Thêm trạm, hiển thị popup Thêm trạm
        ![tram1.png](/img/pm/tram1.png)
        - B2: Tại popup Thêm trạm, khai báo các thông tin tương ứng:
          - Tên trạm (bắt buộc)
          - Mã trạm (bắt buộc): mã định danh cho trạm, trường hợp nhập mã trạm đã tồn tại trên hệ thống, các thông tin liên quan của trạm sẽ tự động điền theo nội dung đã khai báo trước đó. Trường hợp người dùng sửa các thông tin liên quan đến trạm, ghi đè thông tin mới nhất. 
          
          **Lưu ý**: Mã trạm được phép trùng nhau giữa các công việc trong 1 trạm nhưng không được phép trùng nhau giữa các dự án
          - Tỉnh/ thành phố (bắt buộc): thông tin tỉnh/ thành phố của trạm, giá trị là 63 tỉnh thành
          - Quận/ huyện (bắt buộc): thông tin quận/ huyện khai báo trên hệ thống
          - Latitude (bắt buộc): vĩ độ của trạm
          - Longtitude (bắt buộc): kinh độ của trạm
          - Cấu hình: cấu hình trạm
          - Địa chỉ: Địa chỉ trạm
          - Quản lý trực tiếp: 
          - Số điện thoại
          - Thành viên (bắt buộc): thông tin SubPM của trạm, giá trị là toàn bộ Họ và tên SubPM có trên hệ thống
          - Tài khoản: email/ tên tài khoản - tự động điền theo tên thành viên đã chọn
          - Ngày bắt đầu/ Ngày kết thúc (dự kiến): thời gian dự kiến thực hiện trạm
          - Ngày bắt đầu thực tế: ngày thực hiện trạm thực tế, lấy theo ngày có báo cáo của đội thi công gửi lên
          - Ngày kết thúc thực tế: ngày kết thúc trạm, lấy theo ngày báo cáo của trạm được phê duyệt => hoàn thành
      - Cách 2: Nhập thông tin bằng cách nhập file excel
        - B1: Click button Import, hiển thị popup Import trạm
        ![tram2.png](/img/pm/tram2.png)
        - B2: Click tải file mẫu trên popup. Nhập các thông tin khai báo tương tự như trên giao diện web, các trường bôi đỏ là bắt buộc
        ![tram3.png](/img/pm/tram3.png)
        - B3: Click button Chọn file trong popup, chọn file tải lên rồi ấn xác nhận
          - Trường hợp dữ liệu hợp lệ: thông báo tải lên thành công, đóng popup
          - Trường hợp file có chứa bản ghi không hợp lệ: vẫn tải lên các bản ghi hợp lệ và trả về file lỗi chứa các bản ghi không hợp lệ
        ![tram4.png](/img/pm/tram4.png)
    - Chỉnh sửa thông tin trạm: Tương tự như thêm trạm, có 2 cách để chỉnh sửa thông tin trạm:
      - Cách 1: Sửa trực tiếp trên giao diện web
        - Bước 1: Click icon chỉnh sửa tại mỗi bản ghi
        - Bước 2: Tại popup Chỉnh sửa, sửa các thông tin mong muốn
        ![suatram.png](/img/pm/suatram.png)
      - Cách 2: Nhập thông tin trạm (Import)- khi import danh sách trạm, sẽ ghi đè thông tin mới nhất, mapping theo mã trạm

    **Lưu ý**:
        - Chỉ cho phép sửa (chỉ hiển thị button) tại những bản ghi chưa có kết quả gửi lên
        - Không cho phép chỉnh sửa mã trạm, các thông tin còn lại chỉnh sửa như khi thêm mới 
    - Xuất danh sách trạm: Cho phép xuất danh sách trạm của công việc ra file excel
    Các bước thực hiện:
      - Bước 1: Click button "Export" tại section Phân công trạm- thành viên dự án. Hệ thổng hiển thị popup Xuất dữ liệu trạm
      - Bước 2: Tại popup click "Xuất danh sách trạm" để tải file về máy người sử dụng
      ![tram7.png](/img/pm/tram7.png)
    - Xóa trạm thành viên: Cho phép xóa trạm ở tất cả các trạng thái (mới, đã có kết quả gửi lên hay hoàn thành). Có 2 cách xóa thông tin trạm:
      - Cách 1: Xóa trực tiếp trên giao diện web
        - Bước 1: Tích chọn những bản ghi muốn xóa, sau đó click button Xóa/ hoặc click icon Xóa tại mỗi bản ghi
        ![tram5.png](/img/pm/tram5.png)
        - Bước 2: Hệ thống hiển thị popup xác nhận xóa, click Đồng ý
        ![tram6.png](/img/pm/tram6.png)
      - Cách 2: Xóa nhiều trạm bằng cách import file
        - Bước 1: Click button Import Xóa, hệ thống hiển thị popup "Import xóa"
        ![tram9.png](/img/pm/tram9.png)
        - Bước 2: Tải file mẫu, nhập thông tin mã trạm muốn xóa
        ![tram10.png](/img/pm/tram10.png)
        - Bước 3: Chọn file tải lên
        ![tram11.png](/img/pm/tram11.png)
### 4.3 Chỉnh sửa dự án
Danh sách công việc:
- Đối với những công việc chưa có kết quả nào gửi lên thì được Sửa, Xóa
- Đối với những công việc đã có kết quả gửi lên thì cho ẩn button Xóa đi
  - Chỉ được chỉnh sửa: tên công việc, mô tả về công việc. Không được thay đổi template

Danh sách trạm – thành viên: 
  - Cho phép xóa trạm ở tất cả các trạng thái (mới, đã gửi kết quả, đang chờ chuyệt, đã phê duyệt)
  - Cho phép sửa thông tin trạm:
    - Trạm chưa có kết quả gửi lên thì được phép sửa tất cả các thông tin trừ mã trạm và ngày bắt đầu/ kết thúc thực tế
    - Trạm đã có kết quả gửi lên thì được phép sửa các thông tin trừ mã trạm, thông tin SubPM và ngày bắt đầu/ kết thúc thực tế
  - Import: 
    - Những trạm chưa có kết quả gửi lên thì sẽ được update các thông tin dựa vào mã trạm
    - Trạm đã có kết quả gửi lên thì sẽ không được thay đổi thông tin SubPM (tên SubPM & email) => báo lỗi khi import.

## 5. Quản lý phê duyệt
### 5.1 Danh sách phê duyệt
![pd1.png](/img/pm/pd1.png)
Màn hình hiển thị danh sách toàn bộ kết quả thực hiện công việc ở các trạm mà SubPM đã gửi lên
- Danh sách được sắp xếp theo thời gian cập nhật gần nhất
- Hiển thị và cho phép lọc theo các thông tin (1): Dự án, Công việc, Tỉnh/thành phố, Tên trạm, SubPM, Ngày gửi, Trạng thái
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)
- Cho phép chấp nhận nhiều báo cáo 1 lúc (4): Tích chọn những bản ghi muốn chấp nhận sau đó click button Chấp nhận để phê duyệt hàng loạt
- Cho phép xuất danh sách phê duyệt (5): Sau khi lọc thông tin, click "Xuất excel" để tải file danh sách về máy người sử dụng
- Click icon tại cột Chi tiết để truy cập màn hình chi tiết của báo cáo (6)
### 5.2 Phê duyệt chi tiết
![pd2.png](/img/pm/pd2.png)
**Thông tin chung:**
  - Tên dự án
  - Tên công việc
  - Tỉnh/ thành
  - Quận/ huyện
  - Mã trạm
  - Tên trạm
  - Địa chỉ
  - Ngày gửi: ngày SubPM gửi báo cáo
  - SubPM phụ trách
  - Ghi chú: nhập nội dung chú thích (nếu có)

**Kiểm tra kết quả của trạm:**
  - Bên trái là danh sách tất cả các danh mục theo template (1). Những danh mục nào có thành phần thì click vào mũi tên xuống để hiển thị danh sách thành phần. 
  - Click vào từng danh mục hoặc thành phần sẽ hiển thị kết quả tương ứng ở phía bên phải
  - Kết quả sẽ bao gồm những dữ liệu gửi lên
  - Đánh giá (bắt buộc): Chỉ được chọn 1 trong 2 đánh giá: Tốt hoặc không tốt. Nếu đánh giá Không tốt thì bắt buộc phải nhập nội dung phản hồi cho SubPM ở dưới
  - Phản hồi của subPM: hiển thị nếu có
  - Phản hồi cho SubPM (bắt buộc nếu đánh giá kết quả là không tốt): nhập nội dung phản hồi cho subPM

**Sau khi kiểm tra tất cả các kết quả:**
  - Button Chấp nhận: 
    - Chỉ enable khi toàn bộ thông tin được đánh giá tốt
    - Trong trường hợp có ít nhất 1 thành phẩn bị đánh giá Không tốt thì button “Chấp nhận” sẽ bị Disable
    - Click button Chấp nhận, hiển thị popup Xác nhận
    ![pd3.png](/img/pm/pd3.png)
    Trường hợp click Đồng ý, hiển thị chấp nhận thành công, quay về màn chi tiết, chuyển trạng thái phê duyệt sang  Hoàn thành, đồng thời gửi thông báo và chuyển trạng cho SubPM và đội thi công
  - Button Từ chối:
    - Enable khi có ít nhất 1 thành phần bị đánh giá không tốt
    - Click button tử chối, hệ thống cũng hiển thị popup Xác nhận tương tự như khi chấp nhận. Khi click ĐỒng ý, hiển thị từ chối kết quả chạm thành công, quay về màn chi tiết, chuyển trạng thái phê duyệt sang Từ chối. Đồng thời thông báo và chuyển trạng cho SubPM

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

### 6.2 Hồ sơ nghiệm thu
![hs1.png](/img/pm/hs1.png)
**Bộ lọc (1): Chọn các điều kiện để xuất hồ sơ nghiệm thu**
- Dự án (bắt buộc): hiển thị toàn bộ dự án có trên hệ thống 
- Công việc (bắt buộc): hiển thị toàn bộ công việc của dự án vừa chọn

**Mẫu nghiệm thu**
- Tiêu đề: Nhập tiêu đề ghi vào file word khi xuất ra
- Danh sách hình ảnh: thêm tiêu đề hình ảnh muốn nghiệm thu
    - Bước 1: Click button Thêm ảnh (2), hệ thống hiển thị popup hiển thị danh sách các tiêu đề hình ảnh- tiêu đề của chi tiết có kiểu định dạng là hình ảnh trong mẫu kiểm tra của công việc đã chọn
    - Bước 2: Tích chọn ảnh muốn nghiệm thu, sau đó click Chọn hoặc click Chọn tất cả để lấy toàn bộ ảnh
    ![hs2.png](/img/pm/hs2.png)

**Danh sách trạm**
Cho phép chọn những trạm muốn nghiệm thu
  - Bước 1: Click button Thêm trạm (3), hệ thống hiển thị danh sách các trạm của dự án và công việc đã chọn
  - Bước 2: Tích chọn trạm muốn nghiệm thu, sau đó click Chọn hoặc click Chọn tất cả để lấy toàn bộ trạm
  ![hs3.png](/img/pm/hs3.png)

**Xuất hồ sơ nghiệm thu**
- Button Xuất (4) chỉ enable khi đã chọn đủ thông tin hình ảnh và trạm
- Click button hệ thống xuất file về máy -Hệ thống xuất file dưới dạng nén (zip)
    -	Mỗi trạm ứng với 1 file word với tên file tương ứng với mã trạm chứa danh sách các hình ảnh dưới dạng bảng:
      - Tiêu đề: Tiêu đề cấu hình trên web
      - Bảng hình ảnh: chia làm 2 cột, mỗi ô chứa 1 hình ảnh + label dạng “Ảnh số x”, trong đó x là số thứ tự của ảnh trong bảng, đếm theo chiều từ trái qua phải, từ trên xuống dưới
      - Trường hợp 1 chi tiết có nhiều hơn 1 hình ảnh, xuất toàn bộ ảnh ra file word'

## 7. Thông báo
![tb.png](/img/pm/tb.png)
-	Màn hình này hiển thị tất cả các thông báo mà PM nhận được trong các trường hợp sau:
  - Khi SubPM gửi kết quả lên
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
![huyen.png](/img/pm/huyen.png)
Màn hình hiển thị danh sách toàn bộ quận/huyện phố có trên hệ thống
- Danh sách được sắp xếp theo alphabet
- Hiển thị và cho phép lọc theo các thông tin (1): Tên, Mã, Tỉnh/Thành phố
- Cho phép cấu hình hiển thị số lượng bản ghi và chuyển trang (2)
- Cho phép cấu hình số lượng cột hiển thị (3)
#### 8.2.2 Thêm mới Quận/ huyện
![huyen1.png](/img/pm/huyen1.png)
Các bước thực hiện như sau:
- Bước 1: Click button Thêm Quận/huyện, hiển thị popup Thêm quận/huyện
- Bước 2: Điền thông tin Quận/huyện, các trường bắt buộc đánh dấu "*"
- Bước 3: Click button Lưu để hoàn thiện thao tác
#### 8.2.3 Chỉnh sửa Quận/ huyện
![huyen2.png](/img/pm/huyen2.png)
Các bước thực hiện như sau:
- Bước 1: Click icon Sửa tại bản ghi muốn chỉnh sửa
- Bước 2: Chỉnh sửa thông tin Quận/huyện, các trường bắt buộc đánh dấu "*"
- Bước 3: Click button Lưu để hoàn thiện thao tác
#### 8.2.4 Xóa thông tin Quận/ huyện
![huyen3.png](/img/pm/huyen3.png)
- Bước 1: Tích chọn những quận huyện muốn xóa
- Bước 2: Click icon xóa 
- Bước 3: Xác nhận tại popup
**Lưu ý**: Chỉ cho phép xóa những quận/huyện chưa được sử dụng trong dự án






