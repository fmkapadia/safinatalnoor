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
  min-height: 40vh;
  background: #f4f4f9;
  flex-wrap: wrap;
`;

const CounterBox = styled.div`
  display: flex;
  width: 20vw;
  flex-direction: row; /* Arrange items in a row */
  align-items: center;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #4169e1;
  margin-right: 1rem; /* Add space between icon and text */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%; /* Fixed width for the icon column */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  justify-content: center;
  width: 70%; /* Remaining space for count and text */
`;

const CounterNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #862633;
`;

const CounterLabel = styled.div`
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #666;
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
