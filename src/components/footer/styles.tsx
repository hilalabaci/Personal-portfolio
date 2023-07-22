import { constants } from "http2";
import { styled } from "styled-components";

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  background-color: #edebeb;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "WorkSans";
  @media only screen and (max-width: 768px) {
    height: 15px;
  }
`;
export const Text = styled.p`
  font-size: 13px;
  letter-spacing: 0.5px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    letter-spacing: 0.5px;
  }
`;
