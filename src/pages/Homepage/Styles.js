import styled, { keyframes } from "styled-components";
import bg from "../../assets/bg.jpg"

const animation = keyframes`
  from {
    width: 0
  }
  to {
    width: 100%;
  }
`;

const cursor = keyframes`
  from, to {
    border-right: 1px solid rgba(255, 255, 255, 0.75);
  }
  50% {
    border-right: transparent;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  color: #fff;
  background: url(${bg});
  background-position: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1023px) {
    background-position: 45%;
  }
  @media screen and (min-width: 1500px) {
    background-position: 30%;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: .5em;
`;

export const Typewriter = styled.h2`
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid #cccccc50;
  animation: 
  ${animation} 3.5s steps(28, end) both,
  ${cursor} 1s step-end infinite;
`;