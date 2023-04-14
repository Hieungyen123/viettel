import styled from "./Contact.module.scss";
import classNames from "classnames/bind";

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

// import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import SendIcon from '@mui/icons-material/Send';


import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
function Contact() {
    const cx = classNames.bind(styled);

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

    return (  
        <div className={cx('contact')}>
            <div className="container">
                <div className={cx('flex')} >
                    <div className={cx('title')} > 
                        <h1 data-aos ='fade-down' data-aos-duration = '2000'>Chúng tôi có thể giúp gì cho bạn ? </h1>
                        <p data-aos ='fade-up' data-aos-duration = '2000'>Bạn đang có dự định lắp đặt Internet hoặc truyền hình cáp ? Hãy để chúng tôi thực hiện mong muốn đó của bạn.</p>
                    
                    </div>
                    <div className={cx('content-2')}>
                        <div className={cx('item-content-2')}  data-aos ='fade-up-right' data-aos-duration = '4500'>
                            <LocationOnOutlinedIcon  className={cx('item-content-2-icon')} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur nam! Dolor, tempore. </p>
                        </div>
                        <div className={cx('item-content-2')} data-aos ='fade-up' data-aos-duration = '4500'>
                            <LocalPhoneOutlinedIcon  className={cx('item-content-2-icon')} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur nam! Dolor, tempore. </p>
                        </div>
                        <div className={cx('item-content-2')} data-aos ='fade-up-left' data-aos-duration = '4500'>
                            <ForwardToInboxOutlinedIcon  className={cx('item-content-2-icon')} />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aspernatur nam! Dolor, tempore. </p>
                        </div>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-agile1')}> 
                            <div className={cx('content-agile1-content')} data-aos ='fade-down' data-aos-duration = '6500'>
                                <h2 >Thông tin liên hệ</h2>
                                <p >Hãy để lại thông tin của bạn, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</p>
                            </div>

                            <div className={cx('content-phoneNum')} data-aos ='fade-down' data-aos-duration = '6500'><p>Hoặc liên hệ trực tiếp với tôi: <strong>0336123337</strong></p></div>
                        </div>
                        <div className={cx('content-agile2')}> 
                            <form action="#" method="post">
                                <div className={cx('form-item')} data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration = '2500'>
                                    <BorderColorIcon className={cx('form-icon')} />
                                    <input type="text" id="name" placeholder="Nhập tên của bạn" />
                                </div>
                                <div className={cx('form-item')} data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration = '4500'> 
                                    <PhonelinkRingIcon className={cx('form-icon')} />
                                    <input type="text" inputMode="decimal" id="phone" placeholder="Số điện thoại của bạn" pattern="[0-9,\.]*" />
                                </div>
                                <div className={cx('form-item')} data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration = '6500'>
                                    <LocationOnIcon className={cx('form-icon')} />
                                    <input type="text" id="name" placeholder="Địa chỉ của bạn" />
                                </div>
                                <div className={cx('form-item')} data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration = '8500'>
                                    <CellWifiIcon className={cx('form-icon')} />
                                    <select name="internet" id="internet">
                                        <option value="internet">internet</option>
                                        <option value="net1plus">net1plus</option>
                                        <option value="net2plus">net2plus</option>
                                        <option value="net3plus">net3plus</option>
                                        <option value="net4plus">net4plus</option>
                                        <option value="net5plus">net5plus</option>
                                        <option value="supernet1">supernet1</option>
                                        <option value="supernet2">supernet2</option>
                                        <option value="supernet4">supernet4</option>
                                        <option value="supernet5">supernet5</option>
                                        <option value="internet & truyền hình">internet & truyền hình</option>
                                    </select>
                                </div>
                                <div className={cx('form-item-submit')}> 
                                    <button   className={cx('input-submit')} >
                                        <div  className={cx('wrapper')}>
                                            <SendIcon className={cx('submit-icon')}/>
                                        </div>
                                        <span>Gửi</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;