import styled from "./Table6.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table6() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx('table6')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2" >Gói Cước </th>
              <th colSpan="2">Băng Thông</th>
              <th rowSpan="2"> </th>  
              <th rowSpan="2" >Giá cước hàng tháng đã có ( VAT )</th>  
            </tr>
            <tr>  
              <th>  <span>Trong Nước</span></th>
              <th> <span>Quốc Tế</span></th>
            </tr>
            <tr>
              <td>  <span>F90N</span></td>
              <td>  <span>	90Mbps </span></td>
              <td>  <span>	2Mbps</span></td>
              <td>  <span>không</span></td>
              <td>  <span>	440.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F90Basic</span></td>
              <td>  	<span>	90Mbps</span></td>
              <td>  <span>	1Mbps</span></td>
              <td>  <span>	1 IP</span></td>
              <td>  <span>	660.000đ  </span></td>
            </tr>
            <tr>
              <td>  <span>F90Plus</span></td>
              <td>  <span>90Mbps</span></td>
              <td>  <span>3Mbps</span></td>
              <td>  	<span>	1 IP </span></td>
              <td>  	<span>	880.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F200N	</span></td>
              <td>  	<span>200Mbps</span></td>
              <td>  <span>	2Mbps</span></td>
              <td>  	<span>	1 IP </span></td>
              <td>  	<span>1.100.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F200Basic</span></td>
              <td>  <span>200Mbps </span></td>
              <td>  	<span>4Mbps	</span></td>
              <td>  	<span>	1 IP </span></td>
              <td>  	<span>	2.200.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F200Plus</span></td>
              <td>  <span>200Mbps</span></td>
              <td>  <span>6Mbps</span></td>
              <td>  <span>	1 IP </span></td>
              <td>  <span>4.400.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F300N</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>	8Mbps</span></td>
              <td>  <span>	5 IP </span></td>
              <td>  <span>	6.050.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F300Basic</span></td>
              <td>  <span>300Mbps 	</span></td>
              <td>  <span>	11Mbps</span></td>
              <td>  <span>	5 IP </span></td>
              <td>  <span>		7.700.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F300Plus</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>	15Mbps</span></td>
              <td>  <span>	9 IP </span></td>
              <td>  <span>	9.900.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F500Basic</span></td>
              <td>  <span>500Mbps</span></td>
              <td>  <span>	20Mbps</span></td>
              <td>  <span>		9 IP  </span></td>
              <td>  <span>		13.200.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>F500Plus</span></td>
              <td>  <span>500Mbps</span></td>
              <td>  <span>	25Mbps</span></td>
              <td>  <span>			9 IP   </span></td>
              <td>  <span>		17.600.000đ</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="5">
                    <div className={cx('last-column')}>
                            <div className={cx('flex')}><SavingsIcon/> <strong>Khuyến mãi đặc biệt</strong> </div>
                            <p> - Giá cước đã bao gồm 10% VAT.</p>
                            <p> - Đóng trước 6 tháng tặng 01.</p>
                            <p> - Đóng trước 12 tháng tặng 03.</p>
                    </div>
                </td>
            </tr>
        </tbody>


      </table>
    </div>
  );
}

export default Table6;
// rgb(0 153 153)
