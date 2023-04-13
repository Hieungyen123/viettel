import React from "react";
import styled from './Province.module.scss'
import classNames from 'classnames/bind';
import img from '../../Image/family.jpg'

import WifiIcon from '@mui/icons-material/Wifi';
import SecurityIcon from '@mui/icons-material/Security';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
function Province() {

    const cx = classNames.bind(styled)

    return (  
        <div className={cx('Province')}>
            <div className="container">
                <div className={cx('flex')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <div className={cx('title-h2')} ><h2>TỔNG ĐÀI LẮP ĐẶT INTERNET VIETTEL. Đăng ký lắp mạng wifi cho gia đình bạn.</h2></div>
                            <div className={cx('title-content')}>
                                <h4>Điều gì khiến khách hàng luôn tin tưởng và sử dụng Internet Viettel?</h4>
                                <p>
                                    Tốc độ truy cập internet cao và ổn định. Sở hữu hơn 365.000 km cáp quang và nhiều đường 
                                    truyền cáp quang kết nối quốc tế trên biển và đất liền, đảm bảo tốt nhất dịch vụ cho Khách 
                                    hàng. Áp dụng các công nghệ tiên tiến nhất nhằm mang lại trải nghiệm tối đa cho Khách hàng 
                                    trong quá trình sử dụng dịch vụ (mesh wifi, xGSPON, Camera AI…).
                                </p>
                            </div>
                        </div>
                        <div className={cx('body-content')} >
                            <div className={cx('body-img')}>
                                
                                <div className={cx('body-item')}>
                                    <div className={cx('item')}>
                                        <SecurityIcon/>
                                        <p>An toàn, uy tín được đặt lên hàng đầu.</p>
                                    </div>
                                    <div className={cx('item')}>
                                        <WifiIcon/>
                                        <p>Đường truyền mạnh mẽ.</p>
                                    </div>
                                    <div className={cx('item')}>
                                        <CreditScoreIcon/>
                                        <p>Ưu đãi hấp dẫn.</p>
                                    </div>
                                    <div className={cx('item')}>
                                        <EmojiPeopleIcon/>
                                        <p>Tận tụy với khách hàng.</p>
                                    </div>
                                </div>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className={cx('last-content')} >
                            <div>
                                <h2>Quy trình lắp đặt Internet Viettel tại Hồ Chí Minh.  </h2>
                                <div>
                                    <p>
                                        <strong>Bước 1:</strong> Khách hàng tham khảo các gói cước WiFi của Viettel, 
                                        các chương trình khuyến mại đi kèm với gói cước được áp dụng đó ở khu vực đó. 
                                        Hãy lựa chọn một gói cước mà khách hàng cảm thấy phù hợp nhất với nhu cầu sử dụng 
                                        của cá nhân, gia đình/công ty, doanh nghiệp của mình.
                                    </p>
                                    <p>
                                        <em>Lưu ý:</em> Để biết được giá gói cước, các khuyến mãi đi kèm gói cước đó các bạn nên gọi điện tới số Hotline Lắp đặt WiFi của 
                                        Viettel Telecom để được tư vấn cụ thể và cập nhật thông tin về các khuyến mãi mới nhất.
                                    </p>
                                    <p>
                                        <strong>Bước 2:</strong> Sau khi đã lựa chọn được gói cước phù hợp, 
                                        khách hàng hãy cung cấp chính xác thông tin địa chỉ lắp đặt cho Viettel. 
                                        Sau đó nhân viên kinh doanh của Viettel sẽ về địa chỉ bạn cung cấp để khảo sát hạ tầng và triển khai
                                        các phương án Lắp đặt WiFi Viettel tại nhà. 
                                        Thời gian khảo sát khoảng 15 – 30 phút, hoặc có thể lâu hơn nếu địa hình phức tạp
                                    </p>
                                    <p>
                                        <strong>Bước 3:</strong> Sau khảo sát, nếu như hạ tầng đáp ứng được đầy đủ các tiêu chí của Viettel Telecom, n
                                        hư: Khoảng cách lắp đặt không quá xa, đảm bảo chất lượng đường truyền ổn định, 
                                        đủ port quang,… thì nhân viên kinh doanh Viettel sẽ tiến hành hỗ trợ làm hợp đồng cung cấp dịch vụ.
                                    </p>
                                    <p>
                                        <em>Lưu ý:</em> Viettel Telecom sẽ hỗ trợ làm hợp đồng tại địa chỉ mà khách hàng yêu cầu, 
                                        tuy nhiên sau đó khách hàng cần thanh toán trước một khoản tiền trả trước hoặc phí hòa mạng (nếu có)
                                        cho nhân viên kinh doanh. Thường thì khách hàng trả trước 6 tháng sẽ được tặng thêm 1 tháng cước, 
                                        trả trước 2 tháng sẽ được tặng thêm 2 tháng cước.
                                    </p>
                                    <p>
                                        <strong>Bước 4:</strong> Từ 1 – 2 ngày sau khi đã hoàn tất hợp đồng cung cấp dịch vụ,
                                        nhân viên kỹ thuật của Viettel Telecom sẽ triển khai Lắp đặt WiFi Viettel cho khách hàng. 
                                        Để chủ động hơn trong công việc, khách hàng hoàn toàn có thể hẹn ngày, giờ (không quá 17h30 phút), 
                                        kỹ thuật viên lắp đặt vào tất cả các ngày trong tuần, kể cả thứ 7 và chủ nhật.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Province;