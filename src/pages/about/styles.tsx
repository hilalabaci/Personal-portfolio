import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Container = styled.div`
  background: rgba(46, 16, 66, 0.8);
  background-image: url("/logo/absurd.design2.png");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: left 0% top 14%;
  height: 100vw;
  color: #edebeb;
  font-family: "Montserrat";
  letter-spacing: 3px;
  padding-top: 150px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    height: fit-content;
    padding-top: 150px;
    background-position: left -5% top 20%;
  }
  @media only screen and (max-width: 992px) {
    margin-top: 0;
    height: fit-content;
    padding-top: 150px;
    background-position: left -5% top 20%;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center !important;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    padding: 50px 0;
  }
  @media only screen and (max-width: 992px) {
    margin-top: 0;
    padding: 50px 0;
  }
`;
export const ContactTitle = styled.div`
  text-transform: uppercase;
  font-size: 55px;
  line-height: 2em;
  letter-spacing: 7px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 15px;
  }
`;
export const InfoWrapper = styled.div``;
export const InfoTitle = styled.div`
  cursor: default;
`;
export const Info = styled.a`
  font-size: 15px;
  line-height: 2em;
  text-decoration: none;
  color: #edebeb;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 992px) {
    font-size: 8px;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    gap: 5px;
  }
  @media only screen and (max-width: 992px) {
    margin-top: 10px;
    gap: 5px;
  }
`;
export const Link = styled.a``;
export const LinkedIn = styled(LinkedInIcon)`
  font-size: 60px !important;
  color: #edebeb;
  @media only screen and (max-width: 768px) {
    font-size: 30px !important;
  }
  @media only screen and (max-width: 992px) {
    font-size: 30px !important;
  }
`;
export const GitHub = styled(GitHubIcon)`
  font-size: 60px !important;
  color: #edebeb;
  @media only screen and (max-width: 768px) {
    font-size: 30px !important;
  }
  @media only screen and (max-width: 992px) {
    font-size: 30px !important;
  }
`;
export const Aboutme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 100px;
  @media only screen and (max-width: 768px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 992px) {
    padding-right: 20px;
  }
`;
export const AboutTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  line-height: 2em;
  letter-spacing: 7px;
  width: 50%;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 3px;
    width: 58%;
  }
  @media only screen and (max-width: 992px) {
    font-size: 16px;
    letter-spacing: 3px;
    width: 58%;
  }
`;
export const Details = styled.p`
  font-size: 15px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 2px;
  width: 50%;
  @media only screen and (max-width: 992) {
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.5em;
    width: 58%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.5em;
    width: 58%;
  }
`;
export const IllustImg = styled.img`
  width: 500px;
`;
