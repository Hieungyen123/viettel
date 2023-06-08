import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import React from 'react';
import './App.scss';
import { useState } from 'react';

function PhoneIconBottom() {
    const [show,setShow] = useState(true)
    const handleShow = () => {
        setShow(!show)
    }
    return (  
        <div  className='PhoneIconBottom'>
            <div className='PhoneBottomIcon' onClick={() => handleShow()}>
                <PhoneCallbackIcon className='IconPhoneBottom'/>
            </div>
            <div className='phoneNumber'><a href="tel:0978070070" className={show ? 'PhoneNumberHide' : 'PhoneNumberHide PhoneNumberShow '}>0978070070</a></div>
        </div>
        
    );
}

export default PhoneIconBottom;