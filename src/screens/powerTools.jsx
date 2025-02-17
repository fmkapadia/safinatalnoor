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

// import p1 from "../assets/images/powerTools/18vBrushless125mm.webp";
import p1 from "../assets/images/powerTools/drill500wtt.avif";
import p2 from "../assets/images/powerTools/drill20v.avif";
import p3 from "../assets/images/powerTools/hammerDrill13mm.avif";
import p4 from "../assets/images/powerTools/gsh240.avif";
import p5 from "../assets/images/powerTools/cordless12v.avif";
import p6 from "../assets/images/powerTools/gbh328.avif";
import p7 from "../assets/images/powerTools/rotary.avif";
import p8 from "../assets/images/powerTools/corded.avif";
import p9 from "../assets/images/powerTools/corded19re.avif";
import p10 from "../assets/images/powerTools/cordlessgsr180.avif";
import p11 from "../assets/images/powerTools/drill750v.webp";
import p12 from "../assets/images/powerTools/rotary6413.webp";
import p13 from "../assets/images/powerTools/drill14.4v.avif";
import p14 from "../assets/images/powerTools/dewalt40mm.avif";
import p15 from "../assets/images/powerTools/metabo.avif";
import p16 from "../assets/images/powerTools/boshgsb570.avif";
import p17 from "../assets/images/powerTools/dewalt18v.avif";
import p18 from "../assets/images/powerTools/mastech.avif";
import p19 from "../assets/images/powerTools/drill12v.avif";
import p20 from "../assets/images/powerTools/drill18v.avif";
import p21 from "../assets/images/powerTools/srill10mm.avif";
import p22 from "../assets/images/powerTools/drill21v.avif";
import p23 from "../assets/images/powerTools/drill16mm.avif";
import p24 from "../assets/images/powerTools/drill10mm.avif";
import p25 from "../assets/images/powerTools/petrol.avif";
import p26 from "../assets/images/powerTools/makita18v.avif";
import p27 from "../assets/images/powerTools/rotarysds.avif";
import p28 from "../assets/images/powerTools/combiDrillLithium.avif";
import p29 from "../assets/images/powerTools/makitaCombiDrill.avif";
import p30 from "../assets/images/powerTools/drillCordless.avif";
import p31 from "../assets/images/powerTools/truck.avif";
import p32 from "../assets/images/powerTools/washer.avif";
import p33 from "../assets/images/powerTools/wrench.avif";
import p34 from "../assets/images/powerTools/welding.avif";

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
const PowerTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "116.16",
      description: "POWERTEX 500 WATT IMPACT DRILL PPT-EID-13",
    },
    {
      image: p2,
      price: "615.36",
      description:
        "WORX 20V Brushless Active Impact Drill, 60Nm, bare tool, color box",
    },
    {
      image: p3,
      price: "190.08",
      description:
        "Stanley 13MM, 700W Hammer Drill for Drilling Concreate, Metal, Wood, Aluminum ",
    },
    {
      image: p4,
      price: "2304.00",
      description:
        "Bosch Professional GSH 7 VC Corded 240 V Demolition Hammer Drill with SDS Max",
    },
    {
      image: p5,
      price: "611.52",
      description: "Bosch Professional Cordless Drill Screwdriver - GSR 12V-15",
    },
    {
      image: p6,
      price: "1313.24",
      description:
        "Bosch Professional GBH 3-28 DFR Corded 240 V Rotary Hammer Drill with SDS Plus24",
    },
    {
      image: p7,
      price: "1406.40",
      description:
        "Bosch Professional Rotary Hammer with SDS-plus Drill - GBH 4-32 DFRBlue 13 mm",
    },
    {
      image: p8,
      price: "336.00",
      description: "Bosch Corded Electric GSB 16RE - Drills",
    },
    {
      image: p9,
      price: "566.40",
      description: "Bosch Corded Electric GSB 19-2 RE - Drills",
    },
    {
      image: p10,
      price: "441.60",
      description: "Bosch Cordless Drill/Driver, GSR 180-Li",
    },
    {
      image: p11,
      price: "192.96",
      description:
        "DEWALT 750W 13mm percussion drill with variable speed switch for Drilling Concre",
    },
    {
      image: p12,
      price: "206.40",
      description: "Makita 6413 Rotary Drill with Keyless Chuck 450W",
    },
    {
      image: p13,
      price: "546.24",
      description: "Makita 14.4V LXT Cordless Driver Drill 10mm, DF347DWE",
    },
    {
      image: p14,
      price: "1974.72",
      description:
        "DeWalt 40mm, 1100W, 2740 bpm, 11J, 5kg SDS-Max Combination Hammer with AVC,Drill",
    },
    {
      image: p15,
      price: "614.40",
      description: "Metabo - Bs 18 Quick Cordless Drill/Screwdriver",
    },
    {
      image: p16,
      price: "170.00",
      description: "Bosch GSB 570 Professional Impact Drill",
    },
    {
      image: p17,
      price: "1392.00",
      description: "Dewalt 18v compact Hammer Drill Driver Dcd791D2",
    },
    {
      image: p18,
      price: "240.00",
      description: "MASTECH ROTARY HAMMER DRILL 850W",
    },
    {
      image: p19,
      price: "153.60",
      description: "CLARKE Cordless Driver Drill 12V",
    },
    {
      image: p20,
      price: "187.20",
      description: "CLARKE Cordless Driver Drill 18V",
    },
    {
      image: p21,
      price: "124.80",
      description: "CLARKE DRILL MACHINE KEY LESS 10MM",
    },
    {
      image: p22,
      price: "240.00",
      description: "CLARKE CORDLESS DRILL MACHINE 21V",
    },
    {
      image: p23,
      price: "148.80",
      description: "CLARKE Impact Drill Machine 16mm",
    },
    {
      image: p24,
      price: "100.80",
      description: "CLARKE Drill Machine 10mm Keyed",
    },
    {
      image: p25,
      price: "2509.44",
      description: "Makita Petrol EG2850A - Generator",
    },
    {
      image: p26,
      price: "1368.96",
      description: "Makita 18v Lxt Cordless Angle Grinder 115mm 5ah, Dga452rtj",
    },
    {
      image: p27,
      price: "816.00",
      description:
        "Makita HR2475 1in Rotary Hammer, accepts SDS-PLUS bits (D-handle)",
    },
    {
      image: p28,
      price: "787.20",
      description:
        "Makita DHP453RFE Cordless Combi Drill - Cordless Combi Drills (Lithium-Ion ",
    },
    {
      image: p29,
      price: "632.64",
      description: "Makita DF347DWE Combi Drill, 14.4 V Li-Ion, 1.3 Ah",
    },
    {
      image: p30,
      price: "677.76",
      description:
        "df347dwe3 Makita Drill Cordless 2 Lithium Batteries 14.4 Volt 1,3Ah",
    },
    {
      image: p31,
      price: "3744.00",
      description: "Digital Display Hydrualic Pallet Truck",
    },
    {
      image: p32,
      price: "264.00",
      description: "Cordless Pressure Washer",
    },
    {
      image: p33,
      price: "1584.00",
      description: "DEWALT NEW BRUSHLESS 1/2in 18V XR IMPACT WRENCH",
    },
    {
      image: p34,
      price: "331.40",
      description:
        "20 V 3000W Handheld Portable Electric Welding Machine Home Automatic Di",
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
          <h3 style={{ fontSize: "2rem" }}>powerTools</h3>
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

export default PowerTools;
