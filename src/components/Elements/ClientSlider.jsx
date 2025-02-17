import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import Picture1 from "../../assets/img/clients/Picture1.jpg";
import Picture6 from "../../assets/img/clients/Picture6.png";
import Picture2 from "../../assets/img/clients/Picture2.png";
import Picture3 from "../../assets/img/clients/Picture3.jpg";
import Picture4 from "../../assets/img/clients/logo5.png";
import Picture5 from "../../assets/img/clients/InvaGen.jpg";
import Picture7 from "../../assets/img/clients/Picture7.png";
import Picture8 from "../../assets/img/clients/Picture8.jpg";
import Picture9 from "../../assets/img/clients/Picture9.png";
import Picture10 from "../../assets/img/clients/logo4.png";
import Picture11 from "../../assets/img/clients/logo2.png";
import Picture12 from "../../assets/img/clients/Picture12.png";
import Picture13 from "../../assets/img/clients/Picture13.jpg";
import Picture14 from "../../assets/img/clients/Picture14.png";
import Picture15 from "../../assets/img/clients/Picture15.png";
import Picture16 from "../../assets/img/clients/logoM.png";
import Picture17 from "../../assets/img/clients/Picture17.jpg";

import p1 from "../../assets/images/clients/bosch.avif";
import p2 from "../../assets/images/clients/ariston.avif";
import p3 from "../../assets/images/clients/clarke.avif";
import p4 from "../../assets/images/clients/dewalt.avif";
import p5 from "../../assets/images/clients/paints.avif";
import p6 from "../../assets/images/clients/stanley.avif";
import p7 from "../../assets/images/clients/abb.jpg";
import p8 from "../../assets/images/clients/black-amp-decker.svg";
import p9 from "../../assets/images/clients/dorma.jpg";
import p10 from "../../assets/images/clients/esab.jpg";
import p11 from "../../assets/images/clients/fluke.jpg";
import p12 from "../../assets/images/clients/grohe.jpg";
import p13 from "../../assets/images/clients/hager.jpg";
import p14 from "../../assets/images/clients/hioki.png";
import p15 from "../../assets/images/clients/hitachi.jpg";
import p16 from "../../assets/images/clients/irwin.jpg";
import p17 from "../../assets/images/clients/iseo.png";
import p18 from "../../assets/images/clients/jotun.jpg";
import p19 from "../../assets/images/clients/knipex.jpg";
import p20 from "../../assets/images/clients/legrand.jpg";
import p21 from "../../assets/images/clients/makita.png";
import p22 from "../../assets/images/clients/metabo.jpg";
import p23 from "../../assets/images/clients/milwaukee3.jpg";
import p24 from "../../assets/images/clients/rak.jpg";
import p25 from "../../assets/images/clients/victor.png";
import p26 from "../../assets/images/clients/yale.jpg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider der {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p1} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p2} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p3} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p4} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p5} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p6} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p7} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p8} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p9} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p11} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p12} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p13} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p14} alt="client logo" />
        </LogoWrapper>

        <LogoWrapper className="flexCenter">
          <ImgStyle src={p15} alt="client logo" />
        </LogoWrapper>

        <LogoWrapper className="flexCenter">
          <ImgStyle src={p16} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p17} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p18} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p19} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p20} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p21} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p22} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p23} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p24} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p25} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={p26} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  height: 11rem;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
