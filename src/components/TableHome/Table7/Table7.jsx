import styled from "./Table7.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table7() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx('table7')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2" >Gói Cước </th>
              <th colSpan="2">Tính Năng</th>
              <th rowSpan="2">Cam Kết Tốc Độ Quốc Tế Tối Thiểu (Mbps) </th>  
              <th rowSpan="2" >Giá bán đơn lẻ gồm VAT</th>  
            </tr>
            <tr>  
              <th>  <span>Tốc Độ (Mbps)</span></th>
              <th> <span>Mesh WIFI</span></th>
            </tr>
            <tr>
              <td>  <span>PRO300</span></td>
              <td>  <span>300</span></td>
              <td>  <span>không</span></td>
              <td>  <span>1</span></td>
              <td>  <span>350.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>PRO600</span></td>
              <td>  <span>600</span></td>
              <td>  <span>không</span></td>
              <td>  <span>2</span></td>
              <td>  <span>500.000đ </span></td>
            </tr>
            <tr>
              <td>  <span>PRO1000</span></td>
              <td>  <span>1000</span></td>
              <td>  <span>không</span></td>
              <td>  <span>1000</span></td>
              <td>  <span>700.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MESHPRO300</span></td>
              <td>  <span>300</span></td>
              <td>  <span>1 AP MESH WIFI6</span></td>
              <td>  <span>1</span></td>
              <td>  <span>450.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MESHPRO600</span></td>
              <td>  <span>600</span></td>
              <td>  <span>2 AP MESH WIFI6</span></td>
              <td>  <span>2</span></td>
              <td>  <span>650.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MESHPRO1000</span></td>
              <td>  <span>1000</span></td>
              <td>  <span>2 AP MESH WIFI6</span></td>
              <td>  <span>10 </span></td>
              <td>  <span>880.000đ</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="5">
                    <div className={cx('last-column')}>
                            <div className={cx('flex')}><SavingsIcon/> <strong>Khuyến mãi đặc biệt</strong> </div>
                            <p> - Khách hàng sử dụng gói MESHPRO có thể mua thêm thiết bị Mesh.</p>
                            <p> - Gói cước có IP di động được hỗ trợ khai báo ONT Brige để sử dụng Router của khách hàng.</p>
                            <p> - Miễn phí lắp đặt cho khách hàng lần đầu tiên sử dụng.</p>
                            <p> - Khách hàng được tặng thêm từ 1 đến 6 tháng sử dụng khi tham gia đóng trước gói trước</p>
                            <p> - Cam kết tốc độ khi đo kiểm tra dây cáp mạng</p>
                    </div>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table7;

