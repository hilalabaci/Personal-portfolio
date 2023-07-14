import React from "react";
import Works from "./content";
import Card from "../../components/card/index";
import { Container } from "./styles";

function Work() {
  return (
    <Container id="work">
      {Works.map((work, index) => (
        <Card
          key={index}
          imgUrl={work.imgUrl}
          title={work.title}
          techno={work.techno}
          details={work.content}
          link={work.link}
        />
      ))}
    </Container>
  );
}
export default Work;
