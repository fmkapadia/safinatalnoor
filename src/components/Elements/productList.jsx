import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const CardWrapper = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: #fff;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 5px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #862633;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
`;

const BackButton = styled.button`
  background: #0397dd;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
`;

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleReadMore = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <Container>
      {products.map((product, index) => (
        <CardWrapper key={index}>
          <ImageWrapper
            src={product.image}
            alt="Product"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          />
          <Price>AED {product.price}</Price>
          <Description>
            {expanded[index]
              ? product.description
              : `${product.description.substring(0, 100)}... `}
            {product.description.length > 50 && (
              <ReadMoreButton onClick={() => toggleReadMore(index)}>
                {expanded[index] ? " Show Less" : " Read More"}
              </ReadMoreButton>
            )}
          </Description>
        </CardWrapper>
      ))}
      <BackButton onClick={() => navigate("/products")}>Go Back</BackButton>
      {isOpen && (
        <Lightbox
          mainSrc={products[photoIndex].image}
          nextSrc={products[(photoIndex + 1) % products.length].image}
          prevSrc={
            products[(photoIndex + products.length - 1) % products.length].image
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + products.length - 1) % products.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % products.length)
          }
        />
      )}
    </Container>
  );
};

export default ProductList;
