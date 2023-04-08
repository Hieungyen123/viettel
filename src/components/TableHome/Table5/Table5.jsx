import styled from "./Table5.module.scss";
import classNames from "classnames/bind";
// import SavingsIcon from '@mui/icons-material/Savings';


function Table5() {
  const cx = classNames.bind(styled);



//   rowspan="2"
// colspan="2"
  return (
    <div className={cx('table5')}>
      <table>
        <tbody>
            <tr>
              <th rowSpan="2">Gói cước </th>
              <th rowSpan="2">Băng Thông</th>
              <th colSpan="2">Thành phố HCM Giá VNĐ</th>
            </tr>
            <tr>  
              <th> <span>Nội Thành</span> </th>
              <th> <span> Ngoại Thành</span> </th>
            </tr>
            <tr>
              <td>  <span>Fast1</span></td>
              <td>  <span>100Mbps</span></td>
              <td>  <span>185.000đ</span></td>
              <td>  <span>không</span></td>
            </tr>
            <tr>
              <td>  <span>Fast2</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>210.000đ </span></td>
              <td>  <span>239.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast3</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>265.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast4</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>300.000đ</span></td>
              <td>  <span>340.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh1</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>275.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh2</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>265.000đ</span></td>
              <td>  <span>309.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh3</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>309.000đ</span></td>
              <td>  <span>369.000đ</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="4">
                    <div className={cx('last-column')}>
                            <p>Gói cước combo internet và truyền hình sử dụng App giá cước rẻ hơn nhưng cũng ít kênh hơn dùng BoxTV. </p>
                    </div>
                </td>
            </tr>
        </tbody>


      </table>
    </div>
  );
}

export default Table5;
// rgb(0 153 153)
