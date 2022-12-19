import styled from "styled-components";
import bg from "../../assets/bg.jpg"
import { ColorThemes } from "../../Constants/Constants";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
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

export const Content = styled.div`
  width: 85%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  h1 {
    font-size: 1.7em;
    padding-bottom: 1.5em;
  }
  p {
    padding-bottom: 1.5em;
    font-size: 1.1em;
  }
  span {
    color: ${ColorThemes.Orange};
    cursor: pointer;
    text-decoration: underline;
  }
`;