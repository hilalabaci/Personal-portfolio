import styled from "styled-components";
export const Container = styled.div`
  background-image: linear-gradient(#fdbdac, rgba(46, 16, 66, 0.8));
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 80px;
  @media only screen and (max-width: 768px) {
    padding: 50px 10px;
    gap: 20px;
  }
`;
