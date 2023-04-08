import styled from "./Table3.module.scss";
import classNames from "classnames/bind";
import SavingsIcon from '@mui/icons-material/Savings';
function Table3() {
  const cx = classNames.bind(styled);



//   rowspan="2"
// colspan="2"
  return (
    <div className={cx('table3')}>
      <table>
        <tbody>
            <tr>
              <th>Tên Gói Combo</th>
              <th >Băng Thông</th>
              <th >Combo Basic App</th>
              <th >Combo Basic Box</th>
            </tr>
            <tr>
              <td>  <span>Fast1</span></td>
              <td>  <span>100Mbps</span></td>
              <td>  <span>185.000đ</span></td>
              <td>  <span>230.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast2</span></td>
              <td>  <span>150mbps</span></td>
              <td>  <span>199.000đ</span></td>
              <td>  <span>239.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast3</span></td>
              <td>  <span>250Mbps</span></td>
              <td>  <span>239.000đ</span></td>
              <td>  <span>279.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Fast4</span></td>
              <td>  <span>300Mbps</span></td>
              <td>  <span>300.000đ</span></td>
              <td>  <span>344.000đ</span></td>
            </tr>
            <tr>
              <td>  <span>Mesh1</span></td>
              <td>  <span>150Mbps</span></td>
              <td>  <span>239.000đ</span></td>
              
              <td>  <span>273.000đ</span></td>
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
              <td>  <span>309.000đ	</span></td>
              <td>  <span>349.000đ</span></td>
            </tr>
            <tr className={cx('last-column-tr')}>
                <td colSpan="5">
                    <div className={cx('last-column')}>
                            <div className={cx('flex')}><SavingsIcon/> <strong>Khuyến mãi đặc biệt</strong> </div>
                            <p> - Giá cước đã bao gồm VAT.</p>
                            <p> - Đóng trước 6 tháng tặng 01.</p>
                            <p> - Đóng trước 12 tháng tặng 03.</p>
                            <p> - <strong>Lưu ý:</strong> Giá cước Combo basic App chỉ dùng cho Smart TV tải được App ( ít kênh hơn dùng box TV). Gói combo Basic box được trang bị miễn phí đầu box hỗ trợ TV thường thành Smart TV.</p>
                            
                    </div>
                </td>
            </tr>
        </tbody>


      </table>
    </div>
  );
}

export default Table3;
// rgb(0 153 153)
