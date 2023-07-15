import React, { useEffect, useState } from "react";
import {
  Container,
  TransitionNavbarItem,
  ItemsWrapper,
  NavbarItem,
  NavbarItemInfo,
} from "./styles";
import { NavbarProps } from "./types";
import { useNavContext } from "../../contexts/NavContext";

function Navbar(props: NavbarProps) {
  const { activeLinkId } = useNavContext();

  const handleClick = (sectionId: string) => {
    document
      .getElementById(sectionId.toLocaleLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <TransitionNavbarItem>
        <ItemsWrapper>
          <NavbarItem
            $selectedRoundColour={activeLinkId === "Start"}
            onClick={() => {
              handleClick("Start");
            }}
          />
          {activeLinkId === "Start" && (
            <NavbarItemInfo>{activeLinkId}</NavbarItemInfo>
          )}
        </ItemsWrapper>
        <ItemsWrapper>
          <NavbarItem
            $selectedRoundColour={activeLinkId === "Work"}
            onClick={() => {
              handleClick("Work");
            }}
          />
          {activeLinkId === "Work" && (
            <NavbarItemInfo>{activeLinkId}</NavbarItemInfo>
          )}
        </ItemsWrapper>
        <ItemsWrapper>
          <NavbarItem
            $selectedRoundColour={activeLinkId === "About"}
            onClick={() => {
              handleClick("About");
            }}
          />
          {activeLinkId === "About" && (
            <NavbarItemInfo>{activeLinkId}</NavbarItemInfo>
          )}
        </ItemsWrapper>
      </TransitionNavbarItem>
    </Container>
  );
}
export default Navbar;
