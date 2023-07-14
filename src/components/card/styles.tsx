import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  font-family: "WorkSansBold";
  color: #edebeb;
  border: 1px solid  rgba(46, 16, 66, 0.8);
  border-radius: 50px;
  padding: 15px;
`;
export const WorkImg = styled.img`
  border-radius: 20px;
  width: 150px;
  height: 150px;
  border: 2px solid #edebeb;
`;
export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 7px;
`;
export const Techno = styled.h4`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(46, 16, 66, 0.8);
`;
export const Details = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 1px;
`;
export const Link = styled.a`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 2em;
  text-align: justify;
  letter-spacing: 1px;
  text-decoration: none;
  color: #edebeb;
`;
