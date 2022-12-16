import styled from "styled-components";
import Triangle_Down from "../../assets/Triangle_Down.png"

export const Select = styled.select`
  width: 180px;
  height: 5%;
  background: url(${Triangle_Down}) 90% no-repeat #fff;
  border-radius: 6px;
  padding: 0 3%;
  text-transform: uppercase;
  text-indent: 4%;
  border: none;
  box-shadow: 0px 0px 4px 1px #ddd;
  outline: none;
  color: #666;
  letter-spacing: 1px;
  font-weight: 600;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  @media screen and (max-width: 1023px){
    height: 25%;
  }
`;