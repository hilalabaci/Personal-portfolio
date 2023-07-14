import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Container = styled.div`
  background: rgba(46, 16, 66, 0.8);
  background-image: url("/logo/absurd.design2.png");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: left 0% top 15%;
  height: 100vw;
  color: #edebeb;
  font-family: "WorkSansBold";
  letter-spacing: 3px;
  padding-top: 50px;
`;
export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center !important;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;
export const ContactTitle = styled.div`
  text-transform: uppercase;
  font-size: 55px;
  line-height: 2em;
  letter-spacing: 7px;
`;
export const InfoWrapper = styled.div``;
export const Info = styled.div`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 2em;
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 50px;
`;
export const Link = styled.a``;
export const LinkedIn = styled(LinkedInIcon)`
  font-size: 60px !important;
  color: #edebeb;
`;
export const GitHub = styled(GitHubIcon)`
  font-size: 60px !important;
  color: #edebeb;
`;
export const Aboutme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 100px;
`;
export const AboutTitle = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  line-height: 2em;
  letter-spacing: 7px;
  width: 50%;
`;
export const Details = styled.p`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 2px;
  width: 50%;
`;
export const IllustImg = styled.img`
  width: 500px;
`;
