import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Images
import contactus from "../../assets/img/contactus.webp";
import f1 from "../../assets/images/featured/equipments.jpeg";
import f2 from "../../assets/images/featured/powertools.jpeg";
import f3 from "../../assets/images/featured/weighingtool.jpeg";

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
  flex: 0 0 50%;
  max-width: 50%;

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
  
 
`;



class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: props.projects || [], // Default to an empty array if no projects are passed
      };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }
  getFlexSize() {
    const projectCount = this.state.projects.length;
    if (projectCount === 1) return 100; // Full width
    if (projectCount === 2) return 50; // Two columns
    if (projectCount === 3) return 33.33; // Three columns
    return 25; // Four columns or more
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const { projects } = this.props;
    const flexSize = this.getFlexSize();

    return (
      <React.Fragment>
        <SectionWrapper>
          <Container>
            <Row style={{ paddingBottom: "10px" }}>
              {projects.map(({ title, image, subtitle }, key) => (
                <Col
                  key={key}
                  xs={12} // Two columns on small screens
                  md={4} // Three columns on medium screens
                  lg={3} // Four columns on large screens
                >
                  <CardWrapper>
                    <CardBody>
                     
                        <ImageWrapper src={image} alt="work" />
                     
                    </CardBody>
                  </CardWrapper>
                </Col>
              ))}
            </Row>

           
          </Container>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}

export default Work;
