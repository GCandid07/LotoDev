import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${({theme}) => (theme)};
  overflow: hidden;
  @media screen and (max-width: 1023px){
    display: block;
  }
`;

export const Main = styled.main`
  width: 30%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1023px){
    width: 100%;
    height: 30%; 
    align-items: center;
  }
`;

export const SectionMain = styled.section`
  display: flex;
  align-items: center;
  gap: .8em;
  width: 100%;
  h1{
    width: calc(100% - 58px);
    color: #fff;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 3px;
    white-space: nowrap;
  }
  @media screen and (max-width: 1023px){
    justify-content: center;
    h1{
      width: auto;
      font-size: 1.1em;
    }
  }
`;

export const Footer = styled.footer`
  color: #fff;
  text-transform: uppercase;
  p:nth-child(2) {
    line-height: 2em;
    font-weight: 700;
    font-size: 1.4em;
  }
  @media screen and (max-width: 1023px){
    display: flex;
    align-items: baseline; 
    p:nth-child(2) {
      text-indent: .5em;
      font-size: 1.2em;
    }
  }
`;

export const Aside = styled.aside`
  width: 70%;
  height: 200%;
  position: relative;
  top: -50%;
  padding: 5%;
  background-color: #ddd;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 50%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  @media screen and (max-width: 1023px){
    width: 200%;
    height: 70%;
    top: 0;
    left: -50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 0%;
  }
`;

export const SectionAside = styled.section`
  width: 100%;
  height: 50%;
  padding: 8%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  span {
    text-transform: uppercase;
    font-weight: 700;
  }
  @media screen and (max-width: 1023px){
    width: 50%;
    height: 100%;
    padding: 4%;
    p {
      text-align: center;
      font-size: .9em;
    }
  }
`;

export const NumbersList = styled.ul`
  list-style-type: none;
  max-width: 640px;
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
  li {
    border-radius: 50%;
    background-color: #fff;
    width: 70px;
    height: 70px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: 700;
    color: #333;
  }
  @media screen and (max-width: 1023px){
    gap: 1.5em;
    li {
      width: 50px;
      height: 50px;
    }
  }
`;
