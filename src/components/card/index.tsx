import React from "react";
import { CardItemProps } from "./types";
import { Container, WorkImg, Title, Techno, Details, Link } from "./styles";
function Card(props: CardItemProps) {
  return (
    <Container>
      <WorkImg src={props.imgUrl} />
      <Title>{props.title}</Title>
      <Techno>{props.techno}</Techno>
      <Details>{props.details}</Details>
      <Link href={props.link} target="_blank">
        check this out
      </Link>
    </Container>
  );
}
export default Card;
