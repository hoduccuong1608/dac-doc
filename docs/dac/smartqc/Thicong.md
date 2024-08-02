# Đối tượng sử dụng: Đội thi công
## 1. Màn hình đăng nhập
![DN.png](/img/thicong/DN.png)

- Nhập tên đăng nhập và mật khẩu đã được cấp trước đó để đăng nhập vào ứng dụng
- Ứng dụng yêu cầu phải kết nối Internet để sử dụng
- Sau khi đăng nhập chuyển đến màn hình chính

## 2. Màn hình chính
|![cv.png](/img/thicong/cv.png)|![tram.png](/img/thicong/tram.png)|
| ---- | ---- |
|Danh sách công việc theo trạm|Danh sách trạm theo công việc|

- Sau khi đăng nhập thành công, màn hình trang chủ hiển thị danh sách các trạm theo công việc hoặc công việc theo từng trạm thuộc dự án cần thực hiện (click tab Công việc/ Trạm để xem kiểu hiện thị tương ứng)

***Lưu ý***: Vuốt dọc xuống tại màn trang chủ để reload, điện thoại sẽ lấy dữ liệu mới nhất về

## 3. Thông tin tài khoản
- Click vào avt tại màn hình trang chủ để đi đến màn chi tiết tài khoản
- Giao diện chi tiết tài khoản hiển thị những thông tin:
  - Họ và tên
  - Email/Tên tài khoản
  - Số điện thoại
  - Tên người quản lý
  - Link đến tài liệu Hướng dẫn sử dụng
  - Cho phép Đổi mật khẩu
  - Đăng xuất

|![tk1.png](/img/thicong/tk1.png)|![tk2.png](/img/thicong/tk2.png)|
| ---- | ---- |
## 4. Đổi mật khẩu
- Click Đổi mật khẩu tại màn thông tin tài khoản để chuyển đến màn Đổi mật khẩu:
![mk.png](/img/thicong/mk.png)

## 5. Xem danh mục công việc của trạm
Có 2 cách để xem được chi tiết 1 công việc cần làm của 1 trạm
- Cách 1: Tại màn hình trang chủ- tab công việc, click vào trạm muốn xem chi tiết để chuyển đến màn chi tiết công việc của trạm

|![cv0.png](/img/thicong/cv0.png)|![dm1.png](/img/thicong/dm1.png)|
| ---- | ---- |

- Cách 2:
  - Bước 1: Tại màn hình trang chủ, click vào tab "Trạm" để hiển thị danh sách Trạm
![tram1.png](/img/thicong/tram1.png)
  - Bước 2: Click vào trạm muốn xem chi tiết, ứng dụng chuyển đến màn hình danh sách các công việc của trạm đó kèm trạng thái tương ứng. Click vào tên công việc để xem chi tiết công việc của trạm đó, ứng dụng chuyển đến màn chi tiết công việc tương ứng

|![tram2.png](/img/thicong/tram2.png)|![dm1.png](/img/thicong/dm1.png)|
| ---- | ---- |

Màn hình này sẽ hiển thị tất cả các danh mục theo mẫu để thực hiện một công việc tại trạm
- Với mỗi danh mục sẽ hiển thị tiến độ hoàn thành:
  -	Trường hợp có thành phẩn: số thành phần đã nhập dữ liệu/ tổng số thành phần
  -	Trường hợp không có thành phần: số cchi tiết đã nhập dữ liệu/ tổng số chi tiết
- Tab vào danh mục sẽ đi đến màn danh sách thành phần hoặc danh sách chi tiết để nhập dữ liệu
- Với mỗi danh mục hoặc thành phần lại có 1 icon comment => tab vào icon để đi đến màn phản hồi. Sau mỗi lần nhập phản hồi, click button Lưu ở góc bên phải để lưu lại phản hồi

|![ph1.png](/img/thicong/ph1.png)|![ph2.png](/img/thicong/ph2.png)|
| ---- | ---- |
|Khi chưa có phản hồi của SubPM|Khi đã có phản hồi của SubPM|
- **Button Đồng bộ**: tab vào để upload tất cả kết quả công việc của trạm lên server (bao gồm: comment theo từng danh mục hoặc thành phẩn, kết quả của từng chi tiết)
  - Nếu trong trường hợp không bị trùng dữ liệu trên máy chủ thì chỉ hiển thị thông báo đồng bộ thành công
  - Trong trường hợp bị trùng dữ liệu trên máy chủ thì hiển thị thông báo tới người dùng “Có dữ liệu trùng lặp. Bạn muốn lấy dữ liệu từ nguồn nào? Điện thoại/ Máy chủ/ Quay lại”
  ![dbo.png](/img/thicong/dbo.png)
    - Chọn máy chủ:
      - Những mục có dữ liệu rồi hoặc không có dữ liệu thì lấy của máy chủ
      - Trường hợp máy chủ chưa có dữ liệu thì lấy dữ liệu ở điện thoại
    - Chọn điện thoại:
      - Những mục có dữ liệu rồi hoặc không có dữ liệu thì lấy của điện thoại
      - Trường hợp điện thoại chưa có dữ liệu thì lấy dữ liệu ở máy chủ
    - Quay lại: đóng popup và không thực hiện đồng bộ
  - Trong trường hợp kết quả trạm bị từ chối, thì sau khi đồng bộ những phần không tốt sẽ được đánh dấu đỏ kèm phản hồi từ SubPM. Trường hợp có phản hồi icon comment sẽ hiển thị dấu chấm đỏ

- **Button Gửi báo cáo**:
  - Chỉ enable nếu trên điện thoại có đầy đủ dữ liệu và ở trạng thái Từ chối hoặc chưa được gửi báo cáo

  ***Lưu ý***: Trước khi gửi báo cáo cần đồng bộ dữ liệu để đảm bảo dữ liệu trên điện thoại và trên máy chủ là như nhau, trường hợp không đồng bộ trước khi gửi báo cáo, khi tab button Gửi, ứng dụng vẫn bắt buộc người dùng phải thao tác đồng bộ trước khi gửi
  ![sub.png](/img/thicong/sub.png)

## 6. Xem chi tiết công việc 
- Màn hình này để nhập dữ liệu theo từng chi tiết như khai báo trong mẫu kiểm tra
![cv2.png](/img/thicong/cv2.png)
  - Hướng dẫn (nếu có): hiển thị nội dung hướng dẫn (nếu có)
  - N/A: Nếu tích chọn ô N/A thì không cần nhập dữ liệu mà hệ thống vẫn coi như đã nhập đầy đủ
  - Tab vào icon mũi tên để chuyển đến chi tiết trước và sau
- Cách hiển thị khác nhau giữa các kiểu dữ liệu khác nhau:
  - **Lưu ý với kiểu dữ liệu: Hình ảnh**:
    - Hiển thị "Thêm x hình ảnh"- trong đó x là số lượng hình ảnh còn cần phải thêm để đáp ứng mẫu kiểm tra
    ![ha1.png](/img/thicong/ha1.png)

    - Tab vào icon máy ảnh để chụp ảnh hoặc tải ảnh lên từ thư viện của điện thoại. Ảnh được chụp từ ứng dụng, sẽ tự động lấy các thông tin:
      - Thời gian chụp
      - Tọa độ
      - Tên trạm - Mã trạm 
      - Direction
    ![ha2.png](/img/thicong/ha2.png)

## 7. Xem tiến trình đồng bộ và gửi báo cáo
- Để truy cập vào màn tiến trình, click button tại màn trang chủ
![tt1.png](/img/thicong/tt1.png)
- Giao diện tiến trình hiển thị các thông tin như sau: 
![tt2.png](/img/thicong/tt2.png)
  - Báo cáo đã có đủ thông tin nhưng chưa gửi báo cáo (Khi báo cáo được gửi đi, tự động xóa hiển thị khỏi danh sách)
  - Báo cáo đang được đồng bộ
  - Báo cáo đang được gửi 
  - Báo cáo gửi/ đồng bộ thất bại
- Sắp xếp các công việc theo:
  - Những báo cáo đã có đủ thông tin nhưng chưa gửi báo cáo hiển thị trên đầu
  - Những báo cáo đang đồng bộ/ gửi sắp xếp theo thứ tự thời gian thực hiện thao tác gần nhất
- Trường hợp gửi báo cáo thành công, xóa bản ghi khỏi danh sách
- Trường hợp gửi báo cáo/ đồng bộ thất bại: cho phép Thử lại để thực hiện lại tiến trình

***Lưu ý***: Không thoát ứng dụng khi đang thực hiện đồng bộ/gửi báo cáo

## 8. Thông báo
- Click vào icon quả chuông tại màn hình trang chủ để đi đến màn danh sách thông báo
  - Quả chuông hiển thị kèm số lượng thông báo chưa đọc
  - Tại màn danh sách, highlight những thông báo chưa xem chi tiết
  - Click vào thông báo để đi đền màn chi tiết công việc tương ứng

|![tb1.png](/img/thicong/tk1.png)|![tb2.png](/img/thicong/tk2.png)|
| ---- | ---- |
    