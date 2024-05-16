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
          Hey there! I'm Hilal Abacı, a seasoned full-stack developer living in
          Didcot, United Kingdom. I'm all about staying ahead of the tech curve
          and constantly leveling up my skills. With expertise in cool stuff
          like React.js, Node.js, TypeScript, and more, I've got over a year of
          pro experience and I'm on the lookout for gigs at a company that digs
          cutting-edge tech and personal growth. In my career journey, I've
          dabbled in various projects, honing my skills across a bunch of tech
          domains. Right now, I'm rocking it as a web developer at MOBIDELI,
          jazzing up the online food ordering system and making sure our
          projects fly smoothly on AWS EC2. Plus, I've whipped up some slick
          email templates for account verifications and order confirmations
          using HTML and CSS, and crafted a sweet back-office dashboard using
          React.js and Redux. My educational background? I've got a mix of
          Health Management and Information Systems Management. Plus, I've
          soaked up knowledge from cool places like the London App Brewery and
          Brussels Capital University, and even got some Microsoft software
          expertise under my belt. Along the way, I've become a whiz with tech
          like Node.js, MongoDB, PostgreSQL, Web3 DApps, and jQuery, and I've
          even built my own e-commerce project. Oh, and let's not forget my pet
          project 'Process'! Inspired by Jira and Trello, I cooked up a frontend
          app using React.js and Styled-Components, and whipped up a nifty REST
          API using Node.js and MongoDB. I'm all about bringing fresh ideas to
          the table and making projects pop. Wanna know more or check out my
          work? Swing by my personal website or slide into my DMs on LinkedIn.
          Let's connect!
          <br />
          <br />
          If you are interested in my work or would like to explore
          collaboration possibilities, please feel free to get in touch.
        </Details>
      </Aboutme>
      <ContactWrapper>
        <ContactTitle>Contact</ContactTitle>
        <InfoWrapper>
          <Info href="mailto:hilalabaci55@gmail.com">
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
