import React from "react";
import styled from './Footer.module.scss'
import classNames from 'classnames/bind';



import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import img2 from '../../Image/logo4.png'

function Footer() {
    const cx = classNames.bind(styled)
    return (  
        <div>
            <div className={cx('Footer')}>
                <div className="container">
                    <div >
                        <div className={cx('flex')}>
                            <div className={cx('Footer-logo')}>
                                <a href="/#">
                                    <span className={cx('Footer-logo-left')}></span>
                                    <img width="160" height="100" src={img2} alt="Internet Viettel"></img>
                                    <span className={cx('Footer-logo-right')}></span>
                                </a>
                            </div>
                            <div className={cx('Footer-content-flex')}>
                                <div className={cx('Footer-content')}>
                                    <div className={cx('Footer-content-title')}>
                                        <h3>Về chúng tôi:</h3>
                                    </div>
                                    <div>
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
                                    </div>
                                    
                                </div>
                                <div className={cx('Footer-contact')}>  
                                    <div className={cx('Footer-contact-title')}>
                                        <h3>Liên hệ:</h3>
                                    </div>
                                    <div className={cx('Footer-contact-icon')}>
                                        <a href="/#"><FacebookIcon className={cx('icon')}/> <p> <strong>Facebook:</strong>  name of facebook  </p> </a>
                                        <a href="/#"><LocalPhoneIcon className={cx('icon')}/> <p><strong>Phone:</strong> 0978.070.070</p> </a>
                                        <a href="/linhleduy1290@gmail.com"><EmailIcon className={cx('icon')}/><p><strong>Mail:</strong> linhleduy1290@gmail.com</p> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            <div className={cx('Footer-title')}><h4>Developed by ...</h4></div>
        </div>
    );
}

export default Footer;