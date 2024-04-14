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
          I am Hilal, a full stack web developer based in London, UK. My focus
          is on developing web pages that deliver seamless user experiences. I
          completed my Bachelor's Degree from 2014 to 2018 and further enhanced
          my skills through the Microsoft Software Expertise course in 2019.
          During my time as a Web Developer in Istanbul from 2019 to June 2020,
          I gained practical experience in the field. I thrive on the
          opportunity to work on interesting projects where I can explore new
          techniques and bring my ideas to life. <br />
          <br />
          If you are interested in my work or would like to explore
          collaboration possibilities, please feel free to get in touch.
        </Details>
      </Aboutme>
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <InfoWrapper>
          <Info href="mailto:hilalzenginabaci@gmail.com">
            Mail: hilalabaci55@gmail.com
          </Info>
          <br />
          <Info href="tel:+4407470220382">
            Mobile Phone: +44 0747 022 03 82
          </Info>
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
