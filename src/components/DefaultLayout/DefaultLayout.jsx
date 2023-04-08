
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import  "./DefaultLayout.scss";
    
function DefaultLayout({children}) {
    return (  
        <div>
            <Header/>
            <div className="Content-body">
                <div className="Content-body-item">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;