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

import p1 from "../assets/images/garageTools/2pcsBoosterCable.webp";
// import p2 from "../assets/images/garageTools/2pcscableClips.webp";
import p3 from "../assets/images/garageTools/2piecePair6Ton.webp";
import p4 from "../assets/images/garageTools/3TonHydraulicJack.webp";
import p5 from "../assets/images/garageTools/5tonSteelRack.webp";
import p6 from "../assets/images/garageTools/6in1FoldingNut.webp";
import p7 from "../assets/images/garageTools/9pcsWireLingReachHose.webp";
import p8 from "../assets/images/garageTools/10ltCan.webp";
import p9 from "../assets/images/garageTools/10tonsteelRack.webp";
import p10 from "../assets/images/garageTools/11pcsCarDoorPanel.webp";
import p11 from "../assets/images/garageTools/13pcsremovalewheel.webp";
import p12 from "../assets/images/garageTools/13pcsRemovaleWheelsteering.webp";
import p13 from "../assets/images/garageTools/16pcsHoleSaw.webp";
import p14 from "../assets/images/garageTools/50mmlong.webp";
import p15 from "../assets/images/garageTools/abbasAli23pcsAluminiumAlloy.webp";
import p16 from "../assets/images/garageTools/abbasaliCupTypeSoft.webp";
import p17 from "../assets/images/garageTools/airbrushKitHvlp.webp";
import p18 from "../assets/images/garageTools/airFilter.webp";
import p19 from "../assets/images/garageTools/airFilterRegulator.webp";
import p20 from "../assets/images/garageTools/carCircuit.webp";
import p21 from "../assets/images/garageTools/carCreeper.webp";
import p22 from "../assets/images/garageTools/carJack.webp";
import p23 from "../assets/images/garageTools/carWasher.webp";
import p24 from "../assets/images/garageTools/clarkeHighPressureWasher.webp";
import p25 from "../assets/images/garageTools/combiDrill.webp";
import p26 from "../assets/images/garageTools/compressioTester.webp";
import p27 from "../assets/images/garageTools/crdless2Lithium.webp";
import p28 from "../assets/images/garageTools/dewaltConcealerSafety.webp";
import p29 from "../assets/images/garageTools/easyCrackerEgg.webp";
import p30 from "../assets/images/garageTools/esabBuddy.webp";
import p31 from "../assets/images/garageTools/femailEStar.webp";
import p32 from "../assets/images/garageTools/foamingCleaner.webp";
import p33 from "../assets/images/garageTools/foamTape.webp";
import p34 from "../assets/images/garageTools/gunTorch.webp";
import p35 from "../assets/images/garageTools/hammer.webp";
import p36 from "../assets/images/garageTools/handGarageLamp.webp";
import p37 from "../assets/images/garageTools/hightPressureWasher.webp";
import p38 from "../assets/images/garageTools/hoistStand.webp";
import p39 from "../assets/images/garageTools/hydraulicFloorJack.webp";
import p40 from "../assets/images/garageTools/HydrualicPalletTruck.webp";
import p41 from "../assets/images/garageTools/irwint350.webp";
import p42 from "../assets/images/garageTools/liftJack.webp";
import p43 from "../assets/images/garageTools/longPlaner.webp";
import p44 from "../assets/images/garageTools/maFraHydraulic.webp";
import p45 from "../assets/images/garageTools/metalToolbx21inch.webp";
import p46 from "../assets/images/garageTools/oilFilter.webp";
import p47 from "../assets/images/garageTools/oneHandSprayer.webp";
import p48 from "../assets/images/garageTools/outdoorEnergySavingLed.webp";
import p49 from "../assets/images/garageTools/palletTRucj.webp";
import p50 from "../assets/images/garageTools/pipeThreader.webp";
import p51 from "../assets/images/garageTools/prestarTrolley300kg.webp";
import p52 from "../assets/images/garageTools/professionalToolsSet.webp";
import p53 from "../assets/images/garageTools/ratchetWrech.webp";
import p54 from "../assets/images/garageTools/rwd9000aGenerator.webp";
import p55 from "../assets/images/garageTools/scissoJack2.webp";
import p56 from "../assets/images/garageTools/sprayGun.webp";
import p57 from "../assets/images/garageTools/sprayGunPVC.webp";
import p58 from "../assets/images/garageTools/sprayPaintWhite.webp";
import p59 from "../assets/images/garageTools/tableSaw.webp";

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
    // {
    //   image: p12,
    //   price: "157.50",
    //   description:
    //     "Ceiling fan box type kenwel Energy Saving 60x60 for four-ceiling",
    // },
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
    // {
    //   image: p29,
    //   price: "33.60",
    //   description:
    //     "Mini Hand Held Spray Portable Travel Handle Water Spray Cool Mist Fan B",
    // },
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
    {
      image: p33,
      price: "24.00",
      description:
        "Single Sided Foam Tape Multi-Surface Black Adhesive Weatherstrip Foam T",
    },
    {
      image: p34,
      price: "14.40",
      description:
        "Single Sided Foam Tape Multi-Surface Black Adhesive Weatherstrip Foam T",
    },
    {
      image: p35,
      price: "188.80",
      description: "Bosch GSH 11 E Professional Demolition Hammer with SDS max",
    },
    {
      image: p36,
      price: "43.20",
      description: "ORANGE COLOUR HAND GARAGE LAMP 5MTR CABLE WITH BULB",
    },
    {
      image: p37,
      price: "124.80",
      description:
        "High Pressure Washer Gun High Power Washer Water Spray Gun with Long Wa",
    },
    {
      image: p38,
      price: "816.00",
      description:
        "Engine Hoist Stand Cherry Picker Ship Crane Folding Lift Garage Worksho",
    },
    {
      image: p39,
      price: "96.40",
      description: "Hydraulic Floor Jack 2 ton",
    },
    {
      image: p40,
      price: "1392.00",
      description: "Stanley Hydraulic Pallet Truck",
    },
    {
      image: p41,
      price: "583.68",
      description: "Irwin T350/48 Leader Pipe Wrench ( Blue)",
    },
    {
      image: p42,
      price: "892.80",
      description:
        "Folding 3 Tonne Hoist Lift Jack with Wheels Engine Crane (Black)",
    },
    {
      image: p43,
      price: "24.00",
      description:
        " 2 (Special tool) Pcs 3.2in Long Planer Blades Repalcement for (11ry388qf",
    },
    {
      image: p44,
      price: "104.64",
      description: "Ma Fra Hydraulic Horizontal Trolley Jack,2 Ton",
    },
    {
      image: p45,
      price: "52.80",
      description: "METAL TOOLBOX 21 INCH",
    },
    {
      image: p46,
      price: "33.60",
      description:
        "Cap Oil Filter Wrench 65mm 14 Flutes Cap Oil Filter Wrench Car Socket R",
    },
    {
      image: p47,
      price: "14.40",
      description:
        "One-Hand Pressure Sprayer, Spray Bottl with Adjustable Pressure Nozzle,",
    },
    {
      image: p48,
      price: "16.32",
      description: "Outdoor Energy Saving LED Bulb - DC12V L",
    },
    {
      image: p49,
      price: "3744.00",
      description: "Digital Display Hydrualic Pallet Truck",
    },
    {
      image: p50,
      price: "432.00",
      description:
        "METRO RATCHET PIPE THREADER DIE SET 1 1/4, 1 1/2, 2in 32MM / 38MM / 50MM",
    },
    {
      image: p51,
      price: "792.00",
      description: "PRESTAR PLATFORM TROLLEY 300KG MADE IN JAPAN",
    },
    {
      image: p52,
      price: "316.80",
      description: "Professional Tools Set - 186 Pcs",
    },
    {
      image: p53,
      price: "115.20",
      description:
        "Pneumatic Ratchet Wrench 1/2-Inch Heavy Duty Air Ratchet Wrench Adjusta",
    },
    {
      image: p54,
      price: "2880.00",
      description:
        "PT-RWD9000A GENERATOR A POWERFUL MACHINE USED FOR VARIOUS ELECTRONIC IT",
    },
    {
      image: p55,
      price: "55.68",
      description: " Scissor Jack 2 Ton for Car",
    },
    {
      image: p56,
      price: "33.60",
      description:
        " Airbrush Kit HVLP Air Spray Gun Touch Up Paint Sprayer Gravity Car Furniture Sma",
    },
    {
      image: p57,
      price: "67.20",
      description: "FAZRIK- SPRAY GUN H827 UP TANK PVC",
    },
    {
      image: p58,
      price: "69.12",
      description: "ASMACO SPRAY PAINT WHITE 12PCS",
    },
    {
      image: p59,
      price: "2928.00",
      description: "Makita MLT100 Table Saw, 255mm Long",
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
          <h3 style={{ fontSize: "2rem" }}>Garage Tools</h3>
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

export default GarageTools;
