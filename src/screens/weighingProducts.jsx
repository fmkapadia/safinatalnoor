import React, { useEffect } from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/banner12.png";
import Work from "../components/Elements/gallery";
import TopNavbar from "../components/Nav/TopNavbar";
import products from "../assets/images/featured/weighingtool.jpeg";
import Footer from "../components/Sections/Footer";
import FooterSection from "../components/Sections/FooterSection";
import ProductList from "../components/Elements/productList";

//images

import p1 from "../assets/images/weighingProducts/40kgScale.webp";
import p2 from "../assets/images/weighingProducts/camry5kg.webp";
import p3 from "../assets/images/weighingProducts/camryGroceryScale.webp";
import p4 from "../assets/images/weighingProducts/craneScale.webp";
import p5 from "../assets/images/weighingProducts/digitalPlatformScale.webp";
import p6 from "../assets/images/weighingProducts/digitalScale.webp";
import p7 from "../assets/images/weighingProducts/electronicScale40kg.webp";
import p8 from "../assets/images/weighingProducts/hangingScale.webp";
import p9 from "../assets/images/weighingProducts/hydrualicPallet.webp";
import p10 from "../assets/images/weighingProducts/je11b30kg.webp";
import p11 from "../assets/images/weighingProducts/je4130kg.webp";
import p12 from "../assets/images/weighingProducts/luggageScale.webp";
import p13 from "../assets/images/weighingProducts/platformScale.webp";
import p14 from "../assets/images/weighingProducts/pocketBalance.webp";
import p15 from "../assets/images/weighingProducts/pocketScale.webp";
import p16 from "../assets/images/weighingProducts/scale100cm.webp";
import p17 from "../assets/images/weighingProducts/spareBattery.webp";
import p18 from "../assets/images/weighingProducts/spoonScale.webp";

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
const WeighingProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "157.50",
      description:
        "HEAVY DUTY CAMMRY 40KG DIGITAL SCALE SUITABLE Industries, farms, retail",
    },
    {
      image: p2,
      price: "58.20",
      description:
        "Camry Electronic Kitchen Scale Digital Scales Capacity 5 KG Used In Home",
    },
    {
      image: p3,
      price: "216.00",
      description:
        "Camry Commercial Grocery Scale With Stand Display Unit 30kg Red 30 x 23",
    },
    {
      image: p4,
      price: "2880.00",
      description: "Digital Crane Scale",
    },
    {
      image: p5,
      price: "210.00",
      description: "Digital Platform Scale",
    },
    {
      image: p6,
      price: "210.24",
      description: "Camry Price Computing Digital Scale (ACS-JE11,30kg)",
    },
    {
      image: p7,
      price: "125.00",
      description:
        "High Precision Digital Electronic Scale Platform Scale Stainless Steel",
    },
    {
      image: p8,
      price: "28.80",
      description:
        "Hanging Scale upto 100 KG Capacity Used In Home,Vegetable Market & Many",
    },
    {
      image: p9,
      price: "3744.00",
      description: "Digital Display Hydrualic Pallet Truck",
    },
    {
      image: p10,
      price: "191.04",
      description: "Camry Brand Price Computing Digital Scale ACSJE11B (30kg)",
    },
    {
      image: p11,
      price: "264.00",
      description: "Camry Brand Price Computing Digital Scale ACS-JE41 [30 Kg]",
    },
    {
      image: p12,
      price: "23.04",
      description: "Camry Digital Luggage Scale Up tp 50 kg, Silver EL10-31P",
    },
    {
      image: p13,
      price: "125.00",
      description:
        "High Precision Digital Electronic Scale Platform Scale Stainless Steel",
    },
    {
      image: p14,
      price: "24.00",
      description: "Pocket Balance 100Kg Weight Scale",
    },
    {
      image: p15,
      price: "52.80",
      description:
        "CAMRY POCKET SCALE 500GM SPECIAL USED FOR WEIGHING GOLD,SILVER",
    },
    {
      image: p16,
      price: "14.40",
      description: "SS Scale 100 cm",
    },
    {
      image: p17,
      price: "54.00",
      description: "Spare Battery for 40kg scale",
    },
    {
      image: p18,
      price: "43.20",
      description:
        "Digital Spoon Scale for Kitchen Food High Precision Small Scale",
    },
  ];
  return (
    <React.Fragment>
      <TopNavbar />
      <section
        className=""
        style={{
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
          <h3 style={{ fontSize: "2rem" }}>Weighing Products</h3>
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

export default WeighingProducts;
