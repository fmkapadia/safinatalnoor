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

import p1 from "../assets/images/Fans/5StepAdjustment.webp";
import p2 from "../assets/images/Fans/26inAirCooler.webp";
import p3 from "../assets/images/Fans/airexCeiling.webp";
import p4 from "../assets/images/Fans/autoShutterExhaustFan.webp";
import p5 from "../assets/images/Fans/ceilingFan56.webp";
import p6 from "../assets/images/Fans/ceilingFan830.webp";
import p7 from "../assets/images/Fans/exhaustFan.webp";
import p8 from "../assets/images/Fans/exhaustFan6in.webp";
import p9 from "../assets/images/Fans/exhaustFan6in4.webp";
import p10 from "../assets/images/Fans/exhaustFan1400rpm.webp";
import p11 from "../assets/images/Fans/exhaustFanRound.webp";
import p12 from "../assets/images/Fans/fanBox.webp";
import p13 from "../assets/images/Fans/fanCapacitor.webp";
import p14 from "../assets/images/Fans/fanHook.webp";
import p15 from "../assets/images/Fans/fixingAccessories.webp";
import p16 from "../assets/images/Fans/foldableFan.webp";
import p17 from "../assets/images/Fans/foldableFan.webp";
import p18 from "../assets/images/Fans/geepas16inFan.webp";
import p19 from "../assets/images/Fans/geepasWall.webp";
import p20 from "../assets/images/Fans/havellsRiga56in.webp";
import p21 from "../assets/images/Fans/jaspaOrientJet.webp";
import p22 from "../assets/images/Fans/jaybOrbit.webp";
import p23 from "../assets/images/Fans/lowNoiseExhaust.webp";
import p24 from "../assets/images/Fans/mistFan40l.webp";
import p25 from "../assets/images/Fans/padestalFan.webp";
import p26 from "../assets/images/Fans/pakCeiling.webp";
import p27 from "../assets/images/Fans/rrExhaustFan.webp";
import p28 from "../assets/images/Fans/rrExhaustFan8in.webp";
import p29 from "../assets/images/Fans/sparyBottle.webp";
import p30 from "../assets/images/Fans/speedoFan.webp";
import p31 from "../assets/images/Fans/towerBolt.webp";

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
const Fans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "19.20",
      description:
        "5 Step Adjustment Ceiling Fan Regulator (White,80W,220-240V)",
    },
    {
      image: p2,
      price: "624",
      description:
        "Powerful Outdoor Mist Fan 26 inch Diameter FKW10CST2 Air Cooler Water M",
    },
    {
      image: p3,
      price: "189.00",
      description: "airex ceiling fan 56 inch",
    },
    {
      image: p4,
      price: "220.50",
      description:
        "Templair Auto Shutter Exhaust Fan For Kitchen And Bathroom (9in)",
    },
    {
      image: p5,
      price: "99",
      description:
        "CEILING FAN 56in WITH FAN HOOK,90CM 16X16 TRUNKING 3PCS & 4 MTR R&B CABL",
    },
    {
      image: p6,
      price: "100",
      description: "ROSKA Electric - Ceiling Fans - FC-8 30",
    },
    {
      image: p7,
      price: "364.80",
      description:
        "Circular Inline Exhaust Fan Low Noise Duct Fan for Bathroom Kitchen Ven",
    },
    {
      image: p8,
      price: "18.00",
      description: "Bathroom Exhaust fan 6 Inch",
    },
    {
      image: p9,
      price: "43.20",
      description: "Rr Exhaust Fan (8In)",
    },
    {
      image: p10,
      price: "384.00",
      description: "16 INCH Metallic Exhaust Fan 1400rpm, 200 W",
    },
    {
      image: p11,
      price: "48.50",
      description:
        "EXHAUST FAN ROUND USED IN KITCHEN & BATHROOM WITH 2 METER R/B CABLE ",
    },
    {
      image: p12,
      price: "157.50",
      description:
        "Ceiling fan box type kenwel Energy Saving 60x60 for four-ceiling",
    },
    {
      image: p13,
      price: "9.60",
      description:
        "High Quality Wired Rectangle Shaped Fan Capacitor 450 VAC | Black (WIRE",
    },
    {
      image: p14,
      price: "24.00",
      description:
        "2PCS CEILING FAN HOOK 10MM FOR HANGING FANS AND KIDS SWINGS CHAIR",
    },
    {
      image: p15,
      price: "31.50",
      description:
        "FIXING ACCESSORIES OF CEILING FAN INCLUDES FAN HOOK 1PC,16X16 TRUNCKING",
    },
    {
      image: p16,
      price: "38.50",
      description: "Wintex foldable fan blade bulb",
    },
    // {
    //   image: p17,
    //   price: "99.99",
    //   description: "This is a high-qu",
    // },
    {
      image: p18,
      price: "170.00",
      description: "Geepas 16 Inch Stand Fan with Remote Control",
    },
    {
      image: p19,
      price: "133.44",
      description: "Geepas Wall Fan, 16 Inch",
    },
    {
      image: p20,
      price: "120.00",
      description: "Havells Riga 56 inch Ceiling Fan with 2 Year Warranty",
    },
    {
      image: p21,
      price: "123.84",
      description: "Jaspa Orient Jet Cool Decor Ceiling Fan, Crystal White",
    },
    {
      image: p22,
      price: "115.20",
      description: "JAYB ORBIT FAN 16in-CEILING",
    },
    {
      image: p23,
      price: "177.60",
      description: "Circular Inline Low Noise Exhaust Fan (6in,150mm)",
    },
    {
      image: p24,
      price: "624.00",
      description:
        "Powerful Outdoor Mist Fan 26 inch Diameter FKW10CST2 Air Cooler Water M",
    },
    {
      image: p25,
      price: "168.00",
      description: "STANDARD PADESTAL FAN 24in MADE IN PAKISTAN",
    },
    {
      image: p26,
      price: "120.00",
      description:
        "PAK CEILING FAN 56in WITH FAN HOOK,VINI ELECTRICAL TAPE & 2MTR ELECTRIC",
    },
    {
      image: p27,
      price: "34.50",
      description: "RR Exhaust Fan (8in)",
    },
    // {
    //   image: p28,
    //   price: "99.99",
    //   description: "This is a high-qu",
    // },
    {
      image: p29,
      price: "33.60",
      description:
        "Mini Hand Held Spray Portable Travel Handle Water Spray Cool Mist Fan B",
    },
    {
      image: p30,
      price: "78.75",
      description: "SPEEDO Wall fan 16 Inches, S-WF16",
    },
    {
      image: p31,
      price: "27.00",
      description: "Aluminium Fancy Tower Bolt (BLACK)",
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

export default Fans;
