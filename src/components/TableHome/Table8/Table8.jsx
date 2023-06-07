import styled from "./Table8.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table8() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx('table8')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan='2' >Gói Cước </th>
              <th rowSpan='2' >Tốc Độ</th>
              <th rowSpan='2' >Giá Internet đơn lẻ</th>  
              <th rowSpan='2' >Giá combo Internet & truyền hình TV360 app</th>  
              <th rowSpan='2' >Giá combo Internet & truyền hình TV360 đầu thu</th>  
            </tr>
            <tr>

            </tr>

            <tr>
              <td>  <span>ECO6</span></td>
              <td>  
                <span>80 Mbps</span>
                <span><strong>Modem 2 băng tần</strong></span>
              </td>
              <td>  <span>165.000đ</span></td>
              <td>  <span>175.000đ</span></td>
              <td>  <span>220.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST1</span></td>
              <td>  
                <span>100 Mbps</span>
                <span><strong>Modem 2 băng tần</strong></span>
              </td>
              <td>  <span>không hỗ trợ</span></td>
              <td>  <span>185.000đ</span></td>
              <td>  <span>230.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST2</span></td>
              <td>  
                <span>150 Mbps</span>
                <span><strong>Modem 2 băng tần</strong></span>
              </td>
              <td>  <span>189.000đ</span></td>
              <td>  <span>199.000đ</span></td>
              <td>  <span>239.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST3</span></td>
              <td>  
                <span>250 Mbps</span>
                <span><strong>Modem 2 băng tần</strong></span>
              </td>
              <td>  <span>229.000đ</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>279.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST4</span></td>
              <td>  
                <span>300 Mbps</span>
                <span><strong>Modem 2 băng tần</strong></span>
              </td>
              <td>  <span>290.000đ</span></td>
              <td>  <span>300.000đ</span></td>
              <td>  <span>344.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh 1</span></td>
              <td>  
                <span>150 Mbps</span>
                <span><strong>Modem 2 băng tần + 1 modem Homewifi</strong></span>
              </td>
              <td>  <span>229.000đ</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>273.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh 2</span></td>
              <td>  
                <span>250 Mbps</span>
                <span><strong>Modem 2 băng tần + 2 modem Homewifi</strong></span>
              </td>
              <td>  <span>255.000đ</span></td>
              <td>  <span>265.000đ</span></td>
              <td>  <span>309.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh 3</span></td>
              <td>  
                <span>250 Mbps</span>
                <span><strong>Modem 2 băng tần + 3 modem Homewifi</strong></span>
              </td>
              <td>  <span>299.000đ</span></td>
              <td>  <span>309.000đ</span></td>
              <td>  <span>34Ư9.000đ</span></td>
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

export default Table8;

