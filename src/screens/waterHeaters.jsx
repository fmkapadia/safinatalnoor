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

// import p1 from "../assets/images/heaters/18vBrushless125mm.webp";
import p1 from "../assets/images/heaters/ariston3.5kw.webp";
import p2 from "../assets/images/heaters/ariston50lItaly.webp";
import p3 from "../assets/images/heaters/ariston50ltBlu50v.webp";
import p4 from "../assets/images/heaters/ariston50lth.webp";
import p5 from "../assets/images/heaters/ariston80l.webp";
import p6 from "../assets/images/heaters/ariston80lHorizontal.webp";
import p7 from "../assets/images/heaters/ariston100l.webp";
import p8 from "../assets/images/heaters/aristonHeater5.5kw.webp";
import p9 from "../assets/images/heaters/aristonPro100l.webp";
import p10 from "../assets/images/heaters/auressm7.7.webp";
import p11 from "../assets/images/heaters/brightsunheater.webp";
import p12 from "../assets/images/heaters/brightsunHo50l.webp";
import p13 from "../assets/images/heaters/heater80l.webp";
import p14 from "../assets/images/heaters/heater100l.webp";
import p15 from "../assets/images/heaters/tank30l.webp";

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
const Heaters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "420.00",
      description:
        "Ariston Electric Instantaneous Water Heater Aures S, 3.5 KW",
    },
    {
      image: p2,
      price: "650.00",
      description:
        "Ariston Electric Water Heater 50 Litter Horizontal Pro-R Italy",
    },
    {
      image: p3,
      price: "650.00",
      description: "Ariston Electric Tank Water Heater 50 Liter - Blu R 50 V",
    },
    {
      image: p4,
      price: "624.00",
      description: "Ariston Electric Water Heater Pro R 50Ltr Horizontal",
    },
    {
      image: p5,
      price: "542.00",
      description: "Ariston Electric Water Heater 80L - Horizontal",
    },
    {
      image: p6,
      price: "542.00",
      description: "Ariston Electric Water Heater 80L - Horizontal",
    },
    {
      image: p7,
      price: "617.28",
      description:
        "Ariston Electric Water Heater In Horizontal Shape, 100 Liters",
    },
    {
      image: p8,
      price: "450.00",
      description:
        "copy of Ariston Electric Instantaneous Water Heater Aures 5.5kw",
    },
    {
      image: p9,
      price: "671.04",
      description:
        "ARISTON WATER HEATER PRO1-R 100LTR HORIZONTAL WITH 2PCS FLEXIBLE HOSE,2",
    },
    {
      image: p10,
      price: "450.00",
      description:
        "Ariston Electric Instantaneous Water Heater Aures SM, 7.7 KW",
    },
    {
      image: p11,
      price: "240.00",
      description: "Brightsun Electric Water Heater",
    },
    {
      image: p12,
      price: "254.40",
      description: "Brightsun Horizontal Electric Water Heater 50Ltr",
    },
    {
      image: p13,
      price: "614.40",
      description: "Ariston PRO1 R Horizontal Water Heater (80L)",
    },
    {
      image: p14,
      price: "617.20",
      description:
        "Ariston Electric Water Heater In Horizontal Shape, 100 Liters",
    },
    {
      image: p15,
      price: "624.00",
      description: "Ariston Electric Tank Water Heater (30L)",
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
          height: "600px",
          width: "100vw",
          marginTop: "0px",
          position: "relative",
          color: "#ffffff",
        }}
      >
        <TextOverlay>
          <h2>Our Products</h2>
          <h3 style={{ fontSize: "2rem" }}>Global Presence, Local Support</h3>
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

export default Heaters;
