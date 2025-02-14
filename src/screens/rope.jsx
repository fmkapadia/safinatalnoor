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

// import p1 from "../assets/images/rope/18vBrushless125mm.webp";
import p1 from "../assets/images/rope/8mm20mmrope.webp";
import p2 from "../assets/images/rope/10m2pcsscrew.webp";
import p3 from "../assets/images/rope/cottonRope.webp";
import p4 from "../assets/images/rope/doorHandleKey.webp";
import p5 from "../assets/images/rope/doorlock.webp";
import p6 from "../assets/images/rope/elasticRope.webp";
import p7 from "../assets/images/rope/keyWithLock.webp";
import p8 from "../assets/images/rope/nylonRope.webp";
import p9 from "../assets/images/rope/nylonRope20m.webp";
import p10 from "../assets/images/rope/nylonrope50mt.webp";
import p11 from "../assets/images/rope/rope10mm50.webp";
import p12 from "../assets/images/rope/rope640.webp";
import p13 from "../assets/images/rope/ropePlumbobWhite.webp";
import p14 from "../assets/images/rope/sewingNeedle.webp";
import p15 from "../assets/images/rope/threadRope50mm.webp";
// import p16 from "../assets/images/rope/stanleyfatmaxv202.0.webp";
import p17 from "../assets/images/rope/wireRopeCable.webp";

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
const Rope = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productList = [
    {
      image: p1,
      price: "15.36",
      description:
        "8mm x 20m Heavy Duty Twisted Natural Cotton Cord Rope Lashing Rope DIY",
    },
    {
      image: p2,
      price: "28.80",
      description:
        "Nylone Rope 10m with 2 Pieces Screw Hook for Laundry, Camping and Other",
    },
    {
      image: p3,
      price: "24.00",
      description: "Hifazat Cotton Rope 8 x 40, Beige",
    },
    {
      image: p4,
      price: "48.00",
      description:
        "Door handle key, door handle with lock, villa European interior wooden",
    },
    {
      image: p5,
      price: "55.68",
      description:
        "Door handle key, door handle with lock, European interior wooden door l",
    },
    {
      image: p6,
      price: "19.20",
      description: "ELASTIC ROPE WITH SNAP HOOK (ROPE FOR HANGING CLOTHES)",
    },
    {
      image: p7,
      price: "67.20",
      description:
        "Door handle key, door handle with lock, European interior wooden door l",
    },
    {
      image: p8,
      price: "18.24",
      description: "Nylon Rope, 6 mm X 100 Yards",
    },
    {
      image: p9,
      price: "16.32",
      description: "Nylon Rope (Random Colour,20m)",
    },
    {
      image: p10,
      price: "240.00",
      description: " Nylone Rope 50 Meter multicolour (20 mm)",
    },
    {
      image: p11,
      price: "38.40",
      description: "COTTON ROPE 10MM X 50 YARDS MADE IN INDIA",
    },
    {
      image: p12,
      price: "24.00",
      description: "Cotton Rope 6 x 40, Beige",
    },
    {
      image: p13,
      price: "14.40",
      description: "Cotton Rope for Plumbob (White)",
    },
    {
      image: p14,
      price: "19.20",
      description:
        "Industrial Type Big Sewing Needle 145mm & Cotton Rope For Packing Jute",
    },
    {
      image: p15,
      price: "16.32",
      description: "Beorol Construction Thread Rope (50m) with Spike GK50",
    },

    {
      image: p17,
      price: "38.40",
      description:
        "Wire Rope Cable Clip Clamp U Bolt Saddle Fastener (10 MM)25Pcs",
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

export default Rope;
