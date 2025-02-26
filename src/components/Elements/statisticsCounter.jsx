import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaUsers,
  FaProjectDiagram,
  FaHardHat,
  FaRegClock,
} from "react-icons/fa";

// Styled Components
const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  min-height: 30vh;
  // background: #f4f4f9;
  flex-wrap: wrap;
  padding: 2rem;
  padding-top: 0rem;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items in a column on smaller screens */
    gap: 1.5rem;
  }
`;

const CounterBox = styled.div`
  display: flex;
  width: 20vw;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  min-width: 250px; /* Prevents boxes from becoming too small */

  @media (max-width: 1024px) {
    width: 30vw; /* Adjust width for tablets */
  }

  @media (max-width: 768px) {
    width: 80%; /* Full width for small screens */
    flex-direction: column; /* Stack icon and text vertically */
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #4169e1;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
    font-size: 2.5rem; /* Smaller icons on small screens */
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CounterNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #862633;

  @media (max-width: 768px) {
    font-size: 2rem; /* Reduce font size on small screens */
  }
`;

const CounterLabel = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller text on small screens */
  }
`;

const StatisticCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100;
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue < target) {
          currentValue = Math.min(currentValue + increment, target);
          counter.textContent = Math.floor(currentValue);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    };

    counters.forEach((counter) => {
      animateCounter(counter);
    });
  }, []);

  return (
    <CounterContainer>
      <CounterBox>
        <IconWrapper>
          <FaUsers />
        </IconWrapper>
        <TextWrapper>
          <CounterNumber className="counter" data-target="1500">
            0
          </CounterNumber>
          <CounterLabel>Happy Clients</CounterLabel>
        </TextWrapper>
      </CounterBox>
      <CounterBox>
        <IconWrapper>
          <FaProjectDiagram />
        </IconWrapper>
        <TextWrapper>
          <CounterNumber className="counter" data-target="320">
            0
          </CounterNumber>
          <CounterLabel>Projects</CounterLabel>
        </TextWrapper>
      </CounterBox>
      <CounterBox>
        <IconWrapper>
          <FaHardHat />
        </IconWrapper>
        <TextWrapper>
          <CounterNumber className="counter" data-target="10">
            0
          </CounterNumber>
          <CounterLabel>Hard Workers</CounterLabel>
        </TextWrapper>
      </CounterBox>
      <CounterBox>
        <IconWrapper>
          <FaRegClock />
        </IconWrapper>
        <TextWrapper>
          <CounterNumber className="counter" data-target="24">
            0
          </CounterNumber>
          <CounterLabel>Hours Of Support</CounterLabel>
        </TextWrapper>
      </CounterBox>
    </CounterContainer>
  );
};

export default StatisticCounter;
