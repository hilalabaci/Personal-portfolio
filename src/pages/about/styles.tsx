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
  font-family: "WorkSansBold";
  letter-spacing: 3px;
  padding-top: 150px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    height: fit-content;
    padding-top: 100px;
    background-position: left -5% top 15%;
  }
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center !important;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  @media only screen and (max-width: 768px) {
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
    font-size: 10px;
  }
`;
export const InfoWrapper = styled.div``;
export const Info = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 2em;
  @media only screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    gap: 5px;
  }
`;
export const Link = styled.a``;
export const LinkedIn = styled(LinkedInIcon)`
  font-size: 60px !important;
  color: #edebeb;
  @media only screen and (max-width: 768px) {
    font-size: 20px !important;
  }
`;
export const GitHub = styled(GitHubIcon)`
  font-size: 60px !important;
  color: #edebeb;
  @media only screen and (max-width: 768px) {
    font-size: 20px !important;
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
`;
export const AboutTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  line-height: 2em;
  letter-spacing: 7px;
  width: 50%;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    letter-spacing: 3px;
    width: 55%;
  }
`;
export const Details = styled.p`
  font-size: 19px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 2px;
  width: 50%;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 1px;
    line-height: 1.5em;
    width: 55%;
  }
`;
export const IllustImg = styled.img`
  width: 500px;
`;
