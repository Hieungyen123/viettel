import styled from "./Home.module.scss";
import classNames from "classnames/bind";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slide from "../../components/Slide/Slide";
import TitleHome from "../../components/TitleHome/TitleHome";
import RegisterWifi from "../../components/RegisterWifi/RegisterWifi";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
function Home() {
  const cx = classNames.bind(styled);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={cx("home")}>
      <div className="container">
        <div className={cx("content")}>
          <div className={cx("title")}>
            <h2
              data-aos="fade-down"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2500"
            >
              Viettel Telecom – Nhà Cung Cấp Dịch Vụ Di Động, Internet, Truyền
              Hình Và Giải Pháp CNTT.
            </h2>
          </div>
          <Slide />
          <TitleHome />
          <RegisterWifi />
          <div className={cx("video-mesh")}>
            <h2>
              <SettingsRemoteIcon /> Wifi Mesh Viettel là gì ?
            </h2>
            <div className={cx("video-mesh-div")}>
              <iframe
                className={cx("video")}
                //   width="700"
                //   height="350"
                src="https://www.youtube.com/embed/nVdz6sC6MhI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
