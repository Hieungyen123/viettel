import styled from './TitleHome.module.scss'
import classNames from 'classnames/bind';

import img from '../../Image/internet.jpg'
function TitleHome() {

    const cx = classNames.bind(styled)
    return (  
        <div className={cx('TitleHome')}>
            <div className='container'>
                <div className={cx('flex')}>
                    <div className={cx('title')}><h3>TỔNG ĐÀI LẮP ĐẶT WIFI VIETTEL.</h3></div>
                    <div className={cx('content')}>
                        <p> 
                            &nbsp; Viettel hiện đang là nhà mạng có độ phủ sóng rộng nhất Việt Nam. 
                            Nhà mạng luôn đưa ra các gói cước ưu đãi lớn, nhiều phần quà hấp dẫn. 
                            Trong năm 2022, khi khách hàng lắp đặt internet Viettel chỉ 189.000đ/tháng 
                            Siêu Tốc 150Mbps( Giá đã bao gồm VAT) sẽ được trang bị modem wifi 4 cổng 2 băng tần là 2,4Ghz và 5.0Ghz. 
                            Tặng đến 03 tháng cước khi khách hàng tham gia đóng cước trước , hỗ trợ nhiệt tình, nhanh chóng.
                        </p>
                        <p>Quý khách có nhu cầu lắp đặt wifi viettel xin vui lòng để lại thông tin vào Form TƯ VẤN MIỄN PHÍ hoặc gọi hotline: <strong>0336123337</strong></p>
                    </div>
                    <div className={cx('image')}>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitleHome;
