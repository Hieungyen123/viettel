import styled from "./Table3.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table3() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx('table3')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2" >Gói Cước </th>
              <th colSpan="2">Tính Năng</th>
              <th rowSpan="2">Gía bán đơn lẻ</th>  
              <th rowSpan="2" >Giá bán combo truyền hình App</th>  
              <th rowSpan="2" >Giá bán combo truyền hình đầu thu</th>  
            </tr>
            <tr>  
              <th>  <span>Băng thông (Mbps)</span></th>
              <th> <span>thông số thiết bị Mesh WIFI</span></th>
            </tr>
            <tr>
              <td>  <span>FAST1</span></td>
              <td>  <span>100</span></td>
              <td>  <span>Không</span></td>
              <td>  <span>Không áp dụng</span></td>
              <td>  <span>185.000đ</span></td>
              <td>  <span>230.000đ</span></td>
            </tr>
            <tr>
            <td>  <span>FAST2</span></td>
              <td>  <span>150</span></td>
              <td>  <span>Không</span></td>
              <td>  <span>189.000đ</span></td>
              <td>  <span>199.000đ</span></td>
              <td>  <span>239.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST3</span></td>
              <td>  <span>250</span></td>
              <td>  <span>Không</span></td>
              <td>  <span>229.000đ</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>279.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>FAST4</span></td>
              <td>  <span>300</span></td>
              <td>  <span>Không</span></td>
              <td>  <span>290.000đ</span></td>
              <td>  <span>300.000đ</span></td>
              <td>  <span>344.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MESH1</span></td>
              <td>  <span>150</span></td>
              <td>  <span>01</span></td>
              <td>  <span>229.000đ</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>273.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MEST2</span></td>
              <td>  <span>250</span></td>
              <td>  <span>02</span></td>
              <td>  <span>255.000đ </span></td>
              <td>  <span>265.000đ</span></td>
              <td>  <span>309.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>MEST3</span></td>
              <td>  <span>300</span></td>
              <td>  <span>03</span></td>
              <td>  <span>299.000đ </span></td>
              <td>  <span>309.000đ</span></td>
              <td>  <span>349.000đ</span></td>
            </tr>
           
            <tr className={cx('last-column-tr')}>
                <td colSpan="6">
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

export default Table3;

