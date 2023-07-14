import React, { useState } from "react";
import {
  Container,
  TransitionNavbarItem,
  ItemsWrapper,
  NavbarItem,
  NavbarItemInfo,
} from "./styles";
import { NavbarProps } from "./types";

function Navbar(props: NavbarProps) {
  const [navbarItemInfo, setNavbarItemInfo] = useState("Start");

  return (
    <Container>
      <TransitionNavbarItem>
        <ItemsWrapper>
          <NavbarItem
            href="#start"
            $selectedRoundColour={navbarItemInfo === "Start"}
            onClick={() => {
              setNavbarItemInfo("Start");
            }}
          />
          {navbarItemInfo === "Start" && (
            <NavbarItemInfo>{navbarItemInfo}</NavbarItemInfo>
          )}
        </ItemsWrapper>
        <ItemsWrapper>
          <NavbarItem
            $selectedRoundColour={navbarItemInfo === "Work"}
            href="#work"
            onClick={() => {
              setNavbarItemInfo("Work");
            }}
          />
          {navbarItemInfo === "Work" && (
            <NavbarItemInfo>{navbarItemInfo}</NavbarItemInfo>
          )}
        </ItemsWrapper>
        <ItemsWrapper>
          <NavbarItem
            $selectedRoundColour={navbarItemInfo === "About"}
            href="#about"
            onClick={() => {
              setNavbarItemInfo("About");
            }}
          />
          {navbarItemInfo === "About" && (
            <NavbarItemInfo>{navbarItemInfo}</NavbarItemInfo>
          )}
        </ItemsWrapper>
      </TransitionNavbarItem>
    </Container>
  );
}
export default Navbar;
