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

// import p1 from "../assets/images/ladders/18vBrushless125mm.webp";
import p1 from "../assets/images/ladders/2Stepladder.webp";
import p2 from "../assets/images/ladders/2stepStool.webp";
import p3 from "../assets/images/ladders/6stepsSteelLadder.webp";
import p4 from "../assets/images/ladders/8stepLadder.webp";
import p5 from "../assets/images/ladders/9ft6stepLadder.webp";
import p6 from "../assets/images/ladders/12ftfiberGlass3.6m.webp";
import p7 from "../assets/images/ladders/alumi9step.webp";
import p8 from "../assets/images/ladders/aluminiumLadder8rungs.webp";
import p9 from "../assets/images/ladders/aluminiumLadder20rungs.webp";
import p10 from "../assets/images/ladders/ATypePlatformLadder.webp";
import p11 from "../assets/images/ladders/emcLadder.webp";
import p12 from "../assets/images/ladders/emcTripleExtensionLadder.webp";
import p13 from "../assets/images/ladders/foldingLadder.webp";
import p14 from "../assets/images/ladders/foldingLadderClimbing3.webp";
import p15 from "../assets/images/ladders/straightladder.webp";
import p16 from "../assets/images/ladders/teleLadder3.2m.webp";
import p17 from "../assets/images/ladders/telescopicladder.webp";
import p18 from "../assets/images/ladders/zamilStepExtension.webp";

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
const Ladders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "115.20",
      description:
        "Two Step Double Sided Aluminum Platform Ladder with Maximum 150Kg Capacity - Beo",
    },
    {
      image: p2,
      price: "91.20",
      description:
        "2Step Ladder Folding Stool, Foldable Step Ladder with Rubber Handgrip a",
    },
    {
      image: p3,
      price: "150.00",
      description: "6 Steps Steel Ladder - White",
    },
    {
      image: p4,
      price: "297.90",
      description: "8 Step Household Aluminium Ladder",
    },
    {
      image: p5,
      price: "8100.00",
      description: "Gazalle 9ft 6-Step Warehouse Ladder",
    },
    {
      image: p6,
      price: "2070.00",
      description: "Gazelle 12ft Fiberglass Step Ladder (3.6m)",
    },
    {
      image: p7,
      price: "360.00",
      description:
        "9 Step Household Aluminium Ladder9 Step Household Aluminium Ladder",
    },
    {
      image: p8,
      price: "259.20",
      description: "Multi Purpose 4x2 x 2.6m Foldable Aluminium Ladder 8 Rungs",
    },
    {
      image: p9,
      price: "360.00",
      description:
        "Multi Purpose 4x5 x 5.7m Foldable aluminium Ladder 20 Rungs",
    },
    {
      image: p10,
      price: "120.00",
      description: "Platform Ladder A Type for Home and Professional Use",
    },
    {
      image: p11,
      price: "350.00",
      description: "EMC Multi Purpose Ladder",
    },
    {
      image: p12,
      price: "1824.00",
      description: "EMC Triple Extension Ladder 18",
    },
    {
      image: p13,
      price: "200.00",
      description: "Multipurpose Folding Ladder",
    },
    {
      image: p14,
      price: "88.20",
      description:
        "Multi-Purpose Ladders Step Household Folding Ladder Climbing Three",
    },
    {
      image: p15,
      price: "396.00",
      description:
        "ALUMINIUM HEAVY DUTY STRAIGHT LADDER USED IN HOUSE,OFFICE,WAREHOUSE ETC",
    },

    {
      image: p16,
      price: "582.72",
      description: "A Type Telescopic Ladder 3.2m",
    },
    {
      image: p17,
      price: "314.88",
      description: "Telescopic Ladder",
    },
    {
      image: p18,
      price: "240.00",
      description: "Zamil Dual Purpose Step Extension Ladder",
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
          <h3 style={{ fontSize: "2rem" }}>Ladders</h3>
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

export default Ladders;
