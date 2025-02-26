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

import p1 from "../assets/images/electricals/18V STANLEY® FATMAX® V20 Jobsite Blower.avif";
// import p2 from "../assets/images/garageTools/2pcscableClips.webp";
import p3 from "../assets/images/electricals/Air Compressor 50L 2.5HP 1PH 10BAR 24LM.avif";
import p4 from "../assets/images/electricals/Air Tool Kit 7Pcs With Carry Bag(Air gun,Inflating gun,Spray gun,3m Spiral Hose.avif";
import p5 from "../assets/images/electricals/Michelin Air Compressor Vertical Oil Free 24L1.5HP 1 PH 8 Bar 160L.avif";
import p6 from "../assets/images/electricals/Michelin Air Compressor Vertical Oil Free 50L 2HP 1PH 10Bar 220L.avif";
import p7 from "../assets/images/electricals/STANLEY V20 18V 125mm angle grinder with 2.0ah 1 battery.avif";
import p8 from "../assets/images/electricals/STANLEY V20 18V 165MM CIRCULAR SAW WITH 2.0AH 1 BATTERIES AND KIT.avif";
import p9 from "../assets/images/electricals/STANLEY V20 18V BRUSHLESS 190MM CIRCULAR SAW WITH 4.0AH 2 BATTERIES AND KIT.avif";
import p10 from "../assets/images/electricals/STANLEY V20 18V brushless 125mm angle grinder with 4.0ah 2 battery.avif";
import p11 from "../assets/images/electricals/STANLEY V20 18V brushless impact driver with 2. 0AH 2 Batteries and kit box.avif";
import p12 from "../assets/images/electricals/STANLEY V20 18V brushless sos plus drill with 4.0AH 2 Batteries and kit box.avif";
import p13 from "../assets/images/electricals/STANLEY® FATMAX® V20 18V Cordless Jigsaw Combo Kit.avif";
import p14 from "../assets/images/electricals/Stanley Air Compressor 24L 2.0HP 1PH 8Bar (lubricated).avif";
import p15 from "../assets/images/electricals/Stanley Air Compressor 24L Silent 1.3HP 1PH 8Bar.avif";
import p16 from "../assets/images/electricals/Stanley Air Compressor 50L 2.0HP.avif";
import p17 from "../assets/images/electricals/Stanley Air Compressor 50L Vertical Tank 2.0HP 1PH 10Bar.avif";
import p18 from "../assets/images/electricals/Stanley Air Compressor 50L Vertical Tank 2.0HP 1PH 10Bar.avif";
import p19 from "../assets/images/electricals/Stanley Air Dusting Gun.avif";
import p20 from "../assets/images/electricals/Stanley Inflating Gun.avif";
import p21 from "../assets/images/electricals/Stanley Spiral Hose with Fittings.avif";
import p22 from "../assets/images/electricals/StanleyAirToolKit 8Pcs(included AirGun,inflatingGun,spray 5m Spiral Hose,3 Nozzl.avif";
import p23 from "../assets/images/electricals1/94 Piece Socket Wrench Set.avif";
import p24 from "../assets/images/electricals1/CHEMICAL SPILL KIT.avif";
import p25 from "../assets/images/electricals1/COTTON GLOVES G70.avif";
import p26 from "../assets/images/electricals1/DISPOSABLE CLIP CAP.avif";
import p27 from "../assets/images/electricals1/EXPANDABLE BARRIER.avif";
import p28 from "../assets/images/electricals1/Folding Hex, SAE-MetricTorx.avif";
import p29 from "../assets/images/electricals1/Inertialess sledge hammer.avif";
import p30 from "../assets/images/electricals1/LEATHER WELDING LEG GUARD Armstrong SLG.avif";
import p31 from "../assets/images/electricals1/MULTI DOUBLE PALM LEATHER GLOVES.avif";
import p32 from "../assets/images/electricals1/NON VENTED HJK.avif";
import p33 from "../assets/images/electricals1/OIL SORBENT ROLL.avif";
import p34 from "../assets/images/electricals1/REFLECTIVE NET TYPE VEST 35 GSM Workland FPS.avif";
import p35 from "../assets/images/electricals1/SCI LIFE JACKET AUH.avif";
import p36 from "../assets/images/electricals1/STAINLESS STEEL MESH GLOVES SML.avif";
import p37 from "../assets/images/electricals1/Sledge hammers, drop-forged head, fberglass 2-component handl.avif";
import p38 from "../assets/images/electricals1/Sparta Mallets, black rubber, fberglass 2-component handle.avif";
import p39 from "../assets/images/electricals1/TWIN CARTRIDGE MASK WITH SINGLE EXHALATION VALVE.avif";
import p40 from "../assets/images/electricals1/Vaultex 100%COTTON BALACLAVA CAP.avif";
import p41 from "../assets/images/electricals1/Vaultex 2 PLY POLISTER WEBBING SLING.avif";
import p42 from "../assets/images/electricals1/Vaultex ABS HELMET MOUNTED EAR MUFF SUP.avif";
import p43 from "../assets/images/electricals1/Vaultex INSULATED PLASTIC EAR MUFF.avif";
import p44 from "../assets/images/electricals1/Vaultex LZA.avif";
import p45 from "../assets/images/electricals1/Vaultex Microporous Disposable Coverall 60GSM TDC.avif";
import p46 from "../assets/images/electricals1/Vaultex REFLECTIVE TSHIRT.avif";
import p47 from "../assets/images/electricals1/Vaultex REUSABLE CORDED EARPLUG.avif";
import p48 from "../assets/images/electricals1/Vaultex STEEL TOE AND STEEL PLATE PU SOLE VIC.avif";
import p49 from "../assets/images/electricals1/Vaultex STEEL TOE AND STEEL PLATE SJIK.avif";
import p50 from "../assets/images/electricals1/Vaultex STEEL TOE STEEL PLATE DGM (S5 STANDARD)S.avif";
import p51 from "../assets/images/electricals1/Vaultex reflective net type vest 134 gsm IDN.avif";
import p52 from "../assets/images/electricals1/Vaultex3 PLY DISPOSABLE MASK BCM.avif";
import p53 from "../assets/images/electricals1/Vitaly 12V Heavy Duty Double Cylinder Air Compressor.avif";
import p54 from "../assets/images/electricals1/Warning post IMA.avif";
import p55 from "../assets/images/electricals1/Warning post SCI WPN.avif";
import p56 from "../assets/images/electricals1/facesheild ratchet head gear.avif";
import p57 from "../assets/images/electricals1/fire blanket roll.avif";
import p58 from "../assets/images/electricals1/sparta Mallets, white rubber, fberglass 2-component handle.avif";
import p59 from "../assets/images/electricals1/sparta Nailing hammer, one-piece forged, 2-component handle.avif";
import FeatureGallery from "../components/Elements/feturedGallery2";
import f1 from "../assets/images/featured/safetyshoes.jpeg";
import f2 from "../assets/images/featured/safetyvest.jpeg";

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
const GarageTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "28.80",
      description:
        "18V STANLEY® FATMAX® V20 Jobsite Blower",
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
      description: "Air Compressor 50L 2.5HP 1PH 10BAR 24LM.avif",
    },
    {
      image: p4,
      price: "259.20",
      description: "Air Tool Kit 7Pcs With Carry Bag(Air gun,Inflating gun,Spray gun,3m Spiral Hose",
    },
    {
      image: p5,
      price: "528",
      description:
        "Michelin Air Compressor Vertical Oil Free 24L1.5HP 1 PH 8 Bar 160L",
    },
    {
      image: p6,
      price: "33.60",
      description: "Michelin Air Compressor Vertical Oil Free 50L 2HP 1PH 10Bar 220L",
    },
    {
      image: p7,
      price: "326.40",
      description:
        "STANLEY V20 18V 125mm angle grinder with 2.0ah 1 battery",
    },
    {
      image: p8,
      price: "86.40",
      description:
        "STANLEY V20 18V 165MM CIRCULAR SAW WITH 2.0AH 1 BATTERIES AND KIT",
    },
    {
      image: p9,
      price: "912.00",
      description:
        "STANLEY V20 18V BRUSHLESS 190MM CIRCULAR SAW WITH 4.0AH 2 BATTERIES AND KIT",
    },
    {
      image: p10,
      price: "57.60",
      description: "STANLEY V20 18V brushless 125mm angle grinder with 4.0ah 2 battery",
    },
    {
      image: p11,
      price: "120.00",
      description:
        "STANLEY V20 18V brushless impact driver with 2. 0AH 2 Batteries and kit box",
    },
     {
       image: p12,
       price: "157.50",
       description:
        "STANLEY V20 18V brushless sos plus drill with 4.0AH 2 Batteries and kit box",
     },
    {
      image: p13,
      price: "43.20",
      description:
        "STANLEY® FATMAX® V20 18V Cordless Jigsaw Combo Kit",
    },
    {
      image: p14,
      price: "24.96",
      description:
        "Stanley Air Compressor 24L 2.0HP 1PH 8Bar lubricated",
    },
    {
      image: p15,
      price: "168.00",
      description: "Stanley Air Compressor 24L Silent 1.3HP 1PH 8Bar",
    },
    {
      image: p16,
      price: "19.20",
      description: "Stanley Air Compressor 50L 2.0HP",
    },
    {
      image: p17,
      price: "33.60",
      description:
        "Stanley Air Compressor 50L Vertical Tank 2",
    },
    
    {
      image: p19,
      price: "86.40",
      description:
        "Stanley Air Dusting Gun",
    },
    {
      image: p20,
      price: "33.60",
      description:
        "Stanley Inflating Gun",
    },
    {
      image: p21,
      price: "216.00",
      description:
        "Stanley Spiral Hose with Fittings",
    },
    {
      image: p22,
      price: "450.00",
      description:
        "StanleyAirToolKit 8Pcs included AirGun,inflatingGun,spray 5m Spiral Hose,3 Nozzl",
    },
    {
      image: p23,
      price: "62.40",
      description:
        "94 Piece Socket Wrench Set",
    },
    {
      image: p24,
      price: "336.00",
      description:
        "CHEMICAL SPILL KIT",
    },
    {
      image: p25,
      price: "632.64",
      description: "COTTON GLOVES G70",
    },
    {
      image: p26,
      price: "86.40",
      description:
        "DISPOSABLE CLIP CAP",
    },
    {
      image: p27,
      price: "677.76",
      description: "EXPANDABLE BARRIER",
    },
    {
      image: p28,
      price: "106.56",
      description: "Folding Hex, SAE-MetricTorx",
    },
     {
       image: p29,
       price: "33.60",
       description:
         "Inertialess sledge hammer",
     },
    {
      image: p30,
      price: "2640.00",
      description:
        "LEATHER WELDING LEG GUARD Armstrong SLG",
    },
    {
      image: p31,
      price: "86.40",
      description:
        "MULTI DOUBLE PALM LEATHER GLOVES",
    },
    {
      image: p32,
      price: "936.00",
      description:
        "NON VENTED HJK",
    },
    {
      image: p33,
      price: "24.00",
      description:
        "OIL SORBENT ROLL",
    },
    {
      image: p34,
      price: "14.40",
      description:
        "REFLECTIVE NET TYPE VEST 35 GSM Workland FPS",
    },
    {
      image: p35,
      price: "188.80",
      description: "SCI LIFE JACKET AUH",
    },
    {
      image: p36,
      price: "43.20",
      description: "STAINLESS STEEL MESH GLOVES SML",
    },
    {
      image: p37,
      price: "124.80",
      description:
        "Sledge hammers, drop-forged head, fberglass 2-component handl",
    },
    {
      image: p38,
      price: "816.00",
      description:
        "Sparta Mallets, black rubber, fberglass 2-component handle",
    },
    {
      image: p39,
      price: "96.40",
      description: "TWIN CARTRIDGE MASK WITH SINGLE EXHALATION VALVE",
    },
    {
      image: p40,
      price: "1392.00",
      description: "Vaultex 100%COTTON BALACLAVA CAP",
    },
    {
      image: p41,
      price: "583.68",
      description: "Vaultex 2 PLY POLISTER WEBBING SLING",
    },
    {
      image: p42,
      price: "892.80",
      description:
        "Vaultex ABS HELMET MOUNTED EAR MUFF SUP",
    },
    {
      image: p43,
      price: "24.00",
      description:
        "Vaultex INSULATED PLASTIC EAR MUF",
    },
    {
      image: p44,
      price: "104.64",
      description: "Vaultex LZA",
    },
    {
      image: p45,
      price: "52.80",
      description: "Vaultex Microporous Disposable Coverall 60GSM TDC",
    },
    {
      image: p46,
      price: "33.60",
      description:
        "Vaultex REFLECTIVE TSHIRT",
    },
    {
      image: p47,
      price: "14.40",
      description:
        "Vaultex REUSABLE CORDED EARPLUG",
    },
    {
      image: p48,
      price: "16.32",
      description: "Vaultex STEEL TOE AND STEEL PLATE PU SOLE VIC",
    },
    {
      image: p49,
      price: "3744.00",
      description: "Vaultex STEEL TOE AND STEEL PLATE SJIK",
    },
    {
      image: p50,
      price: "432.00",
      description:
        "Vaultex STEEL TOE STEEL PLATE DGM S5 STANDARDS",
    },
    {
      image: p51,
      price: "792.00",
      description: "Vaultex reflective net type vest 134 gsm IDN",
    },
    {
      image: p52,
      price: "316.80",
      description: "Vaultex3 PLY DISPOSABLE MASK BCM",
    },
    {
      image: p53,
      price: "115.20",
      description:
        "Vitaly 12V Heavy Duty Double Cylinder Air Compressor",
    },
    {
      image: p54,
      price: "2880.00",
      description:
        "Warning post IMA",
    },
    {
      image: p55,
      price: "55.68",
      description: "Warning post SCI WPN",
    },
    {
      image: p56,
      price: "33.60",
      description:
        "facesheild ratchet head gear",
    },
    {
      image: p57,
      price: "67.20",
      description: "fire blanket roll",
    },
    {
      image: p58,
      price: "69.12",
      description: "sparta Mallets, white rubber, fberglass 2-component handle",
    },
    {
      image: p59,
      price: "2928.00",
      description: "sparta Nailing hammer, one-piece forged, 2-component handle",
    },
  ];

  
const projectsData = [
    { image: f1, title: "" },
    { image: f2, title: "" },

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
          <h3 style={{ fontSize: "2rem" }}>Electricals</h3>
          {/* <p>Exceptional solutions for high-volume, high-speed needs</p> */}
          <div className="row flexCenter"></div>
        </TextOverlay>
        <div className="bg-overlay"></div>
      </section>
<FeatureGallery projects={projectsData} />
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

export default GarageTools;
