import React from "react";
import {
  Info,
  InfoWrapper,
  ContactTitle,
  ContactWrapper,
  Container,
  SocialMediaWrapper,
  AboutTitle,
  Details,
  Aboutme,
  LinkedIn,
  GitHub,
  Link,
  InfoTitle,
} from "./styles";
import useNav from "../../hooks/useNav";

function About() {
  const aboutRef = useNav<HTMLDivElement>("About");
  return (
    <Container ref={aboutRef} id="about">
      <Aboutme>
        <AboutTitle>
          Hilal Abacı - Full Stack Web Developer in Didcot, UK
        </AboutTitle>
        <br />
        <Details>
          Hello, I’m Hilal, an experienced full-stack developer specializing in
          building scalable and efficient web applications. I work extensively
          with modern technologies such as React, Node.js, TypeScript, and
          PostgreSQL. My expertise includes developing RESTful APIs, integrating
          third-party services, and managing complex data models using Prisma
          and relational databases. I focus on creating maintainable and
          high-performance back-end systems while delivering user-friendly
          front-end interfaces with React and Styled-components. Additionally,
          I’m proficient in unit testing, CI/CD processes, and Agile
          methodologies to ensure quality and efficiency in every project. I’m
          always eager to learn new technologies and continuously improve my
          skills in the ever-evolving tech landscape.
          <br />
          <br />
          If you are interested in my work or would like to explore
          collaboration possibilities, please feel free to get in touch.
        </Details>
      </Aboutme>
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <InfoWrapper>
          <InfoTitle>
            Mail:
            <Info href="mailto:hilalabaci55@gmail.com">
              {" "}
              hilalabaci55@gmail.com
            </Info>
          </InfoTitle>
          <br />
          <InfoTitle>
            Mobile Phone:
            <Info href="tel:+4407470220382"> +44 0747 022 03 82</Info>
          </InfoTitle>
        </InfoWrapper>
        <SocialMediaWrapper>
          <Link href="https://www.linkedin.com/in/hilal-abaci/" target="_blank">
            <LinkedIn />
          </Link>

          <Link href="https://github.com/hilalabaci" target="_blank">
            <GitHub />
          </Link>
        </SocialMediaWrapper>
      </ContactWrapper>
      {/*  <IllustImg src="/logo/absurd.design2.png" /> */}
    </Container>
  );
}
export default About;
