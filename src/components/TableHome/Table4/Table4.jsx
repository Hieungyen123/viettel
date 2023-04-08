import styled from "./Table4.module.scss";
import classNames from "classnames/bind";
// import SavingsIcon from '@mui/icons-material/Savings';


function Table4() {
  const cx = classNames.bind(styled);



//   rowspan="2"
// colspan="2"
  return (
    <div className={cx('table4')}>
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
              <td>  <span>230.000đ</span></td>
              <td>  <span>250.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast2</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>250.000đ  </span></td>
              <td>  <span>268.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast3</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>279.000đ</span></td>
              <td>  <span>299.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast4</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>344.000đ</span></td>
              <td>  <span>374.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh1</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>273.000đ</span></td>
              <td>  <span>309.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh2</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>309.000đ</span></td>
              <td>  <span>349.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh3</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>349.000đ</span></td>
              <td>  <span>403.000đ</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="4">
                    <div className={cx('last-column')}>
                            <p>Gói cước combo internet và truyền hình sử dụng đầu Box TV hỗ trợ TV thường thành Smart TV.</p>
                    </div>
                </td>
            </tr>
        </tbody>


      </table>
    </div>
  );
}

export default Table4;
// rgb(0 153 153)
