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

// import p1 from "../assets/images/paints/18vBrushless125mm.webp";
import p1 from "../assets/images/paints/10pcstool.webp";
import p2 from "../assets/images/paints/airbrushKit.webp";
import p3 from "../assets/images/paints/extensionPole2mt.webp";
import p4 from "../assets/images/paints/manualSander.webp";
import p5 from "../assets/images/paints/mask.webp";
import p6 from "../assets/images/paints/maskingTape.webp";
import p7 from "../assets/images/paints/manualSander.webp";
import p8 from "../assets/images/paints/metalCleanerBrush.webp";
import p9 from "../assets/images/paints/miniPaintKit.webp";
import p10 from "../assets/images/paints/paint3[cs.webp";
import p11 from "../assets/images/paints/paintKit.webp";
import p12 from "../assets/images/paints/paintOrange.webp";
import p13 from "../assets/images/paints/paintRoller.webp";
import p14 from "../assets/images/paints/paintRoller9in.webp";
import p15 from "../assets/images/paints/paintScrapper.webp";
import p16 from "../assets/images/paints/paintSet.webp";
import p17 from "../assets/images/paints/plasticRollerBlue.webp";
import p18 from "../assets/images/paints/sanderRed.webp";
import p19 from "../assets/images/paints/sprayPaintBlack.webp";
// import p20 from "../assets/images/paints/wallPaintKit.webp";
// import p21 from "../assets/images/paints/white3pcs.webp";
import p22 from "../assets/images/paints/whiteCable.webp";
import FeatureGallery from "../components/Elements/featureGallery";
import f1 from "../assets/images/featured/adhesive.JPG";
// import f2 from "../assets/images/featured/safetyvest.jpeg";
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

  h3 {
    font-size: 2rem;
    margin-top: 10px;
    color:#000;
  }
     @media (max-width: 768px) {
    padding: 30px;

    h2 {
      font-size: 2rem;
      
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
},
`;
const Paints = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "14.40",
      description:
        "10 pcs Wall Painting Tools Roller Refill 4 Inch 100Mm, High Density Mic",
    },
    {
      image: p2,
      price: "33.60",
      description:
        "Airbrush Kit HVLP Air Spray Gun Touch Up Paint Sprayer Gravity Car Furniture Sma",
    },
    {
      image: p3,
      price: "48.00",
      description:
        "Telescoping Extension Multi-Purpose Pole 2Mtr With 9in Paint Roller 1Pc",
    },
    {
      image: p4,
      price: "14.40",
      description: "Manual Sander for painting purpose",
    },
    {
      image: p5,
      price: "28.80",
      description:
        "Gas mask spray paint chemical pesticide special dust protection mask fi",
    },
    {
      image: p6,
      price: "13.44",
      description:
        "Adhesive Masking Tape General Purpose Painter's Tape Bulk for Painting,",
    },
    {
      image: p7,
      price: "19.20",
      description:
        "Manual Sander Red For sanding wall paint and other surfaces",
    },
    {
      image: p8,
      price: "9.60",
      description:
        "Plastic Handle Stainless Steel Wire Brush DIY Metal Cleaner Rust Paint",
    },
    {
      image: p9,
      price: "27.84",
      description: "Precision Mini Paint Roller Kit, White",
    },
    {
      image: p10,
      price: "19.20",
      description: "ASMACO SPRAY PAINT BLACK PACK OF 3PCS",
    },
    {
      image: p11,
      price: "48.00",
      description: "Wall Paint Kit of Roller, Scrapper, Brushes And Tray",
    },
    {
      image: p12,
      price: "16.32",
      description: "Asmaco Spray Paint, Orange",
    },
    {
      image: p13,
      price: "22.08",
      description: "Paint Roller Set (9in)",
    },
    {
      image: p14,
      price: "18.24",
      description: "Plastic Handle Paint Roller (Blue, 9in)",
    },
    {
      image: p15,
      price: "15.36",
      description:
        "Paint Scrapper Multifunctional Stainless Steel Putty Knife (4in)",
    },
    {
      image: p16,
      price: "124.80",
      description:
        "Set of complete paint colour and tool set (National Paint Oil paint white)",
    },
    {
      image: p17,
      price: "18.24",
      description: "Plastic Handle Paint Roller (Blue, 9in)",
    },
    // {
    //   image: p18,
    //   price: "47.04",
    //   description:
    //     "Beorol Garden 9 Working Mode Spray Gun with Adaptor and Connector Set",
    // },
    {
      image: p19,
      price: "14.40",
      description: "Spray paint matt black",
    },
    // {
    //   image: p20,
    //   price: "38.40",
    //   description:
    //     "HXSD VMP Gardening Lawn Scissors Flower Shearing Scissors Scissors Shearing Wood",
    // },
    // {
    //   image: p21,
    //   price: "45.00",
    //   description:
    //     "Mumoo Bear 5L Hand Sprayer, Pressure Sprayer, garden Sprayer",
    // },
    {
      image: p22,
      price: "43.20",
      description:
        "White Cable Raceway On-Wall Cord Cover | 1 Meter Medium Paintable Channel)",
    },
  ];

  const projectsData = [{ image: f1, title: "" }];
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
          height: "250px",
          width: "100vw",
          marginTop: "60px",
          position: "relative",
          color: "#ffffff",
        }}
      >
        <TextOverlay>
          <h2>Our Products</h2>
          <h3 style={{ fontSize: "2rem" }}>Paints and Accessories</h3>
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

export default Paints;
