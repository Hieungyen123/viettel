import SimpleSlider from "./Slick";
import './Slide.scss'
function Slide() {

    return (  
        <div className='slide'>
            <div className="container">
                <div className='content-slide'>
                    <div className='content-flex'><SimpleSlider/></div>
                </div>
            </div>
        </div>
    );
}

export default Slide;