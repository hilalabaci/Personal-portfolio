import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#ffe9df, #fdbdac);
  font-family: "Gloria";
  padding: 50px 0 100px 0;
  @media only screen and (max-width: 768px) {
    padding: 60px 50px;
  }
`;
export const Info = styled.div``;
export const Title = styled.h1`
  font-family: "Gloria";
  color: #2e1042;
  text-align: center;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 9.6px;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    letter-spacing: 3.6px;
  }
`;
export const Content = styled.p`
  color: #2e1042;
  text-align: center;
  font-family: Gloria;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.4px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const IllustImg = styled.img`
  width: 600px;
  margin-left: 100px;
  @media only screen and (max-width: 768px) {
    width: 150px;
    margin-left: 0;
  }
`;
