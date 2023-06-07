import styled from "./RegisterWifi.module.scss";
import classNames from "classnames/bind";

import CellWifiIcon from "@mui/icons-material/CellWifi";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import BusinessIcon from '@mui/icons-material/Business';


import Table1 from "../TableHome/Table1/Table1";
import Table2 from "../TableHome/Table2/Table2";
import Table3 from "../TableHome/Table3/Table3";
import Table4 from "../TableHome/Table4/Table4";
import Table5 from "../TableHome/Table5/Table5";
import Table6 from "../TableHome/Table6/Table6";
import Table7 from "../TableHome/Table7/Table7";
import Table8 from "../TableHome/Table8/Table8";

import img from '../../Image/kenhtruyenhinh.jpg'
import img2 from '../../Image/danhsachkenh.jpg'

function RegisterWifi() {
  const cx = classNames.bind(styled);
  return (
    <div className={cx("RegisterWifi")}>
      <div className="container">
        <div className={cx("flex")}>
          <div className={cx("RegisterWifi-title")}>
            <div className={cx("title")}>
              <h3>Đăng ký lắp internet Viettel cho gia đình bạn..</h3>
            </div>
            <div className={cx("content")}>
              <p>
                Khi cá nhân hay hộ gia đình có nhu cầu lắp mạng wifi cho
                gia đình mình thì internet Viettel luôn là lựa chọn ưu tiên hàng
                đầu.
              </p>
            </div>
            <div className={cx("RegisterWifi-img")}></div>
          </div>


          <div className={cx("packages-wifi")}>
            <div>
              <h2>Danh Sách Các Gói Internet</h2>
            </div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  {" "}
                  <CellWifiIcon />{" "}
                  <h3>
                    {" "}
                    <>1</>. Danh sách các gói cước internet cáp quang viettel
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Các gói cước Internet Viettel cho hộ gia đình cơ bản được
                    chia làm 2 loại : Gói Fast cho ngôi nhà có diện tích nhỏ và
                    vừa. Gói Mesh cho nhà lớn nhà rộng, có tầng lầu.
                  </p>
                  <p>
                    {" "}
                    - Gói cước áp dụng cho 63 tỉnh thành{" "}
                    <strong>trừ TP.HCM & HN</strong>.
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table1 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  {" "}
                  <CellWifiIcon />{" "}
                  <h3>
                    {" "}
                    <>2</>. Danh sách gói internet khu vực thành phố.
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Bảng giá gói cước và khuyến mãi khu vực{" "}
                    <strong>TP.HCM & HN</strong>. Giá cước có sự chênh lệch giữa
                    2 khu vực nội thành và ngoại thành. Chi tiết xin liên hệ ĐT:{" "}
                    <strong>0978.070.070</strong>.
                  </p>
                  <p>
                    - Bảng giá gói cước chỉ áp dụng cho{" "}
                    <strong>TP.HCM & HN</strong>.
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table2 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
          </div>
          
          <div className={cx("packages-wifi")}>
            <div><h2>Combo Truyền hình & Internet Viettel.</h2></div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <ConnectedTvIcon />
                  <h3>
                        1. Bảng giá gói combo Truyền hình & internet Viettel 
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Đăng ký lắp đặt internet viettel và dịch vụ truyền hình
                    internet cáp quang Viettel 2 dịch vụ 1 đường truyền đa tiện
                    ích.
                  </p>
                  <p>
                    - Truyền hình & internet Viettel Chỉ Áp dụng cho{" "}
                    <strong>61 tỉnh thành</strong> và{" "}
                    <strong>Ngoại thành Hà nội</strong>
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table3 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <ConnectedTvIcon />
                  <h3>
                    {" "}
                    2. Bảng giá gói combo Truyền hình Box TV & internet Viettel
                    – Áp dụng cho khu vực TP.HCM & HN.
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Đăng ký lắp đặt internet viettel và dịch vụ truyền hình
                    internet cáp quang Viettel 2 dịch vụ 1 đường truyền đa tiện
                    ích.
                  </p>
                  <p>
                    - Truyền hình & internet Viettel Chỉ Áp dụng cho{" "}
                    <strong>TP.HCM & HN</strong>
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table4 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <ConnectedTvIcon />
                  <h3>3. Bảng giá gói combo Truyền hình App & internet Viettel – Áp dụng cho khu vực TP.HCM & HN</h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Đăng ký lắp đặt internet viettel và dịch vụ truyền hình
                    internet cáp quang Viettel 2 dịch vụ 1 đường truyền đa tiện
                    ích.
                  </p>
                  <p>
                    - Truyền hình & internet Viettel Chỉ Áp dụng cho{" "}
                    <strong>TP.HCM & HN</strong>
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table5 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
          </div>
         

          <div className={cx("packages-wifi")}>
            <div><h2>Danh Sách Các Kênh Truyền Hình.</h2></div>
            <img src={img} alt="" />
            <img src={img2} alt="" />

          </div>
          

          <div className={cx("packages-wifi")}>
            <div><h2>Internet Viettel Gói Cước Doanh Nghiệp..</h2></div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <BusinessIcon />
                  <h3>
                        1. BẢNG GIÁ GÓI CƯỚC INTERNET DOANG NGIỆP.
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Gói cước <strong>INTERNET DOANG NGIỆP</strong> được sinh ra để đáp ứng nhu cầu download và upload tốc độ cao và công việc đặc thù cần ip tĩnh của một số doanh nghiệp.
                  </p>
                  <p>
                    - Được Trang Bị <strong>Modem Draytek</strong> chính hãng
                  </p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table6 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
          </div>

          <div className={cx("packages-wifi")}>
            <div><h2>WIFI 6 Cho Doanh Nghiệp...</h2></div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <CellWifiIcon />
                  <h3>
                        1. BẢNG GIÁ WIFI6 CHO DOANH NGHIỆP.
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - Viettel Telecom ra mắt gói cước WIFI Sin1 dành cho doanh nghiệp với <strong>vùng phủ, giá cước, công nghệ, thiết bị và tốc độ tốt nhất</strong>.
                  </p>
                  <p>- Công nghệ WIFI6 mới nhất trên thị trường, internet mượt mà với tốc độ vượt trội, WIFI phủ khắp mọi nơi. </p>
                  <p>- Internet siêu tốc độ, lên tới 1Gbps, cam kết đảm bảo băng thông quốc tế tối thiểu.</p>
                  <p>- Thiết bị moderm đặc biệt dành riêng cho doanh nghiệp, kết nối đồng thời 80 điểm cùng lúc.</p>
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table7 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
          </div>

          <div className={cx("packages-wifi")}>
            <div><h2>Chương Trình Khuyến Mại Internet Cáp Quang (WIFI)</h2></div>
            <div className={cx("packages-item")}>
              <div className={cx("packages-item-title")}>
                <div className={cx("title-packages")}>
                  <CellWifiIcon />
                  <h3>
                        1. BẢNG GIÁ INTERNET CÁP QUANG (WIFI).
                  </h3>
                </div>
                <div className={cx("content-title-packages")}>
                  <p>
                    - <strong>Viettel Telecom</strong> ra mắt gói khuyến mãi hấp dẫn dành cho Internet cáp quang.
                  </p>
                  
                </div>
              </div>
              <div className={cx("packages-item-table")}>
                <Table8 />
              </div>
              <div className={cx("packages-item-bars")}>
                <div className={cx("bars")}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterWifi;
