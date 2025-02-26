import React, { useEffect } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import FAQSection from "../components/Sections/FAQSection";
import FAQTabs from "../components/Sections/FAQTabs";
import ImageTextComponent from "../components/Elements/ImageTextComponent";
import header from "../assets/img/header.png";
import FooterSection from "../components/Sections/FooterSection";
import b4 from "../assets/img/banner/Home - carousel banner 1.png";
import b3 from "../assets/img/banner/Home - carousel banner 2.png";
import b8 from "../assets/img/banner/Home - carousel banner 3.png";
import b9 from "../assets/img/banner/Home - carousel banner 4.png";
import b10 from "../assets/img/banner/aboutusbanner3.png";
import StatisticCounter from "../components/Elements/statisticsCounter";
import FeatureGallery3 from "../components/Elements/featuredGallery3";
import FeatureGallery2 from "../components/Elements/feturedGallery2";

import f1 from "../assets/images/featured/adhesive.jpeg";
import f2 from "../assets/images/featured/packingmaterial.jpeg";
import f3 from "../assets/images/featured/weighingtool.jpeg";
import f4 from "../assets/images/featured/meters.jpeg";
import f5 from "../assets/images/featured/hardwaretr.jpeg";
import f6 from "../assets/images/featured/powertools.jpeg";
import f7 from "../assets/images/featured/toolset.jpeg";
import f8 from "../assets/images/featured/pumps.jpeg";
export default function Landing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsData1 = [
    { image: f1, title: "" },
    { image: f2, title: "" },
    { image: f3, title: "" },
  ];
  const projectsData3 = [
    { image: f4, title: "" },
    { image: f5, title: "" },
    { image: f6, title: "" },
  ];

  const projectsData2 = [
    { image: f7, title: "" },
    { image: f8, title: "" },
  ];
  return (
    <>
      <TopNavbar />
      <Header
      // sliderImages={[
      //   {
      //     src: b8,
      //     alt: "Image 1",
      //     tagLine: "Efficient, Scalable, and On-time",
      //     subHead:
      //       "Solutions that fit your production needs and times perfectly.",
      //   },
      //   {
      //     src: b9,
      //     alt: "Image 2",
      //     tagLine: "Shortest Lead Times, Highest Quality:",
      //     subHead: "Delivering cost-effective solutions, Fast.",
      //   },
      //   {
      //     src: b10,
      //     alt: "Image 3",
      //     tagLine: "Global Presence, Local Support:",
      //     subHead: "Serving pharma leaders across three continents.",
      //   },
      //   {
      //     src: b4,
      //     alt: "Image 4",
      //     tagLine: "Local experts, Global reach:",
      //     subHead: "Enhanced client support with our US-based LLC.",
      //   },
      //   {
      //     src: b3,
      //     alt: "Image 5",
      //     tagLine: "Elite support empowering innovation:",
      //     subHead: "Dedicated engineering for every stage of production.",
      //   },
      // ]}
      />
      {/* <FeatureGallery3 projects={projectsData1}  /> */}
      <Services />
      <StatisticCounter />
      {/* <FeatureGallery3 projects={projectsData3}  /> */}
      {/* <Blog /> */}
      {/* <Pricing /> */}
      {/*       <Contact />
//  */}{" "}
      {/* <FeatureGallery2 projects={projectsData2} /> */}
      {/* <ImageTextComponent
        image={header}
        text="USA company description."
        heading=""
        subHeading=""
        isImageRight="true"
        bgStyle="dark"
      /> */}
      {/* <FAQTabs /> */}
      <FooterSection />
    </>
  );
}
