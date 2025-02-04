import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="A perfect shop for Hardware ,Sanitary and Electrical requirements.The staff are also quite knowledgeable and helpful.
"
            author="Huzefa Qutbi"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="They got alot of varity. One will find complete range of electronic supplies inside store."
            author="Nikhil Pathania"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Best place to shop in this locality. Staff gives honest suggestions and behaves nicely."
            author="Moiz Contractor"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Most popular utilitarian hardware shop in muweilih suburb . Has their own parking and good service staff"
            author="Thaha abdul vahab"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The best time in town they have very good automorphism service  and price and very reasonable"
            author="K.H TRADING LLC"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="All products in relation to hardware and sanitary available under one roof. Good quality products at best prices."
            author="Mariam Nakara"
          />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  margin-top: 2rem;
  margin-bottom: 4rem;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
