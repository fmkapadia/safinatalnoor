import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import g1 from "../../assets/images/garageTools/2piecePair6Ton.webp";
import g2 from "../../assets/images/garageTools/3TonHydraulicJack.webp";
import g3 from "../../assets/images/garageTools/6in1FoldingNut.webp";
import g4 from "../../assets/images/garageTools/9pcsWireLingReachHose.webp";
import g5 from "../../assets/images/garageTools/11pcsCarDoorPanel.webp";
import g6 from "../../assets/images/garageTools/13pcsRemovaleWheelsteering.webp";
import g7 from "../../assets/images/garageTools/abbasAli23pcsAluminiumAlloy.webp";
import g8 from "../../assets/images/garageTools/airbrushKitHvlp.webp";

// Styled Components
const SectionWrapper = styled.section`
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  padding: 15px;
  flex: 0 0 25%;
  max-width: 25%;

  @media (max-width: 992px) {
    flex: 0 0 33.33%; /* Three columns on medium screens */
    max-width: 33.33%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex: 0 0 50%; /* Two columns on small screens */
    max-width: 50%;
    padding: 15px;
  }

  @media (max-width: 576px) {
    flex: 0 0 100%; /* One column on extra small screens */
    max-width: 100%;
    padding: 15px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    margin-bottom: 1rem; /* Add some spacing between cards */
  }
`;

const CardBody = styled.div`
  padding: 0;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 200px;
  @media (max-width: 576px) {
    height: 150px; /* Smaller image height on small screens */
  }
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h5`
  color: #0b093b;
  // font-family: "Brush Script MT", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const Subtitle = styled.h6`
  color: #0b093b;
  font-family: "Khula", sans-serif;
  font-size: "1.2rem !important";
`;

const FilterGroup = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterItem = styled.li`
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? "#123011" : "transparent")};
  color: ${({ active }) => (active ? "#EDF6FF" : "#0397DD")};

  &:hover {
    background-color: #123011;
    color: #fff;
  }
`;

//creating array of images for image portfolio
const images = [g1, g2, g3, g4, g5, g6, g7, g8];

class HomeGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: g1,
          title: "2 Piece Pair 6 Ton Heavy Duty Adjustable Jack Stand",
          category: "Garage Tools",
        },
        {
          image: g2,
          title: "3 Ton Hydraulic Jack",
          subtitle: "Other",
          category: "Garage Tools",
        },
        {
          image: g3,
          title: "6 IN 1 FOLDING NUT DRIVER METRI",
          subtitle: "Other",
          category: "Garage Tools",
        },
        {
          image: g4,
          title:
            "9pcs Wire Long Reach Hose Clamp Pliers Set Fuel Oil Water Hose Auto Too",
          subtitle: "Other",
          category: "Garage Tools",
        },
        {
          image: g5,
          title: "11 Pcs Car Door Panel Fastener Clip Removal Tool Kit",
          subtitle: "Packaging",
          category: "Garage Tools",
        },
        {
          image: g6,
          title:
            "13 PCS of removable steering wheel steering wheel puller tool repair to ",
          subtitle: "Packaging",
          category: "Garage Tools",
        },

        {
          image: g7,
          title: "23PCS ALUMINIUM ALLOY CUP TYPE OIL FILTER Cap WRENCH",
          subtitle: "Packaging",
          category: "Garage Tools",
        },

        {
          image: g8,
          title:
            "Airbrush Kit HVLP Air Spray Gun Touch Up Paint Sprayer Gravity Car Furniture Sma",
          subtitle: "Packaging",
          category: "Garage Tools",
        },
      ],
      displayCategory: "Compression",
      photoIndex: 0,
      isOpen: false,
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <SectionWrapper>
          <Container>
            {/* <Row>
              <FilterGroup>
                <ul className="filter-options">
                  {this.state.projects.map(
                    
                     
                        {category}
                    
                  )}
                </ul>
              </FilterGroup>
            </Row> */}

            <Row style={{ paddingBottom: "10px" }}>
              {this.state.projects.map(({ title, image, subtitle }, key) => (
                <Col
                  key={key}
                  xs={12} // Two columns on small screens
                  md={4} // Three columns on medium screens
                  lg={3}
                >
                  <CardWrapper>
                    <CardBody>
                      <Link
                        to="#"
                        onClick={(event) => {
                          event.preventDefault();
                          this.setState({ isOpen: true, photoIndex: key });
                        }}
                      >
                        <ImageWrapper src={image} alt="work" />
                      </Link>
                      <Content>
                        <Title style={{ fontSize: "1rem", color: "#206e14" }}>
                          {title}
                        </Title>
                        {/* <Subtitle
                            style={{ fontSize: "0.8rem", color: "#0b093b" }}
                          >
                            {subtitle}
                          </Subtitle> */}
                      </Content>
                    </CardBody>
                  </CardWrapper>
                </Col>
              ))}
            </Row>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}

export default HomeGallery;
