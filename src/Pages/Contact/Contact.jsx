import styled from "./Contact.module.scss";
import classNames from "classnames/bind";


// import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CellWifiIcon from '@mui/icons-material/CellWifi';
function Contact() {
    const cx = classNames.bind(styled);

    return (  
        <div className={cx('contact')}>
            <div className="container">
                <div className={cx('flex')} >
                    <div className={cx('content')}>
                        <div className={cx('content-agile1')}> 
                            <div>
                                <h2>Thông tin liên hệ</h2>
                                <p>Hãy để lại thông tin, chúng tôi sẽ tìm đến bạn</p>
                            </div>

                            <div className={cx('content-phoneNum')}><p>Hoặc liên hệ trực tiếp với tôi: <strong>0336123337</strong></p></div>
                        </div>
                        <div className={cx('content-agile2')}> 
                            <form action="#" method="post">
                                <div className={cx('form-item')}>
                                    <BorderColorIcon className={cx('form-icon')} />
                                    <input type="text" id="name" placeholder="Nhập tên của bạn" />
                                </div>
                                <div className={cx('form-item')}>
                                    <PhonelinkRingIcon className={cx('form-icon')} />
                                    <input type="text" inputMode="decimal" id="phone" placeholder="Số điện thoại của bạn" pattern="[0-9,\.]*" />
                                </div>
                                <div className={cx('form-item')}>
                                    <LocationOnIcon className={cx('form-icon')} />
                                    <input type="text" id="name" placeholder="Địa chỉ của bạn" />
                                </div>
                                <div className={cx('form-item')}>
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
                                    
                                    <input className={cx('input-submit')} type="submit"  value="Gửi"/>
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