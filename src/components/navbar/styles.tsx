import styled from "styled-components";
import { NavbarItemProps } from "./types";
export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  /*   border-bottom: 5px solid rgba(46, 16, 66, 0.5); */
  height: 70px;
  font-family: "Gloria";
  @media only screen and (max-width: 768px) {
    height: fit-content
  }
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
  }
`;
export const NavbarItem = styled.button<NavbarItemProps>`
  width: 30px;
  height: 30px;
  background-color: ${(props) =>
    props.$selectedRoundColour
      ? " rgba(46, 16, 66, 0.80);"
      : " rgba(46, 16, 66, 0.10);"};
  border-radius: 100px;
  border: none;
  @media only screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    padding: 0;
    margin: 0;
  }
`;
export const TransitionNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 50px;
  margin: 250px 0px 0 20px;
  @media only screen and (max-width: 768px) {
    gap: 20px;
    margin: 20px 0px 0 10px;
  }
`;
export const NavbarItemInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-transform: uppercase;
  color: rgba(46, 16, 66, 0.3);
  font-weight: bold;
  font-size: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 5px;
  }
`;
