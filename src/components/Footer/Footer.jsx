import React from "react";
import styled from './Footer.module.scss'
import classNames from 'classnames/bind';
import img from '../../Image/cuahang.jpg'
import img2 from '../../Image/logo4.png'

function Footer() {
    const cx = classNames.bind(styled)
    return (  
        <div>
            <div className={cx('Footer')}>
                <div className="container">
                    <div >
                        <div className={cx('flex')}>
                            <div className={cx('Footer-content-flex')}>
                                <div className={cx('Footer-content')}>
                                    <div className={cx('Footer-logo')}><img width="160" height="100" src={img2} alt="Internet Viettel"></img></div>
                                    <p>
                                        <strong>Cơ quan chủ quản:</strong> Tổng Công ty Viễn thông Viettel (Viettel Telecom) - 
                                        Chi nhánh Tập đoàn Công nghiệp - Viễn thông Quân đội.
                                    </p>
                                    <p>
                                        <strong>Mã số doanh nghiệp:</strong>   0100109106-011 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/07/2005, sửa đổi lần thứ 15 ngày 18/12/2018. 
                                    </p>
                                    <p>
                                        <strong>Chịu trách nhiệm nội dung:</strong> Ông Cao Anh Sơn 
                                    </p>
                                    <div className={cx('Footer-button')}>
            
                                    </div>
                                </div>
                                <div className={cx('Footer-img')}>
                                        <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            <div className={cx('Footer-title')}><h4>VIETTEL-WIFI.NET WEBSITE DV INTERNET CÁP QUANG CHÍNH THỨC CỦA VIETTEL TELECOM.</h4></div>
        </div>
    );
}

export default Footer;