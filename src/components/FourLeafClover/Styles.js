import styled from "styled-components";

export const FourLeafClover = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  img{
    width: 1.5em;
  }
  img:nth-child(1){
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(315deg)
  }
  img:nth-child(2){
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(45deg)
  }
  img:nth-child(3){
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(225deg)
  }
  img:nth-child(4){
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(135deg)
  }
  @media screen and (max-width: 1023px){
    width: 35px;
    height: 35px;
    img{
      width: 1.3em;
    }
  }
`;