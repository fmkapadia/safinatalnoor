import React, { useEffect } from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/banner12.png";
import Work from "../components/Elements/gallery";
import TopNavbar from "../components/Nav/TopNavbar";
import products from "../assets/images/products.jpg";
import Footer from "../components/Sections/Footer";
import FooterSection from "../components/Sections/FooterSection";
import ProductList from "../components/Elements/productList";

//images

import p1 from "../assets/images/waterPumps/carWashfoamMachine.webp";
import p2 from "../assets/images/waterPumps/espakit02.webp";
import p3 from "../assets/images/waterPumps/grundfosPm1.webp";
import p4 from "../assets/images/waterPumps/grundfosscala.webp";
import p5 from "../assets/images/waterPumps/milanoLong.webp";
import p6 from "../assets/images/waterPumps/waterPump0.5hp.webp";
import p7 from "../assets/images/waterPumps/waterPumps0.5hp.webp";

const SvgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: #fff; /* Adjust the text color as per your design */
`;

const Shape = styled.svg`
  display: block;
  width: 100%;
`;
const TextOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #000;
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
    color:#000;
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
const WaterPumps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "936.00",
      description:
        "Car Wash Pneumatic Foaming Cleaner Stainless Steel Foam Machine foam cl",
    },
    {
      image: p2,
      price: "240.00",
      description: "Espa Kit02 Am Np 15 Me Corded Electric Water Pumps",
    },
    {
      image: p3,
      price: "350.00",
      description: "Grundfos PM 1 Electronic Pressure Control Kit for Pumps",
    },
    {
      image: p4,
      price: "2640.00",
      description: "Grundfos Scala 2 - Smart water pump",
    },
    {
      image: p5,
      price: "479.04",
      description: "Milano Long Neck Multi Stage 1 Hp Water pump",
    },
    {
      image: p6,
      price: "233.28",
      description: "Rr Water Pumps 0.5HP",
    },
    {
      image: p7,
      price: "528.00",
      description: "RR Water Pumps 0.5HP/1HP/1.5HP/2HP (2HP)",
    },
  ];
  return (
    <React.Fragment>
      <TopNavbar />
      <section
        className=""
        style={{
          //   backgroundImage: `url(${products})`,
          backgroundColor: "#E5E4E2",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100vw",
          marginTop: "60px",
          position: "relative",
          color: "#ffffff",
        }}
      >
        <TextOverlay>
          <h2>Our Products</h2>
          <h3 style={{ fontSize: "2rem" }}>Water Pumps</h3>
          {/* <p>Exceptional solutions for high-volume, high-speed needs</p> */}
          <div className="row flexCenter"></div>
        </TextOverlay>
        <div className="bg-overlay"></div>
      </section>

      <SvgWrapper>
        <Shape
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          />
        </Shape>
      </SvgWrapper>
      <ProductList products={productList} />
      <FooterSection />
    </React.Fragment>
  );
};

export default WaterPumps;
