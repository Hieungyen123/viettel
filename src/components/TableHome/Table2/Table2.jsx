import styled from "./Table2.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';


function Table2() {
  const cx = classNames.bind(styled);



//   rowspan="2"
// colspan="2"
  return (
    <div className={cx('table2')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2">Gói cước </th>
              <th rowSpan="2">Băng Thông</th>
              <th rowSpan="2">Số Thiết bị Mesh Wifi</th>
              <th colSpan="2">Thành phố HCM Giá VNĐ</th>
            </tr>
            <tr>  
              <th> <span>Nội Thành</span> </th>
              <th> <span> Ngoại Thành</span> </th>
            </tr>
            <tr>
              <td>  <span>Fast2</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>200.000</span></td>
              <td>  <span>229.000</span></td>
            </tr>
            <tr>
              <td>  <span>Fast3</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>229.000</span></td>
              <td>  <span>255.000</span></td>
            </tr>
            <tr>
              <td>  <span>Fast4</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>290.000</span></td>
              <td>  <span>330.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh1</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>01Mesh</span></td>
              <td>  <span>229.000</span></td>
              <td>  <span>265.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh2</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>02Mesh</span></td>
              <td>  <span>255.000</span></td>
              <td>  <span>299.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh3</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>03Mesh</span></td>
              <td>  <span>299.000</span></td>
              <td>  <span>359.000</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="5">
                    <div className={cx('last-column')}>
                            <div className={cx('flex')}><SavingsIcon/> <strong>Khuyến mãi đặc biệt</strong> </div>
                            <p> - Giá cước đã bao gồm 10% VAT.</p>
                            <p> - Đóng trước 6 tháng tặng 01.</p>
                            <p> - Đóng trước 12 tháng tặng 03.</p>
                            <p> - Trang thiết bị Viettel cung cấp miễn phí cho khách hàng đóng cước trước gồm:</p>
                            <p> &ensp;  + Gói fast trang bị 1 modem wifi.</p>
                            <p> &ensp;  + Gói Mesh trang bị 1 modem wifi + số Mesh Wifi.</p>
                    </div>
                </td>
            </tr>
        </tbody>


      </table>
    </div>
  );
}

export default Table2;
// rgb(0 153 153)
