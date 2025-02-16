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

import p1 from "../assets/images/handTools/3pcsbrushes.webp";
import p2 from "../assets/images/handTools/5pcsHoleSaw.webp";
import p3 from "../assets/images/handTools/10tonTrailer.webp";
import p4 from "../assets/images/handTools/13pcspullerTool.webp";
import p5 from "../assets/images/handTools/60cmpipe.webp";
import p6 from "../assets/images/handTools/airFilter.webp";
import p7 from "../assets/images/handTools/carCircuitTester.webp";
import p8 from "../assets/images/handTools/coilCompresser.webp";
import p9 from "../assets/images/handTools/cuttingDisc.webp";
import p10 from "../assets/images/handTools/eggCracker.webp";
import p11 from "../assets/images/handTools/femaleEStar.webp";
import p12 from "../assets/images/handTools/foodChopper.webp";
import p13 from "../assets/images/handTools/handGarageLamp.webp";
import p14 from "../assets/images/handTools/horseShoe.webp";
import p15 from "../assets/images/handTools/hose.webp";
import p16 from "../assets/images/handTools/hotmelt.webp";
import p17 from "../assets/images/handTools/knittingNeedle.webp";
import p18 from "../assets/images/handTools/pattyMaker.webp";
import p19 from "../assets/images/handTools/pillBox.webp";
import p20 from "../assets/images/handTools/platformTrolley300kg.webp";
import p21 from "../assets/images/handTools/pressureGauge.webp";
import p22 from "../assets/images/handTools/screwDriver8mm.webp";
import p23 from "../assets/images/handTools/set.webp";
import p24 from "../assets/images/handTools/snakePipe.webp";
import p25 from "../assets/images/handTools/sponge.webp";
import p26 from "../assets/images/handTools/sprayer.webp";
import p27 from "../assets/images/handTools/sprayer5lts.webp";
import p28 from "../assets/images/handTools/vanadium12pcs.webp";
import p29 from "../assets/images/handTools/vegRoller.webp";
import p30 from "../assets/images/handTools/waterHose.webp";
import p31 from "../assets/images/handTools/whiteSpray.webp";
import p32 from "../assets/images/handTools/yellowHose.webp";

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
const HandTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "28.80",
      description:
        "High Quality 2 pieces 150mm Booster Cable Clips 600A Black+Red Insulate",
    },
    // {
    //   image: p2,
    //   price: "624",
    //   description:
    //     "Powerful Outdoor Mist Fan 26 inch Diameter FKW10CST2 Air Cooler Water M",
    // },
    {
      image: p3,
      price: "144.00",
      description: "2 Piece Pair 6 Ton Heavy Duty Adjustable Jack Stand",
    },
    {
      image: p4,
      price: "259.20",
      description: "3 Ton Hydraulic Jack",
    },
    {
      image: p5,
      price: "528",
      description:
        " 5 ton Hydraulic trailer lifting steel rack mechanical jack",
    },
    {
      image: p6,
      price: "33.60",
      description: "6 IN 1 FOLDING NUT DRIVER METRI",
    },
    {
      image: p7,
      price: "326.40",
      description:
        "9pcs Wire Long Reach Hose Clamp Pliers Set Fuel Oil Water Hose Auto Too",
    },
    {
      image: p8,
      price: "86.40",
      description:
        "Watering Can 10 Liter, Large Capacity Watering Can, Detachable Nozzle E",
    },
    {
      image: p9,
      price: "912.00",
      description:
        "10 ton Hydraulic trailer lifting steel rack mechanical jack Heavy Duty",
    },
    {
      image: p10,
      price: "57.60",
      description: "11 Pcs Car Door Panel Fastener Clip Removable Tool Kit",
    },
    {
      image: p11,
      price: "120.00",
      description:
        "13 PCS of removable steering wheel steering wheel puller tool repair to ",
    },
    {
      image: p12,
      price: "157.50",
      description:
        "Ceiling fan box type kenwel Energy Saving 60x60 for four-ceiling",
    },
    {
      image: p13,
      price: "43.20",
      description:
        "16pcs Hole Saw Kit Cutting Drilling Tool Wood Metal Cutter Set 3/4in-5 in",
    },
    {
      image: p14,
      price: "24.96",
      description:
        "50mm X 90mtr Long Plasterboard Mesh Joint Scrim Drywall Fibre Glass Sel",
    },
    {
      image: p15,
      price: "168.00",
      description: "23PCS ALUMINIUM ALLOY CUP TYPE OIL FILTER Cap WRENCH",
    },
    {
      image: p16,
      price: "19.20",
      description: "CUP TYPE SOFT WIRE BRUSH 75MM X14MM",
    },
    {
      image: p17,
      price: "33.60",
      description:
        "Airbrush Kit HVLP Air Spray Gun Touch Up Paint Sprayer Gravity Car Furniture Sma",
    },
    {
      image: p18,
      price: "115.20",
      description:
        "AFRL80 Air Filter Regulator and Lubricator Combo 1/2in NPT, 5 Micron Ele",
    },
    {
      image: p19,
      price: "86.40",
      description:
        "Compressed Air Filter Regulator Combo, BSP 1/2in Air Compressor Moisture",
    },
    {
      image: p20,
      price: "33.60",
      description:
        "Car Circuit Tester, Car Circuit Tester Test Pencil Electrometric Pencil",
    },
    {
      image: p21,
      price: "216.00",
      description:
        "Mechanic's Car Creeper 6 Wheels Crawler Board (Red) Workshop Garage Flo",
    },
    {
      image: p22,
      price: "450.00",
      description:
        "Vertical Telescopic Transmission Car Jack 500kg Motor Gearbox Hydraulic",
    },
    {
      image: p23,
      price: "62.40",
      description:
        "Adjustable Car Washer Gun 3000 PSI High Pressure Washer Gun With 6 Nozz",
    },
    {
      image: p24,
      price: "336.00",
      description:
        "CLARKE High Pressure Washer,Electric Pressure Washer Gun,Portable Cordl",
    },
    {
      image: p25,
      price: "632.64",
      description: "Makita DF347DWE Combi Drill, 14.4 V Li-Ion, 1.3 Ah",
    },
    {
      image: p26,
      price: "86.40",
      description:
        "Automotives Car Petrol Engine Compression Tester Kit Universal Push On Gauge Set",
    },
    {
      image: p27,
      price: "677.76",
      description: "Makita Drill Cordless 2 Lithium Batteries 14.4 Volt 1,3Ah",
    },
    {
      image: p28,
      price: "106.56",
      description: "DeWalt Concealer Safety Goggles, DPG82-11C, Clear",
    },
    {
      image: p29,
      price: "33.60",
      description:
        "Mini Hand Held Spray Portable Travel Handle Water Spray Cool Mist Fan B",
    },
    {
      image: p30,
      price: "2640.00",
      description:
        "ESAB BUDDY ARC 200_200 AMP Inverter MMA/Live TIG Welder, 230V 1ph 50/60 Hz",
    },
    {
      image: p31,
      price: "86.40",
      description:
        "Female E Star Torx Socket Set E4-E24 E-Torx External Hex Socket Insert",
    },
    {
      image: p32,
      price: "936.00",
      description:
        "Car Wash Pneumatic Foaming Cleaner Stainless Steel Foam Machine foam cl",
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
          <h3 style={{ fontSize: "2rem" }}>Hand Tools</h3>
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

export default HandTools;
