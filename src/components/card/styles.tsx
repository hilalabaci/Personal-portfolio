import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  height: 470px;
  font-family: "WorkSansBold";
  color: #edebeb;
  /* border: 2px solid rgba(8, 8, 8, 0.58); */
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 30px 60px rgba(46, 16, 66, 0.08);
  @media only screen and (max-width: 768px) {
    height: fit-content;
    width: 80%;
  }
`;
export const WorkImg = styled.img`
  border-radius: 20px;
  width: 200px;
  height: 200px;
  border: 2px solid #edebeb;
  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 7px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Techno = styled.h4`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(46, 16, 66, 0.8);
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Details = styled.p`
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1px;
  padding: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Link = styled.a`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 1px;
  text-decoration: none;
  color: #edebeb;
  text-shadow: 2px 2px 5px rgba(46, 16, 66, 0.8);
  @media only screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
