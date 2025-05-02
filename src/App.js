import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Screens
import Landing from "./screens/Landing.jsx";
import ContactUs from "./screens/contactUs.jsx";
import Careers from "./screens/careers.jsx";
import AboutUs from "./screens/aboutUs.jsx";
import Products from "./screens/productsEquipments.jsx";
import Blogs from "./screens/blogs.jsx";
import ProductsCompany from "./screens/productsCompany.jsx";
import ProductsEquipments from "./screens/productsEquipments.jsx";
import Fans from "./screens/fans.jsx";
import Fastners from "./screens/fastners.jsx";
import Sanitary from "./screens/sanitary.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heaters from "./screens/waterHeaters.jsx";
import Furniture from "./screens/furniture.jsx";
import Ladders from "./screens/ladders.jsx";
import Rope from "./screens/rope.jsx";
import GarageTools from "./screens/garageTools.jsx";
import WaterPumps from "./screens/waterPumps.jsx";
import WeighingProducts from "./screens/weighingProducts.jsx";
import Paints from "./screens/paints.jsx";
import PowerTools from "./screens/powerTools.jsx";
import HandTools from "./screens/handTools.jsx";
import Electricals from "./screens/electricals.jsx";

export default function App() {
  return (
    <>
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page */}
          <Route path="/contactUs" element={<ContactUs />} /> {/* New page */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contacts" element={<Careers />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/products/equipments" element={<ProductsEquipments />} /> */}
          <Route path="/products" element={<ProductsEquipments />} />
          <Route path="/products/company" element={<ProductsCompany />} />
          <Route path="/products/fans" element={<Fans />} />
          <Route path="/products/fasteners" element={<Fastners />} />
          <Route path="/products/sanitary" element={<Sanitary />} />
          <Route path="/products/water-heaters" element={<Heaters />} />
          <Route
            path="/products/furniture-accessories"
            element={<Furniture />}
          />
          <Route path="/products/rope" element={<Rope />} />
          <Route path="/products/ladders" element={<Ladders />} />
          <Route path="/products/garage-tools" element={<GarageTools />} />
          <Route path="/products/water-pumps" element={<WaterPumps />} />
          <Route
            path="/products/weighing-products"
            element={<WeighingProducts />}
          />
          <Route path="/products/paint-and-accessories" element={<Paints />} />
          <Route path="/products/power-tools" element={<PowerTools />} />
          <Route path="/products/hand-tools" element={<HandTools />} />
          <Route path="/products/electricals" element={<Electricals />} />
          {/* Route for Careers */}
        </Routes>
      </Router>
      <a
        href="https://wa.me/0527460533"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      {/* <Landing /> */}
    </>
  );
}
