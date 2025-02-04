import React from "react";
import styled from "styled-components";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <Wrapper className=" radius8 flexNullCenter flexColumn">
      <QuoteWrapper>
        <QuoteIcon />
      </QuoteWrapper>
      <p
        className="whiteColor "
        style={{ paddingBottom: "30px", fontSize: "1.2rem" }}
      >
        {text}
      </p>
      <p className="orangeColor font13" style={{ alignSelf: "flex-end" }}>
        <em>{author}</em>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 30px;
  margin-top: 30px;
  background-color: #4169e1;
`;
const QuoteWrapper = styled.div`
  position: relative;
  top: -40px;
`;
