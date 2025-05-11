import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Images
import contactus from "../../assets/img/contactus.webp";
import fans from "../../assets/images/Fans/ceilingFan830.webp";
import fasteners from "../../assets/images/fastners/alamFastners.webp";
import furniture from "../../assets/images/furniture/halfRound.webp";
import handTools from "../../assets/images/handTools/13pcspullerTool.webp";
import heaters from "../../assets/images/heaters/ariston100l.webp";
import ladders from "../../assets/images/ladders/ladder.jpeg";
import paint from "../../assets/images/paints/miniPaintKit.webp";
import rope from "../../assets/images/rope/cottonRope.webp";
import waterPumps from "../../assets/images/waterPumps/pumps.jpeg";
import weighing from "../../assets/images/weighingProducts/craneScale.webp";
import gt from "../../assets/images/garageTools/garageTools.jpeg";
import sanitary from "../../assets/images/sanitary/sanitary.jpeg";
import powerTools from "../../assets/images/powerTools/boshgsb570.avif";
import electricals from "../../assets/images/electricals/Air Tool Kit 7Pcs With Carry Bag(Air gun,Inflating gun,Spray gun,3m Spiral Hose.avif";
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
  height: 250px;
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
  background-color: ${({ active }) => (active ? "#0397DD" : "transparent")};
  color: ${({ active }) => (active ? "#EDF6FF" : "#0397DD")};

  &:hover {
    background-color: #2b56f5;
    color: #fff;
  }
`;

//creating array of images for image portfolio
const images = [
  fans,
  gt,
  sanitary,
  fasteners,
  rope,
  ladders,
  paint,
  furniture,
  waterPumps,
  weighing,
  heaters,
  handTools,
  powerTools,
  electricals,
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: fans,
          title: "Fans",
        },

        {
          image: gt,
          title: "Garage Tools",
        },
        {
          image: sanitary,
          title: "Sanitary",
        },
        {
          image: fasteners,
          title: "Fasteners",
        },

        {
          image: paint,
          title: "Paint And Accessories",
        },
        {
          image: rope,
          title: "Rope",
        },
        {
          image: heaters,
          title: "Water Heaters",
        },
        {
          image: ladders,
          title: "Ladders",
        },

        {
          image: powerTools,
          title: "Power Tools",
        },

        {
          image: waterPumps,
          title: "Water Pumps",
        },
        {
          image: weighing,
          title: "Weighing Products",
        },

        {
          image: furniture,
          title: "Furniture Accessories",
        },
        {
          image: handTools,
          title: "Hand Tools",
        },
        /* {
          image: gt,
          title: "  Garden Accessories",
        }, */
        {
          image: electricals,
          title: "Electricals",
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
        <SectionWrapper className="lightBg">
          <Container>
            <Row style={{ paddingBottom: "10px" }}>
              {this.state.projects.map(({ title, image, subtitle }, key) => (
                <Col
                  key={key}
                  xs={12} // Two columns on small screens
                  md={4} // Three columns on medium screens
                  lg={3} // Four columns on large screens
                >
                  <CardWrapper>
                    <CardBody>
                      <Link
                        to={`/products/${title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        // onClick={(event) => {
                        //   event.preventDefault();
                        //   this.setState({ isOpen: true, photoIndex: key });
                        // }}
                      >
                        <ImageWrapper src={image} alt="work" />
                      </Link>
                      <Content>
                        <Title style={{ fontSize: "1rem", color: "#0397DD" }}>
                          {title}
                        </Title>
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

export default Work;
