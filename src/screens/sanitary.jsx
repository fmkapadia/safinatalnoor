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

// import p1 from "../assets/images/sanitary/18vBrushless125mm.webp";
import p1 from "../assets/images/sanitary/ariston.webp";
import p2 from "../assets/images/sanitary/bathroomFaucet.avif";
import p3 from "../assets/images/sanitary/pegler.avif";
import p4 from "../assets/images/sanitary/5pcsHoseConnector.avif";
import p5 from "../assets/images/sanitary/gardenHose.avif";
import p6 from "../assets/images/sanitary/sprayer.avif";
import p7 from "../assets/images/sanitary/hosePipe.avif";
import p8 from "../assets/images/sanitary/pickaxe.avif";
import p9 from "../assets/images/sanitary/tapConnector.avif";
import p10 from "../assets/images/sanitary/wateringCane.avif";
import p11 from "../assets/images/sanitary/sprayer8lt.avif";
import p12 from "../assets/images/sanitary/hose50mt.avif";
import p13 from "../assets/images/sanitary/adapter3pcs.avif";
import p14 from "../assets/images/sanitary/weedkillerSprayer.avif";
import p15 from "../assets/images/sanitary/gasket419pcs.avif";
import p16 from "../assets/images/sanitary/italyHose.avif";
import p17 from "../assets/images/sanitary/coupler.avif";
import p18 from "../assets/images/sanitary/sprayGun.avif";
import p19 from "../assets/images/sanitary/sprayerkettle2l.avif";
import p20 from "../assets/images/sanitary/lawnScissors.avif";
import p21 from "../assets/images/sanitary/sprayer5lt.avif";
import p22 from "../assets/images/sanitary/faucetAdapter.avif";
import p23 from "../assets/images/sanitary/kitchenFaucet.avif";
import p24 from "../assets/images/sanitary/fixtures.avif";
import p25 from "../assets/images/sanitary/tapFaucet.avif";
import p26 from "../assets/images/sanitary/washBasinFaucet.avif";
import p27 from "../assets/images/sanitary/flexibleHose.avif";
import p28 from "../assets/images/sanitary/longHandle.avif";
import p29 from "../assets/images/sanitary/washBasinMixer.avif";
import p30 from "../assets/images/sanitary/filterPack.avif";
import p31 from "../assets/images/sanitary/waterCooler.avif";
import p32 from "../assets/images/sanitary/pushType.avif";
import p33 from "../assets/images/sanitary/toiletFaucet.avif";
import p34 from "../assets/images/sanitary/kitchenMixer.avif";
import p35 from "../assets/images/sanitary/mixerTapFaucet.avif";
import p36 from "../assets/images/sanitary/heater50lt.avif";
import p37 from "../assets/images/sanitary/heater100lt.avif";
import p38 from "../assets/images/sanitary/heaterpro1.avif";
import p39 from "../assets/images/sanitary/tankWater.avif";
import p40 from "../assets/images/sanitary/heaterhorizontal.avif";
import p41 from "../assets/images/sanitary/aures3.5.avif";
import p42 from "../assets/images/sanitary/aures7.7.avif";
import p43 from "../assets/images/sanitary/heaterproritaly.avif";
import p44 from "../assets/images/sanitary/heater50lBlu.avif";
import p45 from "../assets/images/sanitary/slideBar.avif";
import p46 from "../assets/images/sanitary/clamps.avif";

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
const Sanitary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "59.52",
      description:
        "Alam Fasteners Self Drilling Screw Hex Washer Head Zinc Plated 2 Inch X 10 Made",
    },
    {
      image: p2,
      price: "70.08",
      description: "BATHROOM DOUBLE MIXER FAUCET",
    },
    {
      image: p3,
      price: "26.00",
      description: "PEGLER Brass Gate Valve 3/4in",
    },
    {
      image: p4,
      price: "33.60",
      description:
        "5Pcs 1 2''Hose Connector Quick Connectors Garden Water Irrigation Conne",
    },
    {
      image: p5,
      price: "216.00",
      description:
        "Garden Water Hose Reinforced with Shower and Reducers (Yellow,1/2In,50M",
    },
    {
      image: p6,
      price: "19.20",
      description: "PRESSURE SPRAYER 2 LITER FOR GARDENING & CLEANING USE",
    },
    {
      image: p7,
      price: "144.00",
      description:
        "Garden Hose | Light Weight Durable Hose Pipe, Best Choice for Watering",
    },
    {
      image: p8,
      price: "18.00",
      description:
        "High Quality Multi function Pickaxe + Handle for Gardening Camping Farm",
    },
    {
      image: p9,
      price: "14.40",
      description:
        "Beorol-3/4in Garden Tap Connector Adapter And 1-3/4in Reducer",
    },
    {
      image: p10,
      price: "32.64",
      description: "WATERING CANE 10LTR GREEN FOR GARDENING",
    },
    {
      image: p11,
      price: "57.60",
      description: "GARDEN PRESSURE SPRAYER 8 LITER ",
    },
    {
      image: p12,
      price: "109.44",
      description:
        "Garden Water Hose Reinforced 1/2 Inch 50 Meter with Garden Shower and R",
    },
    {
      image: p13,
      price: "21.12",
      description: "Garden Water Hose Pipe Tap Adapter - 3 Pieces",
    },
    {
      image: p14,
      price: "24.00",
      description:
        "Garden Hand Pressure Sprayer ， Knapsack Weedkiller Chemical Fence Water",
    },
    {
      image: p15,
      price: "39.36",
      description:
        "Andoer 419PCS Assortment Set Seal Gasket Universal NBR Rubber Oil Resistance O-r",
    },
    {
      image: p16,
      price: "96.00",
      description: "Garden Hose Italy - 3/4 inch x 50 meters",
    },
    {
      image: p17,
      price: "14.40",
      description: "Beorol Garden 2 Way Snap-In Pipe Coupler - 1/2in",
    },
    {
      image: p18,
      price: "47.04",
      description:
        "Beorol Garden 9 Working Mode Spray Gun with Adaptor and Connector Set",
    },
    {
      image: p19,
      price: "20.16",
      description:
        "DealMux Air Pressure Type Water Sprayer Kettle for Garden Lawn Plant (2L, Yellow)",
    },
    {
      image: p20,
      price: "38.40",
      description:
        "HXSD VMP Gardening Lawn Scissors Flower Shearing Scissors Scissors Shearing Wood",
    },
    {
      image: p21,
      price: "45.00",
      description:
        "Mumoo Bear 5L Hand Sprayer, Pressure Sprayer, garden Sprayer",
    },
    {
      image: p22,
      price: "21.12",
      description:
        "6 Pcs 1/2 & 3/4 Inch Faucet Adapter Washing Machine Hose Fittings Quick",
    },
    {
      image: p23,
      price: "91.20",
      description: "Kitchen Mixer Tap Faucet,1 Year Replacement Guarantee",
    },
    {
      image: p24,
      price: "108.00",
      description:
        "Grohe Bathroom Fixtures, Trigger Spray, Shattaf With Wall Holder - Tempesta-F Co",
    },
    {
      image: p25,
      price: "91.20",
      description: "Kitchen Mixer Tap Faucet,1 Year Replacement Guarantee",
    },
    {
      image: p26,
      price: "67.20",
      description:
        "WASH BASIN MIXER FAUCET WITH 2PCS FLEXIBLE HOSE & 2PCS ANGLE VALVE",
    },
    {
      image: p27,
      price: "14.40",
      description: "FLEXIBLE HOSE 1/2 X 2 FT FOR FAUCET",
    },
    {
      image: p28,
      price: "26.88",
      description:
        "Outside Home Garden Water Supply Manual Long Handle Durable Bibcock Fau",
    },
    {
      image: p29,
      price: "52.80",
      description: "WASH BASIN MIXER TAP FAUCET WITH 2PCS FLEXIBLE HOSE",
    },
    {
      image: p30,
      price: "19.20",
      description: "Fade-proof Faucet Water Filter Pack Of 2pcs",
    },
    {
      image: p31,
      price: "11.52",
      description:
        "2 Pcs Sets Water Cooler Faucet, Plastic Water Dispenser Tap, Water Bott",
    },
    {
      image: p32,
      price: "21.12",
      description:
        "2pcs Universal Size Push Type Plastic Water Dispenser Faucet Tap Replacement Hom",
    },
    {
      image: p33,
      price: "91.20",
      description:
        "Portable Toilet Bidet Faucets Handheld Shower Spray Shattaf Head For Wash Bathroom",
    },
    {
      image: p34,
      price: "13.44",
      description: "KITCHEN MIXER TAP FAUCET",
    },
    {
      image: p35,
      price: "57.60",
      description: "KITCHEN MIXER TAP FAUCET",
    },
    {
      image: p36,
      price: "624.00",
      description: "Ariston Electric Water Heater Pro R 50Ltr Horizontal",
    },
    {
      image: p37,
      price: "575.04",
      description:
        "ARISTON WATER HEATER BLU R 100LTR HORIZONTAL WITH 2PCS FLEXIBLE HOSE,2P",
    },
    {
      image: p38,
      price: "671.04",
      description:
        "ARISTON WATER HEATER PRO1-R 100LTR HORIZONTAL WITH 2PCS FLEXIBLE HOSE,2",
    },
    {
      image: p39,
      price: "624.00",
      description: "Ariston Electric Tank Water Heater (30L)",
    },
    {
      image: p40,
      price: "617.28",
      description:
        "Ariston Electric Water Heater In Horizontal Shape, 100 Liters",
    },
    {
      image: p41,
      price: "420.00",
      description:
        "Ariston Electric Instantaneous Water Heater Aures S, 3.5 KW",
    },
    {
      image: p42,
      price: "450.00",
      description:
        "Ariston Electric Instantaneous Water Heater Aures SM, 7.7 KW",
    },
    {
      image: p43,
      price: "604.80",
      description:
        "Ariston Electric Water Heater 100 Litter Horizontal Pro-R Italy",
    },
    {
      image: p44,
      price: "414.00",
      description: "Ariston Electric Water Heater 50L BLU-R Horizontal",
    },
    {
      image: p45,
      price: "81.60",
      description:
        "Slide Bar Shower Kit Shower Head and Stainless Steel Slide Bars Shower",
    },
    {
      image: p46,
      price: "52.80",
      description:
        "PVC White U Clamps Fastener Hanger Pipe Clamps Clip with Screw and Fisc",
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
          <h3 style={{ fontSize: "2rem" }}>Sanitary</h3>
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

export default Sanitary;
