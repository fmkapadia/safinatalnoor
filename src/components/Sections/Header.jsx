import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// Components
// Assets

import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import home3 from "../../assets/images/home3.jpg";
import home4 from "../../assets/images/home4.jpg";
import home5 from "../../assets/images/home5.avif";
// import img4 from "../../assets/images/img4.html";

import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
// import { Button } from "react-scroll";
const sliderImages = [
  {
    src: home1,
    alt: "Image 1",
    tagLine: "Building Solutions, One Tool at a Time",
    subHead: "Solutions that fit your needs perfectly.",
  },
  {
    src: home5,
    alt: "Image 2",
    tagLine: "Nuts, Bolts, and Beyond – We've Got It All!",
    subHead: "Delivering cost-effective solutions",
  },
  {
    src: home3,
    alt: "Image 3",
    tagLine: "The Cornerstone of Your Construction Needs",
    subHead: "Tools for Every Task are available",
  },
  {
    src: home4,
    alt: "Image 4",
    tagLine: "Where Builders and Dreamers Shop.",
    subHead: "One stop shop for your needs.",
  },
  // {
  //   src: b3,
  //   alt: "Image 5",
  //   tagLine: "Elite support empowering innovation:",
  //   subHead: "Dedicated engineering for every stage of production.",
  // },
];
// {sliderImages}
export default function Header() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("inside handle Click");
    navigate("/contactUs"); // Navigate to the AnotherPage
  };
  return (
    <Wrapper>
      {/* <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">We are Digital Agency.</h1>
          <HeaderP className="font13 semiBold">
            Hello we are digital company
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" action={handleClick} />
          </BtnWrapper>
          {/* <button onClick={handleClick}>Get Started</button>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          {/* <Img
            className="radius8"
            src={headerImage}
            alt="office"
            style={{ zIndex: 9 }}
          /> 
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <ImageSlide>
                    <Img className="radius8" src={image.src} alt={image.alt} />
                    <TextOverlay>
                      <h2>Your Title Here</h2>
                      <p>Your description here.</p>
                    </TextOverlay>
                  </ImageSlide>
                </div>
              ))}
            </Slider>

            
      </RightSide> */}
      <RightSide>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <ImageSlide>
                  <Img className="" src={image.src} alt={image.alt} />
                  <TextOverlay>
                    <h2>Safinat al Noor</h2>
                    <h3>{image.tagLine}</h3>
                    <p>{image.subHead}</p>
                    <div className="row flexCenter">
                      <CTAButton
                        to="/products"
                        style={{
                          fontSize: "1rem",
                          backgroundColor: "#123011",
                          borderRadius: "1rem",
                          color: "#fff",
                          margin: "1rem",
                        }}
                      >
                        Explore Our Products...
                      </CTAButton>
                    </div>
                  </TextOverlay>
                  {/* <TextOverlay>
                    <h2>Eamah Entrepreneur</h2>
                    <p>
                      Your Trusted Partner for Pharmaceutical Equipment
                      Components(Machinery Spare Parts)
                    </p>
                    <div className="row flexCenter">
                      <CTAButton
                        to="/products/equipments"
                        style={{
                          fontSize: "1rem",
                          backgroundColor: "#0397DD",
                          borderRadius: "1rem",
                          color: "#fff",
                          margin: "1rem",
                        }}
                      >
                        Explore Our Products...
                      </CTAButton>
                    </div>
                  </TextOverlay> */}
                </ImageSlide>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </RightSide>
      <MobileDiv
        className="bg-half-170 d-table w-100"
        style={{
          // background: `url(${banner})`,
          height: "400px",
          overflow: "hidden",
          // marginTop: "80px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginLeft: "1px",
          marginRight: "1px",
          // display: isMob ? "flex" : "none", // Change display based on isMobile
        }}
      >
        <div className="bg-overlay"></div>
        <Container>
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <ImageSlide>
                    <Img className="radius8" src={image.src} alt={image.alt} />
                    <TextOverlay>
                      <h2>Eamah Entreprenuer</h2>
                      <h3>{image.tagLine}</h3>
                      <p>{image.subHead}</p>
                      <div className="row flexCenter">
                        <CTAButton
                          to="/products"
                          style={{
                            fontSize: "1rem",
                            backgroundColor: "#0397DD",
                            borderRadius: "1rem",
                            color: "#fff",
                            margin: "1rem",
                          }}
                        >
                          Explore Our Products...
                        </CTAButton>
                      </div>
                    </TextOverlay>
                  </ImageSlide>
                </div>
              ))}
            </Slider>
          </SliderWrapper>
          {/* <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading title-heading">
                <h2 className="text-white title-dark"> Aboutus </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
      </MobileDiv>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // margin-left: 45px;
  object-fit: cover;
  width: 100vw;
  // border: 1px solid black;
  // min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  position: relative;
  object-fit: cover;
  // padding: 20px;
  // border: 1px solid black;

  @media (max-width: 960px) {
    width: auto;
    height: auto;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    height: auto;
    width: auto;
  }

  @media (max-width: 480px) {
    height: auto;
    width: auto;
    display: none;
  }
  @media (min-width: 1200px) {
    height: auto;
    width: auto;
    padding: 0px;
  }
`;

const MobileDiv = styled.div`
  position: relative;
  object-fit: cover;
  display: none;

  // padding: 20px;
  // border: 1px solid black;
  @media (max-width: 960px) {
    width: auto;
    margin-top: 30px;
  }
  @media (max-width: 768px) {
    width: auto;
  }

  @media (max-width: 480px) {
    height: 400px;
    width: auto;
    display: block;
  }
`;
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #123011;
  color: #fff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #1a3dbf;
    color: "#fff" !important;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
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
const SliderWrapper = styled.div`
  width: 100%;
  padding-top: 80px;

  @media (min-width: 1000px) {
    height: auto;
    margin-top: 30px;
    padding: 0 0px;
  }
`;

const ImageSlide = styled.div`
  position: relative;
  width: 100vw;
  height: 500px;
  @media (max-width: 768px) {
    height: 500px;
    width: auto;
  }

  @media (max-width: 480px) {
    height: auto;
    width: auto;
  }
  @media (min-width: 1200px) {
    height: auto;
    width: auto;
    padding: 0px;
  }
`;

const Img = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: fill;
  @media (max-width: 768px) {
    height: 400px;
    width: auto;
  }

  @media (max-width: 480px) {
    height: 400px;
    width: auto;
  }
  @media (min-width: 1200px) {
    height: 500px;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4); // Semi-transparent black overlay
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  z-index: 10;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
    @media (max-width: 768px) {
    padding: 30px;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 480px) {
    padding: 20px;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
},
`;
