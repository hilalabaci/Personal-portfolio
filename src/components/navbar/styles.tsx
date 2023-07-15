import styled from "styled-components";
import { NavbarItemProps } from "./types";
export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  /*   border-bottom: 5px solid rgba(46, 16, 66, 0.5); */
  height: 70px;
  font-family: "Gloria";
`;
export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
`;
export const TransitionNavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 50px;
  margin: 250px 0px 0 20px;
`;
export const NavbarItemInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-transform: uppercase;
  color: rgba(46, 16, 66, 0.3);
  font-weight: bold;
  font-size: 10px;
`;
