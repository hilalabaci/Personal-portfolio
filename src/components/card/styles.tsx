import styled from "styled-components";
import { ContainerProps } from "./types";
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Montserrat";
  color: #edebeb;
  width: 80%;
  transform: ${({ inView }) => (inView ? "scale(1, 1)" : "scale(0.4, 0.4)")};
  transition: transform 1s ease;
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
  border-radius: 10px;
  width: min-content;
  height: 200px;
  border: 2px solid #edebeb;
  transform: scale(1, 1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media only screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const Techno = styled.h4`
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(46, 16, 66, 0.8);
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Details = styled.p`
  font-size: 17px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 2em;
  padding: 0 30px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const Link = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 1px;
  text-decoration: none;
  color: #edebeb;
  text-shadow: 2px 2px 5px rgba(46, 16, 66, 0.8);
  transition: color 0.2s ease, transform 0.2s ease;
  transform: scale(1, 1);
  &:hover {
    color: rgba(46, 16, 66, 0.8);
    transform: scale(1.2, 1.2);
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
