## cấu trúc database

- admin
- photographers
- customers
- product: giới thiệu các dịch vụ
- demo_photo: sản phẩm nổi bật
- product_photographer: liên kết giữa dịch vụ và thợ ảnh có thể thực hiện dịch vụ đó
- booking: lưu trữ thông tin booking của khách hàng
- customer review: lưu trữ review khách hàng
- photographer_weeklyschedule: lưu trữ lịch chụp theo tuần của thợ

## chức năng

- chức năng khách hàng
  - đăng nhập với mạng xã hội
  - đặt lịch chụp
  - thay đổi lịch chụp
  - hủy lịch chụp
  - xem được lịch sử các booking của mình
  - thanh toán trong booking (cọc hoặc full)
  - đánh giá thợ, review thợ
- chức năng cho thợ ảnh
  - nhận lịch chụp (sau khi khách hàng cọc - prepaid)
  - hủy lịch chụp
  - cập nhận trạng thái và trả link ảnh
- chức năng admin
  - Tự động gửi email theo form về cho khách hàng xác nhận (nếu còn thợ sẽ không bị in mờ vào ngày hôm khách chọn)
  - thêm sửa xóa thợ và khách
  - xác nhận cọc của khách hàng và hiển thị lên feed của thợ

## các gói cài đặt

- ejs express
- passport
- express-sesion
- express-ejs-layout
- sequelize cli

## sản phẩm chính

- chụp ảnh kỷ yếu
- chụp ảnh phóng sự cưới
- chụp ảnh phong cảnh
- chụp ảnh kiến trúc
