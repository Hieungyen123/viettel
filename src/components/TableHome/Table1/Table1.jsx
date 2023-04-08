import styled from "./Table1.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table1() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx('table1')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2" >Gói cước </th>
              <th colSpan="2">Tính năng</th>
              <th rowSpan="2">Giá VNĐ một tháng</th>
            </tr>
            <tr>  
              <th>  <span>Số thiết bị Mesh Wifi</span></th>
              <th> <span> Băng Thông</span></th>
            </tr>
            <tr>
              <td>  <span>Fast1</span></td>
              <td>  <span>100Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>175.000</span></td>
            </tr>
            <tr>
              <td>  <span>Fast2</span></td>
              <td>  	<span>150Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>189.000</span></td>
            </tr>
            <tr>
              <td>  <span>Fast3</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  	<span>229.000</span></td>
            </tr>
            <tr>
              <td>  <span>Fast4</span></td>
              <td>  	<span>300Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  	<span>290.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh1</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  	<span>01Mesh</span></td>
              <td>  	<span>229.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh2</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>02Mesh</span></td>
              <td>  <span>255.000</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh3</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>03Mesh</span></td>
              <td>  <span>299.000</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="4">
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

export default Table1;
// rgb(0 153 153)
