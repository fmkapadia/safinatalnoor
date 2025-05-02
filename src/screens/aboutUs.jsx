import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";
import CountUp from "react-countup";
import about from "../assets/images/aboutUs.jpg";
import shop from "../assets/images/shopPic.jpg";
import TestimonialSlider from "../components/Elements/TestimonialSlider";
// Components
import FullButton from "../components/Buttons/FullButton";
import ClientSlider from "../components/Elements/ClientSlider";
// import NavBar from "./NavBar";

//Import images
import b4 from "../assets/img/banner/AboutUsBanner1.jpeg";
import b3 from "../assets/img/banner/AboutUsBanner2.jpg";
import b8 from "../assets/img/banner/AboutUsBanner3.jpeg";
import b9 from "../assets/img/banner/AboutUsBanner-4.jpg";
import b10 from "../assets/img/banner/aboutusbanner3.png";
import contactus from "../assets/img/banner/banner2.png";
import contactus1 from "../assets/img/add/aboutusexp1.png";

import p1 from "../assets/img/products/Compression/p1.png";
import p2 from "../assets/img/products/Compression/p2.png";

import header from "../assets/img/header.png";
import { useNavigate } from "react-router-dom";
import { NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ImageTextComponent from "../components/Elements/ImageTextComponent";
import FooterSection from "../components/Sections/FooterSection";
import SliderImage from "../components/Elements/sliderImages";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("1");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopNavbar />

      <SliderImage
        sliderImages={[
          {
            src: about,
            alt: "Image 1",
            tagLine: "About Us",
            subHead: "Serving hardware industries across UAE.",
          },
          // {
          //   src: b9,
          //   alt: "Image 2",
          //   tagLine: "About Us",
          //   subHead: "Serving pharma leaders across three continents.",
          // },

          // {
          //   src: b4,
          //   alt: "Image 4",
          //   tagLine: "About Us",
          //   subHead: "Serving pharma leaders across three continents.",
          // },
          // {
          //   src: b3,
          //   alt: "Image 5",
          //   tagLine: "About Us",
          //   subHead: "Serving pharma leaders across three continents.",
          // },
        ]}
      />
      <section
        className="section"
        style={{
          padding: "60px 0", // Example inline CSS for padding
          // backgroundColor: "#f8f9fa",
        }}
      >
        <Container>
          <Row
            className="align-items-center"
            id="counter"
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            {/* Image Column */}
            <Col
              md={6}
              style={{
                marginBottom: "20px", // Add space for smaller screens
              }}
            >
              <img
                src={shop}
                className="img-fluid"
                alt="About Us"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Col>

            {/* Content Column */}
            <Col
              md={6}
              className="mt-4 pt-2 mt-sm-0 pt-sm-0"
              style={{
                marginTop: "20px", // Add space between the image and text
                paddingTop: "20px",
              }}
            >
              <div className="ms-lg-4" style={{ marginLeft: "30px" }}>
                <div
                  className="d-flex mb-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  {/* Counter with Years Experience */}
                  <span
                    className="text-primary h1 mb-0"
                    style={{
                      color: "#4169E1", // Primary color
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    <span className="counter-value display-1 fw-bold">
                      <CountUp start={0} end={25} duration={12} />
                    </span>
                    +
                  </span>
                  <span
                    className="h6 align-self-end ms-2"
                    style={{
                      fontSize: "1.2rem",
                      marginLeft: "10px",
                      alignSelf: "flex-end",
                    }}
                  >
                    Years <br /> Experience
                  </span>
                </div>

                {/* Section Title */}
                <div className="section-title">
                  <h4
                    className="title mb-4"
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                      color: "#4169e1",
                    }}
                  >
                    Who are we?
                  </h4>
                  <p
                    className="text-muted"
                    style={{ color: "#6c757d", fontSize: "1.2rem" }}
                  >
                    At Safinat al Noor, we are more than just a hardware
                    store—we are your partner in every project, big or small.
                    Since our establishment, we have proudly served our
                    community with a wide range of top-quality tools, materials,
                    and expert advice to help you achieve your goals.
                    <br /> What sets us apart is our commitment to customer
                    satisfaction. At Safinat al Noor, we believe in building
                    relationships as strong as the foundations you create. Let
                    us be a part of your journey.
                  </p>
                  <Link
                    to="/contactUs"
                    className="btn btn-primary mt-3"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      color: "#fff",
                      backgroundColor: "#862633",
                      borderRadius: "10px",
                      textDecoration: "none",
                      marginTop: "20px",
                    }}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontWeight: "600",
          color: "#4169e1",
          textAlign: "center",
        }}
      >
        What Customers Say About Us
      </div>
      <TestimonialSlider />

      <section
        style={{
          position: "relative",
          height: "450px",
          overflow: "hidden",
          justifyContent: "top",
          background: "linear-gradient(to bottom, transparent 50%,#4169E1 50%)",
        }}
      >
        <div style={{ padding: "0 15px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  // zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                  }}
                >
                  {/* Image */}
                  <img
                    src={header}
                    alt="Team"
                    style={{
                      width: "100%",
                      height: "450px",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </div>

                <div>
                  <div style={{}}>
                    <div style={{}}>
                      <div>
                        <div
                          style={{ marginTop: "1rem", paddingTop: "0.5rem" }}
                        >
                          <div>
                            <p style={{ color: "#000", fontSize: "14px" }}>
                              Start working with Landrick, a team that can
                              provide everything you need to generate awareness,
                              drive traffic, and connect.
                            </p>
                            <Link
                              to="#"
                              style={{
                                color: "#fff",
                                fontWeight: "bold",
                                textDecoration: "none",
                                borderBottom: "2px solid #fff",
                              }}
                            >
                              Read More{" "}
                              <i
                                className="uil uil-angle-right-b align-middle"
                                style={{ marginLeft: "5px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          zIndex: 1,
          width: "100%",
          color: "#fff",
          padding: "2rem",

          marginTop: "00px", // Adjust to position the text below the image
          backgroundColor: "#4169E1",
        }}
      >
        {/* <div style={{}}>
          {/* <p style={{ color: "#000", fontSize: "30px", fontWeight: "normal" }}>
            Team
          </p> 
          <h4
            style={{
              color: "#fff",
              fontWeight: "normal",
              marginBottom: "1rem",
              fontSize: "20px",
            }}
          >
            A team of expert engineers, creative designers and efficient
            technicians is what drives this company to its goals.
          </h4>
        </div> */}
        <div
          style={{
            color: "#ccc",
            marginBottom: "1.5rem",
            textAlign: "center",
            padding: "1rem",
            maxWidth: "1220px",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "20px",
              marginBottom: "0.5rem",
              lineHeight: "1.6", // Adds better readability
              margin: "0 auto",
            }}
          >
            Safinat al Noor is much more than just a hardware store.Our
            knowledgeable team is always here to provide guidance, recommend
            solutions, and share tips to make your projects successful. At
            Safinat al Noor, we believe in building relationships as strong as
            the foundations you create. Whether you’re repairing, renovating, or
            building something new. Together, we’ll bring your ideas to life.
          </p>
          <Link
            to="/contactUs"
            style={{
              color: "#000",
              fontWeight: "normal",
              textDecoration: "none",
              borderBottom: "2px solid #fff",
              fontSize: "20px",
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.color = "#0b093b"; // Change color on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.color = "#000"; // Revert color
            }}
          >
            Contact Us
            <i
              className="uil uil-angle-right-b align-middle"
              style={{ marginLeft: "5px" }}
            ></i>
          </Link>
        </div>
      </div>
      <FooterSection />
    </>
  );
};
const BreadcrumbContainer = styled.div`
  position: relative;
  bottom: 30px; /* Adjust this value to control the distance from the bottom */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* Centers breadcrumb horizontally */
  nav {
    background-color: white;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
  }

  ul {
    display: flex; /* Makes breadcrumb items inline */
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding: 5px;
    font-size: 16px;
  }

  li + li::before {
    content: "/";
    padding: 0 10px;
    color: #999;
  }
`;
const TextOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  // background: rgba(0, 0, 0, 0.4); // Semi-transparent black overlay
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  z-index: 10;

  h2 {
    font-size: 3rem;
    margin: 0;
    color:#fff;
  }

  p {
    font-size: 2rem;
    margin-top: 10px;
    color:#f2f2f2;
  }
     @media (max-width: 768px) {
    padding: 30px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
},
`;
export default AboutUs;
