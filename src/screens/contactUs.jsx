import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image5 from "../assets/img/banner/image5.jpg";
import contact2 from "../assets/img/banner/contactbanner.png";
import ServiceBox from "../components/Elements/ServiceBox";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/Sections/FooterSection";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div>
          <TopNavbar />
          {/* <HeaderInfo> */}
          {/* <section
            // className="bg-half-170 bg-primary d-table w-100"
            style={{
              backgroundImage: `url(${image5})`,
              backgroundSize:
                "cover" /* Ensures the image covers the entire viewport ,
              backgroundPosition: "center",
              height: "750px", // Set the desired height
              // overflow: "hidden",
              marginTop: "80px",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              width: "100vw",
              border: "1px solid white",
            }}
            className="responsive-section"
          >
            <Container>
              <Row className="mt-5 justify-content-center">
                <Col lg={12} className="text-center">
                  <div
                    className="pages-heading"
                    style={{
                      position: "absolute", // Absolutely position to overlap the iframe
                      top: "50%", // Align to the center vertically
                      left: "50%", // Align to the center horizontally
                      transform: "translate(-50%, -50%)", // Shift to true center
                      zIndex: 2, // Ensure the content is above the iframe
                      color: "#0b093b", // Text color
                      textAlign: "center", // Center text horizontally
                    }}
                  ></div>
                </Col>
              </Row>
            </Container>
          </section> */}
          <BackgroundImageWrapper>
            <img src={image5} alt="Background" />
          </BackgroundImageWrapper>
          <div
            style={{
              position: "relative", // Absolutely position to overlap the iframe
              top: "50%", // Align to the center vertically
              left: "50%", // Align to the center horizontally
              transform: "translate(-50%, -50%)", // Shift to true center
              zIndex: 2, // Ensure the content is above the iframe
              // color: "#0397DD", // Text color
              textAlign: "center",
              marginTop: "5rem",
              // paddingTop: "2rem",
              marginBottom: "0", // Center text horizontally
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            {/* <h1>Contact Us</h1> */}
            <Heading>
              At <span style={{ color: "#4169E1" }}>Safinat al Noor</span> we
              take pride in providing top-quality hardware supplies, expert
              advice, and excellent customer service.
            </Heading>
            <div style={{ marginBottom: "0" }}>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  color: "#4169E1",
                  fontWeight: "800",
                }}
              >
                {" "}
                Have a question? Need assistance? We're here to help!
              </p>
              <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                Purchase Inquiry:
                <span
                  style={{
                    fontWeight: "bold",
                    color: "#4169E1",
                  }}
                >
                  safinatalnoor@yahoo.com
                </span>
              </p>
              {/* <p style={{ fontSize: "1.2rem" }}>
                Sales Inquiry:
                <span
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  sales@eamahent.com
                </span>
              </p> */}
            </div>
          </div>
          {/* </HeaderInfo> */}
          <ServiceBox1>
            <ServiceBoxRow>
              <ServiceBoxWrapper>
                <div
                  style={{
                    textAlign: "center",
                    // padding: "5px",
                    fontSize: "1.2rem",
                  }}
                >
                  {/* SVG Icon */}
                  <div
                    style={{
                      marginBottom: "1px",
                      marginTop: "5rem",
                    }}
                  >
                    <FaLocationDot size={28} />
                  </div>

                  {/* Title */}
                  <StyledHeading>Location</StyledHeading>

                  {/* Subtitle/Content */}
                  <StyledPara>
                    <p>
                      7CVV+FH5 - Muwaileh Commercial - Industrial Area - Sharjah
                      - United Arab Emirates
                    </p>
                  </StyledPara>
                </div>
              </ServiceBoxWrapper>

              <ServiceBoxWrapper>
                <div
                  style={{
                    textAlign: "center",
                    // padding: "10px",
                    fontSize: "1.5rem",
                  }}
                >
                  {/* SVG Icon */}
                  <div
                    style={{
                      marginBottom: "15px",
                    }}
                  >
                    <FaPhoneVolume size={25} />
                  </div>
                  {/* Title */}
                  <StyledHeading>Phone</StyledHeading>
                  {/* Subtitle/Content */}{" "}
                  <StyledPara>
                    <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                      Connect with us
                    </p>
                    <span
                      style={{
                        marginTop: "10px",
                        color: "#000",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      +971 6 543 5142
                    </span>
                  </StyledPara>
                </div>
              </ServiceBoxWrapper>
              <ServiceBoxWrapper>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "15px",
                    }}
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48" // Customize size
                      height="48"
                      fill="currentColor" // Use color based on your theme
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.45-.48-4.5-2.53-4.98-4.98H5v-2h3.02C8.5 9.6 10.55 7.55 13 7.07V5h2v2.07c2.45.48 4.5 2.53 4.98 4.98H19v2h-3.02c-.48 2.45-2.53 4.5-4.98 4.93v2.93h-2V19.93zm0-15.93c-2.76 0-5 2.24-5 5h-2c0-3.87 3.13-7 7-7V2h2v2.07c2.76.48 5 2.53 5 5h-2c0-2.76-2.24-5-5-5z" />
                    </svg> */}
                    <MdMarkEmailRead size={30} />
                  </div>
                  <StyledHeading>Email</StyledHeading>
                  <StyledPara>
                    <p style={{ marginTop: "10px" }}>
                      Purchase Inquiry:
                      <br />
                      <span
                        style={{
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "1rem",
                        }}
                      >
                        safinatalnoor@yahoo.com
                      </span>
                    </p>
                  </StyledPara>
                  {/* <p style={{ marginTop: "1px" }}>
                    Sales Inquiry:
                    <br />
                    <span
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "1rem",
                      }}
                    >
                      sales@eamahent.com
                    </span>
                  </p> */}
                </div>
              </ServiceBoxWrapper>
            </ServiceBoxRow>
          </ServiceBox1>
          <div className="row" style={{ paddingBottom: "30px" }}></div>
          <ServiceBox1
            className=""
            style={{
              height: "470px", // Set the desired height
              overflow: "hidden", // Hide any overflow from iframe
            }}
          >
            {/* Iframe as Background */}
            <ServiceBoxRow>
              {/* <iframe
                title="address"
                src="https://www.google.com/maps/embed?pb=!q=7CVV+FH5+Muwaileh+Commercial+Industrial+Area+Sharjah+United+Arab+Emirates"
                style={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%", // Full height of section
                  zIndex: 1, // Ensure the iframe is behind the content
                  border: 0,
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <iframe
                title="address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3144414838002!2d55.44140411061!3d25.29363747755584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f1ab69d4249%3A0x9d1bc954b4d40d5e!2s7CVV%2BFH5%20-%20Muwaileh%20Commercial%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1738259912852!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%", // Full height of section
                  zIndex: 1, // Ensure the iframe is behind the content
                  border: 0,
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </ServiceBoxRow>
          </ServiceBox1>

          <FooterSection />
        </div>
      </div>
    </Wrapper>
  );
};
const BackgroundImageWrapper = styled.div`
  position: relative;
  height: 600px;
  margin-top: 80px;
  width: 100vw;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 400px; /* Allow the image to maintain its aspect ratio */
      // object-fit: contain; /* Adjust how the image fits */
    }

    @media (max-width: 480px) {
      height: 400px;
      object-position: top; /* Focus on the top of the image for smaller screens */
    }
  }
`;
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 100px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const ServiceBoxRow = styled.div`
  display: flex;
  background-color: #fff;
  height: 380px;
  padding: 10px;
  justify-content: space-evenly; /* Center the boxes horizontally */
  align-items: center; /* Vertically center content */
  gap: 20px; /* Space between boxes */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 95%;

  @media (max-width: 860px) {
    flex-direction: column; /* Stack the boxes on small screens */
    width: 85%;
    height: auto;
    padding: 10px;
    margin-top: 2rem;
  }
`;
const ServiceBox1 = styled.div`
  display: flex;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center; /* Vertically center content */
  gap: 10px; /* Space between boxes */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  width: 100%;
  @media (max-width: 860px) {
    flex-direction: column; /* Stack the boxes on small screens */
    height: auto;
  }
`;
const StyledPara = styled.p`
  margin-top: 10px;
  margin-bottom: 3rem;
  // border: 1px solid black;
  @media (max-width: 860px) {
    width: 200px;
    align-items: start;
    justify-content: center;
  }
`;
const Heading = styled.h2`
 font-size: 3.75rem,
                font-weight: 600,
                color: #0b093b,
                text-align: center;
  margin-top:10rem;

  @media (max-width: 768px) {
    margin: 22rem 5rem 4rem 3rem; /* Increase margin for smaller screens */
  }

  @media (max-width: 480px) {
    margin: 22rem 5rem 4rem 3rem; /* Further increase margin for very small screens */
  }

`;
const ServiceBoxWrapper = styled.div`
  width: 30%; /* Set a fixed width for larger screens */
  margin-right: 2%; /* Add space between boxes */
  margin-bottom: 5rem,
    // border: 1px solid black;
    @media (max-width: 860px) {
    width: 100%; /* Full width on small screens */
    margin-right: 0; /* Remove margin on smaller screens */
    text-align: center; /* Center the content */
    padding: 40px 0; /* Reduce padding on smaller screens */
  }
  &:hover {
    color: #4169e1; // Fade to a new color
    // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05); /* Slight zoom effect */
    transition: color 0.3s, transform 0.3s;
  }
`;
const StyledHeading = styled.h3`
  font-size: 1.8rem;
  margin-top: 15px;
  color: #4169e1;
  transition: color 0.3s ease;

  ${ServiceBoxWrapper}:hover & {
    color: #0b093b; // Change to your desired hover color
  }
`;
export default ContactUs;
