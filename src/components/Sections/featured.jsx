import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/featured/adhesive.jpeg";
import img11 from "../../assets/images/featured/equipments.jpeg";
import img2 from "../../assets/images/featured/hardwaretr.jpeg";
import img3 from "../../assets/images/featured/meters.jpeg";
import img4 from "../../assets/images/featured/packingmaterial.jpeg";
import img5 from "../../assets/images/featured/powertools.jpeg";
import img6 from "../../assets/images/featured/pumps.jpeg";
import img7 from "../../assets/images/featured/safetyshoes.jpeg";
import img8 from "../../assets/images/featured/safetyvest.jpeg";
import img9 from "../../assets/images/featured/toolset.jpeg";
import img10 from "../../assets/images/featured/weighingtool.jpeg";
const ProductGalleryWrapper = styled.div`
  padding: 40px 0;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #4169e1;
  font-weight: bold;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-prev,
  .slick-next {
    z-index: 10;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images per slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <ProductGalleryWrapper>
      <GalleryTitle>Our Product Showcase</GalleryTitle>
      <StyledSlider {...settings}>
        {galleryImages.map((image, index) => (
          <GalleryItem key={index}>
            <Image src={image} alt={`gallery-${index}`} />
          </GalleryItem>
        ))}
      </StyledSlider>
    </ProductGalleryWrapper>
  );
};

export default ProductGallery;
