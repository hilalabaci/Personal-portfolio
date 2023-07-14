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
  IllustImg,
} from "./styles";

function About() {
  return (
    <Container id='about'>
      <Aboutme>
        <AboutTitle>Hilal Abaci - full stack web developer</AboutTitle>
        <Details>
          I'm Hilal Abaci a freelance multidisciplinary developer based in
          London, Germany. I create and concept ideas, pitch treatments, Look
          development and design projects through to animation, VFX and live
          action. From 2009 to February 2013 I studied Graphic Design at the
          University of Applied Sciences in Dortmund with the achievement of the
          Bachelor of Arts. During that time I started freelancing as a
          Graphic-/Motion Designer. From 2014 to June 2017 I worked at
          weareflink in the field of motion design and Look development. I
          worked for several clients e.g. Volkswagen, Air France, reebok, al
          jazeera, mobilcom, rexona, catrice, l.o.v, tchibo, recaro... I love
          colors, shapes and structures and working on fun projects to try out
          some new techniques and things i always wanted to do. If you are
          interested in my work or if you like to collaborate or just say hello,
          feel free to contact me.
        </Details>
      </Aboutme>
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <InfoWrapper>
          <Info>Mail:hilalzenginabaci@gmail.com</Info>
          <Info> Mobile Phone: +44 0707 422 03 82</Info>
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
