import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import { Link } from "react-router-dom";
// Assets

import Dots from "../../assets/svg/Dots";
import home6 from "../../assets/images/home6.jpg";
import home7 from "../../assets/images/branch1.jpeg";
import home8 from "../../assets/images/branch2.jpeg";
// import home9 from "../../assets/images/home9.jpg";

export default function Services() {
  const [isVisibleServiceBox, setIsVisibleServiceBox] = useState(false);
  const [isVisibleAdvertising, setIsVisibleAdvertising] = useState(false);

  const serviceBoxRef = useRef();
  const advertisingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleServiceBox(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (serviceBoxRef.current) {
      observer.observe(serviceBoxRef.current);
    }

    return () => {
      if (serviceBoxRef.current) {
        observer.unobserve(serviceBoxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleAdvertising(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (advertisingRef.current) {
      observer.observe(advertisingRef.current);
    }

    return () => {
      if (advertisingRef.current) {
        observer.unobserve(advertisingRef.current);
      }
    };
  }, []);

  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "20px 0", marginTop: "40px" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="" style={{ padding: "40px 0", background: "#fff" }}>
        <div className="container">
          <HeaderInfo>
            <h1 style={{ color: "#4169E1", fontSize: "40px" }}>
              What We Value most
            </h1>
            <p style={{ color: "#000", fontSize: "1.2rem" }}>
              Some key values that we follow especially those involved in repair
              services or customer support:
            </p>
          </HeaderInfo>
          <ServiceBoxRow
            ref={serviceBoxRef}
            isVisible={isVisibleServiceBox}
            className="flex"
          >
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title=" Customer-Centric Service
"
                subtitle=" We go above and beyond to meet our customer needs and offer personalized recommendations for projects or repairs."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Attention to Detail"
                subtitle="Our in-depth knowledge and experience ensures all repair work is thorough and tools/materials are of high quality and we always maintain a well-organized and stocked store"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Reliability"
                subtitle="We ensure repairs and services are completed with precision and on time and guarantees quality in every product and service offered."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Innovation"
                subtitle=" We are adaptive to new tools and technologies to improve repair services  and also always ready to provide creative solutions to unique hardware challenges"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising
              ref={advertisingRef}
              isVisible={isVisibleAdvertising}
              className="flexSpaceCenter"
            >
              <AddLeft>
                <h4 style={{ color: "#4169E1", fontSize: "40px" }}>
                  A few words about company
                </h4>
                {/* <h2 className="font40 extraBold">A Study of Creativity</h2> */}
                <p style={{ color: "#000", fontSize: "1.2rem" }}>
                  Safinat al Noor is a trusted partner for all things in
                  hardware! We’re here to empower builders, DIY enthusiasts, and
                  professionals alike with the tools and materials they need to
                  bring their projects to life.
                  <br />
                  We take pride in being an active part of our community by
                  supporting local projects, partnering with builders, and
                  offering workshops to help you learn skill.
                </p>
                <ButtonsRow
                  // className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <CTAButton
                    to="/aboutUs"
                    style={{
                      fontSize: "1.2rem",
                      backgroundColor: "#862633",
                      borderRadius: "1rem",
                      color: "#fff",
                      marginRight: "1rem",
                    }}
                  >
                    Know more
                    <i
                      className="uil uil-angle-right-b align-middle"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </CTAButton>

                  <CTAButton
                    to="/contactUs"
                    style={{
                      fontSize: "1.2rem",
                      backgroundColor: "#862633",
                      borderRadius: "1rem",
                      color: "#fff",
                      // margin: "3rem",
                    }}
                  >
                    Contact Us{" "}
                    <i
                      className="uil uil-angle-right-b align-middle"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </CTAButton>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={home7} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={home8} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={home6} alt="office" />
                    </AddImgWrapp3>
                    {/* <AddImgWrapp4>
                      <img src={home9} alt="office" />
                    </AddImgWrapp4> */}
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(50px); // Slide out to the right
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #2b56f5;
  color: #fff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #1a3dbf;
    color: "#fff" !important;
    transform: scale(1.05);
  }
  @media (max-width: 860px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;
const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${slideIn} 3s ease forwards;
    `}
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;

  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  // margin-top: 80px;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 0px 0 40px 0;
  }
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${slideOut} 0.5s ease forwards;
    `}

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
    animation: ${slideIn} 1s ease forwards;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 2px auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: 70px;
  right: 0;
  @media (max-width: 860px) {
    margin-top: 5rem;
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
    flex-direction: column;
  }
`;
const AddRightInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    justify-content: center; /* Centers images horizontally */
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 100%; /* Ensures images don't exceed their container */
      max-width: 300px; /* Prevents images from becoming too large */
    }
  }
`;

const AddImgWrapp1 = styled.div`
  width: 40%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: 170px;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    margin: 10%;
  }
`;
const AddImgWrapp2 = styled.div`
  width: 40%;
  // margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: 170px;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    margin: 10%;
  }
`;
const AddImgWrapp3 = styled.div`
  width: 40%;
  // margin-left: 40%;
  img {
    width: 90%;
    height: 250px;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    margin: 10%;
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    margin: 10%;
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
