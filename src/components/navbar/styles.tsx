import styled from "styled-components";
import { NavbarItemProps } from "./types";
export const Container = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  font-family: "WorkSans";
  @media only screen and (max-width: 768px) {
    height: fit-content;
    top: 20px;
    left: 20px;
  }
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    gap: 5px;
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
    width: 25px;
    height: 25px;
    padding: 0;
    margin: 0;
  }
`;
export const TransitionNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
  @media only screen and (max-width: 768px) {
    gap: 20px;
  }
`;
export const NavbarItemInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-transform: uppercase;
  color: rgba(46, 16, 66, 1);
  font-weight: bold;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
