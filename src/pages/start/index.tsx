import React from "react";
import { Container, Content, IllustImg, Title, Info } from "./styles";
import useNav from "../../hooks/useNav";

function Start() {
  const startRef = useNav<HTMLDivElement>("Start");
  return (
    <Container ref={startRef} id="start">
      <Info>
        <Title>I'm Hilal</Title>
        <Content>Full Stack Web Developer</Content>
      </Info>
      <IllustImg src="/logo/absurd.design.png" />
    </Container>
  );
}
export default Start;
